import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Flex from './Flex'
import MenuList from './MenuList'
import Button from './Button'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='shadow-md sticky top-0 bg-white  z-50'>
            <Container>
                <Flex className='w-full py-5 items-center justify-center '>
                    
                    <div className='w-1/3 cursor-pointer'><Image src="/Logo.png" width={142} height={32} alt="Logo" /></div>
                    
                    <Flex className='gap-10 cursor-pointer w-1/3'>
                        <MenuList text={"Home"} />
                        <MenuList text={"Blog"} />
                        <MenuList text={"About"} />
                        <MenuList text={"Contact"} />
                    </Flex>

                    <Flex className='gap-6 w-1/3 justify-end'>
                        <Link href='/signin'>
                             <Button className='hover:bg-[#EA580C] shadow-md hover:text-white' text={"Sign in"} />
                        </Link>
                       
                        <Button className='hover:bg-[#EA580C] shadow-md hover:text-white' text={"Sign up"} />
                    </Flex>

                </Flex>
            </Container>
        </nav>
    )
}
