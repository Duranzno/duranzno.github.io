/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Container, DetailedPost as Post, DetailedPostList as List, Pagination } from '@components/Blog'
import { SEO, Layout } from '@common'
import { parsePost, edgeToArray } from '@utils'

const mapPost = ({ Component, ...rest }) => <Component {...rest} key={rest.id} />

const BlogTemplate = ({ data, pageContext }) => {
  let posts = edgeToArray(data).map(parsePost('', Post))
  console.log(pageContext)
  const { humanPageNumber } = pageContext
  const isFirstPage = humanPageNumber === 1
  const [featuredPost] = posts
  posts = new Array(7).fill(posts[1])

  return (
    <Layout>
      <SEO title="Blog" />
      <Container className="container" sx={{ px: [3, 5, 7], pt: '6rem' }}>
        {isFirstPage ? (
          <List>
            <Post {...featuredPost} featured />
            {posts.slice(1).map(mapPost)}
          </List>
        ) : (
          <List>{posts.map(mapPost)}</List>
        )}
        <Pagination context={pageContext} />
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
