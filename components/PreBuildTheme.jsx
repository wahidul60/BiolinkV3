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
            <Image 
                className='pt-14 pl-[100px] pb-[49px]'
                src={'/umlimited profile.png'}
                width={540} 
                height={300}
                alt='this'
            />

            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>Unlimited pre-build theme</p>
        </div>
    )
}




//  <Image className='z-50 absolute bottom-0 left-72 top-67' src='/theme 1.png' width={300} height={238} alt='umlimited' />
//                 <Image className='z-49 absolute -bottom-20 top-30 left-79' src='/theme 4.png' width={300} height={238} alt='umlimited' />
//                 <Image className='z-47 absolute -bottom-20 top-21 left-17' src='/theme 3.png' width={300} height={238} alt='umlimited' />
//                 <Image className='z-48 absolute -bottom-20 top-61 left-6' src='/theme 2.png' width={300} height={238} alt='umlimited' />  