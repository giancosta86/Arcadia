import React from "react"
import DocumentPage from "../templates/DocumentPage"
import { Link } from "gatsby"

export default () => (
  <DocumentPage title="Resource not found">
    <p>
      It seems you have requested a resource currently not available within
      Arcadia! ^__^
    </p>

    <p>
      Please, return to the <Link to="/">home page</Link> to explore the table
      of contents.
    </p>
  </DocumentPage>
)
