import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { Archive, CornerDownRight, Paperclip, Star } from 'react-feather'

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
  const { timeline } = getNewTimeline(DUMMY, 'year')
  return (
    <div className='flex min-h-screen flex-col justify-center py-[calc(4.2rem*2)] px-4 xl:px-0'>
      <Container>
        <div className='min-w-full text-primary-5'>
          <h1 className='text-6xl'>
            Hi !
            <br />
            I&#39;m Mufid<span className='text-primary-4'>.</span>
          </h1>
          <p className='mt-[1.25em] w-fit text-base font-light text-gray-200 lg:text-xl'>
            I&#39;am a <strong className='text-primary-4'>front-end developer</strong> with a
            passion of building accessible, responsive and fast performant{' '}
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

        <h1 className='mt-32 w-fit text-lg font-bold'>Featured Projects</h1>
        <p className='text-sm text-gray-200'>These are lists of project that i&#39;am proud of</p>
        <div className='mt-8 grid w-full grid-cols-1 flex-wrap gap-2 lg:grid-cols-2'>
          {projects.map((project, id) => (
            <ProjectItem slug={project.slug} id={id} key={id}>
              <div className='p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='mr-2 flex h-8 w-8 rounded-full bg-primary-1'>
                      <span className='m-auto'>{project.title.slice(0, 1)}</span>
                    </div>
                    <h1 className='w-fit pr-4 text-lg text-gray-100'>{project.title}</h1>
                  </div>
                  <div className='flex items-center gap-x-3 text-gray-300'>
                    <Star size={15} />
                    <span>2</span>
                  </div>
                </div>

                <p className='mt-8 w-full pb-8 text-sm text-gray-300 '>{project.description}</p>
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
        </Link>

        <div className='relative mt-32 mb-8 flex w-fit flex-col items-start rounded text-primary-5 lg:flex-row'>
          <span className='mr-4 rounded-full bg-primary-1 p-3'>
            <Archive size={20} />
          </span>
          <div className='mt-4 lg:mt-2'>
            <h1 className='w-fit text-lg font-bold'>Past Experiences</h1>
            <div>
              <p className='mt-2 text-sm'>
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
