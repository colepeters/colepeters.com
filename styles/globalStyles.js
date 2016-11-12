import { medium } from './mediaQueries'
import { typeScale, lineHeightScale } from './scales'

const globalStyles = `
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Avenir,
      Roboto, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif;
    font-size: ${typeScale[1]};
    line-height: ${lineHeightScale[2]};
    color: darkslategrey;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: ${typeScale[1]};
    font-weight: 600;
    line-height: ${lineHeightScale[1]};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: ${typeScale[1]};
    font-weight: 300;
    line-height: ${lineHeightScale[1]};
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1.5em;
  }

  strong {
    font-weight: 500;
  }

  dd { margin-left: 1.3rem; }
  ul { padding-left: 1.3rem; }
  ol { padding-left: 1.3rem; }

  ${medium} {
    dd { margin-left: 2rem; }
    ul { padding-left: 3rem; }
    ol { padding-left: 3rem; }
  }

  dt {
    font-weight: 700;
  }

  address {
    font-style: normal;
  }
`

export default globalStyles
