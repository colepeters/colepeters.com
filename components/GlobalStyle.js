import R from 'ramda'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const otFeatures = [
  'ss03', // curved lowercase r
  'cv01', // alternate 1
  'cv02', // open 4
  'cv03', // open 6
  'cv04', // open 9
  'cv05', // lowercase l with tail
  'cv08', // uppercase I with serif
  'cv09', // flat top 3
]

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 100%;
  }

  body {
    font-size: 1rem;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, ul, ol {
    font-feature-settings: ${otFeatures.map(
      (ft, _, arr) => `'${ft}' 1${R.equals(ft, R.last(arr)) ? '' : ','}`
    )};
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1rem;
  }

  ul, ol {
    list-style-position: inside;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:focus,
  a:active {
    color: black;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle
