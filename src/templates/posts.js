import React from 'react'
import { graphql } from 'gatsby'

const Posts = props => {
  return <div>{JSON.stringify(props)}</div>
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`
export default Posts
