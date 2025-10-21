import Container from '@/components/Container'
import Flex from '@/components/Flex'
import ImageMask from '@/components/ImageMask'
import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
    subsets: ['Latin'],
    weight: ['400', '500', '600']
})

export default function HappyPartner() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <h1 className={`pt-[64px] pb-[85px] text-center font-bold text-[24px] ${roboto.className}`}>Happy Partners</h1>
                <Flex className='gap-8 pb-[85px]'> 
                    <ImageMask src={'/Happypartner 1.png'} name='Arlene McCoy' biolink='biolinklite/taylorswift' />
                    <ImageMask src={'/Happypartner 2.png'} name='Esther Howard' biolink='biolinklite/zanephillips' />
                    <ImageMask src={'/Happypartner 3.png'} name='Eleanor Pena' biolink='biolinklite/lebronjames' />
                    <ImageMask src={'/Happypartner 4.png'} name='Darrell Steward' biolink='biolinklite/gunnarpeterson' />
                    <ImageMask src={'/Happypartner 5.png'} name='Arlene McCoy' biolink='Marvin McKinney' />
                    <ImageMask src={'/Happypartner 6.png'} name='Jane Cooper' biolink='biolinklite/wellofpodcast' />
                </Flex>
            </Container>
        </section>
    )
}
