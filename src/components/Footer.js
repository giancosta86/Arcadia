import React from "react"
import ExternalLink from "./ExternalLink"
import links from "../data/links.json"
import css from "./Footer.module.scss"

export default () => (
  <footer className={css.siteFooter}>
    Copyright ©{" "}
    <ExternalLink href={links.gcwebsite}>Gianluca Costa</ExternalLink>
  </footer>
)
