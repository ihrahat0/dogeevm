import { ChainId } from '@pancakeswap/chains'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, PreTitle } from '@pancakeswap/uikit'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { memo } from 'react'
import GasSettings from '../GasSettings'
import TransactionSettings from '../TransactionSettings'
import { TabContent } from './TabContent'

interface SettingsTabProps {
  _onCustomizeRoutingClick?: () => void
  _showExpertModeAcknowledgement: boolean
  _setShowConfirmExpertModal: (show: boolean) => void
  _expertMode: boolean
  _setExpertMode: (expertMode: any) => void
  ariaId?: string
}

export const SettingsTab = memo(
  ({
    _onCustomizeRoutingClick,
    _showExpertModeAcknowledgement,
    _setShowConfirmExpertModal,
    _expertMode,
    _setExpertMode,
    ariaId,
  }: SettingsTabProps) => {
    const { t } = useTranslation()
    const { chainId } = useActiveChainId()

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
        </Flex>
      </TabContent>
    )
  },
)
