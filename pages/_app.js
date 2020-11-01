import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'antd/dist/antd.css'
import '../static/styles/global.css'
import Store from "../src/components/store/Store"

export default class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props
    
    return (
      <>
      <Store>
        <Head>
          <title>4all</title>
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
        </Store>
      </>
    )
  }
}