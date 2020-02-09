/* eslint-disable  react/prefer-stateless-function */
import React from 'react'
import { graphql } from 'gatsby'
import { get } from '@utils'
import { Layout, SEO } from '@common'
import { Hero, ArticlePreview } from '@components/Blog'
// eslint-disable-next-line react/prop-types
const BlogIndex = ({ location, data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const posts = get(data, 'allContentfulBlogPost.edges')
  console.log(JSON.stringify({ siteTitle, posts, location }))
  return (
    <Layout>
      {/* <div style={{ background: '#fff' }}>
        <SEO title={siteTitle} />
        <Hero>Blog</Hero>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div> */}
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
