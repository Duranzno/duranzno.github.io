/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { Post, MorePosts } from '@components/Blog'
import { Section, CardContainer } from '@common'
import { parsePost, edgeToArray } from '@utils'

export const Writing = ({ location: { origin } }) => {
  const data = useStaticQuery(query)
  const posts = edgeToArray(data).map(parsePost(origin, Post))
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
          <Fade bottom key={rest.id} triggerOnce>
            <Component {...rest} key={rest.id} />
          </Fade>
        ))}
      </CardContainer>
    </Section.Container>
  )
}

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
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 350) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 350) {
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
