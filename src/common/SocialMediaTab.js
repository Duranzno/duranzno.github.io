import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { IconifyLink } from '@components'

export const SocialMediaTab = ({ socialLinks, sx }) => {
  return (
    <Box sx={sx}>
      {socialLinks.map(({ id, ...rest }) => (
        <Box mx={3} fontSize={[5, 6, 6]} key={id}>
          <IconifyLink sx={{ width: [5], height: [5], color: 'tertiary' }} {...rest} />
        </Box>
      ))}
    </Box>
  )
}

SocialMediaTab.propTypes = {
  sx: PropTypes.object.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
