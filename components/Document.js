import React from 'react'
import Head from 'next/head'
import { insertRule } from 'next/css'

import globalStyles from '../styles/globalStyles'

export default function Document (props) {
  return (
    <div>
      <Head>
        <title>{ props.title }</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='utf-8' />
        { insertRule(`${globalStyles}`) }
      </Head>
      { props.children }
    </div>
  )
}

Document.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
}
