import Image from 'next/image'
import React from 'react'
import { AiFillWarning } from 'react-icons/ai'
import { BsCalendarFill, BsGithub, BsLinkedin } from 'react-icons/bs'

import { BADGES } from '@/src/_content/about-me-badges'
import { CAL_URL, GITHUB_URL, LINKEDIN_URL } from '@/src/constants'

import s from './Profile.module.css'

const Profile: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false)
  const aboutRef = React.useRef<HTMLDivElement | null>(null)

  const handleExpandAbout = () => {
    aboutRef.current?.classList.remove('Profile_about_expand__KQjSV')
    setIsExpanded(true)
  }

  return (
    <div className={s.root}>
      <div className='mb-4 border-t border-neutral-900 pb-4'>
        <div className='flex items-center space-x-2 rounded border-l-4 border-orange-300 bg-orange-300 bg-opacity-20 py-3 px-3'>
          <AiFillWarning className='h-6 w-6 text-yellow-300' />
          <span className='text-sm font-medium'>
            I&apos;m currently open for front-end full time position.
          </span>
        </div>
      </div>
      <div className='flex-grow-1 flex justify-between'>
        <picture className='relative h-32 w-32'>
          <Image
            src='/peep.png'
            alt='Mufid Arkanu'
            layout='fill'
            objectFit='cover'
            className='rounded-full'
          />
        </picture>
      </div>
      <h1 className='mt-2 text-2xl font-bold text-neutral-50'>Muhammad Mufid Arkanu</h1>
      <ul className='mt-1 flex text-sm font-normal text-neutral-200'>
        <li>he/him</li>
        <li>Bali, Indonesia</li>
      </ul>
      <div className='flex pt-4 text-sm'>
        <ul className='flex flex-wrap items-center'>
          <li className='text-neutral-300'>Front-End Developer, self employed</li>
          <li className='cursor-pointer font-bold text-neutral-300 hover:underline'>
            <a href='/arcetros-resume.pdf' target='_blank'>
              View resume
            </a>
          </li>
        </ul>
      </div>
      <dl className='ml-[-0.25rem] flex flex-wrap pt-4'>
        {BADGES.map((badge) => (
          <dt
            key={badge.title}
            className='m-1 flex cursor-default items-center rounded-[6.25rem] border border-neutral-800 px-4 py-[0.625rem] transition-all hover:bg-neutral-800 hover:bg-opacity-30'
          >
            {badge.icon}
            <span className='text-sm font-semibold text-neutral-100'>{badge.title}</span>
          </dt>
        ))}
      </dl>
      <section className=' pt-4'>
        <div className='relative'>
          <div ref={aboutRef} className={s.about_expand}>
            <p className='text-sm font-normal text-neutral-300'>
              👋{' '}
              <strong>
                Hey there!, my name is Muhammad Mufid Arkanu, and I go by arcetros on the internet.
              </strong>
            </p>
            <p className='pt-4 text-sm font-normal text-neutral-300'>
              I am a self taught web developer specialized in front-end development based in Bali,
              Indonesia, helping to build things that improve lives and accessible to everyone.
            </p>
            <p className='pt-4 text-sm font-normal text-neutral-300'>
              I mainly work within the <strong>React</strong> ecosystem, but i&apos;m keen on
              learning new tools & technologies. On the frond-end I have experiences with{' '}
              <strong>JavaScript, Typescript, Next.js and tiny bit of Gatsby</strong>
            </p>
          </div>
        </div>
        {!isExpanded && (
          <div
            onClick={handleExpandAbout}
            className='bottom-0 z-50 flex cursor-pointer text-sm font-bold text-neutral-400'
          >
            Read more
          </div>
        )}
      </section>
      <section className='pt-4'>
        <div className='ml-[-0.5rem] flex items-center space-x-4'>
          <a
            target='_blank'
            className='group rounded-full p-2 transition-all hover:bg-neutral-800'
            href={GITHUB_URL}
            rel='noreferrer'
          >
            <BsGithub className='h-5 w-5 text-neutral-200' />
          </a>
          <a
            target='_blank'
            className='group rounded-full p-2 transition-all hover:bg-neutral-800'
            href={LINKEDIN_URL}
            rel='noreferrer'
          >
            <BsLinkedin className='h-5 w-5 text-neutral-200' />
          </a>
          <a
            target='_blank'
            className='group rounded-full p-2 transition-all hover:bg-neutral-800'
            href={CAL_URL}
            rel='noreferrer'
          >
            <BsCalendarFill className='h-5 w-5 text-neutral-200' />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Profile
