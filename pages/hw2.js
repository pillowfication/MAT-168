import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import List from '../src/List'
import { $, $$ } from '../src/MathJax'

const HW2 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>Problem 1</Typography>
      {$$(`
        \\begin{array}{llrrrl}
          \\text{Maximize}\\quad
          & \\rlap{4x_1 +6x_2 -5x_3} \\\\\\\\
          \\text{such that}\\quad
          && 5x_1 & -3x_2 & -2x_3 & \\leq 10 \\\\
          && 2x_1 & +3x_2 & -3x_3 & \\leq 10 \\\\
          && 2x_1 & +x_2 & +2x_3 & \\leq 7
        \\end{array}
      `)}
      <Typography>Add slack variables {$('w_1, w_2, w_3')} and put into standard equation form. (All variables shown have a nonnegativity restriction).</Typography>
      {$$(`
        \\begin{array}{llrrrrrrl}
          \\text{Maximize}\\quad
          & \\rlap{4x_1 +6x_2 -5x_3} \\\\\\\\
          \\text{such that}\\quad
          && 5x_1 & -3x_2 & -2x_3 & +w_1 &&& = 10 \\\\
          && 2x_1 & +3x_2 & -3x_3 && +w_2 && = 10 \\\\
          && 2x_1 & +x_2 & +2x_3 &&& +w_3 & = 7
        \\end{array}
      `)}
      <Typography>Note that the slack variables are primal feasible. Create the dictionary for the basis of non-basic variables {$('\\{ w_1, w_2, w_3 \\}')}.</Typography>
      {$$(`
        \\begin{array}{llrcrrrl}
          \\text{Maximize}\\quad
          & \\rlap{4x_1 +6x_2 -5x_3} \\\\\\\\
          \\text{such that}\\quad
          && w_1 & = & 10 & -5x_1 & +3x_2 & +2x_3 \\\\
          && w_2 & = & 10 & -2x_1 & -3x_2 & +3x_3 \\\\
          && w_3 & = & 7 & -2x_1 & -x_2 & -2x_3
        \\end{array}
      `)}
      <Typography>Select {$('x_1')} as the entering variable. It has the following ratios:</Typography>
      {$$(`
        \\begin{align}
          & w_1 = 10 - 5\\lambda && \\implies \\lambda \\leq 2 && \\leftarrow \\text{minimum ratio} \\\\
          & w_2 = 10 - 2\\lambda && \\implies \\lambda \\leq 5 \\\\
          & w_3 = 7 - 2\\lambda && \\implies \\lambda \\leq \\frac72
        \\end{align}
      `)}
      <Typography>With {$('w_1')} leaving and {$('x_1')} entering, rewrite the dictionary for the new basis of non-basic variables {$('\\{ x_1, w_2, w_3 \\}')}.</Typography>
      {$$(`
        \\begin{array}{llrclrrrl}
          \\text{Maximize}\\quad
          & \\rlap{4\\left(2+\\frac35x_2+\\frac25x_3-\\frac15w_1\\right) +6x_2 -5x_3} \\\\\\\\
          \\text{such that}\\quad
          && x_1 & = & \\rlap{2 +\\frac35x_2 +\\frac25x_3 -\\frac15w_1} \\\\
          && w_2 & = && 10 & -2\\left(2+\\frac35x_2+\\frac25x_3-\\frac15w_1\\right) & -3x_2 & +3x_3 \\\\
          && w_3 & = && 7 & -2\\left(2+\\frac35x_2+\\frac25x_3-\\frac15w_1\\right) & -x_2 & -2x_3
        \\end{array}
        \\\\\\phantom{0}\\\\
        \\Downarrow
        \\\\\\phantom{0}\\\\
        \\begin{array}{llrcrrrl}
          \\text{Maximize}\\quad
          & \\rlap{8+\\frac{42}{5}x_2-\\frac{17}{5}x_3-\\frac45w_1} \\\\\\\\
          \\text{such that}\\quad
          && x_1 & = & 2 & +\\frac35x_2 & +\\frac25x_3 & -\\frac15w_1 \\\\
          && w_2 & = & 6 & -\\frac{21}{5}x_2 & +\\frac{11}{5}x_3 & +\\frac25w_1 \\\\
          && w_3 & = & 3 & -\\frac{11}{5}x_2 & -\\frac{14}{5}x_3 & +\\frac25w_1
        \\end{array}
      `)}
      <Typography>Select {$('x_2')} as the entering variable with ratios:</Typography>
      {$$(`
        \\begin{align}
          & x_1 = 2 + \\frac35\\lambda && \\implies \\lambda \\leq \\infty \\\\
          & w_2 = 6 - \\frac{21}{5}\\lambda && \\implies \\lambda \\leq \\frac{10}{7} \\\\
          & w_3 = 3 - \\frac{11}{5}\\lambda && \\implies \\lambda \\leq \\frac{15}{11} && \\leftarrow \\text{minimum ratio}
        \\end{align}
      `)}
      <Typography>With {$('w_3')} leaving and {$('x_2')} entering, rewrite the dictionary for the new basis of non-basic variables {$('\\{ x_1, w_2, x_2 \\}')}.</Typography>
      {$$(`
        \\begin{array}{llrcrrrl}
          \\text{Maximize}\\quad
          & \\rlap{8+\\frac{42}{5}\\left(\\frac{15}{11} -\\frac{14}{11}x_3 +\\frac{2}{11}w_1 -\\frac{5}{11}w_3\\right)-\\frac{17}{5}x_3-\\frac45w_1} \\\\\\\\
          \\text{such that}\\quad
          && x_1 & = & 2 & +\\frac35\\left(\\frac{15}{11} -\\frac{14}{11}x_3 +\\frac{2}{11}w_1 -\\frac{5}{11}w_3\\right) & +\\frac25x_3 & -\\frac15w_1 \\\\
          && w_2 & = & 6 & -\\frac{21}{5}\\left(\\frac{15}{11} -\\frac{14}{11}x_3 +\\frac{2}{11}w_1 -\\frac{5}{11}w_3\\right) & +\\frac{11}{5}x_3 & +\\frac25w_1 \\\\
          && x_2 & = & \\rlap{\\frac{15}{11} -\\frac{14}{11}x_3 +\\frac{2}{11}w_1 -\\frac{5}{11}w_3}
        \\end{array}
        \\\\\\phantom{0}\\\\
        \\Downarrow
        \\\\\\phantom{0}\\\\
        \\begin{array}{llrcrrrl}
          \\text{Maximize}\\quad
          & \\rlap{\\frac{214}{11} -\\frac{155}{11}x_3 +\\frac{8}{11}w_1 -\\frac{42}{11}w_3} \\\\\\\\
          \\text{such that}\\quad
          && x_1 & = & \\frac{31}{11} & -\\frac{3}{11}w_3 & -\\frac{4}{11}x_3 & -\\frac{1}{11}w_1 \\\\
          && w_2 & = & \\frac{3}{11} & +\\frac{21}{11}w_3 & +\\frac{83}{11}x_3 & -\\frac{4}{11}w_1 \\\\
          && x_2 & = & \\frac{15}{11} & -\\frac{5}{11}w_3 & -\\frac{14}{11}x_3 & +\\frac{2}{11}w_1
        \\end{array}
      `)}
      <Typography>Select {$('w_1')} as the entering variable with ratios:</Typography>
      {$$(`
        \\begin{align}
          & x_1 = \\frac{31}{11} - \\frac{1}{11}\\lambda && \\implies \\lambda \\leq 31 \\\\
          & w_2 = \\frac{3}{11} - \\frac{4}{11}\\lambda && \\implies \\lambda \\leq \\frac34 && \\leftarrow \\text{minimum ratio} \\\\
          & x_2 = \\frac{15}{11} + \\frac{2}{11}\\lambda && \\implies \\lambda \\leq \\infty
        \\end{align}
      `)}
      <Typography>With {$('w_2')} leaving and {$('w_1')} entering, rewrite the dictionary for the new basis of non-basic variables {$('\\{ x_1, w_1, x_2 \\}')}.</Typography>
      <hr />

      <Typography variant='h5' paragraph>Problem 2</Typography>
      <List>
        <li>
          <img src='hw2_2a.png' />
          <hr />
        </li>
        <li>
          <img src='hw2_2b.png' />
        </li>
      </List>
    </Page>
  )
}

export default HW2
