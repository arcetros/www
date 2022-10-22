import clsx from 'clsx'
import dayjs from 'dayjs'
import React from 'react'
import { Clock } from 'react-feather'

import { LanguageVariants, TitleVariants } from './_variants'
import s from './Timeline.module.css'
import { type TimelineContent } from './types'

interface Timeline {
  lastIndex: boolean
  variant: 'work' | 'project' | 'default'
  badgeTitle?: string | number
  content: TimelineContent
}

const Timeline = ({ lastIndex, content, variant = 'default', badgeTitle }: Timeline) => {
  const rootBadgeClassName = clsx(s.badge, {
    [s.work]: variant === 'work',
    [s.project]: variant === 'project',
    [s.default]: variant === 'default'
  })

  const date = new Date(content.date)
  const formatDate = (date) => dayjs(date).format('MMMM DD, YYYY')

  return (
    <li className={s.root}>
      <div>
        {lastIndex && <div className={s.line} />}
        <Clock
          className='absolute left-[calc((40px)*-1-9px)] top-[7px] text-primary-1'
          size={20}
          fill='rgb(156 163 175)'
        />
      </div>
      <div className={rootBadgeClassName}>
        <strong>{badgeTitle ? badgeTitle : TitleVariants[variant]}</strong>
      </div>
      <div className={s.badge_info}>
        <time dateTime={date.toString()}>
          {formatDate(content.date)} {content.endDate && `- ${formatDate(content.endDate)}`}
        </time>
        {content.meta.language && (
          <>
            {LanguageVariants[content.meta.language]}
            <span className={s.language}>{content.meta.language}</span>
          </>
        )}
      </div>
      <h2 className={clsx(content?.meta?.link && 'cursor-pointer hover:underline')}>
        {content.meta.link ? (
          <a target='_blank' href={content.meta.link} rel='noreferrer'>
            {content.title}
          </a>
        ) : (
          content.title
        )}
      </h2>
      <h3>{content?.meta?.subTitle}</h3>
      <p>{content?.meta?.description}</p>
    </li>
  )
}

export default Timeline
