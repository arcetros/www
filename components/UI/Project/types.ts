import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { ProjectMeta } from '@/src/services'

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: ProjectMeta
}
