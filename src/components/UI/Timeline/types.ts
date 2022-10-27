type Meta = {
  // something
}

export type TimelineContent = {
  year: number
  date: string | number
  endDate?: string | number
  title: string | number | null
  meta?: {
    stars?: number
    link?: string
    subTitle?: string
    variant?: string
    language?: string
    description?: string
  }
}
