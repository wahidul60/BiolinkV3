import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function ({ text, className }) {
    return (
        <div>
            <button className={`rounded-full px-6 font-medium text-[18px] py-2 text-black cursor-pointer duration-300 border-3 border-[#EA580C] ${roboto.className} ${className}`}>{text}</button>
        </div>
    )
}
