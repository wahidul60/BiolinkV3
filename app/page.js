import Navbar from '@/components/Navbar'
import HeroSection from '@/Layout/HeroSection'
import UnmatchFeature from '@/Layout/UnmatchFeature'
import React from 'react'

export default function page() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <UnmatchFeature/>
    </main>
  )
}
