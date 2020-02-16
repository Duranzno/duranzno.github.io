/* eslint-disable  react/prefer-stateless-function */
import React from 'react'
import { graphql } from 'gatsby'
// import { get } from '@utils'
import { Layout } from '@common'
import { Box, Flex } from 'theme-ui'
import { TechTag } from '../micro/Icons/TechTag'
import { TechBackground } from '../common/Background/TechBackground'
// eslint-disable-next-line react/prop-types
const BlogIndex = ({ data }) => {
  // const siteTitle = get(data, 'site.siteMetadata.title')
  // const posts = get(data, 'allContentfulBlogPost.edges')
  return <Layout />
}
export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
