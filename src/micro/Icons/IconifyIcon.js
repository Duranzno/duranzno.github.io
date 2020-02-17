/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { randomizePosition, useWindowSize } from '@utils'

const DIM = '75px'
const Icon = styled.span`
  position: ${props => (props.random ? 'relative' : 'unset')};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
  top: ${props => (props.random && props.x ? `${props.x}px` : 'unset')};
  left: ${props => (props.random && props.y ? `${props.y}px` : 'unset')};
  animation: ${props => (props.sx && props.sx.animation) || 'unset'};
`
export const IconifyIcon = ({ iconifyName, random, sx }) => {
  const {
    theme: { sizes },
  } = useThemeUI()
  const dimensions = useWindowSize()
  let positions = {}
  if (random) {
    positions = randomizePosition(dimensions)
  }
  console.log(`${JSON.stringify(positions)} para ${iconifyName}`)
  const props = {
    className: 'iconify',
    'data-icon': iconifyName,
    'data-width': sizes[sx.size] || sizes[sx.width] || DIM,
    'data-height': sizes[sx.size] || sizes[sx.height] || DIM,
    ...positions,
    random,
    sx,
  }
  return <Icon {...props} />
}
IconifyIcon.propTypes = {
  iconifyName: PropTypes.string.isRequired,
  random: PropTypes.bool,
  sx: PropTypes.object,
}
IconifyIcon.defaultProps = {
  sx: { size: 3 },
  random: false,
}
