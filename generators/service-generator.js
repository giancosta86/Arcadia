const path = require("path")
const { ensureDirectorySync, saveToJson } = require("../src/utils/fs-utils")
const { runQuery } = require("../src/utils/graphql-utils")
const { getPosts } = require("../src/utils/post-utils")
const rawSections = require("../src/data/sections.json")

const ServiceOutputPath = path.resolve("public/services")

exports.generateServices = graphql =>
  runQuery(
    graphql,

    `query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fileAbsolutePath
              
              frontmatter {
                title
                date
                sections
                version
              }
            }
          }
        }
      }`
  )
    .then(data => {
      ensureDirectorySync(ServiceOutputPath)
      return getPosts(data)
    })
    .then(posts =>
      buildSectionsService(posts).then(() => buildPostsService(posts))
    )

const buildSectionsService = posts => {
  let sectionsFile = path.join(ServiceOutputPath, "sections.json")

  let enhancedSections = rawSections.map(rawSection => {
    let postsInSection = posts
      .filter(post => post.sections.includes(rawSection.code))
      .map(post => post.url)

    return {
      ...rawSection,
      posts: postsInSection
    }
  })

  return saveToJson(sectionsFile, enhancedSections)
}

const buildPostsService = posts => {
  let postsFile = path.join(ServiceOutputPath, "posts.json")

  let basicPosts = posts.map(post => ({
    title: post.title,
    date: post.date,
    url: post.url,
    ...(post.version && { version: post.version })
  }))

  return saveToJson(postsFile, basicPosts)
}
