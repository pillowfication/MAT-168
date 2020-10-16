import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import { $, $$ } from '../src/MathJax'

const HW1 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>Problem 1</Typography>
      <Typography paragraphy>
        There are four decision variables, {$('\\mathbf{x} = (x_1, x_2, x_3, x_4)')}, where {$('x_i')} represents the amount invested into the {$('i')}’th bond. I assume that investments must be made in whole dollar amounts, so {$('\\mathbf{x} \\in \\Bbb{Z}^4')}. Let {$('E, W, D \\in \\Bbb{R}^4')} represent the expected returns, worst-case returns, and durations of the four bonds. Then the objective function we want to maximize is
      </Typography>
      {$$('f(\\mathbf{x}) = \\sum_{i=1}^4 x_iE_i = x_1E_1 + x_2E_2 + x_3E_3 + x_4E_4')}
      <Typography paragraph>
        subject to the following constraints:
      </Typography>
      <Typography variant='h6'>Constraint 0 (realistic)</Typography>
      {$$(`
        \\begin{align}
          x_1, x_2, x_3, x_4 & \\geq 0, \\\\
          x_1 + x_2 + x_3 + x_4 & \\leq 1\\,000\\,000.
        \\end{align}
      `)}
      <Typography variant='h6'>Constraint 1 (worst-case)</Typography>
      {$$(`
        \\sum_{i=1}^4 x_iW_i \\geq 8\\% \\times 1\\,000\\,000.
      `)}
      <Typography variant='h6'>Constraint 2 (duration)</Typography>
      {$$(`
        \\frac{1}{1\\,000\\,000} \\sum_{i=1}^4 x_iD_i \\leq 6.
      `)}
      <Typography variant='h6'>Constraint 3 (diversification)</Typography>
      {$$(`
        x_1, x_2, x_3, x_4 \\leq 40\\% \\times 1\\,000\\,000.
      `)}
      <Typography paragraph>
        The objective function and all constraints are linear in {$('x_1, x_2, x_3, x_4')}.
      </Typography>
      <hr />

      <Typography variant='h5' paragraph>Problem 2</Typography>
      <Typography paragraph>
        Let {$('x_i^j')} where {$('i \\in I = \\{A, B, C\\}')} and {$('j \\in J = \\{1, 2, 3, 4\\}')}, represent the number of hours the manager assigns designer {$('i')} to work on project {$('j')}. This models the manager’s decision as the matrix
      </Typography>
      {$$(`
        \\mathbf{x} = (x_i^j) = \\begin{pmatrix}
          x_A^1 & x_A^2 & x_A^3 & x_A^4 \\\\
          x_B^1 & x_B^2 & x_B^3 & x_B^4 \\\\
          x_C^1 & x_C^2 & x_C^3 & x_C^4
        \\end{pmatrix},
        \\quad
        \\text{where $x_i^j \\in \\Bbb{R}.$}
      `)}
      <Typography paragraph>
        (Note that the manager may choose fractional hours). Let {$('s_i^j')} be similarly defined as the manager’s scoring of designer {$('i')}’s capability to work on project {$('j')}, and let {$('r^j')} where {$('j \\in J')} be the number of required hours for project {$('j')}. Then the objective function we wish to maximize is
      </Typography>
      {$$(`
        f(\\mathbf{x}) = \\sum_{\\substack{i \\in I, \\\\ j \\in J}} x_i^js_i^j
      `)}
      <Typography paragraph>
        subject to the following constraints:
      </Typography>
      {$$(`
        \\begin{align}
          0 \\leq \\sum_{j \\in J} x_i^j & \\leq 80, && \\text{a designer can only work for 0 to 80 hours total}; \\\\
          \\sum_{i \\in I} x_i^j & \\geq r^j, && \\text{each project must meet the minimum required hours}.
        \\end{align}
      `)}
    </Page>
  )
}

export default HW1
