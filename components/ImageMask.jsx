import Image from 'next/image'
import React from 'react'
import { Roboto } from 'next/font/google'

const roboto=Roboto({
    subsets: ['Latin'],
    weight: ['400', '500', '600']
})

export default function ImageMask({src, name, biolink}) {
  return (
    <div>
        <div className='w-[184px] h-[184px] rounded-full pb-[85px] border-amber-400'>
            <Image
              src={src}
              width={184}
              height={184}
              alt='Profile'
              className='pb-7'
            />
            <h1 className={`text-2xl text-center font-medium text-[#374151] ${roboto.className}`}>{name}</h1>
            <p className={`text-[16px] text-center font-normal  text-[#EA580C] ${roboto.className}`}>{biolink}</p>
        </div>
    </div>
  )
}
