import React from 'react'
import { graphql } from 'gatsby'

const StackTemplate = props => {
  return <div>{JSON.stringify(props)}</div>
}

export const query = graphql`
  query($name: String!) {
    contentfulStackLink(name: { eq: $name }) {
      id
      name
      iconifyName
      url
      blog_post {
        slug
      }
    }
  }
`
export default StackTemplate
