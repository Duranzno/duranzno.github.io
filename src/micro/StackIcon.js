/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'theme-ui'
import styled from '@emotion/styled'

const DIM = '75px'
const IconLink = styled(Link)`
  position: ${props => (props.x || props.y ? 'relative' : 'unset')};
  transition: color 0.5s;
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;
  width: ${DIM};
  height: ${DIM};
  top: ${props => `${props.x}px`};
  left: ${props => `${props.y}px`};
  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`
export const StackIcon = ({ iconifyName, url = '', x = '', y = '' }) => (
    <span className="iconify" data-icon={iconifyName} data-width={DIM} data-height={DIM} />
)
