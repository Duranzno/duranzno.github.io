const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const config = require('../../gatsby-config')
const query = require('./query')

module.exports = async ({ graphql, actions: { createPage } }) => {
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allContentfulBlogPost.edges
  posts.forEach((post, i) => {
    const next = i === posts.length - 1 ? null : posts[i + 1].node
    const prev = i === 0 ? null : posts[i - 1].node
    const postName = post.node.slug.toLowerCase()
    createPage({
      path: `/blog/${postName}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.node.slug,
        prev,
        next,
      },
    })
  })

  // Create a page containing all "posts" and paginate.
  paginate({
    createPage,
    component: path.resolve(`./src/templates/blog-posts.js`),
    items: posts,
    itemsPerFirstPage: config.siteMetadata.postsPerFirstPage || 7,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: '/blog',
  })

  // Create "stack" page and paginate
  const stacksQuery = await graphql(query.data.stacks)
  const stacks = stacksQuery.data.allContentfulStackLink.edges
  stacks.forEach(stack => {
    const name = stack.node.name.toLowerCase()
    const stackPagination = `/tag/${name}`

    paginate({
      createPage,
      component: path.resolve(`./src/templates/stack.js`),
      items: stack.node.post || [],
      itemsPerPage: config.siteMetadata.postsPerPage || 6,
      pathPrefix: stackPagination,
      context: {
        name: stack.node.name,
        paginationPath: stackPagination,
      },
    })
  })
}
