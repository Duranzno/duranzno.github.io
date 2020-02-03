import React from 'react'
import styled from '@emotion/styled'
import { Text, Image, Box } from 'theme-ui'
import { ProjectPropTypes, StyledCard } from './ProjectCard.styles'

export const StyledBack = styled(StyledCard)`
  z-index: 1000;
  background: #ffffff;
  display: inline-block;
  margin: 8px;
  max-width: 300px;
  text-align: left;
  /* transition: all 0.3s 0s; */
  /* transform: ${props => (props.flipped ? ' rotateY(-180deg)' : 'rotateX(0deg) rotateY(0deg)')}; */
`
// https://codepen.io/candroo/full/wKEwRL
export const Back = ({ project, flipped }) => {
  return (
    <StyledBack flipped={flipped} className="back-card">
      <Image src={project.screenshots[0].file.url} sx={{ maxWidth: '300px' }} />
      <Box sx={{ display: 'flex', direction: '' }} />
      <Text sx={{ fontSize: 4, fontWeight: 'bold' }} variant="heading">
        {project.name}
      </Text>
      <Text sx={{ fontSize: 3 }}>{project.description}</Text>

      <div>
        {project.stack.slice(0, 3).map(({ id, IconifyName }) => (
          <>{IconifyName}</>
          // <IconifyIcon IconifyName={IconifyName} size={6} key={id} />
        ))}
      </div>
    </StyledBack>
  )
}
Back.propTypes = {
  ...ProjectPropTypes,
}
