module.exports.data = {
  posts: `{
  allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}, filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        slug
        publishDate
        node_locale
      }
    }
  }
}
`,
  stacks: `{
    allContentfulStackLink(filter: {blog_post: {elemMatch: {id: {ne: null}, node_locale: {eq: "en-US"}}}}) {
    edges {
      node {
        name
        node_locale
        blog_post {
          slug
        }
      }
    }
  }
  }`,
}
