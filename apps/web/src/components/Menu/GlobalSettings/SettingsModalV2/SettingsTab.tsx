import { ChainId } from '@pancakeswap/chains'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, PancakeToggle, PreTitle } from '@pancakeswap/uikit'
import { useAudioPlay } from '@pancakeswap/utils/user'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { memo } from 'react'
import { useSwapActionHandlers } from 'state/swap/useSwapActionHandlers'
import GasSettings from '../GasSettings'
import TransactionSettings from '../TransactionSettings'
import { TabContent } from './TabContent'

interface SettingsTabProps {
  onCustomizeRoutingClick?: () => void
  showExpertModeAcknowledgement: boolean
  setShowConfirmExpertModal: (show: boolean) => void
  expertMode: boolean
  setExpertMode: (expertMode: any) => void

  ariaId?: string
}

export const SettingsTab = memo(
  ({
    onCustomizeRoutingClick,
    showExpertModeAcknowledgement,
    setShowConfirmExpertModal,
    expertMode,
    setExpertMode,
    ariaId,
  }: SettingsTabProps) => {
    const { t } = useTranslation()
    const { chainId } = useActiveChainId()
    const { onChangeRecipient } = useSwapActionHandlers()
    const [audioPlay, setAudioMode] = useAudioPlay()

    const handleExpertModeToggle = () => {
      if (expertMode || !showExpertModeAcknowledgement) {
        onChangeRecipient(null)
        setExpertMode((s) => !s)
      } else {
        setShowConfirmExpertModal(true)
      }
    }

    return (
      <TabContent
        id={`${ariaId}_motion-tabpanel-0`}
        role="tabpanel"
        aria-labelledby={`${ariaId}_motion-tab-0`}
        style={{ backgroundColor: '#232123', padding: '20px' }}
      >
        <Flex flexDirection="column">
          <PreTitle mb="8px">{t('Swaps & Liquidity')}</PreTitle>
          {chainId === ChainId.BSC && (
            <Flex justifyContent="space-between" alignItems="center" mb="24px">
              <GasSettings />
            </Flex>
          )}
          <TransactionSettings />

          <Flex justifyContent="space-between" alignItems="center" mt="8px">
            <PancakeToggle
              id="toggle-audio-play"
              checked={audioPlay}
              onChange={() => setAudioMode((s) => !s)}
              scale="md"
            />
          </Flex>
        </Flex>
      </TabContent>
    )
  },
)
