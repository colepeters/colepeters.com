import R from 'ramda'
import styled from 'styled-components'
import { space, typography } from 'styled-system'

const headingStyles = {
  h1: {
    fontSize: [5, 6, 7],
    fontWeight: [500, null, 300],
    letterSpacing: '-0.075em',
  },
  h2: {
    fontSize: [3, 4, 5],
    fontWeight: 500,
    letterSpacing: '-0.05em',
  },
  h3: {
    fontSize: [2, 3, 4],
    fontWeight: 500,
    letterSpacing: '-0.0333em',
  },
}

const BaseHeading = styled.h1`
  ${space}
  ${typography}
`

const Heading = styled(BaseHeading).attrs(({ as, theme, ...props }) => ({
  ...headingStyles[as],
  lineHeight: theme.lineHeights.heading,
  ...props,
}))``

Heading.displayName = 'Heading'

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
