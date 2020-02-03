import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Section } from '../common'
import { ProjectCard } from '../micro/ProjectCard'

const ProjectsComponent = data => {
  const { nodes: projects } = data.allContentfulProject
  return (
    <Section.Container
      id="projects"
      sx={{
        backgroundColor: 'grey',
      }}
    >
      <Section.Header name="Projects" />

      <ProjectCard project={projects[1]} />
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
