import React from 'react'
import { DiReact } from 'react-icons/di'
import { FaBook, FaCode, FaLockOpen } from 'react-icons/fa'
import { GiCheckeredFlag } from 'react-icons/gi'
import { SiTypescript } from 'react-icons/si'

const ROOT_CLASSNAME = 'mr-2 h-4 w-4'

export const BADGES = [
  {
    title: 'Front-end Development',
    icon: <FaCode className={`${ROOT_CLASSNAME} text-blue-600`} />
  },
  {
    title: 'React',
    icon: <DiReact className={`${ROOT_CLASSNAME} text-teal-500`} />
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript className={`${ROOT_CLASSNAME} text-blue-500`} />
  },
  {
    title: 'Open Source',
    icon: <FaLockOpen className={`${ROOT_CLASSNAME} text-blue-500`} />
  },
  {
    title: 'Motorsports Enthusiast',
    icon: <GiCheckeredFlag className={`${ROOT_CLASSNAME}`} />
  },
  { title: 'Self Taught', icon: <FaBook className={`${ROOT_CLASSNAME} text-green-500`} /> }
]
