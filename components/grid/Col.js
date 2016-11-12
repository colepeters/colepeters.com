import React from 'react'
import { style } from 'next/css'

import { COL_OFFSET } from './constants'
import { medium, large } from '../../styles/mediaQueries'

const colWidths = {
  oneWhole: '100%',
  oneHalf: '50%',
  oneThird: '33.333%',
  twoThirds: '66.666%',
  oneQuarter: '25%',
  threeQuarters: '75%'
}

const colCounts = Object.keys(colWidths)

export default function Col ({ width, md, lg, children, ...props }) {
  const colConfig = {
    paddingLeft: COL_OFFSET,
    paddingRight: COL_OFFSET,
    flexGrow: '0',
    flexShrink: '0',
    flexDirection: 'column',
    flexBasis: colWidths[width],
    maxWidth: colWidths[width]
  }

  if (md) {
    colConfig[medium] = {
      flexBasis: colWidths[md],
      maxwidth: colWidths[md]
    }
  }

  if (lg) {
    colConfig[large] = {
      flexBasis: colWidths[lg],
      maxwidth: colWidths[lg]
    }
  }

  return (
    <div {...style(colConfig)} {...props}>
      { children }
    </div>
  )
}

Col.propTypes = {
  children: React.PropTypes.node.isRequired,
  width: React.PropTypes.oneOf(colCounts).isRequired,
  md: React.PropTypes.oneOf(colCounts),
  lg: React.PropTypes.oneOf(colCounts)
}

