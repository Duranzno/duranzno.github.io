/* eslint-disable  react/prefer-stateless-function */
import React from 'react'
import { graphql } from 'gatsby'
import { get } from '@utils'
import { Layout, SEO } from '@common'
import { Hero, ArticlePreview } from '@components/Blog'
import { Box } from 'theme-ui'
import { IconifyIcon } from '../micro/Icons/IconifyIcon'
import { TechTag } from '../micro/Icons/TechTag'
// eslint-disable-next-line react/prop-types
const BlogIndex = ({ location, data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const posts = get(data, 'allContentfulBlogPost.edges')
  return (
    <Layout>
      <Box
        sx={{
          minWidth: '100vw',
          minHeight: '100vh',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
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
          tags
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
