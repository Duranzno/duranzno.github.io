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
import { Container, DetailedPost as Post, DetailedPostList as List } from '@components/Blog'
import { SEO, Layout } from '@common'
import { parsePost, edgeToArray } from '@utils'

const mapPost = ({ Component, ...rest }) => <Component {...rest} key={rest.id} />

const BlogTemplate = ({ data, pageContext }) => {
  let posts = edgeToArray(data).map(parsePost('', Post))
  console.log(pageContext)
  const { humanPageNumber } = pageContext
  const isFirstPage = humanPageNumber === 1
  let featuredPost
  try {
    featuredPost = posts[0].node
  } catch (error) {
    featuredPost = null
  }
  posts = new Array(7).fill(posts[1])

  return (
    <Layout>
      <Container className="container">
        <SEO title="Blogs" />
        {isFirstPage ? (
          <List>
            <Post {...featuredPost} featured />
            {posts.slice(1).map(mapPost)}
          </List>
        ) : (
          <List>{posts.map(mapPost)}</List>
        )}
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
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`

export default BlogTemplate
