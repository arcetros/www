import { GetStaticProps } from 'next'
import React from 'react'

import MainTimeline from '@/src/components/Common/Timeline/MainTimeline'
import Container from '@/src/components/UI/Container/Container'
import Profile from '@/src/components/UI/Profile/Profile'
import { getAllProjects } from '@/src/services'

import { TProjects } from './api/projects'

export const getStaticProps: GetStaticProps = async () => {
  const getProjects = await getAllProjects()
  console.log(getProjects)

  return { props: { projects: getProjects } }
}

const Home = ({ projects }: { projects: TProjects[] }) => {
  // console.log(projects)
  // TODO: Create feautured projects list
  return (
    <main className='flex min-h-screen flex-col justify-center py-[calc(4.2rem*2)] px-4 xl:px-0'>
      <Container>
        <Profile />
        <MainTimeline projects={projects} />
      </Container>
    </main>
  )
}

export default Home
