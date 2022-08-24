import '../styles/globals.css'
import '@fontsource/lexend-deca'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import React from 'react'

import defaultSeo from '../next-seo.config.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
