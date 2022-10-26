import { fetcher } from '../Helper/fetcher'
import type { SpotifyTrack } from '../types'

export const getAccessToken = async (refreshToken: string) => {
  const params = new URLSearchParams()
  params.append('client_id', process.env.SPOTIFY_CLIENT_ID as string)
  params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET as string)
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', refreshToken)
  try {
    const tokens = await fetcher(`https://accounts.spotify.com/api/token?${params.toString()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    const access_token = tokens.access_token
    return access_token
  } catch (e) {
    console.warn(e)
  }
}

export const fetchLastPlayedTrack = async () => {
  const access_token = await getAccessToken(process.env.SPOTIFY_REFRESH_TOKEN as string)
  const data: { item: SpotifyTrack; is_playing: boolean } = await fetcher(
    `https://api.spotify.com/v1/me/player/currently-playing`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token as string}`
      }
    }
  )

  if (!data?.item) {
    const { items }: { items: { track: SpotifyTrack; played_at: string }[] } = await fetcher(
      `https://api.spotify.com/v1/me/player/recently-played`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token as string}`
        }
      }
    )

    return { track: items[0].track, status: 'offline' }
  }

  return { track: data.item, status: data.is_playing ? 'online' : 'offline' }
}
