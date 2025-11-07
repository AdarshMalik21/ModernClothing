import React from 'react'
import Hero from '../heroSection/Hero'
import HowItWorkSection from '../howItWorkSection/HowItWorkSection'
import AIPromptSection from '../aiPromptSection/AIPromptSection'
import Footer from '../footer/Footer'
import Testimonials from '../testimonials/Testimonials'
import Reel from '../reelSection/Reel'

const Home = () => {
  return (
    <>
    <Hero />
    <HowItWorkSection />
    <AIPromptSection />
    <Testimonials />
    <Reel />
    <Footer />
    </>
  )
}

export default Home
