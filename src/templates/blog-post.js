/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import { get } from '@utils'
import { SEO, Layout } from '@common'
import { Flex } from 'theme-ui'
import { Hero } from '@components/Blog'
import { TechTags, PostDetails, PageBody, PostLinks } from '@components'
import styled from '@emotion/styled'

const Container = styled.section`
  margin: 0 auto auto;
  background: ${props => props.theme.colors.background};
  width: 100%;
  flex: 1 0 auto;
`
const BlogPostTemplate = ({ data, pageContext }) => {
  const { title, heroImage, body, publishDate, stack } = get(data, 'contentfulBlogPost')
  const { prev, next, basePath } = pageContext
  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout>
      <Hero title={title} heroImage={heroImage} shortBio={body.childMarkdownRemark.excerpt} />
      <Container className="container">
        <SEO title={`${title} | ${siteTitle}`} />
        {stack && <TechTags stack={stack} />}
        <PostDetails date={publishDate} timeToRead={body.childMarkdownRemark.timeToRead} />
        <PageBody body={body} sx={{ px: [3, 5, 7] }} />
        <PostLinks previous={prev} next={next} basePath={basePath} sx={{ pt: 2, px: [3, 5, 7] }} />
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        title
        ogimg: resize(width: 1800) {
          src
        }
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      stack {
        name
        iconifyName
        id
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
