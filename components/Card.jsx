import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import { FaRegStar } from 'react-icons/fa';
import { IoIosStarHalf } from 'react-icons/io';
import { TiStar } from "react-icons/ti";
import Flex from './Flex';

const vietnam = Be_Vietnam_Pro({
    subsets: ['Latin'],
    weight: ['400', '500', '600']
})


export default function Card() {
    return (
        <div className='cursor-pointer group'>

            <div className='text-[#EA580C] items-center justify-center pb-4 gap-1 w-[254px] hidden group-hover:flex'>
                <TiStar className='text-[22px]' />
                <TiStar className='text-[22px]' />
                <TiStar className='text-[22px]' />
                <IoIosStarHalf className='text-[20px]' />
                <FaRegStar />
            </div>

            <div className='h-[400px] w-[254px] rounded-[30px] bg-white px-6'>
                <p className={`pt-8 pb-10 ${vietnam.className} text-[16px] font-light`}>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad etc. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.
                </p>
                <Image
                    src='/avatar 1.png'
                    width={56}
                    height={56}
                    alt='Avater 1'
                    className='pb-4'
                />
                <h1 className={`font-semibold text-[16px] ${vietnam.className}`}>Kieu Trinh</h1>
                <h1 className={`font-light text-[15px] ${vietnam.className}`}>Anzamie Consultant</h1>
            </div>
        </div>
    )
}
