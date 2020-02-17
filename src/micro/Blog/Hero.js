/** @jsx jsx */

import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { useThemeUI, jsx } from 'theme-ui'

export const Hero = ({ heroImage, title, sx }) => {
  const colors = useThemeUI()
  return (
    <Wrapper sx={{ sx }} as="section">
      <BgImg fluid={heroImage.fluid} alt={title} backgroundColor={colors.background} />
      <Title>{title}</Title>
    </Wrapper>
  )
}
Hero.propTypes = {
  heroImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  sx: PropTypes.any,
}

Hero.defaultProps = {
  sx: {
    height: '50vh',
    paddingTop: '6rem',
  },
}
const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  /* height: auto; */
  /* @media (min-width: ${props => props.theme.responsive.small}) { */
    height: ${props => (props.sx && props.sx.height) || '50vh'};
  /* } */
`
const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  z-index: 2;
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  /* max-width: ${props => props.theme.sizes.maxWidthCentered}; */
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`
