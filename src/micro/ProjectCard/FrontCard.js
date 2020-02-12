import React from 'react'
import { Text, Image, Box } from 'theme-ui'
import { ProjectPropTypes, StyledCard, ProjectDefaultProps } from './ProjectCard.styles'
import {EllipsisHeading} from '../Card'
export const FrontCard = ({ project }) => (
  <StyledCard className="FrontCard-card" sx={{ textAlign: 'center' }}>
    <Image src={project.screenshots[0].file.url} sx={{ maxWidth: '300px', borderRadius: '8px 8px 0px 0px' }} />
    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', px: 3 }}>
        <EllipsisHeading sx={{ fontSize: 4, fontWeight: 'bold' }} variant="heading">
          {project.name}
        </EllipsisHeading>
        <Text sx={{ fontSize: 2 }}>{project.blurb}</Text>
      </Box>
    </Box>
  </StyledCard>
)

FrontCard.propTypes = {
  ...ProjectPropTypes,
}
FrontCard.defaultProps = {
  ...ProjectDefaultProps,
}
