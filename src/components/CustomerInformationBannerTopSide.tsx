import React from 'react';

import { User } from "@phosphor-icons/react";

export function CustomerInformationBannerTopSide({ data }) {
  function getFirstName(name: string) {
    let splitName = name.trim().split(' ');

    return splitName[0];
  }

  return (
    <div className=" flex items-center gap-4 w-full text-gray-600 md:max-w-xl my-0  border border-gray-300 py-4 px-10 border-b-0 md:hidden">
      <User size={36} weight="bold" />
      <div className='text-sm'>
        <p className='font-semibold'>{getFirstName(data.name)}</p>
        <p>{data.email}</p>
      </div>
    </div>
  )
}
