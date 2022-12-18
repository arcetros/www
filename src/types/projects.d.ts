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
}
