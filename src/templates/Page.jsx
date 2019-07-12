import React from "react"
import Metadata from "../components/Metadata"
import Header from "../components/Header"
import Footer from "../components/Footer"
import css from "./Page.module.scss"
import logo from "../images/arcadia.png"

export default props => (
  <>
    <Metadata title={props.title} logo={logo} />

    <Header logo={logo} />

    <div className={css.main}>{props.children}</div>

    <Footer />
  </>
)
