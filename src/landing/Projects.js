import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Box } from 'theme-ui'
import { ProjectCard } from '@components/ProjectCard'
import { Section } from '@common'

const ProjectsComponent = data => {
  const { nodes: projects } = data.allContentfulProject
  return (
    <Section.Container
      id="projects"
      sx={{
        px: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Section.Header name="Projects" label="Projects" />
      <Box
        sx={{
          minWidth: 'inherit',
          minHeight: 'inherit',
          display: 'grid',
          gridGap: '1.5rem',
          gridAutoRows: '1fr',
          gridAutoFlow: 'dense',
          alignItems: 'center',
          alignContent: 'center',
          gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
        }}
      >
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Box>
    </Section.Container>
  )
}
export const Projects = () => <StaticQuery query={query} render={ProjectsComponent} />
const query = graphql`
  query ProjectsQuery {
    allContentfulProject {
      nodes {
        name
        description
        id
        projectUrl
        publishedDate
        repositoryUrl
        blurb
        logo {
          file {
            url
          }
        }
        stack {
          id
          name
          iconifyName
        }
        screenshots {
          file {
            url
          }
        }
        type {
          iconifyName
          name
        }
      }
    }
  }
`
