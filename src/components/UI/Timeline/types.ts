export type NewTimeline = {
  year: string
  timeline: TimelineContent[]
}

export type TimelineItem = {
  lastIndex: boolean
  variant: 'work' | 'project' | 'default'
  badgeTitle?: string | number
  content: TimelineContent
  children?: React.ReactNode
}

export type TimelineContent = {
  year?: string | number | Date
  date: string | number
  endDate?: string | number
  title?: string | number | null
  badgeTitle?: string
  meta?: {
    stars?: number
    link?: string
    subTitle?: string
    variant?: 'work' | 'project' | 'default'
    language?: string
    description?: string
  }
}
