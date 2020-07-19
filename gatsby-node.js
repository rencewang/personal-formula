const path = require('path')

const blogTemplate = path.resolve(`./src/templates/blogPost.js`)
// const projectTemplate = path.resolve(`./src/templates/projectPost.js`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                permalink
                type
              }
            }
          }
        }
      }
    `)

    // const sortedPages = markdownPages.sort((pageA, pageB) => {
    //     const typeA = getType(pageA.node)
    //     const typeB = getType(pageB.node)
  
    //     return (typeA > typeB) - (typeA < typeB)
    // })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        // const previous = index === 0 ? null : sortedPages[index - 1].node
        // const next = index === sortedPages.length - 1 ? null : sortedPages[index + 1].node
        // const isNextSameType = getType(node) === (next && getType(next))
        // const isPreviousSameType =
        //   getType(node) === (previous && getType(previous))
        
        if (node.frontmatter.type.toString() === "post") {
            createPage({
                path: node.frontmatter.permalink,
                component: blogTemplate,
                context: {
                  // next: isNextSameType ? next : null,
                  // previous: isPreviousSameType ? previous : null,
                },
              })
        }
        // if (node.frontmatter.type.toString() === "project") {
        //     createPage({
        //         path: node.frontmatter.permalink,
        //         component: projectTemplate,
        //         context: {
        //           // next: isNextSameType ? next : null,
        //           // previous: isPreviousSameType ? previous : null,
        //         },
        //       })
        // }
    })

}
