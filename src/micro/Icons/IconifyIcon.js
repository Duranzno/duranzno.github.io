/* eslint-disable react/prop-types */
/** @jsx jsx */
import React from 'react'
import { jsx, Box, Styled, useThemeUI } from 'theme-ui'
import styled from '@emotion/styled'

const DIM = '75px'
const Icon = styled.span`
  position: ${props => (props.x || props.y ? 'relative' : 'unset')};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  top: ${props => (props.x ? `${props.x}px` : 'unset')};
  left: ${props => (props.y ? `${props.y}px` : 'unset')};
`
export const IconifyIcon = ({ iconifyName, x, y, sx = { size: 3 } }) => {
  const {
    theme: { sizes },
  } = useThemeUI()
  const props = {
    className: 'iconify',
    'data-icon': iconifyName,
    'data-width': sizes[sx.size] || sizes[sx.width] || DIM,
    'data-height': sizes[sx.size] || sizes[sx.height] || DIM,
    x,
    y,
    sx,
  }
  return <Icon {...props} />
}
