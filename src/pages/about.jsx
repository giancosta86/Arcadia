import React from "react"
import DocumentPage from "../templates/DocumentPage"
import ExternalLink from "../components/ExternalLink"
import links from "../data/links.json"

export default () => (
  <DocumentPage title="Introduction">
    <p>
      <em>Arcadia</em> is a gallery of poems composed by{" "}
      <ExternalLink href={links.gcwebsite}>me</ExternalLink>: it deals with
      love, philosophy and more - in a variety of languages, especially ancient
      Italian.
    </p>

    <p>
      Arcadia also features a{" "}
      <ExternalLink href={links.app}>mobile web app</ExternalLink>, to simplify
      and enhance poem navigation.
    </p>

    <p>
      Finally, you are all invited to follow its{" "}
      <ExternalLink href={links.facebook}>Facebook page</ExternalLink>! ^__^!
    </p>

    <h2>License</h2>

    <p>
      All the material related to Arcadia's GitHub project is licensed under a{" "}
      <ExternalLink href={links.license}>
        Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License
      </ExternalLink>
      ; as for related projects - such as the mobile app - please refer to their
      license information.
    </p>

    <h2>Special thanks</h2>

    <ul>
      <li>
        <ExternalLink href="https://www.gatsbyjs.org/">GatsbyJS</ExternalLink>:
        very elegant React-based static site generator
      </li>
      <li>
        <ExternalLink href="https://www.colorzilla.com/gradient-editor/">
          ColorZilla
        </ExternalLink>
        : for the beautiful and effective CSS gradient editor
      </li>
    </ul>
  </DocumentPage>
)
