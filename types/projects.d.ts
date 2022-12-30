export interface TProjects {
  title?: string
  date: string
  badgeTitle?: string
  meta?: {
    stars?: number | 0
    link?: string
    subTitle?: string
    variant?: 'work' | 'project' | 'default'
    language?: string
    description?: string
  }
  embed?: {
    url: string
    meta: {
      description: string
      title: string
      medium: string
      'theme-color': string
      canonical: string
      site: string
    }
    links: {
      [name: string]: any
    }
    icon: { [name: string]: any }
    rel: Array<string>
    html: string
    options: any
  }
}
