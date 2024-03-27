import { getStyleTag } from '@enhance/arc-plugin-styles/get-styles'

import pathTitles from './lib/path-titles.mjs'

export default function Head(state) {
  const { req } = state
  const { path } = req
  const title = `Cole Peters — ${pathTitles[path]}`
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      ${getStyleTag()}
      <style>
        @font-face {
          font-family: HK Grotesk;
          src: url("/_public/fonts/HKGrotesk-Regular.woff2") format("woff2");
          font-weight: 400;
        }
        @font-face {
          font-family: HK Grotesk;
          src: url("/_public/fonts/HKGrotesk-Italic.woff2") format("woff2");
          font-weight: 400;
          font-style: italic;
        }
        @font-face {
          font-family: HK Grotesk;
          src: url("/_public/fonts/HKGrotesk-Medium.woff2") format("woff2");
          font-weight: 500;
        }
      </style>
      <link rel="stylesheet" href="/_public/global.css" />
      <link rel="icon" href="/_public/favicon.svg">
    </head>
  `
}
