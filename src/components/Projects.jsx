import React from 'react'
import craveImg from '../assets/Crave.png'

const projects = [
  {
    id: 1,
    title: "CRAVE",
    category: "Restaurant Website",
    description: "A modern restaurant website designed to showcase meals and make it easy for customers to explore the menu.",
    image: craveImg,
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    liveLink: "https://crave-restaurant-three.vercel.app/",
    githubLink: "https://github.com/AYO-PRODUCTIONS/Crave-restaurant"
  }
]
const Projects = () => {

  return (
   <section id="projects" className="px-6 md:px-40 py-24 text-white">

      <p className="text-blue-500 font-semibold mb-3">
        MY WORK
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-5">
        Featured Project<span className="text-blue-500">.</span>
      </h2>

      <p className="text-gray-400 max-w-xl mb-12">
        A selection of projects I've built to solve real-world problems
        through clean design and modern web technologies.
      </p>

      <div className="grid grid-cols-1 gap-10">

        {projects.map((project) => (
          <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center bg-white/[0.03] border border-white/10 rounded-3xl p-5 md:p-8 hover:border-blue-500/40 transition-colors duration-300">

            {/* Project image */}
            <div className="overflow-hidden rounded-2xl">
              <img src={project.image} alt={`${project.title} website preview`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
            </div>

            {/* Project details */}
            <div>

              <p className="text-blue-500 text-sm font-semibold mb-3">
                {project.category}
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                {project.title}
                <span className="text-blue-500">.</span>
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-2 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">

                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors">
                  Live Demo
                </a>

                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>


    </section>
  )
}

export default Projects