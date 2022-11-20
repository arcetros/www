import fetch from 'cross-fetch'
import * as fs from 'fs'
import { TProjects } from 'pages/api/projects'
import path from 'path'

import { GITHUB_API_URL } from '../constants'
import { getDescriptionFromSelector, getImageFromSelector } from '../Helper/ogSelectors'

interface RepositoriesResponse {
  [name: string]: any
}

fetchRepositories()

async function fetchRepositories() {
  const repos = (await (await fetch(GITHUB_API_URL)).json()) as RepositoriesResponse[]
  const projectsList: TProjects[] = []

  await Promise.all(
    repos.map(async (repo) => {
      await fetch(repo.html_url)
        .then((res) => res.text())
        .then((data) => {
          projectsList.push({
            title: repo.name,
            date: repo.created_at,
            meta: {
              stars: repo.stargazers_count,
              link: repo.html_url,
              subTitle: repo.description,
              variant: 'project',
              language: repo.language
            },
            openGraph: {
              description: getDescriptionFromSelector(data),
              image: getImageFromSelector(data)
            }
          })
        })
    })
  )
  const text = JSON.stringify(projectsList)

  fs.writeFileSync(path.resolve(__dirname, '../data/repositories-data.json'), text)
}
