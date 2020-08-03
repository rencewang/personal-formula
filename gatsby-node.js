const path = require('path')
const { get } = require('jquery')

const blogTemplate = path.resolve(`./src/templates/blogPost.js`)
const projectTemplate = path.resolve(`./src/templates/projectPost.js`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
      tls: "empty",
      net: "empty",
    },
  })
}

exports.createPages = async ({ graphql, actions, getNodes }) => {
    const { createPage } = actions
    const allNodes = getNodes()

    const result = await graphql(`
      query {
        projects: allMarkdownRemark (
          filter: { frontmatter: { type: {eq: "project"}, published: {eq: true} } }
          sort: { fields: [frontmatter___updated] order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                permalink
                title
              }
            }
          }
        }
        posts: allMarkdownRemark (
          filter: { frontmatter: { type: {eq: "post"}, published: {eq: true} } }
          sort: { fields: [frontmatter___updated] order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                permalink
                title
              }
            }
          }
        }
      }
    `)

    const posts = result.data.posts.edges
    posts.forEach(({node}, index) => {
      createPage({
        path: node.frontmatter.permalink,
        component: blogTemplate,
        context: {
          next: index === (posts.length - 1) ? null : posts[index + 1].node,
          previous: index === 0 ? null : posts[index - 1].node,
        },
      })
    })

    const projects = result.data.projects.edges
    projects.forEach(({node}, index) => {
      createPage({
        path: node.frontmatter.permalink,
        component: projectTemplate,
        context: {
          next: index === (projects.length - 1) ? null : projects[index + 1].node,
          previous: index === 0 ? null : projects[index - 1].node,
        },
      })
    })
}
