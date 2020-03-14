import styled from 'styled-components'

const Button = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  padding: 0;
  text-decoration: underline;

  &:focus {
    outline: none;
  }
`
Button.displayName = 'Button'

export default Button
