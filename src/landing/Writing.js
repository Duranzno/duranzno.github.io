import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { CardContainer, Post, MorePosts } from '@components/Post'
import { Section } from '@common'

const parsePost = postFromGraphql => {
  const {
    id,
    createdAt: date,
    title,
    slug,
    heroImage: {
      file: { url: image },
    },
    description: {
      childMarkdownRemark: { rawMarkdownBody: text },
    },
    body: {
      childMarkdownRemark: { timeToRead: time },
    },
  } = postFromGraphql
  return {
    id,
    title,
    text,
    image,
    slug,
    url: 'www.google.com', // TODO: urlForText
    time,
    date,
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
          slug
          heroImage {
            file {
              url
              fileName
              contentType
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
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
export const Writing = () => <StaticQuery query={query} render={WritingComponent} />
