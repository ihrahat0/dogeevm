import { ArrowForwardIcon, Box, Flex, IconButton, Text } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'

import { Proposal } from 'state/types'
import { styled } from 'styled-components'
import { isCoreProposal } from '../../helpers'
import TimeFrame from './TimeFrame'
import { ProposalStateTag, ProposalTypeTag } from './tags'

interface ProposalRowProps {
  proposal: Proposal
}

const StyledProposalRow = styled(NextLinkFromReactRouter)`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  padding: 16px 24px;

  &:hover {
    cursor: pointer;
    background-color: #0d0c0c;
  }
`

const ProposalRow: React.FC<React.PropsWithChildren<ProposalRowProps>> = ({ proposal }) => {
  const votingLink = `/voting/proposal/${proposal.id}`

  return (
    <StyledProposalRow to={votingLink}>
      <Box as="span" style={{ flex: 1 }}>
        <Text bold mb="8px">
          {proposal.title}
        </Text>
        <Flex alignItems="center" mb="8px">
          <TimeFrame startDate={proposal.start} endDate={proposal.end} proposalState={proposal.state} />
        </Flex>
        <Flex alignItems="center">
          <ProposalStateTag proposalState={proposal.state} />
          <ProposalTypeTag isCoreProposal={isCoreProposal(proposal)} ml="8px" />
        </Flex>
      </Box>
      <IconButton variant="text">
        <ArrowForwardIcon width="24px" />
      </IconButton>
    </StyledProposalRow>
  )
}

export default ProposalRow
