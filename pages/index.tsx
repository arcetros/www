import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { Archive, Paperclip } from 'react-feather'

import { TimelineSeperator, TimelineWrapper } from '@/src/components/Common/Timeline'
import Container from '@/src/components/UI/Container/Container'
import Timeline from '@/src/components/UI/Timeline'
import { getNewTimeline } from '@/src/Helper'
import { getAllProjects, ProjectMeta } from '@/src/services'

const DUMMY = [
  {
    date: '2022-08-07T10:17:20+00:00',
    title: 'Blocite',
    meta: {
      language: 'Typescript',
      star: 2,
      variant: 'project',
      link: 'https://github.com/arcetros/blocite',
      subTitle:
        'Collective of car cultural resources with a shared passion of uncovering the worlds exciting car cultures'
    }
  },
  {
    date: '2022-06-04T09:20:52+00:00',
    endDate: '2022-07-08T10:17:20+00:00',
    title: 'Bali Stage',
    meta: {
      star: 2,
      variant: 'work',
      subTitle: 'Freelance Designer & Developer'
    }
  },
  {
    date: '2021-03-07T09:20:52+00:00',
    title: 'SMK TI Bali Global',
    badgeTitle: 'Education',
    meta: {
      subTitle: 'Graduated vocational highschool'
    }
  },
  {
    date: '2020-03-25T03:56:50+00:00',
    title: 'PT Kriya Jaya Internasional',
    meta: {
      subTitle: 'Intern Digital Designer & Developer',
      variant: 'work'
    }
  }
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
          'group relative mb-1 flex w-full cursor-pointer items-center justify-center'
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
        <div className='min-w-full text-primary-5'>
          <h1 className='text-5xl'>arcetros.</h1>
          <p className='mt-[1.25em] w-fit text-base font-light text-gray-200 lg:text-xl'>
            Hey, I&#39;am Mufid Arkanu, a{' '}
            <strong className='text-primary-4'>front-end developer</strong> with a passion of
            building accessible, responsive and fast performant{' '}
            <strong className='text-primary-4'>JAM</strong> stack sites.
          </p>
          <p className='mt-[1.25em] text-gray-200'>
            Find me on <a className='text-primary-4 underline decoration-yellow-100'>Github</a>,{' '}
            <a className='text-primary-4 underline decoration-yellow-100'>Twitter</a>
            <br />
            Mail me at{' '}
            <a className='text-primary-4 underline decoration-yellow-100'>0arcetros@gmail.com</a>
          </p>
        </div>

        <div className='relative mt-32 mb-8 flex w-fit flex-col items-start rounded text-primary-5 lg:flex-row'>
          <span className='mr-4 rounded-full bg-primary-1 p-3'>
            <Paperclip size={20} />
          </span>
          <div className='mt-4 lg:mt-2'>
            <h1 className='w-fit text-lg font-bold'>Featured Projects</h1>
            <p className='mt-2'>
              These are list of project that i&#39;am proud of, you can see other project{' '}
              <a
                target='_blank'
                href='https://github.com/arcetros?tab=repositories'
                rel='noreferrer'
                className='text-primary-4 underline'
              >
                here
              </a>
            </p>
            <div className='mt-8 w-full lg:mt-[1em]'>
              {projects.map((project, id) => (
                <ProjectItem slug={project.slug} id={id} key={id}>
                  <h1 className='w-fit pr-4 text-xl text-primary-4 group-hover:underline'>
                    {project.title}
                  </h1>
                  <p className='mt-1 w-full px-4 text-sm text-gray-300 group-hover:underline'>
                    {project.description}
                  </p>
                </ProjectItem>
              ))}
            </div>
          </div>
        </div>

        <div className='relative mt-32 mb-8 flex w-fit flex-col items-start rounded text-primary-5 lg:flex-row'>
          <span className='mr-4 rounded-full bg-primary-1 p-3'>
            <Archive size={20} />
          </span>
          <div className='mt-4 lg:mt-2'>
            <h1 className='w-fit text-lg font-bold'>Past Experiences</h1>
            <div>
              <p className='mt-2'>
                Currently <strong className='text-primary-4'>open</strong> to new projects and
                select freelance work
              </p>
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
        </div>
      </Container>
    </div>
  )
}

export default Home
