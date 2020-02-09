import styled from '@emotion/styled'
import { Heading, Card as CardThemeUI, Image } from 'theme-ui'

export * from './ImageSubtitle.styles'
export const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkitinline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`
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
  top: 0;
  height: 100%;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`
