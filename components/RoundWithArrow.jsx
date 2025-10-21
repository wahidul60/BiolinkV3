import Flex from '@/components/Flex'
import Image from 'next/image';
import React from 'react'

export default function RoundWithArrow({ Icon, Heading, text, showArrow, color }) {
    return (
        <Flex className='items-center gap-3 pb-8 '>
            <div className='rounded-full w-[215px] h-[215px] flex flex-col items-center duration-300 justify-center hover:shadow-md p-6 bg-white'>
                <Icon style={{color:color, fontSize:'40px'}} />
                <p className={`font-semibold text-center text-[16px] pb-3 text-[#2D2D2D]`}>
                    {Heading}
                </p>
                <p className={`font-semibold text-[14px] text-center text-[#4B5768]`}>{text}</p>
            </div>
            {
                showArrow && (<Image
                    src={'/arrow.png'}
                    width={50}
                    height={39}
                    alt='arrow'
                    style={{ width: '115px', height: '34px' }}
                />)
            }
        </Flex>

    )
}
