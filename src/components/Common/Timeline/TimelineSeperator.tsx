import React from 'react'

import s from './Timeline.module.css'

const TimelineSeperator = ({
  children,
  seperator
}: {
  children: React.ReactNode
  seperator?: string | number | null
}) => {
  return (
    <div className={s.seperator}>
      <span>{seperator}</span>
      <ul>{children}</ul>
    </div>
  )
}

export default TimelineSeperator
