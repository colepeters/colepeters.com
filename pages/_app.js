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
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/static/safari-pinned-tab.svg'
            color='#222222'
          />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-config'
            content='/static/browserconfig.xml'
          />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}
