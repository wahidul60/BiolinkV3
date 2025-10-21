import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['Latin'],
    weight: ['400', '500']
})

export default function Heading({text}) {
  return (
    <div>
        <h1 className={`font-bold text-[28px] text-[#2D2D2D] ${roboto.className}`}>{text}</h1>
    </div>
  )
}
