import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'typeface-dm-sans'

import GlobalStyle from '../components/GlobalStyle'
import theme from '../theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
