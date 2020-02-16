/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

export const ProfilePicture = ({ fluid, alt }) => (
  <Img
    fluid={fluid}
    alt={alt}
    fadeIn
    backgroundColor
    sx={{
      gridArea: ['1', '3 / 3 / 4 / 4'],
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      size: [6, '200px', 7],
      border: 'medium solid',
      borderRadius: '50%',
      transition: 'all 0.25s ease-out',
      alignSelf: 'center',
      justifySelf: 'center',
    }}
  />
)
ProfilePicture.propTypes = {
  fluid: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
}
