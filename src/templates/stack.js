/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import { graphql } from 'gatsby'
import { Container, DetailedPost as Post, DetailedPostList as List, Pagination } from '@components/Blog'
import { SEO, Layout } from '@common'
import { parsePost, edgeToArray, get } from '@utils'

const mapPost = ({ Component, ...rest }) => <Component {...rest} key={rest.id} />
const StackTemplate = ({ data, pageContext }) => {
  const stack = data.allContentfulStackLink.nodes[0]
  const isFirstPage = pageContext.humanPageNumber === 1

  const posts = stack.blog_post.map(parsePost('', Post))
  const numberOf = posts.length
  const [featuredPost] = posts

  const { name } = stack
  return (
    <Layout>
      <SEO title="Blog" />
      <Container className="container" sx={{ px: [3, 5, 7], pt: '6rem' }}>
        <Text as="h1" sx={{ px: 4, py: 4, textAlign: 'center', fontSize: 6 }}>
          {numberOf}
          &nbsp;Posts Tagged: &ldquo;
          {name}
          &rdquo;
        </Text>
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
  query($name: String!) {
    allContentfulStackLink(filter: { name: { eq: $name }, node_locale: { eq: "en-US" } }) {
      nodes {
        name
        id
        iconifyName
        blog_post {
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
export default StackTemplate
