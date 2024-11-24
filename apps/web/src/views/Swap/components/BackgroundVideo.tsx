import { styled } from 'styled-components'

const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  background: url('/images/Header_Video.gif') center center / cover no-repeat;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`

const BackgroundVideo = () => {
  return <VideoWrapper />
}

export default BackgroundVideo
