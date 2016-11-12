/* MARGIN
   Set the margin property.

   Structure:
   m<dir><scale><mq>

   Where:
   <dir>    =   (optional) direction in which to apply margin (default is all)
                t (top),
                b (bottom),
                l (left) or
                r (right)
                OR, for setting 'auto' margins:
                h (horizontal, sets left + right), or
                v (vertical, sets top + bottom)

   <scale>  =   amount of spacing to apply
                a number from 0 - 6, based on the `spacingScale`
                OR, for setting 'auto' margins:
                a (auto)

   <mq>     =   (optional) media query shorthand at which the margin will kick in
                Sm, Md, or Lg

   Example:

   <div className={ merge(ml2, mr2, mhaMd) }>

   Element will have margin-left and -right of 2 by default
   left and right margins will be set to 'auto' at the Medium breakpoint and wider
*/

import { style } from 'next/css'
import { spacingScale } from './scales'
import { small, medium, large } from './mediaQueries'

export const ma = style({ margin: 'auto' })
export const mva = style({ marginTop: 'auto', marginBottom: 'auto' })
export const mha = style({ marginLeft: 'auto', marginRight: 'auto' })

export const m0 = style({ margin: spacingScale[0] })
export const mt0 = style({ marginTop: spacingScale[0] })
export const mb0 = style({ marginBottom: spacingScale[0] })
export const mr0 = style({ marginRight: spacingScale[0] })
export const ml0 = style({ marginLeft: spacingScale[0] })

export const m1 = style({ margin: spacingScale[1] })
export const mt1 = style({ marginTop: spacingScale[1] })
export const mb1 = style({ marginBottom: spacingScale[1] })
export const mr1 = style({ marginRight: spacingScale[1] })
export const ml1 = style({ marginLeft: spacingScale[1] })

export const m2 = style({ margin: spacingScale[2] })
export const mt2 = style({ marginTop: spacingScale[2] })
export const mb2 = style({ marginBottom: spacingScale[2] })
export const mr2 = style({ marginRight: spacingScale[2] })
export const ml2 = style({ marginLeft: spacingScale[2] })

export const m3 = style({ margin: spacingScale[3] })
export const mt3 = style({ marginTop: spacingScale[3] })
export const mb3 = style({ marginBottom: spacingScale[3] })
export const mr3 = style({ marginRight: spacingScale[3] })
export const ml3 = style({ marginLeft: spacingScale[3] })

export const m4 = style({ margin: spacingScale[4] })
export const mt4 = style({ marginTop: spacingScale[4] })
export const mb4 = style({ marginBottom: spacingScale[4] })
export const mr4 = style({ marginRight: spacingScale[4] })
export const ml4 = style({ marginLeft: spacingScale[4] })

export const m5 = style({ margin: spacingScale[5] })
export const mt5 = style({ marginTop: spacingScale[5] })
export const mb5 = style({ marginBottom: spacingScale[5] })
export const mr5 = style({ marginRight: spacingScale[5] })
export const ml5 = style({ marginLeft: spacingScale[5] })

export const m6 = style({ margin: spacingScale[6] })
export const mt6 = style({ marginTop: spacingScale[6] })
export const mb6 = style({ marginBottom: spacingScale[6] })
export const mr6 = style({ marginRight: spacingScale[6] })
export const ml6 = style({ marginLeft: spacingScale[6] })

export const maSm = style({ [small]: { margin: 'auto' } })
export const mvaSm = style({ [small]: { marginTop: 'auto', marginBottom: 'auto' } })
export const mhaSm = style({ [small]: { marginLeft: 'auto', marginRight: 'auto' } })

export const m0Sm = style({ [small]: { margin: spacingScale[0] } })
export const mt0Sm = style({ [small]: { marginTop: spacingScale[0] } })
export const mb0Sm = style({ [small]: { marginBottom: spacingScale[0] } })
export const mr0Sm = style({ [small]: { marginRight: spacingScale[0] } })
export const ml0Sm = style({ [small]: { marginLeft: spacingScale[0] } })

export const m1Sm = style({ [small]: { margin: spacingScale[1] } })
export const mt1Sm = style({ [small]: { marginTop: spacingScale[1] } })
export const mb1Sm = style({ [small]: { marginBottom: spacingScale[1] } })
export const mr1Sm = style({ [small]: { marginRight: spacingScale[1] } })
export const ml1Sm = style({ [small]: { marginLeft: spacingScale[1] } })

