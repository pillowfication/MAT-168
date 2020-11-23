import React from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import List from '../src/List'
import { $, $$ } from '../src/MathJax'

const HW4 = () => {
  return (
    <Page>
      <Typography variant='h5' paragraph>Problem 1 (Duality)</Typography>
      {$$(`
        \\begin{alignat}{200}
          \\text{maximize} \\quad &\\,-\\,& 6x_1 &\\,-\\,& 7x_2 &\\,-\\,&                 10x_3 &\\,-\\,& 5x_4 &\\,-\\,& 5x_5                                    \\\\
          \\mbox{s.t.}     \\quad &\\, \\,& 6x_1 &\\,-\\,& 6x_2 &\\,-\\,&                  6x_3 &\\,-\\,& 3x_4 &\\,+\\,& 2x_5  & \\leq -19          && \\tag{P.I}  \\\\
                                  &\\,-\\,& 4x_1 &\\,+\\,& 3x_2 &\\,+\\,& (\\tfrac{9}{10}-9)x_3 &\\,+\\,& 4x_4 &\\,-\\,& 4x_5  & \\leq \\tfrac12-34 && \\tag{P.II} \\\\
          \\rlap{x_1, x_2, x_3, x_4, x_5 \\geq 0}
        \\end{alignat}
      `)}
      <List counter='counter(list, lower-roman) "."'>
        <li>
          <Typography>{$('\\text{MIDDLE-OF-THE-QUARTER-D}')}</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\text{minimize} \\quad &\\,-\\,& 19y_1 &\\,+\\,&     (\\tfrac12-34)y_2                            \\\\
              \\mbox{s.t.}     \\quad &\\, \\,&  6y_1 &\\,-\\,&                  4y_2 & \\geq -6  & \\tag{D.I}   \\\\
                                      &\\,-\\,&  6y_1 &\\,+\\,&                  3y_2 & \\geq -7  & \\tag{D.II}  \\\\
                                      &\\,-\\,&  6y_1 &\\,+\\,& (\\tfrac{9}{10}-9)y_2 & \\geq -10 & \\tag{D.III} \\\\
                                      &\\,-\\,&  3y_1 &\\,+\\,&                  4y_2 & \\geq -5  & \\tag{D.IV}  \\\\
                                      &\\, \\,&  2y_1 &\\,-\\,&                  4y_2 & \\geq -5  & \\tag{D.V}   \\\\
              \\rlap{y_1, y_2 \\geq 0}
            \\end{alignat}
          `)}
        </li>
        <li>
          <Typography paragraph>Graphing {$('\\text{MIDDLE-OF-THE-QUARTER-D}')} with Desmos gives a minimum value of {$('\\zeta_\\text{dual}(0, \\frac{100}{81}) = -\\frac{3350}{81}')}.</Typography>
          <Typography paragraph><img src='hw4_1b.png' /></Typography>
        </li>
        <li>
          <Typography>{$('\\text{MIDDLE-OF-THE-QUARTER-D}')} is rewritten in standard equation form with slack variables.</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\text{maximize} \\quad &\\, \\,& 19y_1 &\\,-\\,&     (\\tfrac12-34)y_2                      \\\\
              \\mbox{s.t.}     \\quad &\\,-\\,&  6y_1 &\\,+\\,&                  4y_2 &\\,+\\,& z_1 & = 6  \\\\
                                      &\\, \\,&  6y_1 &\\,-\\,&                  3y_2 &\\,+\\,& z_2 & = 7  \\\\
                                      &\\, \\,&  6y_1 &\\,-\\,& (\\tfrac{9}{10}-9)y_2 &\\,+\\,& z_3 & = 10 \\\\
                                      &\\, \\,&  3y_1 &\\,-\\,&                  4y_2 &\\,+\\,& z_4 & = 5  \\\\
                                      &\\,-\\,&  2y_1 &\\,+\\,&                  4y_2 &\\,+\\,& z_5 & = 5  \\\\
              \\rlap{y_1, y_2, z_1, z_2, z_3, z_4, z_5 \\geq 0}
            \\end{alignat}
          `)}
          <Typography>The optimal solution {$('(0, \\frac{100}{81})')} is plugged in to solve for the slack variables.</Typography>
          {$$(`
            \\begin{alignat}{200}
              &\\,-\\,&  6(0) &\\,+\\,&                  4(\\tfrac{100}{81}) &\\,+\\,& z_1 & = 6  \\\\
              &\\, \\,&  6(0) &\\,-\\,&                  3(\\tfrac{100}{81}) &\\,+\\,& z_2 & = 7  \\\\
              &\\, \\,&  6(0) &\\,-\\,& (\\tfrac{9}{10}-9)(\\tfrac{100}{81}) &\\,+\\,& z_3 & = 10 \\\\
              &\\, \\,&  3(0) &\\,-\\,&                  4(\\tfrac{100}{81}) &\\,+\\,& z_4 & = 5  \\\\
              &\\,-\\,&  2(0) &\\,+\\,&                  4(\\tfrac{100}{81}) &\\,+\\,& z_5 & = 5  \\\\
            \\end{alignat}
            \\quad \\implies \\quad
            \\begin{aligned}
              z_1 & = \\tfrac{86}{81}  \\\\
              z_2 & = \\tfrac{289}{27} \\\\
              z_3 & = 0                \\\\
              z_4 & = \\tfrac{805}{81} \\\\
              z_5 & = \\tfrac{5}{81}   \\\\
            \\end{aligned}
          `)}
          <Typography>By the {$('\\text{Complementary Slackness Theorem}')}, {$('y_2 > 0')} implies equality for {$('\\text{P.II}')}, and {$('z_1, z_2, z_4, z_5 > 0')} implies {$('x_1, x_2, x_4, x_5 = 0')}. Thus</Typography>
          {$$(`
            \\begin{align}
              -4x_1 +3x_2 +(\\tfrac{9}{10}-9)x_3 +4x_4 -4x_4 & = \\tfrac12-34 \\\\
              (\\tfrac{9}{10}-9)x_3 & = \\tfrac12-34 \\\\
              x_3 & = \\tfrac{335}{81}
            \\end{align}
          `)}
          <Typography paragraph>and the optimal solution for {$('\\text{MIDDLE-OF-THE-QUARTER-P}')} is {$('\\zeta(0, 0, \\frac{335}{81}, 0, 0) = -\\frac{3350}{81}')}.</Typography>
        </li>
      </List>
      <hr />

      <Typography variant='h5' paragraph>Problem 2 (Dual Simplex Method)</Typography>
      {$$(`
        \\begin{alignat}{200}
          \\text{maximize} \\quad &\\,-\\,&  3x_1 &\\,-\\,& 20x_2 &\\,-\\,&      9x_3 &\\,-\\,&     12x_4             \\\\
          \\mbox{s.t.}     \\quad &\\, \\,& 20x_1 &\\,+\\,& 16x_2 &\\,+\\,& (9-16)x_3 &\\,+\\,& (1-32)x_4 & \\leq -40 \\\\
                                  &\\, \\,&       &\\, \\,&   x_2 &\\,-\\,&       x_3 &\\, \\,&           & \\leq -1  \\\\
                                  &\\, \\,&  4x_1 &\\,+\\,&  8x_2 &\\,+\\,&      2x_3 &\\,-\\,&      2x_4 & \\leq 17  \\\\
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
          &\\, \\,& 20x_1 &\\,+\\,& 16x_2 &\\,-\\,& 7x_3 &\\,-\\,& 31x_4 &\\,+\\,& x_5 &\\, \\,&     &\\, \\,&     & = -40 \\\\
          &\\, \\,&       &\\, \\,&   x_2 &\\,-\\,&  x_3 &\\, \\,&       &\\, \\,&     &\\,+\\,& x_6 &\\, \\,&     & = -1  \\\\
          &\\, \\,&  4x_1 &\\,+\\,&  8x_2 &\\,+\\,& 2x_3 &\\,-\\,&  2x_4 &\\, \\,&     &\\, \\,&     &\\,+\\,& x_7 & = 17  \\\\
          \\rlap{x_1, x_2, x_3, x_4, x_5, x_6, x_7 \\geq 0}
        \\end{alignat}
      `)}
      <Typography paragraph><b>Step 1</b></Typography>
      <ul>
        <li>
          <Typography>Dictionary: (select most negative to exit)</Typography>
          {$$(`
            \\begin{array}{ll}
              \\text{Basic variables:} & \\{ x_5, x_6, x_7 \\} \\\\
              \\text{Nonbasic variables:} & \\{ x_1, x_2, x_3, x_4 \\} \\\\
              \\text{Objective:} & \\zeta(\\mathbf{x}) = 0
            \\end{array}
          `)}
          {$$(`
            \\begin{alignat}{200}
                                       \\zeta = &\\, \\,&     &\\,-\\,&  3x_1 &\\,-\\,& 20x_2 &\\,-\\,& 9x_3 &\\,-\\,& 12x_4 \\\\
              \\text{exiting} \\to \\quad x_5 = &\\, \\,& -40 &\\,-\\,& 20x_1 &\\,-\\,& 16x_2 &\\,+\\,& 7x_3 &\\,+\\,& 31x_4 \\\\
                                          x_6 = &\\, \\,&  -1 &\\, \\,&       &\\,-\\,&   x_2 &\\,+\\,&  x_3 &\\, \\,&       \\\\
                                          x_7 = &\\, \\,&  17 &\\,-\\,&  4x_1 &\\,-\\,&  8x_2 &\\,-\\,& 2x_3 &\\,+\\,&  2x_4 \\\\
            \\end{alignat}
          `)}
        </li>
        <li>
          <Typography>Ratios: (select smallest to enter)</Typography>
          {$$(`
            \\begin{alignat}{200}
                                           x_1 & \\implies & \\lambda & < \\infty \\\\
                                           x_2 & \\implies & \\lambda & < \\infty \\\\
                                           x_3 & \\implies & \\lambda & < 9/7     \\\\
              \\text{entering} \\to \\quad x_4 & \\implies & \\lambda & < 12/31   \\\\
            \\end{alignat}
          `)}
        </li>
        <li>
          <Typography>Pivot:</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\zeta = &\\, \\,& -\\tfrac{180}{31} &\\,-\\,& \\tfrac{333}{31}x_1 &\\,-\\,& \\tfrac{812}{31}x_2 &\\,-\\,& \\tfrac{195}{31}x_3 &\\,-\\,& \\tfrac{12}{31}x_5 \\\\
                 x_4 = &\\, \\,&   \\tfrac{40}{31} &\\,+\\,&  \\tfrac{20}{31}x_1 &\\,+\\,&  \\tfrac{16}{31}x_2 &\\,-\\,&   \\tfrac{7}{31}x_3 &\\,+\\,&  \\tfrac{1}{31}x_5 \\\\
                 x_6 = &\\, \\,&                -1 &\\, \\,&                     &\\,-\\,&                 x_2 &\\,+\\,&                 x_3 &\\, \\,&                    \\\\
                 x_7 = &\\, \\,&  \\tfrac{607}{31} &\\,-\\,&  \\tfrac{84}{31}x_1 &\\,-\\,& \\tfrac{216}{31}x_2 &\\,-\\,&  \\tfrac{76}{31}x_3 &\\,+\\,&  \\tfrac{2}{31}x_5 \\\\
            \\end{alignat}
          `)}
        </li>
      </ul>
      <Typography paragraph><b>Step 2</b></Typography>
      <ul>
        <li>
          <Typography>Dictionary: (select most negative to exit)</Typography>
          {$$(`
            \\begin{array}{ll}
              \\text{Basic variables:} & \\{ x_4, x_6, x_7 \\} \\\\
              \\text{Nonbasic variables:} & \\{ x_1, x_2, x_3, x_5 \\} \\\\
              \\text{Objective:} & \\zeta(\\mathbf{x}) = -\\tfrac{180}{31}
            \\end{array}
          `)}
          {$$(`
            \\begin{alignat}{200}
                                       \\zeta = &\\, \\,& -\\tfrac{180}{31} &\\,-\\,& \\tfrac{333}{31}x_1 &\\,-\\,& \\tfrac{812}{31}x_2 &\\,-\\,& \\tfrac{195}{31}x_3 &\\,-\\,& \\tfrac{12}{31}x_5 \\\\
                                          x_4 = &\\, \\,&   \\tfrac{40}{31} &\\,+\\,&  \\tfrac{20}{31}x_1 &\\,+\\,&  \\tfrac{16}{31}x_2 &\\,-\\,&   \\tfrac{7}{31}x_3 &\\,+\\,&  \\tfrac{1}{31}x_5 \\\\
              \\text{exiting} \\to \\quad x_6 = &\\, \\,&                -1 &\\, \\,&                     &\\,-\\,&                 x_2 &\\,+\\,&                 x_3 &\\, \\,&                    \\\\
                                          x_7 = &\\, \\,&  \\tfrac{607}{31} &\\,-\\,&  \\tfrac{84}{31}x_1 &\\,-\\,& \\tfrac{216}{31}x_2 &\\,-\\,&  \\tfrac{76}{31}x_3 &\\,+\\,&  \\tfrac{2}{31}x_5 \\\\
            \\end{alignat}
          `)}
        </li>
        <li>
          <Typography>Ratios: (select smallest to enter)</Typography>
          {$$(`
            \\begin{alignat}{200}
                                           x_1 & \\implies & \\lambda & < \\infty \\\\
                                           x_2 & \\implies & \\lambda & < \\infty \\\\
              \\text{entering} \\to \\quad x_3 & \\implies & \\lambda & < 195/31  \\\\
                                           x_5 & \\implies & \\lambda & < \\infty \\\\
            \\end{alignat}
          `)}
        </li>
        <li>
          <Typography>Pivot:</Typography>
          {$$(`
            \\begin{alignat}{200}
              \\zeta = &\\, \\,& -\\tfrac{375}{31} &\\,-\\,& \\tfrac{333}{31}x_1 &\\,-\\,& \\tfrac{1007}{31}x_2 &\\,-\\,& \\tfrac{195}{31}x_6 &\\,-\\,& \\tfrac{12}{31}x_5 \\\\
                 x_4 = &\\, \\,&   \\tfrac{33}{31} &\\,+\\,&  \\tfrac{20}{31}x_1 &\\,+\\,&    \\tfrac{9}{31}x_2 &\\,-\\,&   \\tfrac{7}{31}x_6 &\\,+\\,&  \\tfrac{1}{31}x_5 \\\\
                 x_3 = &\\, \\,&                 1 &\\, \\,&                     &\\,+\\,&                  x_2 &\\,+\\,&                 x_6 &\\, \\,&                    \\\\
                 x_7 = &\\, \\,&  \\tfrac{531}{31} &\\,-\\,&  \\tfrac{84}{31}x_1 &\\,-\\,&  \\tfrac{292}{31}x_2 &\\,-\\,&  \\tfrac{76}{31}x_6 &\\,+\\,&  \\tfrac{2}{31}x_5 \\\\
            \\end{alignat}
          `)}
        </li>
      </ul>
      <Typography paragraph><b>Step 3</b></Typography>
      <Typography>We have reached a feasible solution which is optimal.</Typography>
      {$$(`
        \\begin{array}{ll}
          \\text{Basic variables:} & \\{ x_4, x_3, x_7 \\} \\\\
          \\text{Nonbasic variables:} & \\{ x_1, x_2, x_6, x_5 \\} \\\\
          \\text{Objective:} & \\zeta(0, 0, 1, \\frac{33}{31}, 0, 0, \\frac{531}{31}) = -\\frac{375}{31}
        \\end{array}
      `)}
    </Page>
  )
}

export default HW4
