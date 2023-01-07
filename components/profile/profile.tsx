import Image from 'next/image'
import React from 'react'
import { BsCalendarFill, BsGithub, BsLinkedin } from 'react-icons/bs'

import { BADGES } from '@/_content/about-me-badges'
import { CAL_URL, GITHUB_URL, LINKEDIN_URL } from '@/constants'
import { trackEvent } from '@/libs/helpers/umami-tracker'

import s from './profile.module.css'

const Profile: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false)
  const aboutRef = React.useRef<HTMLDivElement | null>(null)

  const handleExpandAbout = () => {
    trackEvent({ eventName: 'Read more bio', eventData: { type: 'other' }, url: '/' })
    aboutRef.current?.classList.remove('profile_about_expand___DF1Q')
    setIsExpanded(true)
  }

  const handleTrackResume = () => {
    trackEvent({ eventName: 'Resume link', eventData: { type: 'resume' }, url: '/' })
  }

  const handleTrackSocials = (social: string) => {
    trackEvent({ eventName: `${social} icon`, eventData: { type: 'link' }, url: '/' })
  }

  const SOCIALS = [
    { label: 'Github', href: GITHUB_URL, icon: <BsGithub className='h-5 w-5 text-neutral-200' /> },
    {
      label: 'LinkedIn',
      href: LINKEDIN_URL,
      icon: <BsLinkedin className='h-5 w-5 text-neutral-200' />
    },
    {
      label: 'Calendar',
      href: CAL_URL,
      icon: <BsCalendarFill className='h-5 w-5 text-neutral-200' />
    }
  ]

  return (
    <div className={s.root}>
      <div className='flex-grow-1 flex items-end justify-between'>
        <picture className='relative h-32 w-32'>
          <Image
            src='/peep.png'
            alt='Mufid Arkanu'
            layout='fill'
            objectFit='cover'
            className='rounded-full'
          />
        </picture>
        <div className='ml-[-0.5rem] flex items-center space-x-4'>
          {SOCIALS.map((social, idx) => (
            <a
              key={idx}
              onClick={() => handleTrackSocials(social.label)}
              target='_blank'
              className='group rounded-full p-2 transition-all before:!content-none hover:bg-neutral-800'
              href={social.href}
              rel='noreferrer'
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <h1 className='pt-6 text-2xl font-bold text-neutral-50'>Muhammad Mufid Arkanu</h1>
      <div className='flex pt-2 text-sm'>
        <ul className='flex flex-wrap items-center'>
          <li className='text-neutral-300'>Front-End Developer</li>
          <a
            className='font-bold text-neutral-300'
            onClick={handleTrackResume}
            href='/arcetros-resume.pdf'
            target='_blank'
          >
            View resume
          </a>
        </ul>
      </div>
      <dl className='ml-[-0.25rem] flex flex-wrap pt-4'>
        {BADGES.map((badge) => (
          <dt
            key={badge.title}
            className='m-1 flex cursor-default items-center rounded-[6.25rem] border border-neutral-800 px-4 py-[0.625rem] transition-all hover:bg-neutral-800 hover:bg-opacity-30'
          >
            {badge.icon}
            <span className='text-xs font-semibold text-neutral-100 md:text-sm'>{badge.title}</span>
          </dt>
        ))}
      </dl>
      <section className='pt-4'>
        <div className='relative'>
          <div
            ref={aboutRef}
            className={s.about_expand}
            style={{ maxHeight: isExpanded ? '100%' : '85px' }}
          >
            <p className='text-sm font-normal text-neutral-100'>
              Hey there!, my name is Muhammad Mufid Arkanu, and I go by arcetros on the internet.
            </p>
            <p className='pt-4 text-sm font-normal text-neutral-100'>
              I am a self taught web developer specialized in front-end development based in Bali,
              Indonesia, helping to build things that improve lives and accessible to everyone.
            </p>
            <p className='pt-4 text-sm font-normal text-neutral-100'>
              I mainly work within the <strong>React</strong> ecosystem, but i&apos;m keen on
              learning new tools & technologies. On the frond-end I have experiences with{' '}
              <strong>JavaScript, TypeScript, Next.js.</strong>
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
      <section className='pt-4'></section>
    </div>
  )
}

export default Profile
