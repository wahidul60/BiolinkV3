import Navbar from '@/components/Navbar'
import FAQ from '@/Layout/FAQ'
import Footer from '@/Layout/Footer'
import HappyPartner from '@/Layout/HappyPartner'
import HeaderGone from '@/Layout/HeaderGone'
import HeroSection from '@/Layout/HeroSection'
import HowWork from '@/Layout/HowWork'
import Subscription from '@/Layout/Subscription'
import Testimonials from '@/Layout/Testimonials'
import UnmatchFeature from '@/Layout/UnmatchFeature'
import React from 'react'

export default function page() {
  return (
    <main>     
      <HeroSection/>
      <UnmatchFeature/>
      <HeaderGone/>
      <HowWork/>
      <HappyPartner/>
      <Testimonials/>
      <FAQ/>     
    </main>
  )
}
