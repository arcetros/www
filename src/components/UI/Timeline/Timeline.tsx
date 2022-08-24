import React from 'react'
import { Clock } from 'react-feather'

const Timeline = () => {
  return (
    <li className='relative'>
      <div>
        {/* if only 1 or last item it disabled */}
        <div className='absolute -left-10 top-6 -bottom-[90px] w-[1px] bg-gray-400' />
        <Clock className='absolute left-[calc((40px)*-1-9px)] top-[7px] text-gray-400' size={20} />
      </div>
      {/* color is set by categories */}
      <div className='mb-3 inline-flex rounded-md bg-[#8fe1511a] py-2 px-3'>
        <strong className='text-[0.8rem] text-[#8fe151]'>Created this portfolio site</strong>
      </div>
      {/* add stacks if available */}
      <div className='mb-1 text-[0.8rem] leading-normal text-gray-300'>Aug 18, 2022</div>
      <h2 className='text-3xl'>arcetros.vercel.app</h2>
    </li>
  )
}

export default Timeline
