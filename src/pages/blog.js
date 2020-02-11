/* eslint-disable  react/prefer-stateless-function */
import React from 'react'
import { graphql } from 'gatsby'
// import { get } from '@utils'
import { Layout } from '@common'
import { Box } from 'theme-ui'
import { TechTag } from '../micro/Icons/TechTag'
// eslint-disable-next-line react/prop-types
const BlogIndex = ({ data }) => {
  // const siteTitle = get(data, 'site.siteMetadata.title')
  // const posts = get(data, 'allContentfulBlogPost.edges')
  return (
    <Layout>
      <Box
        sx={{
          minWidth: '100vw',
          minHeight: '100vh',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          background: 'black',
          justifyContent: 'center',
        }}
      >
        <TechTag iconifyName="logos:redux" name="Redux" />
      </Box>
    </Layout>
  )
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
