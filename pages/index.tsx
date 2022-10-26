import React from 'react'

import MainTimeline from '@/src/components/Common/Timeline/MainTimeline'
import Container from '@/src/components/UI/Container/Container'
import Profile from '@/src/components/UI/Profile/Profile'
import { getAllProjects, ProjectMeta } from '@/src/services'

export async function getStaticProps() {
  const getProjects = await getAllProjects()

  return { props: { projects: getProjects } }
}

const Home = ({ projects }: { projects: ProjectMeta[] }) => {
  // TODO: Create feautured projects list
  return (
    <main className='flex min-h-screen flex-col justify-center py-[calc(4.2rem*2)] px-4 xl:px-0'>
      <Container>
        <Profile />
        <MainTimeline />
      </Container>
    </main>
  )
}

export default Home
