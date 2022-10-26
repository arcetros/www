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
    process.env.SPOTIFY_ACCESS_TOKEN = tokens.access_token
  } catch (e) {
    console.warn(e)
  }
}
