import React from 'react'
import { Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { LinkAnimated } from './LinkAnimated'

export const RouteLink = ({ onClick, selected, name }) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    <LinkAnimated onClick={onClick} selected={selected}>
      <h2>
        {name}
        </h2>
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
