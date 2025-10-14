import React from 'react'
import { DM_Sans } from 'next/font/google'

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500']
})

export default function ({text, className}) {
  return (
    <div>
        <ul>
            <li className={`font-medium text-[14px] text-black hover:text-[#EA580C] duration-300 ${className} ${dm.className}`}>{text}</li>
        </ul>
    </div>
  )
}

