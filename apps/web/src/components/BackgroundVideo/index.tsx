import { styled } from 'styled-components'

const VideoWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
  }
`

const BackgroundVideo = () => {
  return (
    <VideoWrapper>
      <video autoPlay loop muted playsInline>
        <source src="https://dogecoin.com/assets/images/Header_Video.mp4" type="video/mp4" />
      </video>
    </VideoWrapper>
  )
}

export default BackgroundVideo
