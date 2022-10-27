import React from 'react'
import { Briefcase, Code } from 'react-feather'

type IContainer = {
  title: string | number
  Icon: React.ComponentType<any>
}

const props = {
  size: 18,
  className: 'mr-2'
}

const Container = ({ title, Icon }: IContainer) => {
  return (
    <div className='flex'>
      <Icon {...props} />
      {title}
    </div>
  )
}

export const TitleVariants = {
  work: <Container Icon={Briefcase} title='Started a new job' />,
  project: <Container Icon={Code} title='Created a project' />,
  default: 'Placeholder'
}

export const LanguageVariants = {
  TypeScript: <div className='mx-1.5 h-2 w-2 rounded-full bg-blue-500' />
}
