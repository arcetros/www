import React from 'react'

import s from './Timeline.module.css'

const TimelineWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={s.root}>
      <div className={s.wrapper}>{children}</div>
    </section>
  )
}

export default TimelineWrapper
