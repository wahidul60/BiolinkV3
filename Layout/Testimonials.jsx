import Card from '@/components/Card'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function Testimonials() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <h1
                    className={`font-bold text-center pt-[120px] text-[#2D2D2D] text-[28px] pb-3 ${roboto.className}`}>
                    Testimonials
                </h1>
                <p
                    className={`font-regular text-center pb-8 text-[#657182] text-[16px] ${roboto.className}`}>
                    How to create  and share link to enrich your followers
                </p>

                <Flex>
                    <div className='w-1/3'>
                        <Card />
                    </div>
                    <div className='w-1/3'>
                        <Card />
                    </div>
                    <div className='w-1/3'>
                        <Card />
                    </div>
                </Flex>

            </Container>
        </section>
    )
}
