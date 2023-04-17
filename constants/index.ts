import { TimelineContent } from '@/types/timeline'

export const GITHUB_URL = 'https://github.com/arcetros'
export const GITHUB_API_URL = 'https://api.github.com/users/arcetros/repos'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mufid-arkanu-80b341251/'
export const CAL_URL = 'https://cal.com/arcetros/schedule'

export const FEATURED_GITHUB_PROJECTS = ['poached', 'neulan', 'scrape-recipe-schema', 'chacord']

export const TIMELINE_ITEMS: TimelineContent[] = [
  {
    date: '2022-06-04T09:20:52+00:00',
    endDate: '2022-07-08T10:17:20+00:00',
    title: 'Bali Stage',
    meta: {
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
    date: '2019-01-12T03:50:09+00:00',
    title: 'PT Kriya Jaya Internasional',
    meta: {
      subTitle: 'Intern Digital Designer & Developer',
      variant: 'work'
    }
  }
]
