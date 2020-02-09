import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO } from '../components/common'
// import { Intro, Skills, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO title="blog" />
    <div>hi</div>
    {/* <Intro />
    <Projects />
    <Skills />
    <Contact /> */}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
