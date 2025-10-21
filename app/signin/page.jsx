import Button from '@/components/Button'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const poppins = Poppins({
  subsets: ['Latin'],
  weight: ['400', '500']
})

export default function page() {
  return (
    <section>
      <Container>

        <Flex className='gap-[137px] mb-[64px]'>
          <div>
            <Image
              src={'/loginImage.png'}
              width={651}
              height={878}
              alt='login'
            />
          </div>
          <div>
            <h1 className={`font-semibold text-[52px] pb-[30px] ${poppins.className}`}>Sign in now 👋</h1>
            <p className={`font-regular text-[18px] pb-[30px] text-[#4B5768] ${poppins.className}`}>Clarity gives you the blocks and components you need to create a truly professional website.</p>
            <Button className={`font-semibold text-[16px] pb-[30px] bg-[#EA580C] text-white ${poppins.className}`} text={'Sign in with Google'} />
          </div>
          
        </Flex>

      </Container>
    </section>
  )
}
