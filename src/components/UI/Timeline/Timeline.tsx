import clsx from 'clsx'
import React from 'react'
import { Clock, Star } from 'react-feather'

import { LanguageVariants, TitleVariants } from './_variants'
import s from './Timeline.module.css'
import { TimelineContent } from './types'

interface Timeline {
  lastIndex: boolean
  variant?: 'work' | 'project' | 'default'
  badgeTitle?: string | number
  content: TimelineContent
  children?: React.ReactNode
}

const Timeline = ({ lastIndex, content, variant = 'default', badgeTitle, children }: Timeline) => {
  const rootBadgeClassName = clsx(s.badge, {
    [s.work]: variant === 'work',
    [s.project]: variant === 'project',
    [s.default]: variant === 'default'
  })

  const [newDate, setNewDate] = React.useState<string>('')

  React.useEffect(() => {
    const formatDate = (date: string | number | Date) =>
      new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      })
    const startDate = formatDate(content.date)
    const endDate = content.endDate ? `- ${formatDate(content.endDate)}` : ''
    setNewDate(`${startDate} ${endDate}`)
  }, [content.endDate, content.date])

  return (
    <li className={s.root}>
      <div>
        {lastIndex && <div className={s.line} />}
        <Clock
          className='absolute left-[calc((40px)*-1-9px)] top-[7px] text-neutral-600'
          size={20}
          fill='rgb(30 30 30)'
        />
      </div>
      <div className={rootBadgeClassName}>
        <strong>{badgeTitle ? badgeTitle : TitleVariants[variant]}</strong>
      </div>
      <div className={s.badge_info}>
        <time>
          <time>{newDate}</time>
        </time>
        {content.meta?.language && (
          <>
            {LanguageVariants[content.meta.language]}
            <span className={s.language}>{content.meta.language}</span>
          </>
        )}
        {content.meta?.stars && (
          <>
            <Star className='mx-1.5 h-[10px] w-[10px]' />
            <span>{content.meta.stars}</span>
          </>
        )}
      </div>
      <h2 className={clsx(content?.meta?.link && 'cursor-pointer capitalize hover:underline')}>
        {content.meta?.link ? (
          <a target='_blank' href={content.meta.link} rel='noreferrer'>
            {content.title}
          </a>
        ) : (
          content.title
        )}
      </h2>
      <h3>{content?.meta?.subTitle}</h3>
      <p>{content?.meta?.description}</p>
      {children}
    </li>
  )
}

export default Timeline
