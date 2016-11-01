import React from 'react'
import Head from 'next/head'
import { style, merge} from 'next/css'

import { sansSerif } from '../styles/font'

const fw300 = style({ fontWeight: '300' })
const ttu = style({ textTransform: 'uppercase' })
const tracked = style({ letterSpacing: '0.05em' })

export default () => (
  <div>
    <Head>
      <title>Cole Peters</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
    </Head>
    <h1 className={ merge(sansSerif, fw300, ttu, tracked) }>Hello world!</h1>
  </div>
)
