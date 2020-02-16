/** @jsx jsx */
import { SEO } from '@common'
import { Text, jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const lavaLampBg = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 400% 0;
  }
`
const NotFound = styled(Text)`
  font-size: 50vh;
  position: relative;
  background: ${props => props.theme.colors.background};
  color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    position: absolute;
    -webkit-filter: blur(20px);
    filter: blur(20px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    background-size: 3em 3em, 2em 2em;
    animation-name: ${lavaLampBg};
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    background-image: ${({ theme: { colors } }) =>
      `repeating-linear-gradient(-45deg, transparent, transparent 1em, #9e2053 1em, #ffa500 50%),repeating-linear-gradient(45deg, ${colors.primary}, ${colors.primary} 1em, #ffc0cb 1em, ${colors.secondary} 50%)`};
  }
`
const NotFoundPage = () => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    }}
  >
    <SEO title="404: Not found" />

    <NotFound as="h1">404</NotFound>
  </div>
)

export default NotFoundPage
