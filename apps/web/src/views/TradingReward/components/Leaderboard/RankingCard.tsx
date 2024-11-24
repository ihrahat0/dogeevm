import { useTranslation } from '@pancakeswap/localization'
import {
  Box,
  Card,
  CardBody,
  CardRibbon,
  Flex,
  LaurelLeftIcon,
  LaurelRightIcon,
  ProfileAvatar,
  Skeleton,
  SubMenu,
  Text,
} from '@pancakeswap/uikit'
import { formatNumber } from '@pancakeswap/utils/formatBalance'
import truncateHash from '@pancakeswap/utils/truncateHash'
import BigNumber from 'bignumber.js'
import { useCakePrice } from 'hooks/useCakePrice'
import { useDomainNameForAddress } from 'hooks/useDomain'
import Image from 'next/image'
import { useMemo } from 'react'
import { useProfileForAddress } from 'state/profile/hooks'
import { styled } from 'styled-components'
import { RankListDetail } from 'views/TradingReward/hooks/useRankList'

interface RankingCardProps {
  rank: 1 | 2 | 3
  user: RankListDetail
}

const RotatedLaurelLeftIcon = styled(LaurelLeftIcon)`
  transform: rotate(30deg);
`

const RotatedLaurelRightIcon = styled(LaurelRightIcon)`
  transform: rotate(-30deg);
`

const getRankingColor = (rank: number) => {
  if (rank === 3) {
    return 'warning'
  }

  if (rank === 2) {
    return 'secondary'
  }

  return 'success'
}

const RankingCard: React.FC<React.PropsWithChildren<RankingCardProps>> = ({ rank, user }) => {
  const { t } = useTranslation()
  const rankColor = getRankingColor(rank)
  const cakePrice = useCakePrice()
  const { profile, isLoading: isProfileLoading } = useProfileForAddress(user?.origin)
  const { domainName, avatar } = useDomainNameForAddress(user?.origin, !profile && !isProfileLoading)

  const cakeAmount = useMemo(
    () => new BigNumber(user?.estimateRewardUSD).div(cakePrice).toNumber() ?? 0,
    [cakePrice, user?.estimateRewardUSD],
  )

  return (
    <Flex flexDirection="column">
      <Box display={['none', 'none', 'none', 'none', 'none', 'block']} position="relative" bottom="-50px" margin="auto">
        <Image src={`/images/trading-reward/${getRankingColor(rank)}.png`} alt={`${rank}`} width={300} height={300} />
      </Box>
      <Box
        display={['block', 'block', 'block', 'block', 'block', 'none']}
        position="relative"
        bottom="-30px"
        margin="auto"
      >
        {rank === 1 && (
          <Image src="/images/trading-reward/gold-mobile.png" alt={`mobile-${rank}`} width={286} height={286} />
        )}
      </Box>
      <Card ribbon={<CardRibbon variantColor={rankColor} text={`#${rank}`} ribbonPosition="left" />}>
        <CardBody p="24px">
          <Flex alignItems="center" justifyContent="center" flexDirection="column" mb="24px">
            <SubMenu
              component={
                <Flex flexDirection="column">
                  <Flex mb="4px">
                    <RotatedLaurelLeftIcon color={rankColor} width="32px" />
                    <Box width={['40px', null, null, '64px']} height={['40px', null, null, '64px']}>
                      <ProfileAvatar src={profile?.nft?.image?.thumbnail ?? avatar} height={64} width={64} />
                    </Box>
                    <RotatedLaurelRightIcon color={rankColor} width="32px" />
                  </Flex>
                  {!user ? (
                    <Skeleton width="60px" m="0 auto" />
                  ) : (
                    <Text color="primary" fontWeight="bold" textAlign="center">
                      {profile?.username || domainName || truncateHash(user?.origin)}
                    </Text>
                  )}
                </Flex>
              }
              options={{ placement: 'bottom' }}
            />
          </Flex>
          <Flex justifyContent="space-between" mb="4px">
            <Text bold color="textSubtle">
              {t('Total Reward')}
            </Text>
            <Box>
              {!user ? (
                <>
                  <Skeleton width="60px" mb="2px" />
                  <Skeleton width="60px" />
                </>
              ) : (
                <>
                  <Text textAlign="right" bold color="text" fontSize="20px" lineHeight="110%">
                    {`$${formatNumber(user?.estimateRewardUSD)}`}
                  </Text>
                  <Text textAlign="right" color="textSubtle" fontSize="12px">
                    {`~${formatNumber(cakeAmount)} CAKE`}
                  </Text>
                </>
              )}
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Text bold color="textSubtle">
              {t('Trading Volume')}
            </Text>
            {!user ? (
              <Skeleton width="100px" />
            ) : (
              <Text textAlign="right" bold color="text" fontSize="20px">
                {`$${formatNumber(user?.volume)}`}
              </Text>
            )}
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default RankingCard
