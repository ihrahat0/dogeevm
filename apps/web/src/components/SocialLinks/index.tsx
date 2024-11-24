import { styled } from 'styled-components'

const SocialContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
  padding: 12px;
  background: rgba(28, 28, 28, 0.95);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  max-width: 480px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.1);
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 0, 0, 0.3);
  }

  img {
    width: 24px;
    height: 24px;
  }
`

const SocialLinks = () => {
  const socials = [
    {
      name: 'Telegram',
      icon: '/images/socials/telegram.webp',
      url: 'https://t.me/yourtelegram',
    },
    {
      name: 'X (Twitter)',
      icon: '/images/socials/x.webp',
      url: 'https://x.com/yourprofile',
    },
    {
      name: 'Instagram',
      icon: '/images/socials/instagram.png',
      url: 'https://instagram.com/yourprofile',
    },
    {
      name: 'TikTok',
      icon: '/images/socials/tiktok.webp',
      url: 'https://tiktok.com/@yourprofile',
    },
  ]

  return (
    <SocialContainer>
      {socials.map((social) => (
        <SocialIcon key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name}>
          <img src={social.icon} alt={social.name} />
        </SocialIcon>
      ))}
    </SocialContainer>
  )
}

export default SocialLinks
