import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import SideProjects from './components/SideProjects'
import Spotlight from './components/Spotlight'
import ToolStack from './components/ToolStack'
import SocialProof from './components/SocialProof'
import Newsletter from './components/Newsletter'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="app">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <div className={`app-content ${!isLoading ? 'app-content--visible' : ''}`}>
        {!isLoading && <MainContent />}
      </div>
    </div>
  )
}

function MainContent() {
  return (
    <>
      <Navbar />
      <div className="page-shell">
        <main className="page-column">
          <Hero />
          <WorkSection />
          <SideProjects />
          <Spotlight />
          <ToolStack />
          <SocialProof />
          <Newsletter />
          <FooterCTA />
          <Footer />
        </main>
        <div className="page-rail">
          <a href="#contact" className="floating-cta">
            <span role="img" aria-hidden="true">
              ✌️
            </span>
            Say hi
          </a>
        </div>
      </div>
    </>
  )
}

export default App

