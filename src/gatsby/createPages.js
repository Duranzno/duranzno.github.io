const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const config = require('../../gatsby-config')
const query = require('./query')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const basePath = config.siteMetadata.siteUrl || '/'

  // Create a page for each "post"
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allContentfulBlogPost.edges
  posts.forEach((post, i) => {
    const next = i === posts.length - 1 ? null : posts[i + 1].node
    const prev = i === 0 ? null : posts[i - 1].node
    const postName = post.node.slug.toLowerCase()

    createPage({
      path: `${basePath === '/' ? '' : basePath}/${postName}/`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.node.slug,
        basePath: basePath === '/' ? '' : basePath,
        prev,
        next,
      },
    })
  })

  // Create a page containing all "posts" and paginate.
  paginate({
    createPage,
    component: path.resolve(`./src/templates/posts.js`),
    items: posts,
    itemsPerFirstPage: config.siteMetadata.postsPerFirstPage || 7,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: basePath,
    context: {
      basePath: basePath === '/' ? '' : basePath,
      paginationPath: basePath === '/' ? '' : `/${basePath}`,
    },
  })

  // Create "stack" page and paginate
  const stacksQuery = await graphql(query.data.stacks)
  const stacks = stacksQuery.data.allContentfulStackLink.edges
  stacks.forEach(stack => {
    const stackPagination = basePath === '/' ? `/tag/${name}` : `/${basePath}/tag/${name}`
    const name = stack.node.name.toLowerCase()

    paginate({
      createPage,
      component: path.resolve(`./src/templates/stack.js`),
      items: stack.node.post || [],
      itemsPerPage: config.siteMetadata.postsPerPage || 6,
      pathPrefix: stackPagination,
      context: {
        name: stack.node.name,
        basePath: basePath === '/' ? '' : basePath,
        paginationPath: stackPagination,
      },
    })
  })
}
