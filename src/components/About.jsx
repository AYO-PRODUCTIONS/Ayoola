
import React from 'react'
import { ArrowUpRight, Code2, Terminal, Database, Layers } from 'lucide-react'

const toolkit = [
  {
    category: "FRONTEND",
    icon: Layers,
    tools: ["HTML", "CSS", "JavaScript","React", "Tailwind CSS"]
  },
  {
    category: "DEVELOPMENT TOOLS",
    icon: Terminal,
    tools: ["Git", "GitHub", "VS Code", "Vite"]
  },
  {
    category: "BACKEND / LEARNING",
    icon: Database,
    tools: ["Node.js", "Express.js", "MongoDB"]
  }
]

const About = () => {
  return (
    <section id="about" className="px-6 md:px-32 py-28 text-white">

      {/* Section heading */}
      <div className="mb-16">
        <p className="text-blue-500 text-sm font-semibold tracking-[0.2em] mb-4">
          A LITTLE ABOUT ME
        </p>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Behind the <span className="text-blue-500">code.</span>
        </h2>
      </div>

      {/* Main layout */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Personal introduction */}
        <div>

          <p className="text-gray-400 text-sm uppercase tracking-widest mb-5">
            The developer
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
            I'm Ayoola Olusodo.
            <span className="text-gray-500">
              {" "}I turn ideas into digital experiences.
            </span>
          </h3>

          <div className="space-y-5 text-gray-400 leading-relaxed">

            <p>
              I'm a Frontend Developer focused on creating modern,
              responsive and user-friendly websites. I enjoy taking
              ideas and transforming them into clean, functional
              interfaces that people enjoy using.
            </p>

            <p>
              My approach combines thoughtful design, attention
              to detail and practical development. I believe a
              good website should not only look impressive but
              also serve a real purpose.
            </p>

            <p>
              I'm constantly learning, experimenting and improving
              my craft as I work towards becoming a well-rounded
              software developer.
            </p>

          </div>

          {/* Personal details */}
          <div className="mt-12 pt-7 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6">

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                Based in
              </p>
              <p className="text-white font-medium">
                Nigeria
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                Focus
              </p>
              <p className="text-white font-medium">
                Frontend Development
              </p>
            </div>

          </div>

          {/* Contact link */}
          <a href="#contact" className="inline-flex items-center gap-2 mt-10 text-blue-500 font-semibold hover:text-blue-400 transition-colors group">
            Let's work together
            <ArrowUpRight size={19} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
          </a>

        </div>  

        {/* Toolkit */}
        <div className="relative">

          <div className="absolute -inset-4 bg-blue-500/[0.06] blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative bg-[#0b0d12] border border-white/10 rounded-3xl p-6 md:p-8">

            {/* Toolkit header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">

              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">
                  My stack
                </p>

                <h3 className="text-2xl font-bold">
                  Toolkit<span className="text-blue-500">.</span>
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Code2 size={23} />
              </div>

            </div>

            {/* Toolkit categories */}
            <div className="divide-y divide-white/10">

              {toolkit.map((group, index) => {
                const Icon = group.icon

                return (
                  <div key={group.category} className="py-7">

                    <div className="flex items-center gap-3 mb-5">
                      <Icon size={17} className="text-blue-500"/>
                      <p className="text-gray-500 text-xs font-semibold tracking-[0.15em]">
                        {group.category}
                      </p>

                      <span className="ml-auto text-gray-700 text-xs">
                        0{index + 1}
                      </span>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {group.tools.map((tool) => (
                        <span key={tool} className="px-3 py-2 rounded-lg text-sm text-gray-300 bg-white/[0.04] border border-white/[0.07] hover:border-blue-500/40 hover:text-white transition-colors">
                          {tool}
                        </span>
                      ))}

                    </div>

                  </div>
                )
              })}

            </div>

            {/* Bottom note */}
            <div className="mt-2 pt-5 border-t border-white/10 flex items-center gap-3">

              <span className="w-2 h-2 rounded-full bg-blue-500"></span>

              <p className="text-gray-500 text-xs">
                Always learning. Always building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
