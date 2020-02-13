/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { PreviewTitle, Tag } from "./Blog.styles"

export const ArticlePreview = ({ article }) => (
  <div>
    <Img alt="" fluid={article.heroImage.fluid} />
    <PreviewTitle>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </PreviewTitle>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags && article.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
  </div>
)
ArticlePreview.propTypes = {
  article: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    heroImage: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    description: PropTypes.any,
  }).isRequired,
}
