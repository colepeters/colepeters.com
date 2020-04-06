import styled from 'styled-components'
import {
  color,
  compose,
  display,
  layout,
  opacity,
  position,
  space,
  typography,
} from 'styled-system'

const Button = styled.button`
  ${compose(color, display, layout, opacity, position, space, typography)}
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  padding: ${props => props.theme.space[2]} 0;
  text-decoration: underline;

  &:focus {
    outline: none;
  }

  transition: opacity 0.5s ease;

  ${props => props.disabled && 'opacity: 0.5; pointer-events: none;'}
`
Button.displayName = 'Button'

export default Button
