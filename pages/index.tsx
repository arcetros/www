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

const ProjectItem = ({
  children,
  key,
  slug
}: {
  slug?: string
  children: React.ReactNode
  key?: any
  id: number
}) => {
  return (
    <Link href={`/${slug?.toLowerCase()}`} key={key}>
      <div
        key={key}
        className={clsx(
          'group relative mb-1 flex cursor-pointer flex-col justify-between rounded-xl border border-primary-1 transition duration-300 ease-in-out hover:bg-primary-1'
        )}
      >
        {children}
        <div className='flex items-center justify-between rounded-b-xl border-t border-primary-1 duration-300 ease-in-out group-hover:bg-[#383c63]'>
          <h5 className='p-4 text-sm'>See detailed info</h5>
          <div className='pr-4'>
            <CornerDownRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  )
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
    <div className='flex min-h-screen flex-col justify-center bg-[#171717]/90  py-[calc(4.2rem*2)] px-4 xl:px-0'>
      <Container>
        <Profile />

        {/* <h1 className='mt-32 w-fit text-lg font-bold'>Featured Projects</h1>
        <p className='text-sm text-gray-200'>These are lists of project that i&#39;am proud of</p>
        <div className='mt-8 grid w-full grid-cols-1 flex-wrap gap-2 lg:grid-cols-2'>
          {repos.map((repo, id) => (
            <ProjectItem slug={repo.name} id={id} key={id}>
              <div className='p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='mr-2 flex h-8 w-8 rounded-full bg-primary-1'>
                      <span className='m-auto'>{repo.name.slice(0, 1)}</span>
                    </div>
                    <h1 className='w-fit pr-4 text-lg text-gray-100'>{repo.name}</h1>
                  </div>
                  <div className='flex items-center gap-x-3 text-gray-300'>
                    <Star size={15} />
                    <span>{repo.stars}</span>
                  </div>
                </div>

                <p className='mt-8 w-full pb-8 text-sm text-gray-300 '>{repo.description}</p>
              </div>
            </ProjectItem>
          ))}
        </div>

        <Link href='https://github.com/arcetros?tab=repositories'>
          <a
            target='_blank'
            className='relative mt-8 mb-8 flex w-full cursor-pointer flex-col items-start rounded-xl border border-primary-1 px-4 py-8 text-primary-5 transition-transform duration-300 ease-in-out hover:scale-105 lg:flex-row'
          >
            <span className='mr-4 rounded-full bg-primary-1 p-3'>
              <Paperclip size={20} />
            </span>
            <div className='mt-4 lg:mt-2'>
              <h1 className='w-fit text-lg font-bold'>Other Projects</h1>
              <p className='mt-2 text-sm text-gray-200'>
                Here you can see the rest of my projects that I have listed on my github repo.
              </p>
            </div>
          </a>
        </Link> */}

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
    </div>
  )
}

export default Home
