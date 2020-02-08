import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    font-size: 112.5%;
  }
  body {
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle
