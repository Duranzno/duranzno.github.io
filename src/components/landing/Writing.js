import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { Section } from '../common'
import { CardContainer, Post, MorePosts } from '../micro/Post'

const parsePost = postFromGraphql => {
  const { id } = postFromGraphql
  return {
    id,
    Component: Post,
  }
}
export const WritingComponent = () => {
  const posts = [{ id: 1 }, { id: 2 }].map(parsePost)
  const diffAmountArticles = 2
  if (diffAmountArticles > 0) {
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
    contentfulAbout {
      aboutMe {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`
export const Writing = () => <StaticQuery query={query} render={WritingComponent} />
