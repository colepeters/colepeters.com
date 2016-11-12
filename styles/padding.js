/* PADDING
   Set the padding property.

   Structure:
   p<dir><scale><mq>

   Where:
   <dir>    =   (optional) direction in which to apply padding (default is all)
                t (top),
                b (bottom),
                l (left) or
                r (right)

   <scale>  =   amount of spacing to apply
                a number from 0 - 6, based on the `spacingScale`

   <mq>     =   (optional) media query shorthand at which the padding will kick in
                Sm, Md, or Lg

   Example:

   <div className={ merge(pt2 pb2, pt4Md pb4Md) }>

   Element will have padding-top and -bottom of 2 by default
   at the Medium breakpoint and wider, padding-top and -bottom will be set to 4
*/

import { style } from 'next/css'
import { spacingScale } from './scales'
import { small, medium, large } from './mediaQueries'

export const p0 = style({ padding: spacingScale[0] })
export const pt0 = style({ paddingTop: spacingScale[0] })
export const pb0 = style({ paddingBottom: spacingScale[0] })
export const pr0 = style({ paddingRight: spacingScale[0] })
export const pl0 = style({ paddingLeft: spacingScale[0] })

export const p1 = style({ padding: spacingScale[1] })
export const pt1 = style({ paddingTop: spacingScale[1] })
export const pb1 = style({ paddingBottom: spacingScale[1] })
export const pr1 = style({ paddingRight: spacingScale[1] })
export const pl1 = style({ paddingLeft: spacingScale[1] })

export const p2 = style({ padding: spacingScale[2] })
export const pt2 = style({ paddingTop: spacingScale[2] })
export const pb2 = style({ paddingBottom: spacingScale[2] })
export const pr2 = style({ paddingRight: spacingScale[2] })
export const pl2 = style({ paddingLeft: spacingScale[2] })

export const p3 = style({ padding: spacingScale[3] })
export const pt3 = style({ paddingTop: spacingScale[3] })
export const pb3 = style({ paddingBottom: spacingScale[3] })
export const pr3 = style({ paddingRight: spacingScale[3] })
export const pl3 = style({ paddingLeft: spacingScale[3] })

export const p4 = style({ padding: spacingScale[4] })
export const pt4 = style({ paddingTop: spacingScale[4] })
export const pb4 = style({ paddingBottom: spacingScale[4] })
export const pr4 = style({ paddingRight: spacingScale[4] })
export const pl4 = style({ paddingLeft: spacingScale[4] })

export const p5 = style({ padding: spacingScale[5] })
export const pt5 = style({ paddingTop: spacingScale[5] })
export const pb5 = style({ paddingBottom: spacingScale[5] })
export const pr5 = style({ paddingRight: spacingScale[5] })
export const pl5 = style({ paddingLeft: spacingScale[5] })

export const p6 = style({ padding: spacingScale[6] })
export const pt6 = style({ paddingTop: spacingScale[6] })
export const pb6 = style({ paddingBottom: spacingScale[6] })
export const pr6 = style({ paddingRight: spacingScale[6] })
export const pl6 = style({ paddingLeft: spacingScale[6] })

export const p0Sm = style({ [small]: { padding: spacingScale[0] } })
export const pt0Sm = style({ [small]: { paddingTop: spacingScale[0] } })
export const pb0Sm = style({ [small]: { paddingBottom: spacingScale[0] } })
export const pr0Sm = style({ [small]: { paddingRight: spacingScale[0] } })
export const pl0Sm = style({ [small]: { paddingLeft: spacingScale[0] } })

export const p1Sm = style({ [small]: { padding: spacingScale[1] } })
export const pt1Sm = style({ [small]: { paddingTop: spacingScale[1] } })
export const pb1Sm = style({ [small]: { paddingBottom: spacingScale[1] } })
export const pr1Sm = style({ [small]: { paddingRight: spacingScale[1] } })
export const pl1Sm = style({ [small]: { paddingLeft: spacingScale[1] } })

