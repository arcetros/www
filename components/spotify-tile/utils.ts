import { SpotifyArtist } from '@/types'

export const normalizeTitle = (title: string) => {
  return title.length > 25 ? title.substring(0, 22) + '...' : title
}

export const normalizeTrackArtists = (artists: SpotifyArtist[]) => {
  return (
    artists
      .slice(0, 2)
      .map((artist) => artist.name)
      .join(', ') + (artists.length > 2 ? ` and ${artists.length - 2} more` : '')
  )
}
