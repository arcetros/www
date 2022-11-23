import '../styles/globals.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import React from 'react'

import { Footer } from '@/src/components/Common/Footer'

import defaultSeo from '../next-seo.config.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
