import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Card as CardThemeUI, Box } from 'theme-ui'
import Img from 'gatsby-image'

export const CoverImage = styled(Img)`
  width: 100%;
  object-fit: cover;
  max-height: ${props => `${props.height}`};
`

export const Card = styled(CardThemeUI)`
  top: 0;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.colors.background};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &.hover-move {
    transition: all 0.25s;
    height: 100%;
    min-height: 500px;
    &:hover {
      top: -10px;
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
  }
  &.hover-shade {
    &:hover {
      background: ${props => props.theme.colors.tertiary};
    }
  }
`
const BORDER_SPACING = '20px'
const BORDER_RADIUS = '8px'

const BORDER_PATH_MAP = {
  'top-left': `polygon(0 0%, 100% 0%, calc(100% - ${BORDER_SPACING}) 100%, 0% 100%);`,
  'top-right': `polygon(0 0%, 100% 0%, 100% 100%, ${BORDER_SPACING} 100%);`,
  'bottom-right': `polygon(${BORDER_SPACING} 0%, 100% 0%, 100% 100%, 0% 100%);`,
  'bottom-left': `polygon(0 0%, calc(100% - ${BORDER_SPACING}) 0%, 100% 100%, 0% 100%);`,
}

const BORDER_RADIUS_MAP = {
  'top-left': `${BORDER_RADIUS} 0 0 0`,
  'top-right': `0 ${BORDER_RADIUS} 0 0`,
  'bottom-right': `0 0 ${BORDER_RADIUS} 0`,
  'bottom-left': `0 0 0 ${BORDER_RADIUS}`,
}

export const ImageSubtitle = styled(Box)`
  position: absolute;
  display: inline;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  ${props => props.x}: 0;
  ${props => props.y}: 0;
  
  ${props => (props.x === 'left' ? `padding-right: ${BORDER_SPACING};` : `padding-left: ${BORDER_SPACING};`)}
  clip-path: ${props => BORDER_PATH_MAP[`${props.y}-${props.x}`]};
  
  ${props => props.round && `border-radius: ${BORDER_RADIUS_MAP[`${props.y}-${props.x}`]};`}
`

ImageSubtitle.propTypes = {
  x: PropTypes.oneOf(['left', 'right']),
  y: PropTypes.oneOf(['top', 'bottom']),
  round: PropTypes.bool,
}

ImageSubtitle.defaultProps = {
  x: 'left',
  y: 'top',
  round: false,
}
