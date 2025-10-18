import Container from '@/components/Container'
import Flex from '@/components/Flex'
import PreBuildTheme from '@/components/PreBuildTheme'
import HoverImageCard from '@/components/HoverImageCard'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
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

                        <PreBuildTheme />
                        <HoverImageCard />

                    </div>

                    <div className='flex flex-col gap-8'>

                        <div className='w-[640px] rounded-[20px] h-[416px]  bg-white shadow-md'>
                            <Flex className='gap-8 w-full pt-[60px] px-16 pb-[48px]'>
                                <div className='w-3/5'>
                                    <Image src={'/QR Code.png'} width={216} height={216} alt='QR Code' />
                                </div>
                                <div className='w-2/3'>
                                    <p className={`text-[16px] text-[#4B5768] ${roboto.className} font-medium pb-1`}> <span className={`text-[16px] text-[#2D2D2D] ${roboto.className} font-medium`}>QR Code Generator:</span> Instantly create customizable QR codes for websites, social media, and contact details.
                                    </p>
                                    <p className={`text-[16px] text-[#4B5768] ${roboto.className} font-medium pb-1`}><span className={`text-[16px] text-[#2D2D2D] ${roboto.className} font-medium`}>Profile Sharing with QR Code:</span> Share your BioLink profile effortlessly via a scannable QR code, making connections seamless.</p>
                                </div>
                            </Flex>
                            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>create Unlimited profile</p>
                        </div>

                        <div className='w-[640px] rounded-[20px] h-[416px] bg-white shadow-md'>
                            <Image className='py-10 pt-10 mx-auto' src={'/Reasons.png'} width={512} height={255} alt='1s' />
                            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>Responsive for Any Device</p>
                        </div>

                        <div className='w-[640px] rounded-[20px] h-[416px] bg-white shadow-md'>
                            <Image className='py-10 pt-10 mx-auto' src={'/Group 1000001837.png'} width={426} height={250} alt='f' />
                            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>Share and sale</p>
                        </div>

                    </div>

                </Flex>
            </Container>
        </section>
    )
}
