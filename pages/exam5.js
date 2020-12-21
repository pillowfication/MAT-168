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
      <List>
      </List>
    </Page>
  )
}

export default Exam2
