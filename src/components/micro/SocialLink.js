import React from 'react'
import { Link } from 'theme-ui'
import Tippy from '@tippy.js/react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import 'tippy.js/dist/tippy.css'; // eslint-disable-line

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`

export const SocialLink = ({ iconifyName, name, url, color, dim }) => (
  <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={false}>
    <IconLink href={url} target="_blank" color={color} rel="noreferrer" aria-label={name}>
      <span className="iconify" data-icon={iconifyName} data-width={dim} data-height={dim} />
    </IconLink>
  </Tippy>
)

SocialLink.propTypes = {
  iconifyName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  dim: PropTypes.string,
}
SocialLink.defaultProps = {
  color: '',
  dim: '',
}