export const m2Sm = style({ [small]: { margin: spacingScale[2] } })
export const mt2Sm = style({ [small]: { marginTop: spacingScale[2] } })
export const mb2Sm = style({ [small]: { marginBottom: spacingScale[2] } })
export const mr2Sm = style({ [small]: { marginRight: spacingScale[2] } })
export const ml2Sm = style({ [small]: { marginLeft: spacingScale[2] } })

export const m3Sm = style({ [small]: { margin: spacingScale[3] } })
export const mt3Sm = style({ [small]: { marginTop: spacingScale[3] } })
export const mb3Sm = style({ [small]: { marginBottom: spacingScale[3] } })
export const mr3Sm = style({ [small]: { marginRight: spacingScale[3] } })
export const ml3Sm = style({ [small]: { marginLeft: spacingScale[3] } })

export const m4Sm = style({ [small]: { margin: spacingScale[4] } })
export const mt4Sm = style({ [small]: { marginTop: spacingScale[4] } })
export const mb4Sm = style({ [small]: { marginBottom: spacingScale[4] } })
export const mr4Sm = style({ [small]: { marginRight: spacingScale[4] } })
export const ml4Sm = style({ [small]: { marginLeft: spacingScale[4] } })

export const m5Sm = style({ [small]: { margin: spacingScale[5] } })
export const mt5Sm = style({ [small]: { marginTop: spacingScale[5] } })
export const mb5Sm = style({ [small]: { marginBottom: spacingScale[5] } })
export const mr5Sm = style({ [small]: { marginRight: spacingScale[5] } })
export const ml5Sm = style({ [small]: { marginLeft: spacingScale[5] } })

export const m6Sm = style({ [small]: { margin: spacingScale[6] } })
export const mt6Sm = style({ [small]: { marginTop: spacingScale[6] } })
export const mb6Sm = style({ [small]: { marginBottom: spacingScale[6] } })
export const mr6Sm = style({ [small]: { marginRight: spacingScale[6] } })
export const ml6Sm = style({ [small]: { marginLeft: spacingScale[6] } })

export const maMd = style({ [medium]: { margin: 'auto' } })
export const mvaMd = style({ [medium]: { marginTop: 'auto', marginBottom: 'auto' } })
export const mhaMd = style({ [medium]: { marginLeft: 'auto', marginRight: 'auto' } })

export const m0Md = style({ [medium]: { margin: spacingScale[0] } })
export const mt0Md = style({ [medium]: { marginTop: spacingScale[0] } })
export const mb0Md = style({ [medium]: { marginBottom: spacingScale[0] } })
export const mr0Md = style({ [medium]: { marginRight: spacingScale[0] } })
export const ml0Md = style({ [medium]: { marginLeft: spacingScale[0] } })

export const m1Md = style({ [medium]: { margin: spacingScale[1] } })
export const mt1Md = style({ [medium]: { marginTop: spacingScale[1] } })
export const mb1Md = style({ [medium]: { marginBottom: spacingScale[1] } })
export const mr1Md = style({ [medium]: { marginRight: spacingScale[1] } })
export const ml1Md = style({ [medium]: { marginLeft: spacingScale[1] } })

export const m2Md = style({ [medium]: { margin: spacingScale[2] } })
export const mt2Md = style({ [medium]: { marginTop: spacingScale[2] } })
export const mb2Md = style({ [medium]: { marginBottom: spacingScale[2] } })
export const mr2Md = style({ [medium]: { marginRight: spacingScale[2] } })
export const ml2Md = style({ [medium]: { marginLeft: spacingScale[2] } })

export const m3Md = style({ [medium]: { margin: spacingScale[3] } })
export const mt3Md = style({ [medium]: { marginTop: spacingScale[3] } })
export const mb3Md = style({ [medium]: { marginBottom: spacingScale[3] } })
export const mr3Md = style({ [medium]: { marginRight: spacingScale[3] } })
export const ml3Md = style({ [medium]: { marginLeft: spacingScale[3] } })

