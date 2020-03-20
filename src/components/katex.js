import { renderToString } from "katex"
import React from "react"

//high order component
const Dang = ({ inline, Tag }) => ({ tex }) => (
  <Tag
    dangerouslySetInnerHTML={{
      __html: renderToString(tex, {
        displayMode: !inline,
      }),
    }}
  />
)

const Inl = Dang({ inline: true, Tag: "span" })
export default Dang({ inline: false, Tag: "div" })
export { Inl }
