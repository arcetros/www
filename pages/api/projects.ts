export interface TProjects {
  name: string
  stars: number
  url: string
  description: string
  language: string
  stargazers_url: string
  homepage: string
}
;[]

export default async (req, res) => {
  const url = 'https://api.github.com/users/arcetros/repos'
  const response = await fetch(url)
  const json = await response.json()
  const projectsList: TProjects[] = []

  json.forEach((p) => {
    projectsList.push({
      name: p.name,
      stars: p.stargazers_count,
      url: p.html_url,
      description: p.description,
      language: p.language,
      stargazers_url: p.stargazers_url,
      homepage: p.homepage
    })
  })

  return res.status(200).json({
    repos: projectsList
  })
}
