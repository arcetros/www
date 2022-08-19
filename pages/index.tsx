import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { clsx } from 'clsx'
import React from 'react'

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
  slug,
  children,
  key,
  id
}: {
  slug?: string
  children: React.ReactNode
  key?: any
  id: number
}) => {
  return (
    <div
      key={key}
      className={clsx(
        'relative flex h-[210px] w-full cursor-pointer flex-col items-start justify-center border-x border-b border-secondary hover:bg-secondary lg:h-[420px] lg:basis-[25%]',
        id > 2 && 'border-b-0'
      )}
    >
      {children}
    </div>
  )
}

const Home = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <div className={s.main}>
      <Container>
        <div className='min-w-full px-8 text-yellow-200'>
          <h1 className='text-5xl font-bold text-yellow-300'>Arcetros.</h1>
          <p className='mt-[1.25em] w-fit text-base lg:text-5xl'>
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
          <h1 className='w-fit px-8 text-4xl font-bold uppercase lg:text-9xl'>Projects</h1>
        </div>
      </Container>
      <div className='mt-8 w-full border-y border-secondary lg:mt-16'>
        <Container className='flex flex-wrap'>
          {projects.map((project, id) => (
            <ProjectItem slug={project.slug} key={project.slug} id={id}>
              <h1 className='w-fit px-4 text-xl font-bold text-yellow-200'>{project.title}</h1>
              {/* <div className='relative h-full w-full overflow-hidden bg-center'>
                <Image
                  src={`/projects/${project.slug}.png`}
                  alt={project.slug}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-xl grayscale'
                />
              </div> */}
              <div className='absolute bottom-0 right-0 flex items-center rounded-l rounded-t bg-secondary p-4'>
                <p className='mr-2'>See Project</p>
                <ArrowNarrowRightIcon className='h-5 w-5 text-yellow-200' />
              </div>
              <p className='mt-1 w-full px-4 text-sm text-gray-300'>{project.description}</p>
            </ProjectItem>
          ))}
        </Container>
      </div>
      <Container className='px-8'>
        <div className='relative mt-32 min-w-full items-center'>
          <h1 className='w-fit bg-gradient-to-l from-secondary to-yellow-200 bg-clip-text text-4xl font-bold uppercase text-transparent lg:text-9xl'>
            Resources
          </h1>
        </div>
        <div className='mt-8 flex flex-col justify-between lg:mt-16 lg:flex-row'>
          <div className='mr-8'>
            <h1 className='text-2xl text-yellow-300 lg:text-4xl'>Stack</h1>
            <p className='mt-3 text-yellow-200'>
              Other services or open source technologies that I use to build this site.
            </p>
          </div>
          <ul className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-0 lg:grid-cols-4'>
            <li>Typescript</li>
            <li>next.js</li>
            <li>clsx</li>
            <li>glob</li>
            <li>gray-matter</li>
            <li>next-mdx-remote</li>
            <li>next-sitemap</li>
            <li>font-source</li>
            <li>mdx-js</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Home
