/* eslint-disable react/prop-types */
import React from 'react'
import styled from '@emotion/styled'

const DIM = '75px'
const StyledSpan = styled.span`
  width: ${props => props.size};
  height: ${props => props.size};
  position: ${props => (props.x || props.y ? 'relative' : 'unset')};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  top: ${props => `${props.x}px`};
  left: ${props => `${props.y}px`};
`
export const IconifyIcon = ({ iconifyName, x = '', y = '', size = DIM, sx = {} }) => (
  <StyledSpan className="iconify" data-icon={iconifyName} data-width={size} data-height={size} x={x} y={y} sx={sx} />
)
