import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className="bg-linear-to-bl from-black via-gray-900 to-black text-white min-h-screen">
      <Navbar/>
      <Home/>
      <Projects/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App