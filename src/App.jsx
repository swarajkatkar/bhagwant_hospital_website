import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Doctor from './components/Doctor'
import Services from './components/Services'
import Facilities from './components/Facilities'
import NeuroHighlight from './components/NeuroHighlight'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Doctor />
      <Services />
      <Facilities />
      <NeuroHighlight />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
