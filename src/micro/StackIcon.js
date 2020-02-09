/* eslint-disable react/prop-types */
import React from 'react'
import styled from '@emotion/styled'

const DIM = '75px'
const StyledSpan = styled.span`
  position: ${props => (props.x || props.y ? 'relative' : 'unset')};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  width: ${DIM};
  height: ${DIM};
  top: ${props => `${props.x}px`};
  left: ${props => `${props.y}px`};
`
export const StackIcon = ({ iconifyName, x = '', y = '' }) => (
  <StyledSpan className="iconify" data-icon={iconifyName} data-width={DIM} data-height={DIM} x={x} y={y} />
)
