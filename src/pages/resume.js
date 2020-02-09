import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '@components/Resume'

export default () => <Layout />

export const query = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
