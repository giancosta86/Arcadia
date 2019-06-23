import React from "react"
import Page from "./Page"
import css from "./DocumentPage.module.scss"

export default props => (
  <Page title={props.title}>
    <div className={css.document}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  </Page>
)
