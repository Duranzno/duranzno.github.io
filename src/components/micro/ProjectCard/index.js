import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './ProjectCard.styles'
import { Back } from './BackCard'
import { Front } from './FrontCard'

export const ProjectCard = data => {
  const { project } = data
  // const [flipped, flipCard] = React.useState(true)
  return (
    <Container className="project-card" sx={{ display: 'flex', direction: 'row' }}>
      <Back project={project} flipped={false} />
      {/* <Front project={project} flipped={false} /> */}
    </Container>
  )
}
ProjectCard.defaultProps = {
  project: PropTypes.object.isRequired,
}
