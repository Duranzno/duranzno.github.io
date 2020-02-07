import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Box } from 'theme-ui'
import { Section } from '../common'
import { ProjectCard } from '../micro/ProjectCard'

const ProjectsComponent = data => {
  const { nodes: projects } = data.allContentfulProject
  return (
    <Section.Container
      id="projects"
      sx={{
        px: '2',
      }}
    >
      <Box
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
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
