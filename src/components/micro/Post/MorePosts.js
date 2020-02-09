import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Heading, Text } from 'theme-ui'
import { Card, EllipsisHeading } from './Post.styles'
import { SocialLink } from '../SocialLink'

export const MorePosts = ({ username, name, number }) => (
  // eslint-disable-next-line no-undef
  <Card onClick={() => window.open(`${MEDIUM_URL}/${username}/`, '_blank')} sx={{ p: 4 }}>
    <Flex sx={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
      <Box>
        <EllipsisHeading sx={{ fontSize: 5, my: 2 }}>
          Hooray! &nbsp;
          <span role="img" aria-label="party">
            🎉
          </span>
        </EllipsisHeading>
        <Heading sx={{ lineHeight: 1.5 }}>
          It seems that
          <Text color="secondary">{name}</Text>
          {`has published ${number} more posts!`}
        </Heading>
      </Box>
      <Heading color="primary" mt={5} textAlign="right">
        Go to Medium &nbsp;
        <SocialLink sx={{ width: 5, height: 5 }} iconifyName="mdi-arrow-right" name="" />
      </Heading>
    </Flex>
  </Card>
)

MorePosts.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

MorePosts.defaultProps = {
  number: 'many',
}
