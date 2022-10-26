import React from 'react'

import Timeline from '@/src/components/UI/Timeline'
import { TIMELINE_ITEMS } from '@/src/constants'
import { getNewTimeline } from '@/src/Helper'

import TimelineSeperator from './TimelineSeperator'
import TimelineWrapper from './TimelineWrapper'

const MainTimeline: React.FunctionComponent = () => {
  const { timeline } = getNewTimeline(TIMELINE_ITEMS, 'year')
  return (
    <div className='relative mt-16 mb-8 flex w-fit flex-col items-start rounded text-primary-5 lg:flex-row'>
      <div className='mt-4 lg:mt-2'>
        <TimelineWrapper>
          {timeline
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((item, id) => (
              <TimelineSeperator seperator={item.year} key={id}>
                {item.timeline
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((t, id) => (
                    <Timeline
                      badgeTitle={t.badgeTitle}
                      content={t}
                      variant={t?.meta?.variant}
                      lastIndex={id + 1 !== item.timeline.length}
                      key={id}
                    />
                  ))}
              </TimelineSeperator>
            ))}
        </TimelineWrapper>
      </div>
    </div>
  )
}

export default MainTimeline
