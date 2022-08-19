import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import path from 'path'

export interface ProjectMeta {
  introduction: string
  description: string
  slug: string
  title: string
  stacks: string[]
  code: string
  live: string
  img: string
}

interface Project {
  content: string
  meta: ProjectMeta
}

const PROJECT_PATH = path.join(process.cwd(), 'projects').replace(/\\/g, '/')

export const getSlugs = (): string[] => {
  const paths = sync(`${PROJECT_PATH}/*.mdx`)

  return paths.map((item) => {
    const parts = item.split('/')
    const fileName = parts[parts.length - 1]
    const [slug] = fileName.split('.')
    return slug
  })
}

export const getProjectFromSlug = (slug: string): Project => {
  const projectPath = path.join(PROJECT_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(projectPath)
  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      introduction: data.introduction ?? '',
      description: data.description ?? '',
      title: data.title ?? slug,
      stacks: (data.stacks ?? []).sort(),
      code: data.code ?? 'Source code are privated',
      live: data.live ?? 'Not Available Yet',
      img: data.img ?? ''
    }
  }
}

export const getAllProjects = () => {
  const posts = getSlugs().map((slug) => getProjectFromSlug(slug))
  return posts
}
