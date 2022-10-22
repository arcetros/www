// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */

const defaultSEO = {
  defaultTitle: 'Mufid Arkanu',
  description:
    ' A software engineer specialized in front-end development, building things that improves the lives of people.',
  titleTemplate: '%s — Mufid Arkanu',

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
