import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { Roboto, Roboto_Serif } from 'next/font/google'
import React from 'react'
import { BsHourglassSplit } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiSeoLine } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";


const roboto = Roboto({
    subsets: ['Latin'],
    weight: ['400', '500', '700']
})
const robotoSerif = Roboto_Serif({
    subsets: ['Latin'],
    weight: ['400', '500', '700']
})


export default function HeaderGone() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <div className='w-full pb-[98px]'>
                    <h1 className={`pt-8 text-2xl text-[#2D2D2D] pb-3 text-center text-[28px] font-bold ${roboto.className} `}>Header gone here</h1>
                    <p className={`text-[#657182] pb-[68px] text-[16px] text-center ${roboto.className}`}>short description place in here</p>

                    <Flex className='gap-12'>
                        <div className='w-4/7'>

                            <Flex className='flex-col items-center gap-8'>
                                <Flex className='gap-8 mx-auto items-center justify-center'>

                                    <div className='w-[440px] flex flex-col items-center h-[244px] bg-white rounded-[20px] shadow-md'>
                                        <h1
                                            className={`pt-9 text-center font-semibold text-[#4B5768] ${roboto.className} text-[16px]`}>
                                            Load all content in under
                                        </h1>

                                        <Flex className='items-center gap-2'>
                                            <BsHourglassSplit className='text-[#EA580C] text-[40px]' />
                                            <p className={`text-[64px] ${roboto.className}`} >100</p>
                                        </Flex>

                                        <p className={`text-center font-semibold text-[#4B5768] ${roboto.className} text-[16px]`}>milliseconds</p>
                                        <p className={`text-center pt-4 font-normal text-[#2D2D2D] ${roboto.className} text-[20px]`}>Superfast Loading</p>
                                    </div>

                                    <div className='w-[244px] h-[244px] flex flex-col items-center justify-center bg-white rounded-[20px] shadow-md'>
                                        <FiUsers className='text-9xl text-[#EA580C]' />
                                        <p className={`text-center pt-4 font-normal text-[#2D2D2D] ${roboto.className} text-[20px]`}>Unlimited visitor</p>
                                    </div>

                                </Flex>

                                <Flex className='gap-8'>

                                    <div className='w-[244px] h-[244px] flex flex-col items-center justify-center bg-white rounded-[20px] shadow-md'>
                                        <RiSeoLine className='text-9xl text-[#EA580C]'/>                                       
                                        <p className={`text-center pt-4 font-normal text-[#2D2D2D] ${roboto.className} text-[20px]`}>Free Seo Optimization</p>
                                    </div>

                                     <div className='w-[440px] flex flex-col justify-center items-center h-[244px] bg-white rounded-[20px] shadow-md'>

                                       <RiShieldStarLine className='text-[#EA580C] text-[100px] pb-6' />                                       

                                        <p className={`text-center w-[225px] font-semibold text-[#4B5768] ${roboto.className} text-[16px]`}>with ongoing features and improvements at no extra cost.</p>                                        

                                        <p className={`text-center pt-4 font-normal text-[#2D2D2D] ${roboto.className} text-[20px]`}>Free Seo Optimization</p>
                                    </div>

                                </Flex>
                            </Flex>

                        </div>

                        <div className='w-3/7 my-auto'>
                            <h1 className={`font-bold text-[24px] text-[#2D2D2D] ${roboto.className} pb-4`}>Everything your need to increase your follower in one frame with free of cost.</h1>
                            <p className={`font-medium text-[16px] text-[#4B5768] ${roboto.className}`}>"Grow your audience effortlessly with a single, all-in-one bio link. Showcase your content, social media, products, and more in one seamless place—making it easier for followers to connect, engage, and support you. And the best part? It’s completely free!"</p>
                        </div>
                    </Flex>

                </div>
            </Container>
        </section>
    )
}
