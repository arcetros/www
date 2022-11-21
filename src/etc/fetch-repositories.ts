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

  await Promise.all(
    repos.map(async (repo) => {
      const IFRAMELY = `https://iframe.ly/api/iframely?url=${repo.html_url}&api_key=${process.env.IFRAMELY_KEY}`
      await fetch(IFRAMELY)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
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
            embed: data
          })
        })
    })
  )
  const text = JSON.stringify(projectsList)

  fs.writeFileSync(path.resolve(__dirname, '../data/repositories-data.json'), text)
}
