import React, { Children } from 'react'

export default function Container({children}) {
  return (
    <div className='mx-auto max-w-[1312px] px-4 sm:px-6 lg:px-8'>
        {children}
    </div>
  )
}
