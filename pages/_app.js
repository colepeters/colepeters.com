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
          <meta
            name='description'
            content='Artist working with paint and sound. Based in Canada.'
            key='description'
          />
          <meta
            name='google-site-verification'
            content='GDtqLSMBd2NDQxNYP5Zg_4B1BNQQ93spmNyQgLTo9dE'
            key='gsv'
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}
