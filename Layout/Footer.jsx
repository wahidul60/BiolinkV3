import Button from '@/components/Button'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function Footer() {
    return (
        <section className='bg-[#f0f0f0] pb-[64px]'>
            <Container>
                 <Flex className='w-full bg-[#EA580C] pt-[80px] flex-col items-center rounded-2xl mb-[64px]'>
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
                <Flex>
                    <div>
                        <Image
                            src={'/Logo.png'}
                            width={142}
                            height={32}
                            className='pb-8'
                        />
                        <p className={`${poppins.className} font-normal pb-[45px] text-[#4B5768] text-[14px]`}>
                            Clarity gives you the blocks and components you need to create a truly professional website.
                        </p>
                        <Flex>
                            <TiSocialTwitterCircular />
                            <TiSocialFacebookCircular />

                        </Flex>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Flex>
            </Container>
        </section>
    )
}