export const p2Sm = style({ [small]: { padding: spacingScale[2] } })
export const pt2Sm = style({ [small]: { paddingTop: spacingScale[2] } })
export const pb2Sm = style({ [small]: { paddingBottom: spacingScale[2] } })
export const pr2Sm = style({ [small]: { paddingRight: spacingScale[2] } })
export const pl2Sm = style({ [small]: { paddingLeft: spacingScale[2] } })

export const p3Sm = style({ [small]: { padding: spacingScale[3] } })
export const pt3Sm = style({ [small]: { paddingTop: spacingScale[3] } })
export const pb3Sm = style({ [small]: { paddingBottom: spacingScale[3] } })
export const pr3Sm = style({ [small]: { paddingRight: spacingScale[3] } })
export const pl3Sm = style({ [small]: { paddingLeft: spacingScale[3] } })

export const p4Sm = style({ [small]: { padding: spacingScale[4] } })
export const pt4Sm = style({ [small]: { paddingTop: spacingScale[4] } })
export const pb4Sm = style({ [small]: { paddingBottom: spacingScale[4] } })
export const pr4Sm = style({ [small]: { paddingRight: spacingScale[4] } })
export const pl4Sm = style({ [small]: { paddingLeft: spacingScale[4] } })

export const p5Sm = style({ [small]: { padding: spacingScale[5] } })
export const pt5Sm = style({ [small]: { paddingTop: spacingScale[5] } })
export const pb5Sm = style({ [small]: { paddingBottom: spacingScale[5] } })
export const pr5Sm = style({ [small]: { paddingRight: spacingScale[5] } })
export const pl5Sm = style({ [small]: { paddingLeft: spacingScale[5] } })

export const p6Sm = style({ [small]: { padding: spacingScale[6] } })
export const pt6Sm = style({ [small]: { paddingTop: spacingScale[6] } })
export const pb6Sm = style({ [small]: { paddingBottom: spacingScale[6] } })
export const pr6Sm = style({ [small]: { paddingRight: spacingScale[6] } })
export const pl6Sm = style({ [small]: { paddingLeft: spacingScale[6] } })

export const p0Md = style({ [medium]: { padding: spacingScale[0] } })
export const pt0Md = style({ [medium]: { paddingTop: spacingScale[0] } })
export const pb0Md = style({ [medium]: { paddingBottom: spacingScale[0] } })
export const pr0Md = style({ [medium]: { paddingRight: spacingScale[0] } })
export const pl0Md = style({ [medium]: { paddingLeft: spacingScale[0] } })

export const p1Md = style({ [medium]: { padding: spacingScale[1] } })
export const pt1Md = style({ [medium]: { paddingTop: spacingScale[1] } })
export const pb1Md = style({ [medium]: { paddingBottom: spacingScale[1] } })
export const pr1Md = style({ [medium]: { paddingRight: spacingScale[1] } })
export const pl1Md = style({ [medium]: { paddingLeft: spacingScale[1] } })

export const p2Md = style({ [medium]: { padding: spacingScale[2] } })
export const pt2Md = style({ [medium]: { paddingTop: spacingScale[2] } })
export const pb2Md = style({ [medium]: { paddingBottom: spacingScale[2] } })
export const pr2Md = style({ [medium]: { paddingRight: spacingScale[2] } })
export const pl2Md = style({ [medium]: { paddingLeft: spacingScale[2] } })

export const p3Md = style({ [medium]: { padding: spacingScale[3] } })
export const pt3Md = style({ [medium]: { paddingTop: spacingScale[3] } })
export const pb3Md = style({ [medium]: { paddingBottom: spacingScale[3] } })
export const pr3Md = style({ [medium]: { paddingRight: spacingScale[3] } })
export const pl3Md = style({ [medium]: { paddingLeft: spacingScale[3] } })

export const p4Md = style({ [medium]: { padding: spacingScale[4] } })
export const pt4Md = style({ [medium]: { paddingTop: spacingScale[4] } })
export const pb4Md = style({ [medium]: { paddingBottom: spacingScale[4] } })
export const pr4Md = style({ [medium]: { paddingRight: spacingScale[4] } })
export const pl4Md = style({ [medium]: { paddingLeft: spacingScale[4] } })

