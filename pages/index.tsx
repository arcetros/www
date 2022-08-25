import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'

import { TimelineSeperator, TimelineWrapper } from '@/src/components/Common/Timeline'
import Container from '@/src/components/UI/Container/Container'
import Timeline from '@/src/components/UI/Timeline'
import { getNewTimeline } from '@/src/Helper'
import { getAllProjects, ProjectMeta } from '@/src/services'

const DUMMY = [
  {
    date: '2021-08-25T03:56:50+00:00',
    title: 'joko',
    meta: {
      stack: 'test',
      star: 2,
      variant: 'work',
      subTitle: 'Lorem Ipsum',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur vitae rerum sequi velit dolores ab. Vel, explicabo maiores iure, sapiente quod iusto totam architecto laboriosam perspiciatis reprehenderit fugit? Quidem, facilis.'
    }
  },
  { date: '2021-12-25T03:56:50+00:00', title: 'eee' },
  { date: '2019-08-25T03:56:50+00:00', title: 'bakekok' },
  { date: '2022-08-25T03:56:50+00:00', title: 'bakekok' }
]

export async function getStaticProps() {
  const projects = getAllProjects()
    .slice(0, 3)
    .map((project) => project.meta)

  return { props: { projects } }
}

const ProjectItem = ({
  children,
  key,
  id,
  slug
}: {
  slug?: string
  children: React.ReactNode
  key?: any
  id: number
}) => {
  return (
    <Link href={`/${slug}`} key={key}>
      <div
        key={key}
        className={clsx(
          'relative flex h-[80px] w-full cursor-pointer items-center justify-center border-x border-b border-secondary hover:bg-secondary lg:basis-[25%]',
          id > 2 && 'border-b-0'
        )}
      >
        {children}
      </div>
    </Link>
  )
}

const Home = ({ projects }: { projects: ProjectMeta[] }) => {
  const { timeline } = getNewTimeline(DUMMY, 'year')
  return (
    <div className='flex min-h-screen flex-col justify-center py-[calc(4.2rem*2)] px-4 xl:px-0'>
      <Container>
        <div className='min-w-full text-gray-50'>
          <h1 className='text-5xl font-bold text-yellow-300'>Arcetros.</h1>
          <p className='mt-[1.25em] w-fit text-base text-gray-50 lg:text-3xl'>
            Hey, I&#39;am Mufid Arkanu, a{' '}
            <strong className='text-yellow-300'>front-end developer</strong> with a passion of
            building accessible, responsive and fast performant{' '}
            <strong className='text-yellow-300'>JAM</strong> stack sites.
          </p>
          <p className='mt-[1.25em]'>
            Find me on{' '}
            <a className='text-yellow-300 underline decoration-yellow-100 hover:decoration-yellow-500'>
              Github
            </a>
            ,{' '}
            <a className='text-yellow-300 underline decoration-yellow-100 hover:decoration-yellow-500'>
              Twitter
            </a>
            <br />
            Mail me at{' '}
            <a className='text-yellow-300 underline decoration-yellow-100 hover:decoration-yellow-500'>
              0arcetros@gmail.com
            </a>
          </p>
        </div>
        <div className='relative mt-32 flex min-w-full items-center bg-gradient-to-l from-secondary to-yellow-200 bg-clip-text text-transparent'>
          <h1 className='w-fit text-4xl font-bold uppercase'>Projects</h1>
        </div>
        <p className='mt-[1em] text-sm text-gray-50'>
          These are list of project that i&#39;am proud of, you can see other project{' '}
          <a
            target='_blank'
            href='https://github.com/arcetros?tab=repositories'
            rel='noreferrer'
            className='text-yellow-200 underline'
          >
            here
          </a>
        </p>
        <div className='mt-8 w-full border-y border-secondary lg:mt-[1em]'>
          {projects.map((project, id) => (
            <ProjectItem slug={project.slug} id={id} key={id}>
              <h1 className='w-fit px-4 text-xl font-bold text-yellow-200'>{project.title}</h1>
              <p className='mt-1 w-full px-4 text-sm text-gray-300'>{project.description}</p>
            </ProjectItem>
          ))}
        </div>
        <div className='relative mt-32 flex min-w-full items-center bg-gradient-to-l from-secondary to-yellow-200 bg-clip-text text-transparent'>
          <h1 className='w-fit text-4xl font-bold uppercase'>Recent Activity</h1>
        </div>

        <TimelineWrapper>
          {timeline
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((item, id) => (
              <TimelineSeperator seperator={item.year} key={id}>
                {item.timeline.map((t, id) => {
                  return (
                    <Timeline
                      content={t}
                      variant={t?.meta?.variant}
                      lastIndex={id + 1 !== item.timeline.length}
                      key={id}
                    />
                  )
                })}
              </TimelineSeperator>
            ))}
        </TimelineWrapper>
      </Container>
    </div>
  )
}

export default Home
