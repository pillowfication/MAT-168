import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import { $, $$ } from '../src/MathJax'
import List from '../src/List'

const Exam1 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>Problem 0</Typography>
      <img src='exam1_code.png' />
      <hr />

      <Typography variant='h5' paragraph>Problem 1 (Graphical Method)</Typography>
      <List counter='"(" counter(list, lower-roman) ") "'>
        <li>
          <img src='exam1_p11.png' />
          <Typography paragraph>
            The {$('5')} constraints are graphed in {$('\\text{Red}')}, {$('\\text{Green}')}, {$('\\text{Blue}')}, and {$('\\text{Black}')} with their half-plane regions indicated by a small arrow. The intersection of all these regions is the {$('\\text{Gold}')} convex polygon. The {$('\\text{Purple}')} line indicates the slope of where the objective function remains constant, and its arrow indicates the direction in which the objective function increases. Thus the maximum value occurs at {$('(0, 1)')}.
          </Typography>
          <hr />
        </li>
        <li>
          <img src='exam1_p12.png' />
          <Typography paragraph>
            The graph is the same as in {$('\\text{(i)}')} but with the new objective function. Since the {$('\\text{Purple}')} line coincides with an edge of the feasible region, all points on this edge equally maximize the objective function. Three such points are {$('(2, 0)')}, {$('(\\frac32, \\frac54)')}, {$('(1, \\frac52)')}.
          </Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>Problem 2 (LP Modeling)</Typography>
      <Typography paragraph>
        The decision variables are {$('A, B \\in \\Bbb{N}')} indicating the number of A and B sandwiches to be made. {$('A')} and {$('B')} can be any natural number (including {$('0')}) subject to the following constraints:
      </Typography>
      <Typography>Neither type of sandwhich can be more than {$('3')} times the other.</Typography>
      {$$(`
        \\begin{align}
          A & \\leq 3B, \\\\
          B & \\leq 3A,
        \\end{align}
      `)}
      <Typography>We cannot exceed the available number of carrots and bread slices.</Typography>
      {$$(`
        \\begin{align}
          0.5A + 2B & \\leq 1234, \\\\
          2A + 3B & \\leq 2200,
        \\end{align}
      `)}
      <Typography>We cannot exceed the available number of labor hours.</Typography>
      {$$(`
        0.1A + 0.25B \\leq 417 \\times 2.
      `)}
      <Typography>The objective function to maximize is</Typography>
      {$$(`
        f(A, B) =
          \\underbrace{8.5A + 13B}_{\\text{revenue}} -
          \\underbrace{\\overbrace{\\left\\lceil \\frac{0.1A + 0.25B}{2} \\right\\rceil}^{\\text{shifts required}} \\times 34.67}_{\\text{operating costs}}.
      `)}
      <Typography paragraph>Note that this function is not linear. It can be made linear by ignoring the ceiling function, in which case the new solutions may be suboptimal but close enough.</Typography>
      <hr />

      <Typography variant='h5' paragraph>Problem 3 (Theory)</Typography>
      <List counter='"(" counter(list, lower-roman) ") "'>
        <li>
          <Typography paragraph>
            Let {$('\\rho_i')} denote the {$('i')}’th row. Then since {$('\\rho_4 = 0')} and {$('\\rho_3 = 2\\rho_1 + 100\\rho_2')}, the set {$('\\{\\rho_1, \\rho_2\\}')} of cardinality {$('2')} is a candidate for a maximal linearly independent set, and thus the matrix’s rank must be at most {$('2')}.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Let {$('s = (1, 0) \\in S \\cup T')} and {$('t = (0, -1) \\in S \\cup T')}. The segment joining {$('s')} and {$('t')} can be parametrized by {$('f(x) = (1-x)s + xt')} for {$('0 \\leq x \\leq 1')}. But the point {$('f(0.5) = (0.5, -0.5)')} is in neither {$('S')} nor {$('T')}, so {$('S \\cup T')} is not a convex set.
          </Typography>
        </li>
        <li>
          <Typography>
            By introducing the slack variable {$('x_3')}, the problem becomes
          </Typography>
          {$$(`
            \\begin{array}{ll}
              \\text{Maximize} & x_1 \\\\\\\\
              \\text{such that} &
              \\begin{align}
                x_1 - x_2 + x_3 & = 7, \\\\
                x_1, x_2, x_3 & \\geq 0.
              \\end{align}
            \\end{array}
          `)}
          <Typography>
            The dictionary corresponding to the basis consisting of the variable {$('x_3')} is
          </Typography>
          {$$(`
            x_3 = 7 - x_1 + x_2.
          `)}
        </li>
      </List>
    </Page>
  )
}

export default Exam1
