import { NextApiRequest, NextApiResponse } from 'next'

import { GITHUB_API_URL } from '@/src/constants'
import { getDescriptionFromSelector, getImageFromSelector } from '@/src/Helper/ogSelectors'

export interface TProjects {
  title?: string
  date: string
  badgeTitle?: string
  meta?: {
    stars?: number | 0
    link?: string
    subTitle?: string
    variant?: string
    language?: string
    description?: string
  }
  openGraph?: {
    description?: string
    image?: string
  }
}
;[]

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const url = GITHUB_API_URL
  const response = await fetch(url)
  const githubProjects = await response.json()
  const projectsList: TProjects[] = []

  githubProjects.forEach(async (p) => {
    const getHtmlData = await fetch(p.html_url)
    const response = await getHtmlData.text()

    projectsList.push({
      title: p.name,
      date: p.created_at,
      meta: {
        stars: p.stargazers_count,
        link: p.html_url,
        subTitle: p.description,
        variant: 'project',
        language: p.language
      },
      openGraph: {
        description: getDescriptionFromSelector(response),
        image: getImageFromSelector(response)
      }
    })
  })

  return res.status(200).json({
    repos: projectsList
  })
}
