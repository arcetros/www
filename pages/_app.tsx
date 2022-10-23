import '../styles/globals.css'
import '@fontsource/lexend-deca/300.css'
import '@fontsource/lexend-deca/400.css'
import '@fontsource/lexend-deca/500.css'
import '@fontsource/lexend-deca/700.css'

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
