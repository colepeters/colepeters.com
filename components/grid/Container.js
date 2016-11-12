import React from 'react'
import { style, merge } from 'next/css'

import { large } from '../../styles/mediaQueries'
import { mha } from '../../styles/margin'
import { pl2, pr2, pl3Md, pr3Md, pl4Lg, pr4Lg } from '../../styles/padding'
import { MAX_CONTAINER_WIDTH } from './constants'

export default function Container ({ children, ...props }) {
  const containerMaxWidth = style({
    [large]: {
      maxWidth: MAX_CONTAINER_WIDTH
    }
  })

  return (
    <div {...merge(mha, pl2, pr2, pl3Md, pr3Md, pl4Lg, pr4Lg, containerMaxWidth)} {...props}>
      { children }
    </div>
  )
}

Container.propTypes = {
  children: React.PropTypes.node.isRequired
}
