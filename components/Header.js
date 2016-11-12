import React from 'react'
import { merge } from 'next/css'

import { mt1, mb1, mt5, mb5, mt6Md, mb6Md } from '../styles/margin'

export default () => (
  <div {...merge(mt5, mb5, mt6Md, mb6Md)}>
    <h1 {...mb1}>Cole Peters</h1>
    <h2 {...mt1}>Light, letter and sound</h2>
  </div>
)
