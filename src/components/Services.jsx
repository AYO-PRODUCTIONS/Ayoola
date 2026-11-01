
import React from 'react'
import { Globe, Smartphone, Rocket } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Business Websites",
    description: "Modern websites that help businesses establish a professional online presence and attract more customers."
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Responsive Web Design",
    description: "Websites that adapt smoothly to phones, tablets and desktops for a great experience on every screen."
  },
  {
    id: 3,
    icon: Rocket,
    title: "Website Deployment",
    description: "Getting your website online so customers can access your business from anywhere."
  }
]

const Services = () => {
  return (
    <section id="services" className="px-6 md:px-40 py-24 text-white">

      <p className="text-blue-500 font-semibold mb-3">
        WHAT I DO
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-5">
        My Services<span className="text-blue-500">.</span>
      </h2>

      <p className="text-gray-400 max-w-xl mb-12">
        I help businesses build a strong online presence through
        modern, functional and user-friendly websites.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {services.map((service) => {
          const Icon = service.icon

          return (
            <div key={service.id} className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 mb-6">
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default Services
