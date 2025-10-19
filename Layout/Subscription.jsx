import Button from '@/components/Button'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function Subscription() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <Flex className='w-full bg-[#EA580C] pt-[80px] flex-col items-center rounded-2xl'>
                    <h1 className={`${poppins.className} font-semibold text-[42px] pb-[50px] text-white text-center`}>Subscribe to our newsletter</h1>
                    <Flex className='gap-6 pb-[80px]'>
                        <input
                            type='text'
                            placeholder='Email address'
                            className= {`bg-[#E59130] rounded-full text-white text-[16px] py-4 pl-5 pr-[130px] ${poppins.className} `}
                        />
                        <Button text='Subscribe Now'  className='bg-white py-4 hover:bg-[#EA580C] hover:text-black'/>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}
