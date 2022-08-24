import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'

import Container from '../Container'
import s from './Content.module.css'
import type { MDXPost } from './types'

const components = {
  h2: (props: any) => (
    <h2
      className='mt-[1.5em] mb-[0.5em] text-2xl font-bold text-yellow-200 no-underline'
      {...props}
    />
  ),
  p: (props: any) => (
    <p className='mb-4' {...props}>
      {props.children}
    </p>
  ),
  li: (props: any) => <li className={s.list}>{props.children}</li>,
  a: (props: any) => <a className='text-yellow-200 hover:underline' {...props} />,
  ul: (props: any) => <ul className='relative' {...props} />
}

export const Content = ({ project }: { project: MDXPost }) => {
  return (
    <Container className='my-auto flex flex-col'>
      <Link href='/'>
        <span className='text-bold cursor-pointer font-mono hover:underline'>cd ..</span>
      </Link>
      <h1 className='font-secondary mt-4 text-5xl text-yellow-200'>{project.meta.title}</h1>
      <p className='mt-8'>{project.meta.introduction}</p>
      <table className='mt-4 w-fit'>
        <tbody>
          <tr>
            <th className='pr-4 text-left text-yellow-200'>stack:</th>
            <td>{project.meta.stacks.join(', ')}</td>
          </tr>

          <tr>
            <th className='pr-4 text-left text-yellow-200'>code:</th>
            <td>
              <Link href={project.meta.code} passHref>
                <a target='_blank' className='underline'>
                  Visit Repository
                </a>
              </Link>
            </td>
          </tr>

          <tr>
            <th className='pr-4 text-left text-yellow-200'>live site:</th>
            <td>
              <Link href={project.meta.live} passHref>
                <a target='_blank' className='underline'>
                  Visit {project.meta.title}
                </a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='relative mt-8 min-w-full'>
        <Image
          src={`/projects/${project.meta.slug}.png`}
          layout='responsive'
          width={280}
          height={150}
          objectFit='cover'
        />
      </div>

      <MDXProvider components={components}>
        <MDXRemote {...project.source} />
      </MDXProvider>
    </Container>
  )
}
