import React from 'react'

import { CAL_URL, GITHUB_URL, LINKEDIN_URL } from '@/constants'

import { SpotifyTile } from '../spotify-tile'
import Container from '../ui/container'

const LINKS = [
  { label: 'Github', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Calendar', href: CAL_URL }
]

const Footer = () => {
  return (
    <Container
      el='footer'
      className='flex flex-col gap-4 border-t border-neutral-900 px-4 py-8 lg:px-0'
    >
      <SpotifyTile />
      {/* <ul className='flex flex-col space-y-2 text-sm text-neutral-400'>
        {LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target='_blank'
              className='cursor-pointer tracking-wide transition-all before:!content-none hover:text-neutral-600 dark:hover:text-neutral-500'
              rel='noreferrer'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul> */}
      <div className='mt-8 flex flex-col justify-between text-xs lg:flex-row'>
        <p className='text-neutral-400'>
          Made using Next.js by{' '}
          <a className='font-bold' href={GITHUB_URL} target='_blank' rel='noreferrer'>
            arcetros
          </a>
          . Hosted on Vercel.
        </p>
        <p className='text-neutral-400'>
          <a
            target='_blank'
            href={`${GITHUB_URL}/arcetros`}
            className='cursor-pointer underline before:!content-none'
            rel='noreferrer'
          >
            MIT License
          </a>{' '}
          © 2022 Mufid Arkanu
        </p>
      </div>
    </Container>
  )
}

export default Footer
