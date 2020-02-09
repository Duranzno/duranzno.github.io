/* eslint-disable react/prop-types */
import React from 'react'
import styled from '@emotion/styled'
import { Styled } from 'theme-ui'

const DIM = '75px'
const Icon = styled(Styled.div)`
  position: ${props => (props.x || props.y ? 'relative' : 'unset')};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  top: ${props => (props.x ? `${props.x}px` : 'unset')};
  left: ${props => (props.y ? `${props.y}px` : 'unset')};
`
export const IconifyIcon = ({ iconifyName, x = '', y = '', size = DIM, sx = { width: 2, height: 2 } }) => (
  <Icon className="iconify" data-icon={iconifyName} data-width={size} data-height={size} x={x} y={y} sx={sx} />
)
