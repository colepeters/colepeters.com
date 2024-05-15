import { getStyleTag } from '@enhance/arc-plugin-styles/get-styles'

import pathTitles from './lib/path-titles.mjs'

export default function Head(state) {
  const { req } = state
  const { path } = req
  const title = `Cole Peters — ${pathTitles[path]}`
  const description = 'Cole Peters is a multidisciplinary artist fascinated by matter, energy, space and time, and the ways in which these elements shape our universe, our environment, and our peception.'
  const image = '/_public/opengraph.png'
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <meta name="description" content="${description}"
      <link rel="icon" href="/_public/favicon.svg">
      <!-- Open Graph -->
      <meta name="og:title" content="${title}" />
      <meta name="og:description" content="${description}" />
      <meta name="og:image" content="${image}" />
      <meta name="og:site_name" content="Cole Peters" />
      <meta name="og:type" content="website" />

      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${image}" />
      <meta property="og:site_name" content="Cole Peters" />
      <meta property="og:type" content="website" />

      <!-- Twitter -->
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content="${image}" />

      ${getStyleTag()}

      <style>
        @font-face {
          font-family: PP Mori;
          src: url("https://tcp-webfonts.s3.us-east-2.amazonaws.com/PPMori-Regular.woff2") format("woff2-variations");
          src: url("https://tcp-webfonts.s3.us-east-2.amazonaws.com/PPMori-Regular.woff2") format("woff2") tech("variations");
          font-weight: 400;
        }
        body {
          background: white;
          color: var(--blue-black);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (prefers-color-scheme: dark) {
          body {
            background: var(--blue-black);
            color: var(--smoke);
          }
        }

        a {
          text-decoration: underline;
          text-decoration-color: var(--light-muted);
          text-decoration-thickness: 1.5px;
          text-underline-offset: 2px;
        }

        @media (prefers-color-scheme: dark) {
          a {
            text-decoration-color: var(--dark-muted);
          }
        }

        p + p {
          margin-top: 1.625em;
        }

        blockquote {
          border-left: 4px solid var(--alpha-grey);
        }

        .measure {
          max-width: 68ch;
        }

        .muted {
          color: var(--light-muted);
        }

        @media (prefers-color-scheme: dark) {
          .muted {
            color: var(--dark-muted);
          }
        }
      </style>
    </head>
    <body class="font-sans leading4">
  `
}
