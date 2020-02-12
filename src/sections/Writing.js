/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { Post, MorePosts } from '@components/Post'
import { Section, CardContainer } from '@common'

export const Writing = ({ location: { origin } }) => {
  const data = useStaticQuery(query)
  const posts = edgeToArray(data).map(parsePost(origin))
  posts.push({
    id: 'more-field',
    number: data.totalCount,
    url: `${origin}/blog`,
    Component: MorePosts,
  })
  return (
    <Section.Container id="writing" sx={{ p: 5 }}>
      <Section.Header name="Writing" icon="✍️" label="writing" />
      <CardContainer sx={{ minWidth: '300px' }}>
        {posts.map(({ Component, ...rest }) => (
          <Fade bottom key={rest.id}>
            <Component {...rest} key={rest.id} />
          </Fade>
        ))}
      </CardContainer>
    </Section.Container>
  )
}

const parsePost = origin => postFromGraphql => {
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
    url: `${origin}/blog/${slug}`,
    time,
    date,
    Component: Post,
  }
}
const edgeToArray = data => data.allContentfulBlogPost.edges.map(edge => edge.node)
const query = graphql`
  query WritingQuery {
    allContentfulBlogPost(
      limit: 3
      sort: { fields: createdAt, order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
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
