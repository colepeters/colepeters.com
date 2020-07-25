import R from 'ramda'
import styled from 'styled-components'
import { layout, position, space, typography } from 'styled-system'

const headingStyles = {
  h1: {
    fontSize: [6, null, 7],
    fontWeight: 400,
    letterSpacing: ['-0.05', null, '-0.0666em'],
  },
  h2: {
    fontSize: [2, 3],
    fontWeight: 500,
    letterSpacing: '-0.0333em',
  },
  h3: {
    fontSize: [1, 2],
    fontWeight: 500,
    letterSpacing: '-0.0333em',
  },
}

const BaseHeading = styled.h1`
  ${layout}
  ${position}
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
