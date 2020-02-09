import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '@common'

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
