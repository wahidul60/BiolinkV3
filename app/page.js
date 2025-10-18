import Navbar from '@/components/Navbar'
import HappyPartner from '@/Layout/HappyPartner'
import HeaderGone from '@/Layout/HeaderGone'
import HeroSection from '@/Layout/HeroSection'
import HowWork from '@/Layout/HowWork'
import Testimonials from '@/Layout/Testimonials'
import UnmatchFeature from '@/Layout/UnmatchFeature'
import React from 'react'

export default function page() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <UnmatchFeature/>
      <HeaderGone/>
      <HowWork/>
      <HappyPartner/>
      <Testimonials/>
    </main>
  )
}
