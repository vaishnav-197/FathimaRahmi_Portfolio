import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import Awards from './components/Awards'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import { useNavbarScroll } from './hooks/useNavbarScroll'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useParallax } from './hooks/useParallax'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="app">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      {!isLoading && <MainContent />}
    </div>
  )
}

function MainContent() {
  useScrollAnimations()
  useNavbarScroll()
  useSmoothScroll()
  useScrollProgress()
  useParallax()

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Portfolio />
      <Awards />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App

