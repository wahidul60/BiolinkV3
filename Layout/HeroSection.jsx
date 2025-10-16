import Button from '@/components/Button';
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { IBM_Plex_Sans, Inter, Source_Serif_4 } from 'next/font/google'
import { IoMdSearch } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';


const source_serif = Source_Serif_4({
    subsets: ['latin'],
    weight: ['400', '500']
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500']
})
const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function HeroSection() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <Flex className='gap-[64px] pt-[179px] pb-[189px]'>
                    <div className='w-1/2'>
                        <h1 className={`text-[44px] text-[#EA580C] pb-4 ${source_serif.className}`} >All that defines you in a single, seamless bio link</h1>
                        <p className={`text-xl pb-[10px] ${inter.className}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                        <div className="border-2 rounded-full border-[#EA580C] relative pl-4 pr-2 mb-[62px] flex items-center justify-between">
                            <div className="flex items-center py-1">
                                <IoMdSearch className="text-gray-600" />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="py-3 pl-3 pr-4 outline-none bg-transparent w-full"
                                />
                            </div>
                            <Button className=" bg-[#EA580C] text-white rounded-full" text="Claim your link"/>                           
                        </div>

                        <p className={`text-[18px] pb-2 text-[#2D2D2D] font-medium ${ibm.className}`}>Trusted by 5k+ users</p>
                        <Flex className='items-center gap-2'>
                            <Flex className='text-[#EA580C]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </Flex>
                            <p className={`text-[16px] font-normal text-[#2D2D2D] ${ibm.className}`}>4.8/5</p>
                            <p className={`text-[16px] font-normal text-[#2D2D2D] ${ibm.className}`}>14k Reviews</p>
                        </Flex>
                    </div>
                    <div className='w-1/2'>
                        <Image src='/homeBanner.GIF' alt='this hero section' width={990} height={742} />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}
