import React from 'react'

import { GITHUB_URL, LINKEDIN_URL } from '@/src/constants'

import Container from '../../UI/Container'
import { SpotifyTile } from '../SpotifyTile'

const Footer = () => {
  return (
    <Container
      el='footer'
      className='flex flex-col gap-4 border-t border-neutral-900 px-4 py-8 lg:px-0'
    >
      <SpotifyTile />
      <ul className='flex flex-col space-y-3 text-sm text-neutral-400'>
        <li>
          <a
            href={GITHUB_URL}
            target='_blank'
            className='cursor-pointer tracking-wide transition-all hover:text-neutral-600 dark:hover:text-neutral-500'
            rel='noreferrer'
          >
            Github
          </a>
        </li>
        <li>
          <a
            href={LINKEDIN_URL}
            target='_blank'
            className='cursor-pointer tracking-wide transition-all hover:text-neutral-600 dark:hover:text-neutral-500'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </li>
      </ul>
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
            className='cursor-pointer underline'
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
