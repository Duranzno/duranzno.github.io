/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
// import CardList from '../components/CardList'
// import Card from '../components/Card'
// import Container from '../components/Container'
// import Pagination from '../components/Pagination'
// import SEO from '../components/SEO'
// import { startCase } from 'lodash'
import { Container } from '@components/Blog'
import { SEO, Layout } from '@common'

const BlogTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulBlogPost.edges
  const { humanPageNumber } = pageContext
  const isFirstPage = humanPageNumber === 1
  let featuredPost
  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }
  return (
    <Layout>
      <Container className="container">
        <SEO title="Blogs" />
        {/* {isFirstPage ? (
          <CardList>
            <Card {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )} */}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default BlogTemplate
