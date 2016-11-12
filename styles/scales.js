const addEm = n => `${ n }em`
const addRem = n => `${ n }rem`

const rawSpacingScale = [
  0,
  0.25,
  0.5,
  1,
  2,
  4,
  8
]

// Does not include 0 because we never want to set font-size to 0
const rawTypeScale = [
  0.75,
  1,
  1.5,
  2,
  3
]

// Does not include 0 because we never want to set line-height to 0
const rawLineHeightScale = [
  1,
  1.333,
  1.666
]

const rawTrackingScale = [
  0,
  -0.01,
  -0.02,
  -0.04
]

const rawBorderRadiusScale = [
  0,
  0.25
]

export const spacingScale = rawSpacingScale.map(addRem)
export const typeScale = rawTypeScale.map(addRem)
export const lineHeightScale = rawLineHeightScale.map(String)
export const trackingScale = rawTrackingScale.map(addEm)
export const borderRadiusScale = rawBorderRadiusScale.map(addEm)
