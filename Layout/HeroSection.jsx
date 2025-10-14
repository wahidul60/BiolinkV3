import Button from '@/components/Button';
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { IoMdSearch } from "react-icons/io";


const source_serif = Source_Serif_4({
    subsets: ['latin'],
    weight: ['400', '500']
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function HeroSection() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <Flex className='gap-[64px] pt-[179px]'>
                    <div className='w-1/2'>
                        <h1 className={`text-[44px] text-[#EA580C] pb-4 ${source_serif.className}`} >All that defines you in a single, seamless bio link</h1>
                        <p className={`text-xl pb-[10px] ${inter.className}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                        <div className='border rounded border-[#EA580C] relative'>
                            <Flex className='items-center'>
                                <IoMdSearch />
                                <p className='py-5 pl-3 pr-[207px]'>Username</p>
                                <Button className='py-2 bg-[#EA580C] text-white' text={"Clain your link"}/>
                            </Flex>
                        </div>
                    </div>
                    <div className='w-1/2'></div>
                </Flex>
            </Container>
        </section>
    )
}
