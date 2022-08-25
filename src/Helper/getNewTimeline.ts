export const getNewTimeline = (timelines: any[], attribute: string) => {
  if (!timelines) return { timeline: [] }

  const groupByAttribute = (arr, key) => {
    const initialValue = {}
    return arr.reduce((acc, cval) => {
      const myAttribute = cval[key]
      {
        acc[myAttribute] = [...(acc[myAttribute] || []), cval]
      }
      return acc
    }, initialValue)
  }

  const newMap = timelines.map((item) => {
    return { year: new Date(item.date).getFullYear(), ...item }
  })

  const groupedTimelines = groupByAttribute(newMap, attribute)

  const newTimeline = Object.keys(groupedTimelines).map((key) => {
    return { year: key, timeline: groupedTimelines[key] }
  })

  return { timeline: newTimeline }
}
