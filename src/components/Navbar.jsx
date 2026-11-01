import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
  const handleOutsideClick = (event) => {
  if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  document.addEventListener('mousedown', handleOutsideClick)
  document.addEventListener('touchstart', handleOutsideClick)

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav ref={navRef} className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%] max-w-5xl rounded-4xl md:rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl px-6 md:px-8 py-4 text-white">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="text-2xl font-bold">
          AYOOLA<span className="text-blue-700">.</span>
        </a>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-blue-700 transition-colors">Home</a>
          <a href="#projects" className="hover:text-blue-700 transition-colors">Projects</a>
          <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
        </div>

        {/* Contact button */}
        <a href="#contact" className="hidden md:block bg-blue-700 text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-900 transition-colors">
          Let's Talk
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:text-blue-700 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-5 pt-6 pb-3 text-sm text-gray-300">

          <a href="#home" onClick={closeMenu} className="hover:text-blue-700 transition-colors">
            Home
          </a>

          <a href="#projects" onClick={closeMenu} className="hover:text-blue-700 transition-colors">
            Projects
          </a>

          <a href="#services" onClick={closeMenu} className="hover:text-blue-700 transition-colors">
            Services
          </a>

          <a href="#about" onClick={closeMenu} className="hover:text-blue-700 transition-colors">
            About
          </a>

          <a href="#contact" onClick={closeMenu} className="bg-blue-700 text-white text-center py-3 rounded-full font-semibold">
            Let's Talk
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar