import React from 'react'
import { Link, Styled, useThemeUI } from 'theme-ui'
import Tippy from '@tippy.js/react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import 'tippy.js/dist/tippy.css'; // eslint-disable-line
/** @jsx jsx */
import { jsx } from 'theme-ui'

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`
export const SocialLink = ({ iconifyName, name, url, color, sx }) => {
  return (
    <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={false}>
      <IconLink href={url} target="_blank" color={color} rel="noreferrer" aria-label={name}>
        <Styled.div className="iconify" data-icon={iconifyName} data-width="250px" data-height="250px" sx={sx} />
      </IconLink>
    </Tippy>
  )
}

SocialLink.propTypes = {
  iconifyName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  sx: PropTypes.object,
}
SocialLink.defaultProps = {
  color: '',
  sx: { width: 4, height: 4 },
}
