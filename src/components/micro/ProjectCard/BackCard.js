import React from 'react'
import styled from '@emotion/styled'
import { Styled, Card, Text, Link, Image } from 'theme-ui'
import { ProjectPropTypes } from './ProjectCard.styles'

export const StyledBack = styled(Styled.div)`
  z-index: 1000;
  /* transform: ${props => (props.flipped ? ' rotateY(-180deg)' : 'rotateX(0deg) rotateY(0deg)')}; */
`

export const Back = ({ project, flipped }) => {
  return (
    <StyledBack flipped={flipped}>
      <Card>
        <Text>{project.name}</Text>
        <div>
          {project.stack.slice(0, 3).map(({ id, IconifyName }) => (
            <>{IconifyName}</>
            // <IconifyIcon IconifyName={IconifyName} size={6} key={id} />
          ))}
        </div>
        <Image src={project.screenshots[0].file.url} />
      </Card>
    </StyledBack>
  )
}
Back.propTypes = {
  ...ProjectPropTypes,
}
