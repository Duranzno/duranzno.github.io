import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/micro/Resume'

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
