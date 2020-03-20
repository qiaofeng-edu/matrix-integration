import { renderToString } from "katex"
import React from "react"

const Dang = ({ tex }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: renderToString(tex),
    }}
  />
)

export default Dang