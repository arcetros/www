import { NextApiRequest, NextApiResponse } from 'next'

import { fetchLastPlayedTrack, getAccessToken } from '@/src/services/spotify'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    await getAccessToken(process.env.SPOTIFY_REFRESH_TOKEN as string)
    const { track, status } = await fetchLastPlayedTrack()
    return res.status(200).json({ track, status })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Bad request' })
  }
}
