import R from 'ramda'
import styled from 'styled-components'
import { typography } from 'styled-system'

const getFontSize = as =>
  R.cond([
    [R.equals('h1'), () => [5, 6, 7]],
    [R.equals('h2'), () => [4, 5, 6]],
    [R.equals('h3'), () => [3, 4, 5]],
  ])(as)

const getLetterSpacing = as =>
  R.cond([
    [R.equals('h1'), () => '-0.05em'],
    [R.equals('h2'), () => '-0.025em'],
    [R.equals('h3'), () => '-0.0125em'],
  ])(as)

const BaseHeading = styled.h1`
  ${typography}
`

const Heading = styled(BaseHeading).attrs(({ as, theme }) => ({
  fontSize: getFontSize(as),
  letterSpacing: getLetterSpacing(as),
  lineHeight: theme.lineHeights.heading,
}))``

Heading.displayName = 'Heading'

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
