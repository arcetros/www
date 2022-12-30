import clsx from 'clsx'
import React from 'react'

import s from './main-timeline.module.css'

const TimelineWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={s.root}>
      <div className={s.wrapper}>{children}</div>
    </section>
  )
}

export default TimelineWrapper
