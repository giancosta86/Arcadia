const path = require("path")
const { runQuery } = require("../src/utils/graphql-utils")
const { getPathAtRootWithoutExtension } = require("../src/utils/path-utils")

exports.generatePosts = (graphql, createPage) => {
  return runQuery(
    graphql,

    `query {
        allMarkdownRemark {
          edges {          
            node {
              id
              fileAbsolutePath
            }
          }
        }
      }`
  ).then(data =>
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      let postTemplate = resolvePostTemplate(node)

      createPage({
        path: getPathAtRootWithoutExtension(node.fileAbsolutePath),
        component: postTemplate,
        context: {
          nodeId: node.id
        }
      })
    })
  )
}

const resolvePostTemplate = markdownNode => {
  if (markdownNode.fileAbsolutePath.includes("/poems/")) {
    return path.resolve("src/templates/PoemPage.jsx")
  }

  throw new Error(
    `Cannot resolve a template for this post: '${markdownNode.fileAbsolutePath}'`
  )
}
