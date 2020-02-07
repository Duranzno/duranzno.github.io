import React from 'react'

import { Text, Image, Heading, Flex } from 'theme-ui'
import { Fade } from 'react-awesome-reveal'
import useInterval from '@use-it/interval'
import { ProjectPropTypes, StyledCard, ProjectDefaultProps } from './ProjectCard.styles'
import { SocialLink } from '../SocialLink'
import { setLimitLength } from '../../utils'

const SOCIAL_LINK_PROP = { sx: { width: 4, height: 4, mx: 2 }, color: 'black' }
const DELAY = 3000
const MAX_LENGTH = 175
const createProjectLinks = project => {
  return [
    {
      ...SOCIAL_LINK_PROP,
      name: 'Repository',
      iconifyName: 'mdi:github-circle',
      url: project.repositoryUrl,
    },
    { ...SOCIAL_LINK_PROP, name: 'Project', iconifyName: 'mdi:web', url: project.projectUrl },
  ]
}
export const BackCard = ({ project }) => {
  const [stackIndex, setStackIndex] = React.useState(0)
  const limitLength = setLimitLength(MAX_LENGTH)
  useInterval(() => {
    setStackIndex(stackIndex === project.stack.length - 1 ? 0 : stackIndex + 1)
  }, DELAY)
  const projectLinks = createProjectLinks(project)
  return (
    <StyledCard
      sx={{ pt: 3, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
    >
      <Heading as="h2">{project.name}</Heading>
      <Heading as="h6">{new Date(project.publishedDate).getFullYear()}</Heading>
      <Flex sx={{ justifyContent: 'center' }}>
        {projectLinks.map(v => (
          <SocialLink key={v.url} {...v} />
        ))}
      </Flex>

      <Text sx={{ flexGrow: '1' }}>{limitLength(project.description)}</Text>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'flex-end', alignSelf: 'flex-end' }}>
        <Fade LightSpeed>
          <Text variant="small">{project.stack[stackIndex].name}</Text>
        </Fade>
        {project.logo && <Image src={project.logo.file.url} sx={{ size: 4 }} />}
      </Flex>
    </StyledCard>
  )
}
BackCard.propTypes = {
  ...ProjectPropTypes,
}
BackCard.defaultProps = {
  ...ProjectDefaultProps,
}
