import styled from 'styled-components'
import {
  background,
  border,
  color,
  compose,
  display,
  flexbox,
  layout,
  opacity,
  overflow,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

const Box = styled('div')(
  compose(
    background,
    border,
    color,
    display,
    flexbox,
    layout,
    opacity,
    overflow,
    position,
    shadow,
    space,
    typography
  )
)

Box.defaultProps = {
  as: 'div',
}

Box.displayName = 'Box'

export default Box
