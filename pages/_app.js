import 'typeface-inter'
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import GlobalStyle from '../components/GlobalStyle'
import theme from '../theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
            key='viewport'
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}
