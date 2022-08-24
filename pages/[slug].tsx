import type { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import React from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

import { type MDXPost, Content } from '@/src/components/UI/Project'
import { getProjectFromSlug, getSlugs } from '@/src/services'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { content, meta } = getProjectFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
    }
  })

  return { props: { project: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

const Project = ({ project }: { project: MDXPost }) => {
  return (
    <>
      <NextSeo
        title={project.meta.title}
        description={project.meta.introduction}
        openGraph={{
          description: project.meta.introduction,
          images: [{ url: `https://arcetros.vercel.app/projects/${project.meta.slug}.png` }]
        }}
      />
      <div className='flex min-h-screen justify-center py-[calc(4.2rem*2)] px-4 xl:px-0'>
        <Content project={project} />
      </div>
    </>
  )
}

export default Project
