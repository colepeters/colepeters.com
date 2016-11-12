import React from 'react'
import { style, merge } from 'next/css'

import { flex } from '../../styles/display'
import { ROW_OFFSET } from './constants'

export default function Row ({ justify, align, children, ...props }) {
  const rowClasses = style({
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: ROW_OFFSET,
    marginRight: ROW_OFFSET,
    justifyContent: justify,
    alignItems: align
  })

  return (
    <div {...merge(flex, rowClasses)} {...props}>
      { children }
    </div>
  )
}

Row.propTypes = {
  justify: React.PropTypes.oneOf([ 'center', 'space-between', 'space-around', 'flex-start' ]),
  align: React.PropTypes.oneOf([ 'flex-start', 'center', 'flex-end' ]),
  children: React.PropTypes.node.isRequired
}

Row.defaultProps = {
  justify: 'flex-start',
  align: 'flex-start'
}
