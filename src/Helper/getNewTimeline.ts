import { NewTimeline, TimelineContent } from '../components/UI/Timeline/types'

interface GroupedTimelines {
  [key: string | number]: TimelineContent[]
}

export const getNewTimeline = (timelines: TimelineContent[], attribute: string) => {
  if (!timelines) return undefined

  const groupByAttribute = (arr: TimelineContent[], key: string) => {
    const initialValue = {}
    return arr.reduce((acc, cval) => {
      const myAttribute = cval[key]
      {
        acc[myAttribute] = [...(acc[myAttribute] || []), cval]
      }
      return acc
    }, initialValue)
  }

  const newMap: TimelineContent[] = timelines.map((item) => {
    return { ...item, year: new Date(item?.date!).getFullYear() }
  })

  const groupedTimelines: GroupedTimelines = groupByAttribute(newMap, attribute)

  const newTimeline: NewTimeline[] = Object.keys(groupedTimelines).map((key) => {
    return { year: key, timeline: groupedTimelines[key] as TimelineContent[] }
  })

  return newTimeline
}
