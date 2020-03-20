import React from "react"
import Dis, { Inl } from "../components/katex"

const matrix = mid => "\\begin{bmatrix} " + mid + " \\end{bmatrix}"

const poly1 = "a_2x^2e^x+a_1xe^x+a_0e^x"
const vec1 = "\\begin{bmatrix} a_2  \\\\ a_1 \\\\ a_0 \\end{bmatrix}"
const transform1 = matrix("1&0&0 \\\\ 2&1&0 \\\\ 0&1&1")
const coefps = matrix("p_1 & p_2 & p_3")
const vert_ps = matrix("p_1 \\\\ p_2 \\\\ p_3")
const int_xsq = "\\int x^2e^xdx = "

const Q1 = () => (
  <div>
    <p>
      Consider the coefficients of <Inl tex={poly1} /> as a vector:
      <Inl tex={vec1} />.
    </p>
    <p>
      The derivatives :
      <Dis
        tex={
          "(x^2e^x)'=x^2e^x+2xe^x+0 \\cdot e^x \\quad" + matrix("1&2&0") + "^T"
        }
      />
      <Dis
        tex={
          "(xe^x)'=0 \\cdot x^2e^x + xe^x+ e^x \\quad" + matrix("0&1&1") + "^T"
        }
      />
      <Dis
        tex={
          "(e^x)'=0 \\cdot x^2e^x + 0 \\cdot xe^x + e^x \\quad" +
          matrix("0&0&1") +
          "^T"
        }
      />
    </p>
    <p>
      Then we have:
      <Dis tex={"(" + poly1 + ")'=" + transform1 + vec1} />
    </p>
    <p>
      For example, <Dis tex={int_xsq + coefps + "^T"} />
    </p>
    <p>
      Solve the equations:
      <Dis tex={transform1 + vert_ps + "=" + matrix("1 \\\\ 0 \\\\ 0")} />
    </p>
    <p>
      We get <Dis tex={vert_ps + "=" + matrix("1 \\\\ -2 \\\\ 2")} />
    </p>
    <Dis tex={int_xsq + "e^x(x^2-2x+2)"} />
  </div>
)

export default Q1
