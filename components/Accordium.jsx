'use client'

import Flex from './Flex'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Roboto } from 'next/font/google'
import { useState, useRef, useEffect } from 'react';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

export default function Accordium({ text, className = '', accordionText }) {
    const [show, setShow] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    const handleAccordium = () => {
        setShow(!show)
    };

    useEffect(() => {
        setHeight(show ? `${contentRef.current.scrollHeight}px` : '0px')
    }, [show]);

    return (
        <div className={`border-t border-amber-500 ${className}`}>
            <Flex
                className='justify-between items-center cursor-pointer py-5 px-2 select-none'
                onClick={handleAccordium}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleAccordium()}
                aria-expanded={show}
            >
                <h1 className={`${roboto.className} font-bold text-[18px] text-[#2D2D2D]`}>
                    {text}
                </h1>

                <MdKeyboardArrowDown
                    className={`text-2xl text-[#EA580C] transform transition-transform duration-300 ${show ? 'rotate-180' : 'rotate-0'}`}
                />
            </Flex>
            <div
                ref={contentRef}
                style={{ height }}
                className="overflow-hidden transition-[height] duration-300"
            >
                <div className="pl-1 pb-4 pt-1 text-gray-600">
                    {accordionText}
                </div>
            </div>
        </div>
    );
}
