import Container from '@/components/Container'
import Flex from '@/components/Flex'
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

                        <div className='w-[640px] rounded-[20px] h-[640px] bg-white'>
                            <div className='pt-[52px] px-[100px] pb-[52px]'><Image src='/umlimited profile.png' width={440} height={440} alt='umlimited' /></div>
                            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>Unlimited pre-build theme</p>
                        </div>

                        <div className='w-[640px] rounded-[20px] h-[640px] bg-white'>
                            <div className='pt-[52px] px-[100px] pb-[52px]'><Image src='/umlimited profile.png' width={440} height={440} alt='umlimited' /></div>
                            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>Unlimited pre-build theme</p>
                        </div>

                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className='w-[640px] rounded-[20px] h-[416px]  bg-white'>
                            <Flex className='gap-8 pt-[60px] px-16 pb-[48px]'>
                                <Image src={'/QR Code.png'} width={216} height={216} alt='QR Code' />
                                <div>
                                    <p className={`text-[16px] text-[#4B5768] ${roboto.className} font-medium pb-1`}> <span className={`text-[16px] text-[#2D2D2D] ${roboto.className} font-medium`}>QR Code Generator:</span> Instantly create customizable QR codes for websites, social media, and contact details.   <br />
                                    </p>
                                    <p className={`text-[16px] text-[#4B5768] ${roboto.className} font-medium pb-1`}><span className={`text-[16px] text-[#2D2D2D] ${roboto.className} font-medium`}>Profile Sharing with QR Code:</span> Share your BioLink profile effortlessly via a scannable QR code, making connections seamless.</p>
                                </div>
                            </Flex>
                            <p className={`text-center text-[#EA580C] text-[20px] ${roboto.className}`}>create Unlimited profile</p>
                        </div>
                        <div className='w-[640px] rounded-[20px] h-[416px] bg-white'></div>
                        <div className='w-[640px] rounded-[20px] h-[416px] bg-white'></div>
                    </div>

                </Flex>
            </Container>
        </section>
    )
}
