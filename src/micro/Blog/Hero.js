import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Text } from "theme-ui"

export const Hero = ({ data }) => (
  <HeroContainer>
    <HeroImage alt={data.name} fluid={data.heroImage.fluid} />
    <HeroDetails>
      <Text className="hero-headline" as="h3">
        {data.name}
      </Text>
      <Text as="p" className="hero-title">
        {data.title}
      </Text>
      <Text as="p">{data.shortBio.shortBio}</Text>
    </HeroDetails>
  </HeroContainer>
)
Hero.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    heroImage: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    shortBio: PropTypes.any.isRequired,
  }).isRequired,
}
const HeroContainer = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`
const HeroImage = styled(Img)`
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 61.8vh;
  max-height: 400px;
`
const HeroDetails = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 14px;
  padding: 0 0.5em;
  @media (min-width: 600px) {
    font-size: 16px;
  }
  @media (min-width: 1000px) {
    font-size: 20px;
  }

  .hero-title {
  }
  .hero-headline {
  }
`
