import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { ProjectCard } from '@components/ProjectCard'
import { Section, CardContainer } from '@common'

const ProjectsComponent = data => {
  const { nodes: projects } = data.allContentfulProject
  return (
    <Section.Container id="projects" sx={{ p: 5 }}>
      <Section.Header name="Projects" icon="✍️" label="projects" />
      <CardContainer sx={{ minWidth: '300px' }}>
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </CardContainer>
    </Section.Container>
  )
}
export const Projects = () => (
  <StaticQuery query={query} render={ProjectsComponent} />
)
const query = graphql`
  query ProjectsQuery {
    allContentfulProject(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createdAt, order: DESC }
    ) {
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
      }
    }
  }
`
