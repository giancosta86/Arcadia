import React from "react"
import { Link, graphql } from "gatsby"
import Page from "./Page"
import css from "./PoemPage.module.scss"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Page title={frontmatter.title}>
      <article className={css.poem}>
        <header className={css.poemHeader}>
          <h1 className={css.poemTitle}>{frontmatter.title}</h1>
        </header>

        <div
          data-block="content"
          className={css.poemContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <div id={css.backToHomePage}>
        <Link to="/">Arcadia - Home page</Link>
      </div>
    </Page>
  )
}

export const pageQuery = graphql`
  query($nodeId: String!) {
    markdownRemark(id: { eq: $nodeId }) {
      frontmatter {
        title
      }
      html
    }
  }
`
