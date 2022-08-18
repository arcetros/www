import type { NextPage } from 'next'
import React from 'react'

import s from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.test}>Hello World</h1>
    </div>
  )
}

export default Home
