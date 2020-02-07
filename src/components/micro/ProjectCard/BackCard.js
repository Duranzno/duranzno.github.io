import React from 'react'
import { Text, Image, Box } from 'theme-ui'
import { ProjectPropTypes, StyledCard, ProjectDefaultProps } from './ProjectCard.styles'
import { SocialLink } from '../index'

export const Back = ({ project }) => (
  <StyledCard className="back-card">
    <Image src={project.screenshots[0].file.url} sx={{ maxWidth: '300px' }} />
    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', px: 3 }}>
        <Text sx={{ fontSize: 4, fontWeight: 'bold' }} variant="heading">
          {project.name}
        </Text>
        <Text sx={{ fontSize: 2 }}>{project.blurb}</Text>
      </Box>
      <Box sx={{ alignSelf: 'flex-end', pr: 1, ml: 'auto' }}>
        {project.stack.slice(0, 3).map(({ id, iconifyName, name }) => (
          <SocialLink
            iconifyName={iconifyName}
            name={name}
            sx={{ width: 4, height: 4, mx: 2 }}
            key={id}
            color="black"
            url="google.com"
          />
        ))}
      </Box>
    </Box>
  </StyledCard>
)

Back.propTypes = {
  ...ProjectPropTypes,
}
Back.defaultProps = {
  ...ProjectDefaultProps,
}
