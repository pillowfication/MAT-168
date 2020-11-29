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

      <Typography variant='h5' paragraph>Problem 1 (degeneracy)</Typography>
      {$$(`
        \\begin{align}
          s_0 & = 9 \\\\
          s_1 & = 1 \\\\
          s_{01} & = 10 \\\\
          \\\\
          c_1 & = -s_1^2-2s_1s_{01}-s_{01}^2-4s_1-4s_{01}-4 && = -169 \\\\
          c_3 & = s_0s_1+s_1^2-s_1s_{01} && = 0 \\\\
          d_3 & = s_0^2+s_0s_1-s_0s_{01} && = 0 \\\\
          c_4 & = -3s_1^2-6s_1s_{01}-3s_{01}^2-12s_1-12s_{01}-12 && = -507
        \\end{align}
      `)}
      <Typography>{$('\\text{EXAM-Dict}')}</Typography>
      {$$(`
        \\begin{alignat}{200}
          \\zeta = &\\, \\,&   &\\,-\\,& 169x_1 &\\,+\\,& 0x_3 &\\,+\\,& 0w_3 &\\,-\\,& 507x_4 \\\\
             w_1 = &\\, \\,& 5 &\\,-\\,&   6x_1 &\\,+\\,& 2x_3 &\\,-\\,&  w_3 &\\,-\\,&   3x_4 \\\\
             w_2 = &\\, \\,& 2 &\\,+\\,&   4x_1 &\\,-\\,& 6x_3 &\\,+\\,& 2w_3 &\\,-\\,&   2x_4 \\\\
             x_2 = &\\, \\,& 0 &\\,+\\,&   3x_1 &\\, \\,&      &\\,-\\,&  w_3 &\\,+\\,&   2x_4 \\\\
        \\end{alignat}
      `)}
      <List counter='counter(list, lower-roman) "."'>
        <li>
          {$$(`
            \\text{P-Sol} = \\left(
            \\begin{align}
              x_1 & = 0 \\\\
              \\color{red}{x_2} & = \\color{red}{0} \\\\
              x_3 & = 0 \\\\
              x_4 & = 0 \\\\
              \\color{red}{w_1} & = \\color{red}{5} \\\\
              \\color{red}{w_2} & = \\color{red}{2} \\\\
              w_3 & = 0 \\\\
            \\end{align}
            \\right),
          `)}
          {$$(`
            \\text{D-Sol} = \\left(
            \\begin{align}
              \\color{red}{y_1} & = \\color{red}{-169} \\\\
              y_2 & = 0 \\\\
              \\color{red}{y_3} & = \\color{red}{0} \\\\
              \\color{red}{z_1} & = \\color{red}{0} \\\\
              z_2 & = 0 \\\\
              z_3 & = 0 \\\\
              \\color{red}{z_4} & = \\color{red}{-507} \\\\
            \\end{align}
            \\right)
          `)}
        </li>
        <li>
          <Typography paragraph>Yes, {$('\\text{EXAM-Dict}')} is primal degenerate because in the basic solution, the coefficient of the basic variable {$('x_2')} is {$('0')}.</Typography>
        </li>
        <li>
          <Typography paragraph>(iii)</Typography>
        </li>
        <li>
          <Typography paragraph>Yes, {$('\\text{EXAM-Dict}')} is dual degenerate because in the dual basic solution, the coefficients of the basic variables {$('y_3, z_1')} are {$('0')}.</Typography>
        </li>
        <li>
          <Typography paragraph>(v)</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>Problem 2 (lexicographic simplex method)</Typography>
      {$$(`
        \\begin{alignat}{200}
          \\text{maximize} \\quad &\\,-\\,& 4x_1 &\\,+\\,&               x_2 &\\,+\\,& 5x_3 &\\,+\\,&              3x_4           \\\\
          \\mbox{s.t.}     \\quad &\\,-\\,& 6x_1 &\\,+\\,&               x_2 &\\,-\\,& 1x_3 &\\,-\\,&              2x_4 & \\leq 0 \\\\
                                  &\\, \\,&      &\\,-\\,& \\tfrac{15}{8}x_2 &\\,-\\,& 6x_3 &\\,+\\,& \\tfrac{17}{8}x_4 & \\leq 1 \\\\
                                  &\\, \\,& 4x_1 &\\,+\\,&              2x_2 &\\,+\\,& 2x_3 &\\, \\,&                   & \\leq 0 \\\\
          \\rlap{x_1, x_2, x_3, x_4 \\geq 0}
        \\end{alignat}
      `)}
      {$$(`
        \\require{AMScd}
        \\begin{CD}
          @VV{\\text{add slack variables}}V
        \\end{CD}
      `)}
      {$$(`
        \\begin{alignat}{200}
          \\text{maximize} \\quad &\\,-\\,& 4x_1 &\\,+\\,&               x_2 &\\,+\\,& 5x_3 &\\,+\\,&              3x_4                                                 \\\\
          \\mbox{s.t.}     \\quad &\\,-\\,& 6x_1 &\\,+\\,&               x_2 &\\,-\\,&  x_3 &\\,-\\,&              2x_4 &\\,+\\,& x_5 &\\, \\,&     &\\, \\,&     & = 0 \\\\
                                  &\\, \\,&      &\\,-\\,& \\tfrac{15}{8}x_2 &\\,-\\,& 6x_3 &\\,+\\,& \\tfrac{17}{8}x_4 &\\, \\,&     &\\,+\\,& x_6 &\\, \\,&     & = 1 \\\\
                                  &\\, \\,& 4x_1 &\\,+\\,&              2x_2 &\\,+\\,& 2x_3 &\\, \\,&                   &\\, \\,&     &\\, \\,&     &\\,+\\,& x_7 & = 0 \\\\
          \\rlap{x_1, x_2, x_3, x_4, x_5, x_6, x_7 \\geq 0}
        \\end{alignat}
      `)}
      {$$(`
        \\require{AMScd}
        \\begin{CD}
          @VV{\\text{add perturbation}}V
        \\end{CD}
      `)}
      {$$(`
        \\begin{alignat}{200}
          \\text{maximize} \\quad &\\,-\\,& 4x_1 &\\,+\\,&               x_2 &\\,+\\,& 5x_3 &\\,+\\,&              3x_4                                                                  \\\\
          \\mbox{s.t.}     \\quad &\\,-\\,& 6x_1 &\\,+\\,&               x_2 &\\,-\\,&  x_3 &\\,-\\,&              2x_4 &\\,+\\,& x_5 &\\, \\,&     &\\, \\,&     & = \\varepsilon_1     \\\\
                                  &\\, \\,&      &\\,-\\,& \\tfrac{15}{8}x_2 &\\,-\\,& 6x_3 &\\,+\\,& \\tfrac{17}{8}x_4 &\\, \\,&     &\\,+\\,& x_6 &\\, \\,&     & = 1 + \\varepsilon_2 \\\\
                                  &\\, \\,& 4x_1 &\\,+\\,&              2x_2 &\\,+\\,& 2x_3 &\\, \\,&                   &\\, \\,&     &\\, \\,&     &\\,+\\,& x_7 & = \\varepsilon_3     \\\\
          \\rlap{x_1, x_2, x_3, x_4, x_5, x_6, x_7 \\geq 0}
        \\end{alignat}
      `)}
      <Typography paragraph><b>Step 1</b></Typography>
      <ul>
        <li>
          <Typography>Current objective value:</Typography>
          {$$(`
            \\overline{\\zeta}(0, 0, 0, 0, \\varepsilon, 1+\\varepsilon_2, \\varepsilon_3) = 0
          `)}
        </li>
        <li>
          <Typography>Dictionary:</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\zeta = &\\, \\,&                    &\\,-\\,& 4x_1 &\\,+\\,&               x_2 &\\,+\\,& 5x_3 &\\,+\\,&              3x_4 \\\\
                 x_5 = &\\, \\,&     \\varepsilon_1 &\\,+\\,& 6x_1 &\\,-\\,&               x_2 &\\,+\\,&  x_3 &\\,+\\,&              2x_4 \\\\
                 x_6 = &\\, \\,& (1+\\varepsilon_2) &\\, \\,&      &\\,+\\,& \\tfrac{15}{8}x_2 &\\,+\\,& 6x_3 &\\,-\\,& \\tfrac{17}{8}x_4 \\\\
                 x_7 = &\\, \\,&     \\varepsilon_3 &\\,-\\,& 4x_1 &\\,-\\,&              2x_2 &\\,-\\,& 2x_3 &\\, \\,&                   \\\\
            \\end{alignat}
          `)}
        </li>
        <li>
          <Typography paragraph>Entering variable:</Typography>
          <Typography>Select {$('x_3')} as the entering variable, with the following ratios:</Typography>
          {$$(`
            \\begin{align}
              & x_5 =     \\varepsilon_1 +  \\lambda && \\implies \\lambda \\leq \\infty                                                      \\\\
              & x_6 = (1+\\varepsilon_2) + 6\\lambda && \\implies \\lambda \\leq \\infty                                                      \\\\
              & x_7 =     \\varepsilon_3 - 2\\lambda && \\implies \\lambda \\leq \\tfrac12\\varepsilon_3 && \\leftarrow \\text{minimum ratio} \\\\
            \\end{align}
          `)}
        </li>
        <li>
          <Typography paragraph>Pivot:</Typography>
          <Typography>Pivot with {$('x_7')} as the leaving variable</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\zeta = &\\, \\,&                  \\tfrac52\\varepsilon_3 &\\,-\\,& 14x_1 &\\,-\\,&              4x_2 &\\,-\\,& \\tfrac52x_7 &\\,+\\,&              3x_4 \\\\
                 x_5 = &\\, \\,& (\\varepsilon_1+\\tfrac12\\varepsilon_3) &\\,+\\,&  4x_1 &\\,-\\,&              2x_2 &\\,-\\,& \\tfrac12x_7 &\\,+\\,&              2x_4 \\\\
                 x_6 = &\\, \\,&       (1+\\varepsilon_2+3\\varepsilon_3) &\\, \\,&       &\\,-\\,& \\tfrac{33}{8}x_2 &\\,-\\,&         3x_7 &\\,-\\,& \\tfrac{17}{8}x_4 \\\\
                 x_3 = &\\, \\,&                  \\tfrac12\\varepsilon_3 &\\,-\\,&  2x_1 &\\,-\\,&               x_2 &\\,-\\,& \\tfrac12x_7 &\\, \\,&                   \\\\
            \\end{alignat}
          `)}
        </li>
      </ul>
      <Typography paragraph><b>Step 2</b></Typography>
      <ul>
        <li>
          <Typography>Current objective value:</Typography>
          {$$(`
            \\overline{\\zeta}(0, 0, \\tfrac12\\varepsilon_3, 0, \\varepsilon_1+\\tfrac12\\varepsilon_3, 1+\\varepsilon_2+3\\varepsilon_3, 0) = \\tfrac52\\varepsilon_3
          `)}
        </li>
        <li>
          <Typography>Dictionary:</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\zeta = &\\, \\,&                  \\tfrac52\\varepsilon_3 &\\,-\\,& 14x_1 &\\,-\\,&              4x_2 &\\,-\\,& \\tfrac52x_7 &\\,+\\,&              3x_4 \\\\
                 x_5 = &\\, \\,& (\\varepsilon_1+\\tfrac12\\varepsilon_3) &\\,+\\,&  4x_1 &\\,-\\,&              2x_2 &\\,-\\,& \\tfrac12x_7 &\\,+\\,&              2x_4 \\\\
                 x_6 = &\\, \\,&       (1+\\varepsilon_2+3\\varepsilon_3) &\\, \\,&       &\\,-\\,& \\tfrac{33}{8}x_2 &\\,-\\,&         3x_7 &\\,-\\,& \\tfrac{17}{8}x_4 \\\\
                 x_3 = &\\, \\,&                  \\tfrac12\\varepsilon_3 &\\,-\\,&  2x_1 &\\,-\\,&               x_2 &\\,-\\,& \\tfrac12x_7 &\\, \\,&                   \\\\
            \\end{alignat}
          `)}
        </li>
        <li>
          <Typography paragraph>Entering variable:</Typography>
          <Typography>Select {$('x_4')} as the entering variable, with the following ratios:</Typography>
          {$$(`
            \\begin{align}
              & x_5 = (\\varepsilon_1+\\tfrac12\\varepsilon_3) +              2\\lambda && \\implies \\lambda \\leq \\infty                                                                                                        \\\\
              & x_6 =       (1+\\varepsilon_2+3\\varepsilon_3) - \\tfrac{17}{8}\\lambda && \\implies \\lambda \\leq \\tfrac{8}{17}+\\tfrac{8}{17}\\varepsilon_2+\\tfrac{24}{17}\\varepsilon_3 && \\leftarrow \\text{minimum ratio} \\\\
              & x_3 =                  \\tfrac12\\varepsilon_3 +              0\\lambda && \\implies \\lambda \\leq \\infty &&                                                                                                     \\\\
            \\end{align}
          `)}
        </li>
        <li>
          <Typography paragraph>Pivot:</Typography>
          <Typography>Pivot with {$('x_6')} as the leaving variable</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\zeta = &\\, \\,& (\\tfrac{24}{27}+\\tfrac{24}{17}\\varepsilon_2+\\tfrac{229}{34}\\varepsilon_3) &\\,-\\,& 14x_1 &\\,-\\,& \\tfrac{167}{17}x_2 &\\,-\\,& \\tfrac{229}{34}x_7 &\\,-\\,& \\tfrac{24}{17}x_6 \\\\
                 x_5 = &\\, \\,& (\\tfrac{16}{17}+\\varepsilon_1+\\tfrac{16}{17}\\varepsilon_2+\\tfrac{113}{34}\\varepsilon_3) &\\,+\\,& 4x_1 &\\,-\\,& \\tfrac{100}{17}x_2 &\\,-\\,& \\tfrac{113}{34}x_7 &\\,-\\,& \\tfrac{16}{17}x_6 \\\\
                 x_4 = &\\, \\,& (\\tfrac{8}{17}+\\tfrac{8}{17}\\varepsilon_2+\\tfrac{24}{17}\\varepsilon_3) &\\, \\,& &\\,-\\,& \\tfrac{33}{17}x_2 &\\,-\\,& \\tfrac{24}{17}x_7 &\\,-\\,& \\tfrac{8}{17}x_6 \\\\
                 x_3 = &\\, \\,& \\tfrac12\\varepsilon_3 &\\,-\\,&  2x_1 &\\,-\\,& x_2 &\\,-\\,& \\tfrac12x_7 &\\, \\,& \\\\
            \\end{alignat}
          `)}
        </li>
      </ul>
      <Typography paragraph><b>Step 2</b></Typography>
      <Typography paragraph>Done! Current feasible solution is optimal.</Typography>
      <ul>
        <li>
          <Typography>Current objective value:</Typography>
          {$$(`
            \\overline{\\zeta}
            \\left(
            \\begin{align}
              x_1 & = 0 \\\\
              x_2 & = 0 \\\\
              x_3 & = \\tfrac12\\varepsilon_3 \\\\
              x_4 & = \\tfrac{8}{17}+\\tfrac{8}{17}\\varepsilon_2+\\tfrac{24}{17}\\varepsilon_3 \\\\
              x_5 & = \\tfrac{16}{17}+\\varepsilon_1+\\tfrac{16}{17}\\varepsilon_2+\\tfrac{113}{34}\\varepsilon_3 \\\\
              x_6 & = 0 \\\\
              x_7 & = 0 \\\\
            \\end{align}
            \\right)
            = \\tfrac{24}{27}+\\tfrac{24}{17}\\varepsilon_2+\\tfrac{229}{34}\\varepsilon_3
          `)}
          <Typography>With the perturbation removed, this becomes</Typography>
          {$$(`
            \\overline{\\zeta}(0, 0, 0, \\tfrac{8}{17}, \\tfrac{16}{17}, 0, 0) = \\tfrac{24}{27}
          `)}
        </li>
      </ul>
    </Page>
  )
}

export default Exam2
