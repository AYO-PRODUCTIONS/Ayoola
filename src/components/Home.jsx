import React from 'react'

const Home = () => {
  return (
    <section id="home" className=" flex flex-col justify-start px-6 md:px-40 pt-40">

      {/* Availability */}
      <div className="flex items-center gap-2 mb-7">
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <p className="text-gray-400 text-sm">
          Available for new projects
        </p>
      </div>

      {/* Main heading */}
      <p className="text-blue-500 text-xl">
        Hi, I'm Ayoola Olusodo 👋
      </p>
      <p className="text-gray-400 text-md mb-5">
        Front-End Developer
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-5xl">
        I Build Modern Websites for
        <span className="text-blue-500"> Growing Businesses.</span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-8 leading-relaxed">
        I help businesses establish a strong online presence through
        modern, responsive websites designed to turn visitors into customers.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a href="#projects" className="bg-blue-700 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors">
          View My Projects
        </a>

        <a href="#contact" className="border border-white/20 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
          Let's Talk
        </a>
      </div>

    </section>
  )
}

export default Home