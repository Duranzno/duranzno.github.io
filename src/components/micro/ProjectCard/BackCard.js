import React from 'react'
import styled from '@emotion/styled'
import { Text, Image, Box } from 'theme-ui'
import { ProjectPropTypes, StyledCard } from './ProjectCard.styles'
import { SocialLink } from '../index'

export const StyledBack = styled(StyledCard)`
  z-index: 1000;
  background: #ffffff;
  display: inline-block;
  max-width: 300px;
  text-align: left;
  /* transition: all 0.3s 0s; */
  /* transform: ${props => (props.flipped ? ' rotateY(-180deg)' : 'rotateX(0deg) rotateY(0deg)')}; */
`
export const Back = ({ project, flipped }) => {
  console.log(project)
  return (
    <StyledBack flipped={flipped} className="back-card">
      <Image src={project.screenshots[0].file.url} sx={{ maxWidth: '300px' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', px: 3, pb: 1 }}>
        <Text sx={{ fontSize: 4, fontWeight: 'bold' }} variant="heading">
          {project.name}
        </Text>
        <Text sx={{ fontSize: 3 }}>{project.description}</Text>
        <div>
          {project.stack.slice(0, 3).map(({ id, iconifyName }) => (
            <SocialLink IconifyName={iconifyName} sx={{ width: 2, height: 2 }} key={id} color="black" />
          ))}
        </div>
      </Box>
    </StyledBack>
  )
}
Back.propTypes = {
  ...ProjectPropTypes,
}
