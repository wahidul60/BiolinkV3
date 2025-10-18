import { Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function PreBuildTheme() {

    return (
        <div className='w-[640px] relative rounded-[20px] h-[640px] bg-white overflow-hidden shadow-md'>
            <div className='relative group duration-300 mt-[95px] hover:left-10 left-52'>
                <Image className='absolute left-1 group-hover:left-10 duration-300 border-1' src={'/Carousel Image.png'} width={204} height={348} alt='1st' />
                <Image className='absolute left-2 group-hover:left-20 duration-300 border-1' src={'/Carousel Image 1.png'} width={204} height={348} alt='2nd' />
                <Image className='absolute left-3 group-hover:left-30 duration-300 border-1' src={'/Carousel Image 2.png'} width={204} height={348} alt='3rd' />
                <Image className='absolute left-4 group-hover:left-40 duration-300 border-1' src={'/Carousel Image 3.png'} width={204} height={348} alt='4th' />
                <Image className='absolute left-5 group-hover:left-50 duration-300 border-1' src={'/Carousel Image 4.png'} width={204} height={348} alt='5th' />
                <Image className='absolute left-6 group-hover:left-60 duration-300 border-1' src={'/Carousel Image 5.png'} width={204} height={348} alt='6th' />
                <Image className='absolute left-7 group-hover:left-70 duration-300 border-1' src={'/Carousel Image 7.png'} width={204} height={348} alt='8th' />
            </div>
            <p className={`text-center pt-[450px] text-[#EA580C] text-[20px] ${roboto.className}`}>Create Unlimited Profile</p>
        </div>
    )
}
