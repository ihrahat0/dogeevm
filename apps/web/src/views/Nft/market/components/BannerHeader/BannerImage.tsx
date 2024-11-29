import { styled } from 'styled-components'

const StyledBannerImageWrapper = styled.div`
  background-color: #0d0c0c;
  flex: none;
  position: relative;
  width: 100%;
  border-radius: 32px;
  height: 123px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 192px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 256px;
  }
`

export default StyledBannerImageWrapper
