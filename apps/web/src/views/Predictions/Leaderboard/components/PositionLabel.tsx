import { useTranslation } from '@pancakeswap/localization'
import { BetPosition } from '@pancakeswap/prediction'
import { ArrowDownIcon, ArrowUpIcon } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

interface PositionLabelProps {
  position: BetPosition
}

const StyledPositionLabel = styled.div<{ bgColor: string }>`
  align-items: center;
  background-color: #0d0c0c;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  height: 32px;
  min-width: 16px;
  padding-left: 8px;
  padding-right: 8px;
`

const Label = styled.div`
  color: #fff;
  display: none;
  text-transform: uppercase;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    margin-left: 4px;
  }
`

const PositionLabel: React.FC<React.PropsWithChildren<PositionLabelProps>> = ({ position }) => {
  const { t } = useTranslation()
  const isBull = position === BetPosition.BULL
  const bgColor = isBull ? 'success' : 'failure'
  const icon = isBull ? <ArrowUpIcon width="24px" color="white" /> : <ArrowDownIcon width="24px" color="white" />

  return (
    <StyledPositionLabel bgColor={bgColor}>
      {icon}
      <Label>{isBull ? t('Up') : t('Down')}</Label>
    </StyledPositionLabel>
  )
}

export default PositionLabel
