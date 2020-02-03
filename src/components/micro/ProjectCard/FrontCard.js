import React from 'react'
import styled from '@emotion/styled'
import { Card, Text, Link, Image } from 'theme-ui'
import { ProjectPropTypes } from './ProjectCard.styles'

const StyledFront = styled(Card)`
  z-index: 900;
  /* transform: ${props => (props.flipped ? ' rotateX(0deg) rotateY(0deg)' : 'rotateY(180deg)')}; */
`

export const Front = ({ project, flipped }) => {
  return (
    <StyledFront flipped={flipped}>
      <Text>{project.name}</Text>
      <Link variant="nav" href={project.repositoryUrl}>
        <span className="iconify" data-icon="mdi:github-circle" data-inline="false" />
      </Link>
      <Link variant="nav" href={project.projectUrl}>
        <span className="iconify" data-icon="mdi:web" data-inline="false" />
      </Link>
      <Text>{project.description}</Text>
      <Text>{new Date(project.publishedDate).getFullYear()}</Text>
      <Image src={project.logo.file.url} />
    </StyledFront>
  )
}
Front.propTypes = {
  ...ProjectPropTypes,
}
