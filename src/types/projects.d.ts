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
