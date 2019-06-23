const { getPathAtRootWithoutExtension } = require("./path-utils")

exports.getPosts = data => {
  let postNodes = data.allMarkdownRemark.edges.map(({ node }) => node)

  let posts = postNodes.map(({ frontmatter, fileAbsolutePath }) => ({
    title: frontmatter.title,
    date: frontmatter.date,
    sections: frontmatter.sections,
    version: frontmatter.version,
    url: getPathAtRootWithoutExtension(fileAbsolutePath),
  }))

  return posts
}
