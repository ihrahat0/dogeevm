import { ArrowDownIcon, ArrowUpDownIcon, AutoColumn, IconButton } from '@pancakeswap/uikit'
import { AutoRow } from 'components/Layout/Row'
import React, { useCallback } from 'react'
import { styled } from 'styled-components'

const StyledButton = styled(IconButton)`
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  .icon-up-down {
    display: none;
  }
  &:hover {
    background-color: #0d0c0c;
    .icon-down {
      display: none;
      fill: white;
    }
    .icon-up-down {
      display: block;
      fill: white;
    }
  }
`

interface SwitchIconButtonProps {
  color: 'primary' | 'text'
  handleSwitchTokens: () => void
}

const SwitchIconButton: React.FC<React.PropsWithChildren<SwitchIconButtonProps>> = ({ handleSwitchTokens, color }) => {
  const handleOnClick = useCallback(() => handleSwitchTokens?.(), [handleSwitchTokens])

  return (
    <AutoColumn justify="space-between">
      <AutoRow justify="center" style={{ padding: '0 1rem' }}>
        <StyledButton variant="dark" scale="sm" onClick={handleOnClick}>
          <ArrowDownIcon className="icon-down" color={color} />
          <ArrowUpDownIcon className="icon-up-down" color={color} />
        </StyledButton>
      </AutoRow>
    </AutoColumn>
  )
}

export default SwitchIconButton
