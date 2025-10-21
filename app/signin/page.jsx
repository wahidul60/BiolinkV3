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
          <div className='w-1/2'>
            <Image
              src={'/loginImage.png'}
              width={651}
              height={878}
              alt='login'
            />
          </div>
          <div className='w-1/2'>
            <h1 className={`font-semibold text-[52px] pb-[30px] ${poppins.className}`}>Sign in now 👋</h1>
            <p className={`font-normal text-[18px] pb-[30px] text-[#4B5768] ${poppins.className}`}>Clarity gives you the blocks and components you need to create a truly professional website.</p>
            <Flex className='items-center justify-center pb-[49px]'>
              <Button className={`font-normal py-4 text-[16px] w-full text-center bg-[#EA580C] text-white ${poppins.className}`} text={'Sign in with Google'} />

            </Flex>

            <p className={`text-[14px] pb-2 text-[#2D2D2D] ${poppins.className}`}>username</p>
            <input
              type="text"
              placeholder='i.e. Davon Lean'
              className={`text-[14px] text-[#2D2D2D] py-[17px] px-4 w-full border rounded-full border-[#334155] poppins.className mb-6`}
            />

            <p className={`text-[14px] pb-2 text-[#2D2D2D] ${poppins.className}`}>username</p>
            <input
              type="password"
              placeholder='*********'
              className={`text-[14px] text-[#2D2D2D] py-[17px] w-full px-4 pl-4 ${poppins.className}  rounded-full mb-6 border border-[#334155]`}
            />
            <Flex className='items-center justify-between'>
              <Flex className='gap-2'>
                <input
                  type="checkbox"
                  className={`text-[14px] w-5 h-5 text-[#2D2D2D] ${poppins.className}`}
                />
                <p className='pb-6'>Remember me</p>
              </Flex>
              <p>Forgot password?</p>
            </Flex>
            <Button className={`font-normal py-4 px-[130px] text-[16px] text-center bg-[#EA580C] pb-6 text-white ${poppins.className}`} text={'Sign in '} />
            <p className={`text-[14px] text-[#64748B] ${poppins.className}`}>Don't have an account? <span>Create free account</span></p>
          </div>

        </Flex>

      </Container>
    </section>
  )
}