export const m4Md = style({ [medium]: { margin: spacingScale[4] } })
export const mt4Md = style({ [medium]: { marginTop: spacingScale[4] } })
export const mb4Md = style({ [medium]: { marginBottom: spacingScale[4] } })
export const mr4Md = style({ [medium]: { marginRight: spacingScale[4] } })
export const ml4Md = style({ [medium]: { marginLeft: spacingScale[4] } })

export const m5Md = style({ [medium]: { margin: spacingScale[5] } })
export const mt5Md = style({ [medium]: { marginTop: spacingScale[5] } })
export const mb5Md = style({ [medium]: { marginBottom: spacingScale[5] } })
export const mr5Md = style({ [medium]: { marginRight: spacingScale[5] } })
export const ml5Md = style({ [medium]: { marginLeft: spacingScale[5] } })

export const m6Md = style({ [medium]: { margin: spacingScale[6] } })
export const mt6Md = style({ [medium]: { marginTop: spacingScale[6] } })
export const mb6Md = style({ [medium]: { marginBottom: spacingScale[6] } })
export const mr6Md = style({ [medium]: { marginRight: spacingScale[6] } })
export const ml6Md = style({ [medium]: { marginLeft: spacingScale[6] } })

export const maLg = style({ [large]: { margin: 'auto' } })
export const mvaLg = style({ [large]: { marginTop: 'auto', marginBottom: 'auto' } })
export const mhaLg = style({ [large]: { marginLeft: 'auto', marginRight: 'auto' } })

export const m0Lg = style({ [large]: { margin: spacingScale[0] } })
export const mt0Lg = style({ [large]: { marginTop: spacingScale[0] } })
export const mb0Lg = style({ [large]: { marginBottom: spacingScale[0] } })
export const mr0Lg = style({ [large]: { marginRight: spacingScale[0] } })
export const ml0Lg = style({ [large]: { marginLeft: spacingScale[0] } })

export const m1Lg = style({ [large]: { margin: spacingScale[1] } })
export const mt1Lg = style({ [large]: { marginTop: spacingScale[1] } })
export const mb1Lg = style({ [large]: { marginBottom: spacingScale[1] } })
export const mr1Lg = style({ [large]: { marginRight: spacingScale[1] } })
export const ml1Lg = style({ [large]: { marginLeft: spacingScale[1] } })

export const m2Lg = style({ [large]: { margin: spacingScale[2] } })
export const mt2Lg = style({ [large]: { marginTop: spacingScale[2] } })
export const mb2Lg = style({ [large]: { marginBottom: spacingScale[2] } })
export const mr2Lg = style({ [large]: { marginRight: spacingScale[2] } })
export const ml2Lg = style({ [large]: { marginLeft: spacingScale[2] } })

export const m3Lg = style({ [large]: { margin: spacingScale[3] } })
export const mt3Lg = style({ [large]: { marginTop: spacingScale[3] } })
export const mb3Lg = style({ [large]: { marginBottom: spacingScale[3] } })
export const mr3Lg = style({ [large]: { marginRight: spacingScale[3] } })
export const ml3Lg = style({ [large]: { marginLeft: spacingScale[3] } })

export const m4Lg = style({ [large]: { margin: spacingScale[4] } })
export const mt4Lg = style({ [large]: { marginTop: spacingScale[4] } })
export const mb4Lg = style({ [large]: { marginBottom: spacingScale[4] } })
export const mr4Lg = style({ [large]: { marginRight: spacingScale[4] } })
export const ml4Lg = style({ [large]: { marginLeft: spacingScale[4] } })

export const m5Lg = style({ [large]: { margin: spacingScale[5] } })
export const mt5Lg = style({ [large]: { marginTop: spacingScale[5] } })
export const mb5Lg = style({ [large]: { marginBottom: spacingScale[5] } })
export const mr5Lg = style({ [large]: { marginRight: spacingScale[5] } })
export const ml5Lg = style({ [large]: { marginLeft: spacingScale[5] } })

export const m6Lg = style({ [large]: { margin: spacingScale[6] } })
export const mt6Lg = style({ [large]: { marginTop: spacingScale[6] } })
export const mb6Lg = style({ [large]: { marginBottom: spacingScale[6] } })
export const mr6Lg = style({ [large]: { marginRight: spacingScale[6] } })
export const ml6Lg = style({ [large]: { marginLeft: spacingScale[6] } })
