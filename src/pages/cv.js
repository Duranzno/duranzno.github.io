import React from 'react'
import { graphql } from 'gatsby'

export default () => <></>

export const query = graphql`
  query CVQuery {
    contentfulCv {
      id
      title
      introduction {
        content {
          content {
            value
          }
        }
      }
      links {
        name
        url
        username
        iconifyName
      }
      projects {
        name
        publishedDate
        repositoryUrl
        achievements {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      skills {
        id
        name
        level
        achievements {
          id
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      experience {
        title
        dateStarted
        dateEnded
        company
        description {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
      childContentfulCvEducationRichTextNode {
        education
      }
    }
  }
`
