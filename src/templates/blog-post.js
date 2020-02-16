/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import { get } from '@utils'
import { SEO, Layout } from '@common'

const BlogPostTemplate = ({ data }) => {
  const post = get(data, 'contentfulBlogPost')
  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <SEO title={`${post.title} | ${siteTitle}`} />
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
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
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
