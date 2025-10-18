import Container from '@/components/Container';
import Flex from '@/components/Flex';
import RoundWithArrow from '@/components/RoundWithArrow'
import React from 'react'
import { PiPlusSquareBold } from "react-icons/pi";
import { LuFileCog } from "react-icons/lu";
import { TbLinkPlus } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa";

export default function HowWork() {
    return (
        <section className='bg-[#f0f0f0]'>
            <Container>
                <h1 className={`text-center text-[28px] font-bold`}>How it works</h1>
                <Flex className='gap-3'>
                    <RoundWithArrow
                        Icon={PiPlusSquareBold}
                        color = '#00AEEF'
                        showArrow={true}
                        Heading='Create an account & open a bio profile'
                        text='You can create your account with email in few step' />

                    <RoundWithArrow
                        Icon={LuFileCog}
                        color = "#EA580C"
                        showArrow={true}
                        Heading='Select a theme'
                        text='Select any pre-build theme and customize your profile' />

                    <RoundWithArrow
                        Icon={TbLinkPlus}
                        color = "#9747FF"
                        showArrow={true}
                        Heading='Add links'
                        text='Copy and kind of link and ass in your biolink profile' />

                    <RoundWithArrow
                        Icon={FaRegCopy}
                        color = "#1FAF38"
                        showArrow={false}
                        Heading='Copy and share'
                        text='Share profile link QR code with friends, family and followers' />
                </Flex>
            </Container>

        </section>
    )
}
