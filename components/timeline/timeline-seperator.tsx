import React from 'react'

import s from './main-timeline.module.css'

const TimelineSeperator = ({
  children,
  seperator
}: {
  children: React.ReactNode
  seperator?: string | number | null
}) => {
  return (
    <div className={s.seperator}>
      <span className={s.seperator__head}>{seperator}</span>
      <ul>{children}</ul>
    </div>
  )
}

export default TimelineSeperator
