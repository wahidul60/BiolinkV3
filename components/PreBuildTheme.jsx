import { Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const roboto = Roboto({
    subsets : ['latin'],
    weight : ['400', '500']
})

export default function PreBuildTheme() {
    return (
        <div className='w-[640px] relative rounded-[20px] h-[640px] bg-white overflow-hidden'>            
                <Image className='absolute bottom-0 left-61' src='/theme 4.png' width={300} height={238} alt='umlimited' />
                <Image className='absolute -bottom-20 left-30' src='/theme 1.png' width={300} height={238} alt='umlimited' />
                
            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>Unlimited pre-build theme</p>
        </div>
    )
}
