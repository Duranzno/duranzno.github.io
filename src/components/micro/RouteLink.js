import React from 'react'
import { Box, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { LinkAnimated } from './LinkAnimated'

export const RouteLink = ({ onClick, selected, name }) => (
  <Box ml={[2, 3]} color="background">
    <LinkAnimated onClick={onClick} selected={selected}>
      <Heading as="h3" sx={{ fontSize: [2, 3, 4] }}>
        {name}
      </Heading>
    </LinkAnimated>
  </Box>
)

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
}
RouteLink.defaultProps = {
  onClick: () => console.log('Should redirect somewhere'),
  selected: false,
  name: '',
}
