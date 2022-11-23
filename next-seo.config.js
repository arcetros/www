// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */

const defaultSEO = {
  defaultTitle: '@arcetros',
  description: 'Portfolio site of Mufid Arkanu, Front-end developer based on Bali, Indonesia',
  titleTemplate: '%s — @arcetros',

  // additionalLinkTags: [
  //   {
  //     rel: 'icon',
  //     href: 'https://arcetros.vercel.app/favicon.ico'
  //   }
  // ],

  additionalMetaTags: [
    {
      name: 'google-site-verification',
      content: '5NAcAjBEPXTM3ihHp0qjfSbUIJ9Sz9aGqjkGY5ILhY'
    }
  ],

  openGraph: {
    locale: 'en_US',
    url: 'https://arcetros.vercel.app/',
    description:
      "Hey, I'am Mufid Arkanu, a front-end developer with a passion of building accessible, responsive and fast performant JAM stack sites.",
    images: [
      {
        url: 'https://arcetros.vercel.app/og.png',
        alt: 'arcetros'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@arcetros'
  }
}

export default defaultSEO
