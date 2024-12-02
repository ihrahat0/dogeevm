import { Language } from "../LangSelector/types";
import { InstagramIcon, TelegramIcon, TwitterIcon } from "../Svg";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://blog.pancakeswap.finance/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/dogeswap_",
    style: { marginRight: "24px" },
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "Chat",
        href: "https://t.me/DogeSwap_Chat",
      },
      {
        label: "Announcement",
        href: "https://t.me/DogeSwap_Ann",
      },
    ],
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/dogeswap_",
  },
  {
    label: "TikTok",
    icon: () => (
      <img
        src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
        alt="TikTok"
        width={24}
        height={24}
      />
    ),
    href: "https://tiktok.com/@dogeswap_",
  },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   href: "https://github.com/pancakeswap/",
  // }
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
