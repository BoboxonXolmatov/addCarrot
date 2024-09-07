import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ProjectShowcase from './components/ProjectShowcase'
import AdAgencyPackages from './components/AdAgencyPackages'
import Team from './components/Team'
import Testimionals from './components/Testimionals'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-y-hidden bg-orange-50 text-emeral-950 antialiased'>
       <Navbar />
       <Hero />
       <About />
       <Services />
       <ProjectShowcase />
       <AdAgencyPackages />
       <Team />
       <Testimionals />
       <Faq />
       <ContactForm />
       <Footer />
    </div>
  )
}

export default App
