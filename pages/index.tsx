import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Archive, CornerDownRight, Paperclip, Star } from 'react-feather'

import { TimelineSeperator, TimelineWrapper } from '@/src/components/Common/Timeline'
import Container from '@/src/components/UI/Container/Container'
import Profile from '@/src/components/UI/Profile/Profile'
import Timeline from '@/src/components/UI/Timeline'
import { TIMELINE_ITEMS } from '@/src/constants'
import { getNewTimeline } from '@/src/Helper'
import { getAllProjects, ProjectMeta } from '@/src/services'

import { TProjects } from './api/projects'

export async function getStaticProps() {
  const projects = getAllProjects()
    .slice(0, 3)
    .map((project) => project.meta)

  return { props: { projects } }
}

const Home = ({ projects }: { projects: ProjectMeta[] }) => {
  const [repos, setRepos] = React.useState<TProjects[]>([])

  React.useEffect(() => {
    const fetchProject = async () => {
      const projects = await fetch('/api/projects')
      return await projects.json()
    }
    fetchProject().then(({ repos }) => {
      const repositories = repos as TProjects[]
      const filterProjects = repositories
        .filter((repo) => projects.some((project) => project.slug === repo.name.toLowerCase()))
        .sort((a, b) => b.stars - a.stars)
      setRepos(filterProjects)
    })
  }, [])
  const { timeline } = getNewTimeline(TIMELINE_ITEMS, 'year')

  return (
    <main className='flex min-h-screen flex-col justify-center py-[calc(4.2rem*2)] px-4 xl:px-0'>
      <Container>
        <Profile />
        <div className='relative mt-16 mb-8 flex w-fit flex-col items-start rounded text-primary-5 lg:flex-row'>
          <div className='mt-4 lg:mt-2'>
            <TimelineWrapper>
              {timeline
                .sort((a, b) => parseInt(b.year) - parseInt(a.year))
                .map((item, id) => (
                  <TimelineSeperator seperator={item.year} key={id}>
                    {item.timeline
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((t, id) => (
                        <Timeline
                          badgeTitle={t.badgeTitle}
                          content={t}
                          variant={t?.meta?.variant}
                          lastIndex={id + 1 !== item.timeline.length}
                          key={id}
                        />
                      ))}
                  </TimelineSeperator>
                ))}
            </TimelineWrapper>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Home
