/* eslint-disable react/prop-types */
import React from 'react'
import styled from '@emotion/styled'
import { Box, Styled, useThemeUI } from 'theme-ui'

const DIM = '75px'
const Icon = styled(Styled.div)`
  position: ${props => (props.x || props.y ? 'relative' : 'unset')};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  top: ${props => (props.x ? `${props.x}px` : 'unset')};
  left: ${props => (props.y ? `${props.y}px` : 'unset')};
`
export const IconifyIcon = ({ iconifyName, x, y, sx = { width: 2, height: 2 } }) => {
  const {
    theme: { sizes },
  } = useThemeUI()
  const props = {
    className: 'iconify',
    'data-icon': iconifyName,
    'data-width': sizes[sx.width] || DIM,
    'data-height': sizes[sx.height] || DIM,
    x,
    y,
    sx,
  }
  return (
    <Box className="icon" sx={sx}>
      <Icon {...props} />
    </Box>
  )
}
