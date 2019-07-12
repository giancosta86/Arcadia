import React from "react"
import { Helmet } from "react-helmet"
import site from "../data/site.json"

export default props => {
  let title = props.title ? `${props.title} - ${site.title}` : site.title

  return (
    <Helmet>
      <meta name="description" content={site.description} />

      <meta name="author" content="Gianluca Costa" />

      <title>{title}</title>

      <link rel="icon" href={props.logo} />
    </Helmet>
  )
}
