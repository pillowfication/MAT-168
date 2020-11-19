import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import { $, $$ } from '../src/MathJax'
import List from '../src/List'

const Exam2 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>Problem 0</Typography>
      <img src='exam1_code.png' />
      <hr />

      <Typography variant='h5' paragraph>Problem 1</Typography>
      {$$(`
        \\begin{array}{lrrrcl}
          \\text{Maximize} \\quad
          & \\rlap{z = 11x_1 + 5x_2} \\\\\\\\
          \\text{such that} \\quad
          & (12-9) & -2x_1 & +10x_2 & \\geq & 0 \\\\
          & & 2x_1 & +10x_2 & \\leq & 33-1 \\\\
          & 18 & +8x_1 & -6x_2 & \\geq & 0 \\\\\\\\
          & \\rlap{x_1, x_2 \\geq 0}
        \\end{array}
      `)}
      <List counter='"(" counter(list, lower-roman) ") "'>
        <li>
          <Typography paragraph>Moving constants to the right-hand side puts the LP into standard inequality form.</Typography>
          {$$(`
            \\begin{array}{lrrcl}
              \\text{Maximize} \\quad
              & \\rlap{z = 11x_1 + 5x_2} & & & & \\\\\\\\
              \\text{such that} \\quad
              & 2x_1 & -10x_2 & \\leq & 3 \\\\
              & 2x_1 & +10x_2 & \\leq & 32 \\\\
              & -8x_1 & +6x_2 & \\leq & 18 \\\\\\\\
              & \\rlap{x_1, x_2 \\geq 0}
            \\end{array}
          `)}
        </li>
        <li>
          <Typography paragraph>Add slack variables to put the LP into standard equality form.</Typography>
          {$$(`
            \\begin{array}{lrrrrrcl}
              \\text{Maximize} \\quad
              & \\rlap{z = 11x_1 + 5x_2} & & & & \\\\\\\\
              \\text{such that} \\quad
              & 2x_1 & -10x_2 & +x_3 & & & = & 3 \\\\
              & 2x_1 & +10x_2 & & +x_4 & & = & 32 \\\\
              & -8x_1 & +6x_2 & & & +x_5 & = & 18 \\\\\\\\
              & \\rlap{x_1, x_2, x_3, x_4, x_5 \\geq 0}
            \\end{array}
          `)}
          <Typography paragraph><b>Step 1</b></Typography>
          <ul>
            <li><Typography>BFS: {$('\\mathbf{x} = (0, 0, 3, 32, 18)')}.</Typography></li>
            <li><Typography>Objective value: {$('z(\\mathbf{x}) = 0')}.</Typography></li>
            <li>
              <Typography>Dictionary, for basis of basic variables {$('\\{x_3, x_4, x_5\\}')} with non-basic variables {$('\\{x_1, x_2\\}')}:</Typography>
              {$$(`
                \\begin{array}{lrcrrr}
                  \\text{Maximize} \\quad
                  & \\rlap{z = 11x_1 + 5x_2} & & & & \\\\\\\\
                  \\text{such that} \\quad
                  & x_3 & = & 3 & -2x_1 & +10x_2 \\\\
                  & x_4 & = & 32 & -2x_1 & -10x_2 \\\\
                  & x_5 & = & 18 & +8x_1 & -6x_2 \\\\\\\\
                  & \\rlap{x_1, x_2, x_3, x_4, x_5 \\geq 0}
                \\end{array}
              `)}
            </li>
            <li>
              <Typography>Ratios, for entering variable {$('x_1 = \\lambda \\geq 0')}:</Typography>
              {$$(`
                \\begin{align}
                  x_3 & = 3 - 2\\lambda & \\implies && \\lambda & \\leq 3/2 & \\leftarrow \\text{minimum ratio} \\\\
                  x_4 & = 32 - 2\\lambda & \\implies && \\lambda & \\leq 16 \\\\
                  x_5 & = 18 + 8\\lambda & \\implies && \\lambda & \\leq \\infty
                \\end{align}
              `)}
            </li>
            <li><Typography>Leaving variable: {$('x_3')}.</Typography></li>
          </ul>
          <br />
          <Typography paragraph><b>Step 2</b></Typography>
          <ul>
            <li><Typography>BFS: {$('\\mathbf{x} = (\\frac32, 0, 0, 29, 30)')}.</Typography></li>
            <li><Typography>Objective value: {$('z(\\mathbf{x}) = \\frac{33}{2}')}.</Typography></li>
            <li>
              <Typography>Dictionary, for basis of basic variables {$('\\{x_1, x_4, x_5\\}')} with non-basic variables {$('\\{x_3, x_2\\}')}:</Typography>
              {$$(`
                \\begin{array}{lrcrrr}
                  \\text{Maximize} \\quad
                  & \\rlap{z = \\frac{33}{2} - \\frac{11}{2}x_3 + 60x_2} & & & & \\\\\\\\
                  \\text{such that} \\quad
                  & x_1 & = & \\frac32 & -\\frac12x_3 & +5x_2 \\\\
                  & x_4 & = & 29 & +x_3 & -20x_2 \\\\
                  & x_5 & = & 30 & -4x_3 & +34x_2 \\\\\\\\
                  & \\rlap{x_1, x_2, x_3, x_4, x_5 \\geq 0}
                \\end{array}
              `)}
            </li>
            <li>
              <Typography>Ratios, for entering variable {$('x_2 = \\lambda \\geq 0')}:</Typography>
              {$$(`
                \\begin{align}
                  x_1 & = 3/2 + 5\\lambda & \\implies && \\lambda & \\leq \\infty \\\\
                  x_4 & = 29 - 20\\lambda & \\implies && \\lambda & \\leq 29/20 & \\leftarrow \\text{minimum ratio} \\\\
                  x_5 & = 30 + 34\\lambda & \\implies && \\lambda & \\leq \\infty
                \\end{align}
              `)}
            </li>
            <li><Typography>Leaving variable: {$('x_4')}.</Typography></li>
          </ul>
          <br />
          <Typography paragraph><b>Step 3</b></Typography>
          <ul>
            <li><Typography>BFS: {$('\\mathbf{x} = (\\frac{35}{4}, \\frac{29}{20}, 0, 0, \\frac{793}{10})')}.</Typography></li>
            <li><Typography>Objective value: {$('z(\\mathbf{x}) = \\frac{207}{2}')}.</Typography></li>
          </ul>
          <br />
          <Typography>The new objective function in terms of the non-basic variables {$('\\{x_3, x_4\\}')} is</Typography>
          {$$('z = \\frac{207}{2} - \\frac{5}{2}x_3 - 3x_4.')}
          <Typography paragraph>Since the coefficients are all negative, the solution is optimal, and we are done.</Typography>
        </li>
        <li>
          <img src='exam2_p13.png' />
        </li>
        <li>
          <Typography>In the optimal solution, the non-basic variables are {$('x_3, x_4')} (which are equal to {$('0')}), indicating that we are currently at the corner where the lines</Typography>
          {$$(`
            \\begin{array}{rrcll}
              2x_1 & -10x_2 & = & 3 & \\quad\\text{and} \\\\
              2x_1 & +10x_2 & = & 32
            \\end{array}
          `)}
          <Typography paragraph>intersect. The values of the basic variables {$('x_1, x_2, x_5')} are obtained by setting the non-basic variables to {$('0')}.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>Problem 2</Typography>
      <List counter='"(" counter(list, lower-roman) ") "'>
        <li>
          {$$(`
            \\begin{array}{lrrrrcl}
              \\text{Maximize} \\quad
              & \\rlap{z = \\frac{2}{100}x_0 + \\frac{6}{100}x_1 + \\frac{4}{100}x_2} \\\\\\\\
              \\text{such that} \\quad
              & & x_0 & & & \\leq & 35\\,353\\,535 \\\\
              & & x_0 & & & \\geq & -20\\,201\\,026 \\\\
              & & x_0 & +x_1 & +x_2 & \\leq & 35\\,353\\,535 \\\\
              & 35\\,353\\,535 & +\\frac{2}{100}x_0 & -\\frac{80}{100}x_1 & -\\frac{50}{100}x_2 & \\geq & 9\\,817\\,234 \\\\\\\\
              & \\rlap{x_0 \\in \\Bbb{R}, \\quad x_1, x_2 \\geq 0}
            \\end{array}
          `)}
        </li>
        <li>
          <Typography paragraph>Let {$('x_0 = x_3 - x_4')} with {$('x_3, x_4 \\geq 0')} to obtain the standard inequality form</Typography>
          {$$(`
            \\begin{array}{lrrrrcl}
              \\text{Maximize} \\quad
              & \\rlap{z = \\frac{2}{100}(x_3 - x_4) + \\frac{6}{100}x_1 + \\frac{4}{100}x_2} \\\\\\\\
              \\text{such that} \\quad
              & & (x_3 - x_4) & & & \\leq & 35\\,353\\,535 \\\\
              & & (x_3 - x_4) & & & \\geq & -20\\,201\\,026 \\\\
              & & (x_3 - x_4) & +x_1 & +x_2 & \\leq & 35\\,353\\,535 \\\\
              & 35\\,353\\,535 & +\\frac{2}{100}(x_3 - x_4) & -\\frac{80}{100}x_1 & -\\frac{50}{100}x_2 & \\geq & 9\\,817\\,234 \\\\\\\\
              & \\rlap{x_1, x_2, x_3, x_4 \\geq 0}
            \\end{array}
            \\\\\\phantom{0}\\\\
            \\Downarrow
            \\\\\\phantom{0}\\\\
            \\begin{array}{lrrrrcl}
              \\text{Maximize} \\quad
              & \\rlap{z = \\frac{6}{100}x_1 + \\frac{4}{100}x_2 + \\frac{2}{100}x_3 - \\frac{2}{100}x_4} \\\\\\\\
              \\text{such that} \\quad
              & & & x_3 & -x_4 & \\leq & 35\\,353\\,535 \\\\
              & & & -x_3 & +x_4 & \\leq & 20\\,201\\,026 \\\\
              & x_1 & +x_2 & +x_3 & -x_4 & \\leq & 35\\,353\\,535 \\\\
              & \\frac{80}{100}x_1 & +\\frac{50}{100}x_2 & -\\frac{2}{100}x_3 & +\\frac{2}{100}x_4 & \\leq & 25\\,536\\,301 \\\\\\\\
              & \\rlap{x_1, x_2, x_3, x_4 \\geq 0}
            \\end{array}
          `)}
        </li>
        <li>
          <Typography>The solution</Typography>
          {$$(`
            \\begin{align}
              x_0 & = 35\\,353\\,535 \\\\
              x_1 & = 0 \\\\
              x_2 & = 0
            \\end{align}
          `)}
          <Typography paragraph>satisfies all constraints.</Typography>
        </li>
        <li>
          <Typography paragraph><b>INFAMOUSLP</b><br />Suppose the solution lies between the two points {$('y = (y_0, y_1, y_2)')} and {$('z = (z_0, z_1, z_2)')}. Since {$('x_1')} lies between {$('y_1, z_1')} and {$('y_1, z_1 \\geq 0')}, we have {$('y_1 = z_1 = 0')}. Similarly, {$('y_2 = z_2 = 0')}. And since {$('x_0')} lies between {$('y_0, z_0')} and {$('y_0, z_0 \\leq 35\\,353\\,535')}, then {$('y_0 = z_0 = 35\\,353\\,535')}. Thus {$('y = z')}, and {$('x')} is an extreme point.</Typography>
          <Typography><b>STANDARDLP</b><br />A corresponding solution is</Typography>
          {$$(`
            \\begin{align}
              x_1 & = 0 \\\\
              x_2 & = 0 \\\\
              x_3 & = 35\\,353\\,535 \\\\
              x_4 & = 0
            \\end{align}
          `)}
          <Typography>Suppose the solution lies between the two points {$('y = (y_1, y_2, y_3, y_4)')} and {$('z = (z_1, z_2, z_3, z_4)')}. By a similar argument, {$('y_1 = y_2 = y_4 = z_1 = z_2 = z_4 = 0')}. Since {$('y_4 = z_4 = 0')}, the constraint</Typography>
          {$$(`
            \\begin{array}{rrcl}
              x_3 & -x_4 & \\leq & 35\\,353\\,535
            \\end{array}
          `)}
          <Typography>means that {$('y_3, z_3')} is bounded above by {$('35\\,353\\,535')}. Thus {$('y = z')} and {$('x')} is an extreme point.</Typography>
        </li>
        <li>
          <Typography>Yes. The STANDARDLP solution</Typography>
          {$$(`
            x_1 = x_2 = x_3 = x_4 = 0
          `)}
          <Typography>is an extreme point, but it corresponds to the INFAMOUSLP solution</Typography>
          {$$(`
            \\begin{align}
              x_0 & = 0 \\\\
              x_1 & = 0 \\\\
              x_2 & = 0
            \\end{align}
          `)}
          <Typography>which lies between the two feasible points</Typography>
          {$$(`
            \\begin{array}{l}
              x_0 = -1 \\\\
              x_1 = 0 \\\\
              x_2 = 0
            \\end{array}
            \\qquad\\text{and}\\qquad
            \\begin{array}{l}
              x_0 = 1 \\\\
              x_1 = 0 \\\\
              x_2 = 0
            \\end{array}
          `)}
        </li>
      </List>
    </Page>
  )
}

export default Exam2
