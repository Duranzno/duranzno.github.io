export const parsePost = (origin, Component) => postFromGraphql => {
  const {
    id,
    publishDate: date,
    title,
    slug,
    heroImage: image,
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
    Component,
  }
}
export const edgeToArray = data => data.allContentfulBlogPost.edges.map(edge => edge.node)
