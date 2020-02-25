import styled from 'styled-components'
import { layout, space, typography } from 'styled-system'

const Text = styled.p`
  ${layout}
  ${space}
  ${typography}
  max-width: 66ch;
`

Text.displayName = 'Text'

export default Text
