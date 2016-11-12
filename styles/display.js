/* DISPLAY
   Set the display property

   Structure:
   <type><mq>

   Where:
   <type>   =     Display type
                  one of block, inlineBlock, inline, table, tableCell, or none

  <mq>      =     (optional) Breakpoint at which display property kicks in
                  one of Sm, Md, or Lg

  Example:

  <div className={ merge(inline, inlineBlockMd) }

  Element be rendered inline by default
  at the Medium breakpoint, it will be rendered as an inline-block

  NB:
  Be careful when using `hide`, as this will make the affected content
  unreadable to screen readers. If you want to hide something visually
  while keeping it accessible to screen readers, use `clip` instead (see clip.js).
*/

import { style } from 'next/css'
import { small, medium, large } from './mediaQueries'

// Flex displays typically do not change by breakpoint
export const flex = style({ display: 'flex' })

export const block = style({ display: 'block' })
export const inlineBlock = style({ display: 'inline-block' })
export const inline = style({ display: 'inline' })
export const table = style({ display: 'table' })
export const tableCell = style({ display: 'table-cell' })
export const hide = style({ display: 'none' })

export const blockSm = style({ [small]: { display: 'block' } })
export const inlineBlockSm = style({ [small]: { display: 'inline-block' } })
export const inlineSm = style({ [small]: { display: 'inline' } })
export const tableSm = style({ [small]: { display: 'table' } })
export const tableCellSm = style({ [small]: { display: 'table-cell' } })
export const hideSm = style({ [small]: { display: 'none' } })

export const blockMd = style({ [medium]: { display: 'block' } })
export const inlineBlockMd = style({ [medium]: { display: 'inline-block' } })
export const inlineMd = style({ [medium]: { display: 'inline' } })
export const tableMd = style({ [medium]: { display: 'table' } })
export const tableCellMd = style({ [medium]: { display: 'table-cell' } })
export const hideMd = style({ [medium]: { display: 'none' } })

export const blockLg = style({ [large]: { display: 'block' } })
export const inlineBlockLg = style({ [large]: { display: 'inline-block' } })
export const inlineLg = style({ [large]: { display: 'inline' } })
export const tableLg = style({ [large]: { display: 'table' } })
export const tableCellLg = style({ [large]: { display: 'table-cell' } })
export const hideLg = style({ [large]: { display: 'none' } })
