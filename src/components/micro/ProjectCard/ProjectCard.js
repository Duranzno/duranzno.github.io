import React from 'react'
import PropTypes from 'prop-types'
import { Card, Text, Image } from 'theme-ui'
import { Container, Front, Back } from './ProjectCard.styles'

export const ProjectCard = data => {
  const { project } = data
  // const [flipped, flipCard] = React.useState(true)
  return (
    <Container>
      <Back project={project} flipped={false} />
      <Front project={project} flipped={false} />
      {/* <Front flipped={flipped}> */}
      {/* </Front> */}
      {/* <Back flipped={flipped}>
        <Card>
          <Text>{project.name}</Text>
          <Link variant="nav" href={project.repositoryUrl}>
            <span
              className="iconify"
              data-icon="mdi:github-circle"
              data-inline="false"
            />
          </Link>
          <Link variant="nav" href={project.projectUrl}>
            <span className="iconify" data-icon="mdi:web" data-inline="false" />
          </Link>
          <Text>{project.description}</Text>
          <Text>{new Date(project.publishedDate).getFullYear()}</Text>
          <Image src={project.logo.image.src} />
        </Card>
      </Back> */}
    </Container>
  )
}
ProjectCard.defaultProps = {
  project: PropTypes.object.isRequired,
}
