import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
    subsets: ['Latin'],
    weight: ['400', '500']
})

export default function UnmatchFeature() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <div className='pt-4'>
                    <h1 className={`text-center font-bold text-[28px] text-[#2D2D2D] ${roboto.className}`}>Unmatchable features </h1>
                    <p className={` text-center font-normal text-[16px] text-[#657182] pb-6 ${roboto.className}`}>short description place in here</p>
                </div>
                <Flex className='gap-8'>
                    <div className='flex flex-col gap-8'>
                        <div className='w-[640px] rounded-[20px] h-[640px] bg-white'>

                        </div>
                        <div className='w-[640px] rounded-[20px] h-[640px] bg-white'>

                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='w-[640px] rounded-[20px] h-[416px]  bg-white'></div>
                        <div className='w-[640px] rounded-[20px] h-[416px] bg-white'></div>
                        <div className='w-[640px] rounded-[20px] h-[416px] bg-white'></div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}
