import React from 'react'
import { User } from '@phosphor-icons/react'

export function CustomerInformationBannerRightSide({ data }) {
  function getFirstName(name: string) {
    let splitName = name.trim().split(' ');

    return splitName[0];
  }

  return (
    <div className='hidden border-2 border-orange-600 border-opacity-50 mb-4 w-[576px] p-2 rounded-lg max-w-sm md:block'>
      <div className='flex items-center gap-4 text-gray-600'>
        <User size={32} weight="bold" />
        <div className='text-sm'>
          <p className='font-semibold'>{getFirstName(data.name)}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  )
}
