import clsx from 'clsx'
import React from 'react'
import { Clock } from 'react-feather'

import s from './Timeline.module.css'
import { type TimelineContent } from './types'

interface Timeline {
  lastIndex: boolean
  variant: 'work' | 'default'
  content: TimelineContent
}

const Timeline = ({ lastIndex, content, variant = 'default' }: Timeline) => {
  console.log(content)
  const rootBadgeClassName = clsx(s.badge, {
    [s.work]: variant === 'work',
    [s.default]: variant === 'default'
  })

  return (
    <li className={s.root}>
      <div>
        {lastIndex && <div className={s.line} />}
        <Clock className='absolute left-[calc((40px)*-1-9px)] top-[7px] text-gray-400' size={20} />
      </div>
      <div className={rootBadgeClassName}>
        <strong>Created this portfolio site</strong>
      </div>
      {/* add stacks if available */}
      <div className='mb-1 text-[0.8rem] leading-normal text-gray-300'>
        {new Date(content.date).toISOString()}
      </div>
      <h2 className='text-[2rem] leading-snug'>{content.title}</h2>
      <h3 className='mb-4 text-[hsla(217,12%,64%,1)]'>{content?.meta?.subTitle}</h3>
      <p>{content?.meta?.description}</p>
    </li>
  )
}

export default Timeline
