import React from 'react'
import { merge } from 'next/css'

import { mt1, mb1, mt5, mb5, mt6Sm, mb6Sm } from '../styles/margin'

export default () => (
  <div {...merge(mt5, mb5, mt6Sm, mb6Sm)}>
    <h1 {...mb1}>Cole Peters</h1>
    <h2 {...mt1}> &mdash; light, letter and sound</h2>
  </div>
)
