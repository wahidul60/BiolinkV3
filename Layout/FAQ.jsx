import Container from '@/components/Container'
import React from 'react'
import { Roboto } from 'next/font/google'
import Flex from '@/components/Flex'
import Button from '@/components/Button'
import Accordium from '@/components/Accordium'

const roboto = Roboto({
    subsets: ['Latin'],
    weight: ['400', '500', '600']
})

export default function FAQ() {
    return (
        <section className='bg-[#f0f0f0] pt-[96px]'>
            <Container>
                <div className='pb-[64px]'>
                    <Flex className='border rounded-3xl border-amber-500 p-8 '>
                    <div className='w-1/3 '>
                        <h1 className={`${roboto.className} font-semibold text-[28px] text-[#2D2D2D] pb-6`}>FAQs</h1>
                        <p className={`${roboto.className} font-semibold text-[18px] text-[#949494] pb-6`}>Find answers to your questions about our Bio link account and profile</p>
                        <Flex className='gap-6'>
                            <p className={`${roboto.className} font-bold text-[20px] text-[#2D2D2D]`}>Still have questions?</p>
                            <Button text='Contact' className='bg-[#EA580C] text-white hover:bg-white hover:text-black' />
                        </Flex>
                    </div>
                    <div className='w-2/3'>                       
                        <Accordium text='1. What is a biolink website?' accordionText='This is a social media website'/>
                        <Accordium text='2. Who can benefit from using a biolink?' accordionText='You can create your profile'/>
                        <Accordium text='3. Can I customize the design of my biolink page?' accordionText='There is much option'/>
                        <Accordium text='4. Is it mobile-friendly?' accordionText='This is a social media website'/>
                        <Accordium text='5. Can I track how many people click my links?' className='border-b border-amber-500' accordionText='This is a social media website'/>                        
                    </div>
                </Flex>
                </div>
            </Container>
        </section>
    )
}
