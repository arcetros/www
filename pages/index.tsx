import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { Clock } from 'react-feather'

import Container from '@/src/components/UI/Container/Container'
import { getAllProjects, ProjectMeta } from '@/src/services'

import s from '../styles/Home.module.css'

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
    <Link href={`/${slug}`}>
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
  return (
    <div className='flex min-h-screen flex-col justify-center py-[calc(4.2rem*2)] px-4 xl:px-0'>
      <Container>
        <div className='min-w-full text-yellow-200'>
          <h1 className='text-5xl font-bold text-yellow-300'>Arcetros.</h1>
          <p className='mt-[1.25em] w-fit text-base lg:text-3xl'>
            Hey, I&#39;am Mufid Arkanu, a{' '}
            <strong className='text-yellow-300'>front-end developer</strong> with a passion of
            building accessible, responsive and fast performant{' '}
            <strong className='text-yellow-300'>JAM</strong> stack sites.
          </p>
          <p className='mt-[1.25em]'>
            Find me on{' '}
            <a className='underline decoration-yellow-100 hover:decoration-yellow-500'>Github</a>,{' '}
            <a className='underline decoration-yellow-100 hover:decoration-yellow-500'>Twitter</a>
            <br />
            Mail me at{' '}
            <a className='underline decoration-yellow-100 hover:decoration-yellow-500'>
              0arcetros@gmail.com
            </a>
          </p>
        </div>
        <div className='relative mt-32 flex min-w-full items-center bg-gradient-to-l from-secondary to-yellow-200 bg-clip-text text-transparent'>
          <h1 className='w-fit text-4xl font-bold uppercase'>Projects</h1>
        </div>
        <p className='mt-[1em] text-sm text-gray-300'>
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
        <section className='relative min-h-[calc(4.2rem*2)]'>
          <div className='relative flex w-full flex-col '>
            <div className='py-8'>
              <span className='relative mb-8 inline-block '>2022</span>
              <ul className='flex flex-col gap-[80px] pl-14'>
                <li className='relative'>
                  <div>
                    {/* <div className='absolute -left-10 top-6 h-full w-[1px] bg-gray-200'></div> */}
                    <Clock className='absolute left-[calc((40px)*-1-9px)] top-[7px]' size={20} />
                  </div>
                  <div className='mb-3 inline-flex rounded-md bg-[#8fe1511a] py-2 px-3'>
                    <strong className='text-[0.8rem] text-[#8fe151]'>
                      Created this portfolio site
                    </strong>
                  </div>
                  <div className='mb-1 text-[0.8rem] leading-normal text-gray-300'>
                    Aug 18, 2022
                  </div>
                  <h2 className='text-3xl'>arcetros.vercel.app</h2>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Home
