const { generatePosts } = require("./generators/post-generator")
const { generateServices } = require("./generators/service-generator")

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  return generatePosts(graphql, createPage)
    .then(() => reporter.success("Markdown posts converted"))
    .then(() => generateServices(graphql))
    .then(() => reporter.success("JSON services generated"))
}
