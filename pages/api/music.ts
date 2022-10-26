import { NextApiRequest, NextApiResponse } from 'next'

import { getAccessToken } from '@/src/services/spotify'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(await getAccessToken(process.env.SPOTIFY_REFRESH_TOKEN as string))
    return res.status(200)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Bad request' })
  }
}
