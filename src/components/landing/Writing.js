import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { Section } from '../common'
import { CardContainer, Post, MorePosts } from '../micro/Post'

const parsePost = postFromGraphql => {
  const {
    id,
    createdAt,
    title,
    image: {
      file: { url: image },
    },
    childContentfulBlogPostBlurbTextNode: { blurb },
  } = postFromGraphql
  return {
    id,
    title,
    text: blurb,
    image,
    url: 'www.google.com', // TODO: urlForText
    time: '10', // TODO: readinTime
    date: createdAt,
    Component: Post,
  }
}
const edgeToArray = data => data.allContentfulBlogPost.edges.map(edge => edge.node)
export const WritingComponent = data => {
  const posts = edgeToArray(data).map(parsePost)
  const diffAmountArticles = data.totalCount - posts.length
  if (diffAmountArticles >= 0) {
    posts.push({
      id: 'more-field',
      number: diffAmountArticles,
      Component: MorePosts,
    })
  }
  return (
    <Section.Container id="writing" sx={{ p: 5 }}>
      <Section.Header name="Writing" icon="✍️" label="writing" />
      <CardContainer minWidth="300px">
        {posts.map(({ Component, ...rest }) => (
          <Fade bottom key={rest.id}>
            <Component {...rest} key={rest.id} />
          </Fade>
        ))}
      </CardContainer>
    </Section.Container>
  )
}
const query = graphql`
  query WritingQuery {
    allContentfulBlogPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          createdAt(formatString: "MMM YYYY")
          image {
            file {
              url
            }
          }
          childContentfulBlogPostBlurbTextNode {
            blurb
          }
          childContentfulBlogPostBodyRichTextNode {
            body
          }
        }
      }
    }
  }
`
export const Writing = () => <StaticQuery query={query} render={WritingComponent} />
