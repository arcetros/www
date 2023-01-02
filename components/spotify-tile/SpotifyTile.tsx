import clsx from 'clsx'
import React from 'react'
import { WifiOff } from 'react-feather'
import useSWR from 'swr'

import { fetcher } from '@/libs/helpers/fetcher'
import { SpotifyTrack } from '@/types'

import LoadingDots from '../ui/loading-dots/loading-dots'
import { SpotifyIcon } from './Icon'
import s from './SpotifyTile.module.css'
import { normalizeTitle, normalizeTrackArtists } from './utils'

type SpotifyResponse = {
  track: SpotifyTrack
  status: 'online' | 'offline'
}

const SpotifyTile: React.FunctionComponent = () => {
  const { data, error } = useSWR<SpotifyResponse>('/api/music', () =>
    fetcher('/api/music', { method: 'GET' })
  )

  if (error) {
    return <p>Something went wrong with Spotify</p>
  }

  if (!data) {
    return (
      <div className='mb-4 flex items-center justify-between'>
        <LoadingDots />
      </div>
    )
  }

  const { artists, name, external_urls } = data.track

  return (
    <div className='mb-4 flex items-center justify-between'>
      <a
        className='group before:!content-none'
        href={external_urls.spotify}
        target='_blank'
        rel='noreferrer'
      >
        <div className='flex items-center gap-x-2 text-sm capitalize text-neutral-400'>
          {data?.status === 'online' ? (
            <>
              <span className={s.barWrapper}>
                <span className={clsx(s.bar, s.bar1)}></span>
                <span className={clsx(s.bar, s.bar2)}></span>
                <span className={clsx(s.bar, s.bar3)}></span>
              </span>
              Now playing
            </>
          ) : (
            <>
              <WifiOff className='h-4 w-4 fill-current' />
              {data?.status}. Last played
            </>
          )}
        </div>
        <h2 className='mt-2 font-medium transition-all group-hover:text-green-200'>
          {normalizeTitle(name)}
        </h2>
        <p className='text-xs text-neutral-400'>{normalizeTrackArtists(artists)}</p>
      </a>
      <SpotifyIcon className='text-green-500' />
    </div>
  )
}

export default SpotifyTile
