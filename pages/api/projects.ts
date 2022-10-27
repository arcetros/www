import { NextApiRequest, NextApiResponse } from 'next'

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
}
;[]

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://api.github.com/users/arcetros/repos'
  const response = await fetch(url)
  const json = await response.json()
  const projectsList: TProjects[] = []

  json.forEach((p) => {
    projectsList.push({
      title: p.name,
      date: p.created_at,
      meta: {
        stars: p.stargazers_count,
        link: p.html_url,
        subTitle: p.description,
        variant: 'project',
        language: p.language
      }
    })
  })

  return res.status(200).json({
    repos: projectsList
  })
}
