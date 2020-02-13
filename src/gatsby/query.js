module.exports.data = {
  posts: `{
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          slug
          publishDate
        }
      }
    }
  }`,
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
