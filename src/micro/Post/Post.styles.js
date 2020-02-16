import styled from '@emotion/styled'
import { Card as CardThemeUI, Image } from 'theme-ui'

export * from './ImageSubtitle.styles'

export const CoverImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`

export const Card = styled(CardThemeUI)`
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  top: 0;
  height: 100%;
  min-height: 500px;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`
