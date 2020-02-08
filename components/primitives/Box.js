import styled from 'styled-components'
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  display,
  flexbox,
  layout,
  opacity,
  overflow,
  position,
  space,
  typography,
} from 'styled-system'

const Box = styled('div')(
  compose(
    background,
    border,
    boxShadow,
    color,
    display,
    flexbox,
    layout,
    opacity,
    overflow,
    position,
    space,
    typography
  )
)

Box.defaultProps = {
  as: 'div',
}

Box.displayName = 'Box'

export default Box
