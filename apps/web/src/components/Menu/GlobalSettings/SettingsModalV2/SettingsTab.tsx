import { ChainId } from '@pancakeswap/chains'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, PreTitle } from '@pancakeswap/uikit'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { memo } from 'react'
import GasSettings from '../GasSettings'
import TransactionSettings from '../TransactionSettings'
import { TabContent } from './TabContent'

interface SettingsTabProps {
  onCustomizeRoutingClick?: () => void
  showExpertModeAcknowledgement: boolean
  setShowConfirmExpertModal: (show: boolean) => void
  expertMode: boolean
  setExpertMode: (expertMode: boolean) => void
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
