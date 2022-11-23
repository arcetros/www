import Image from 'next/image'
import React from 'react'

import { BADGES } from '@/src/_content/about-me-badges'

import s from './Profile.module.css'

const Profile: React.FunctionComponent = () => {
  return (
    <div className={s.root}>
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
        <li>Indonesia</li>
      </ul>
      <div className='flex pt-4 text-sm'>
        <span className='text-primary-4'>-</span>
        <ul className='ml-3 flex flex-wrap items-center'>
          <li className='text-neutral-200'>Front-End Developer, self employed</li>
          {/* <li className='cursor-pointer font-bold text-primary-4 hover:underline'>
            <a href='/arcetros-resume.pdf' target='_blank'>
              View resume
            </a>
          </li> */}
        </ul>
      </div>
      <dl className='flex flex-wrap pt-4'>
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
      <p className='pt-4 text-sm font-normal text-neutral-200'>
        A software engineer specialized in front-end development, building things that improves the
        lives of people.
      </p>
    </div>
  )
}

export default Profile
