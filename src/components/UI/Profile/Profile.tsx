import Image from 'next/image'
import React from 'react'
import { GitHub, Linkedin } from 'react-feather'

import { GITHUB_URL, LINKEDIN_URL } from '@/src/constants'

import s from './Profile.module.css'

const Profile: React.FunctionComponent = () => {
  return (
    <div className={s.root}>
      <div className='flex-grow-1 flex justify-between'>
        <div className='relative h-32 w-32'>
          <Image src='/peep.png' layout='fill' objectFit='cover' className='rounded-full' />
        </div>
      </div>
      <h1 className='mt-2 text-2xl font-bold'>Muhammad Mufid Arkanu</h1>
      <ul className='flex text-sm font-normal text-gray-300'>
        <li>he/him</li>
        <li>Indonesia</li>
      </ul>
      <div className='mt-3 flex text-sm'>
        <span className='text-primary-4'>-</span>
        <ul className='ml-3 flex items-center'>
          <li>Full-time leaner</li>
          <li className='cursor-pointer font-bold text-primary-4 hover:underline'>
            <a href='/arcetros-resume.pdf' target='_blank'>
              View resume
            </a>
          </li>
        </ul>
      </div>
      <p className='mt-3 text-sm font-normal'>
        A software engineer specialized in front-end development, building things that improves the
        lives of people.
      </p>
      <div className='mt-4 flex gap-x-3'>
        <div className='cursor-pointer rounded-full p-2 transition duration-200 ease-out hover:bg-[#50505041]'>
          <a href={GITHUB_URL} target='_blank' rel='noreferrer'>
            <GitHub width={20} height={20} />
          </a>
        </div>
        <div className='cursor-pointer rounded-full p-2 transition duration-200 ease-out hover:bg-[#50505041]'>
          <a href={LINKEDIN_URL} target='_blank' rel='noreferrer'>
            <Linkedin width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
