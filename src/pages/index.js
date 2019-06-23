import React from "react"
import Page from "../templates/Page"
import PostList from "../components/PostList"
import { graphql } from "gatsby"
import { getPosts } from "../utils/post-utils"

export default ({ data }) => (
  <Page>
    <PostList posts={getPosts(data)} />
  </Page>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fileAbsolutePath

          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
