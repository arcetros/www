import fetch from 'cross-fetch'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import path from 'path'

import { GITHUB_API_URL } from '../constants'
import { TProjects } from '../types'

interface RepositoriesResponse {
  [name: string]: any
}
dotenv.config()
fetchRepositories()

async function fetchRepositories() {
  const repos = (await (await fetch(GITHUB_API_URL)).json()) as RepositoriesResponse[]
  const projectsList: TProjects[] = []

  repos.map(async (repo) => {
    projectsList.push({
      title: repo.name,
      date: repo.created_at,
      meta: {
        stars: repo.stargazers_count,
        link: repo.html_url,
        subTitle: repo.description,
        variant: 'project',
        language: repo.language
      }
    })
  })

  const text = JSON.stringify(projectsList)

  fs.writeFileSync(path.resolve(__dirname, '../data/repositories.json'), text)
}
