import React from 'react'
import { Link } from 'theme-ui'
import Tippy from '@tippy.js/react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import 'tippy.js/dist/tippy.css' // eslint-disable-line
import { IconifyIcon } from './IconifyIcon'

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`
export const IconifyLink = ({ iconifyName, name, url, color, sx, onClick }) => {
  return (
    <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={false}>
      <IconLink href={url} target="_blank" color={color} rel="noreferrer" aria-label={name} onClick={onClick}>
        <IconifyIcon iconifyName={iconifyName} sx={sx} />
      </IconLink>
    </Tippy>
  )
}
IconifyLink.propTypes = {
  iconifyName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  sx: PropTypes.object,
}
IconifyLink.defaultProps = {
  color: '',
  url: '#',
  onClick: () => {},
  sx: { width: 4, height: 4 },
}
