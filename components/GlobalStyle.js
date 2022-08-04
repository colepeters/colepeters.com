import { equals, last } from 'ramda'
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

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 112.5%;
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
      (ft, _, arr) => `'${ft}' 1${equals(ft, last(arr)) ? '' : ','}`
    )};
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1rem;
  }

  strong {
    font-weight: 600;
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
    text-decoration-color: ${props => props.theme.colors.muted};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  img:not([data-nextimage]) {
    max-width: 100%;
    max-height: 95vh;
    height: auto;
    align-self: center;
  }

  hr {
    margin: 2rem 0;
    border-top: 2px solid ${props => props.theme.colors.lightGrey};
    border-bottom: none;
    border-left: none;
    border-right: none;
  }

  figure {
    margin: 0;
  }

  blockquote {
    margin: 0;
  }
`

export default GlobalStyle
