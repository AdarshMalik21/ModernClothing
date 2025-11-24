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
    <Reel mode="random"/>
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home