export const p5Md = style({ [medium]: { padding: spacingScale[5] } })
export const pt5Md = style({ [medium]: { paddingTop: spacingScale[5] } })
export const pb5Md = style({ [medium]: { paddingBottom: spacingScale[5] } })
export const pr5Md = style({ [medium]: { paddingRight: spacingScale[5] } })
export const pl5Md = style({ [medium]: { paddingLeft: spacingScale[5] } })

export const p6Md = style({ [medium]: { padding: spacingScale[6] } })
export const pt6Md = style({ [medium]: { paddingTop: spacingScale[6] } })
export const pb6Md = style({ [medium]: { paddingBottom: spacingScale[6] } })
export const pr6Md = style({ [medium]: { paddingRight: spacingScale[6] } })
export const pl6Md = style({ [medium]: { paddingLeft: spacingScale[6] } })

export const p0Lg = style({ [large]: { padding: spacingScale[0] } })
export const pt0Lg = style({ [large]: { paddingTop: spacingScale[0] } })
export const pb0Lg = style({ [large]: { paddingBottom: spacingScale[0] } })
export const pr0Lg = style({ [large]: { paddingRight: spacingScale[0] } })
export const pl0Lg = style({ [large]: { paddingLeft: spacingScale[0] } })

export const p1Lg = style({ [large]: { padding: spacingScale[1] } })
export const pt1Lg = style({ [large]: { paddingTop: spacingScale[1] } })
export const pb1Lg = style({ [large]: { paddingBottom: spacingScale[1] } })
export const pr1Lg = style({ [large]: { paddingRight: spacingScale[1] } })
export const pl1Lg = style({ [large]: { paddingLeft: spacingScale[1] } })

export const p2Lg = style({ [large]: { padding: spacingScale[2] } })
export const pt2Lg = style({ [large]: { paddingTop: spacingScale[2] } })
export const pb2Lg = style({ [large]: { paddingBottom: spacingScale[2] } })
export const pr2Lg = style({ [large]: { paddingRight: spacingScale[2] } })
export const pl2Lg = style({ [large]: { paddingLeft: spacingScale[2] } })

export const p3Lg = style({ [large]: { padding: spacingScale[3] } })
export const pt3Lg = style({ [large]: { paddingTop: spacingScale[3] } })
export const pb3Lg = style({ [large]: { paddingBottom: spacingScale[3] } })
export const pr3Lg = style({ [large]: { paddingRight: spacingScale[3] } })
export const pl3Lg = style({ [large]: { paddingLeft: spacingScale[3] } })

export const p4Lg = style({ [large]: { padding: spacingScale[4] } })
export const pt4Lg = style({ [large]: { paddingTop: spacingScale[4] } })
export const pb4Lg = style({ [large]: { paddingBottom: spacingScale[4] } })
export const pr4Lg = style({ [large]: { paddingRight: spacingScale[4] } })
export const pl4Lg = style({ [large]: { paddingLeft: spacingScale[4] } })

export const p5Lg = style({ [large]: { padding: spacingScale[5] } })
export const pt5Lg = style({ [large]: { paddingTop: spacingScale[5] } })
export const pb5Lg = style({ [large]: { paddingBottom: spacingScale[5] } })
export const pr5Lg = style({ [large]: { paddingRight: spacingScale[5] } })
export const pl5Lg = style({ [large]: { paddingLeft: spacingScale[5] } })

export const p6Lg = style({ [large]: { padding: spacingScale[6] } })
export const pt6Lg = style({ [large]: { paddingTop: spacingScale[6] } })
export const pb6Lg = style({ [large]: { paddingBottom: spacingScale[6] } })
export const pr6Lg = style({ [large]: { paddingRight: spacingScale[6] } })
export const pl6Lg = style({ [large]: { paddingLeft: spacingScale[6] } })
