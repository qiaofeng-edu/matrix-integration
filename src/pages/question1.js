import React from "react"
import Dis, { Inl } from "../components/katex"

const matrix = mid => "\\begin{bmatrix} " + mid + " \\end{bmatrix}"

const Q1 = () => (
  <div>
    <p>
      Consider the coefficients of <Inl tex="a_2x^2e^x+a_1xe^x+a_0e^x" /> as a
      vector:
      <Inl tex={"\\begin{bmatrix} a_2  \\\\ a_1 \\\\ a_0 \\end{bmatrix}"} />.
    </p>
    <p>
      The derivatives are linear transform:
      <Dis tex={"(x^2e^x)'=2xe^x+x^xe^x \\quad" + matrix("1&2&0") + "^T"} />
    </p>
    <p>
      <Dis tex="a^2+b^2" />
    </p>
  </div>
)

export default Q1
