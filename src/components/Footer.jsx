
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { ArrowUpRight, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="px-6 md:px-32 pt-16 pb-8 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Main footer */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Ayoola<span className="text-blue-500">.</span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Building modern, responsive websites that help businesses
              establish a strong online presence.
            </p>

            <a href="https://github.com/AYO-PRODUCTIONS" target="_blank" rel="noopener noreferrer"aria-label="Visit my GitHub profile"
              className="inline-flex items-center gap-2 mt-6 text-gray-400 hover:text-blue-400 transition">
              <FaGithub size={18} />
              <span className="text-sm">GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5">
              QUICK LINKS
            </h3>

            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-blue-400 transition">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 pt-8">

          <p className="text-xs text-gray-500">
            © {currentYear} Ayoola Olusodo. All rights reserved.
          </p>

          <a href="#home" className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition">
            Back to top
            <ArrowUp size={14} />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
