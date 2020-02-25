import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 112.5%;
  }
  body {
    font-size: 1rem;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  p {
    margin: 0;
  }
  p + p {
    margin-top: 1rem;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:focus,
  a:active {
    color: black;
  }
`

export default GlobalStyle
