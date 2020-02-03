import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Box, Card } from 'theme-ui'

export const Container = styled(Box)`
  /* margin: 0 auto;
  height: 130px;
  position: relative;
  perspective: 600px;
  & > div {
    top: 0;
    text-align: center;
    height: inherit;
    position: absolute;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all 0.4s ease-in-out;
  } */
`
export const StyledCard = styled(Card)``

export const ProjectPropTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    projectUrl: PropTypes.string,
    publishedDate: PropTypes.string,
    repositoryUrl: PropTypes.string,
    stack: PropTypes.array,
    screenshots: PropTypes.array,
    type: PropTypes.array,
  }).isRequired,
  flipped: PropTypes.bool.isRequired,
}
