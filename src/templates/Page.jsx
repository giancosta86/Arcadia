import React from "react"
import Metadata from "../components/Metadata"
import Header from "../components/Header"
import Footer from "../components/Footer"
import css from "./Page.module.scss"

export default props => (
  <>
    <Metadata title={props.title} />

    <Header />

    <div className={css.main}>{props.children}</div>

    <Footer />
  </>
)
