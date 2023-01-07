import '../styles/globals.css'
import '@fontsource/mulish/300.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/500.css'
import '@fontsource/mulish/600.css'
import '@fontsource/mulish/700.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import React from 'react'

import { Footer } from '@/components/footer'

import defaultSeo from '../next-seo.config.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy='lazyOnload'
        />
      )}
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
