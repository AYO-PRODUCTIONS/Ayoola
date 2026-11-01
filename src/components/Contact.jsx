import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Mail, MessageCircle, ArrowUpRight, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  })

  const [sendMethod, setSendMethod] = useState('whatsapp')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Hi Ayoola!

My name is ${formData.name}${formData.business ? `, and I represent ${formData.business}` : ''}.

I'm interested in having a website built and would love to discuss my project with you.

${formData.message}
You can reach me through this email: ${formData.email}. 

Looking forward to hearing from you!`

    if (sendMethod === 'whatsapp') {
      const url = `https://wa.me/2349164228206?text=${encodeURIComponent(message)}`
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      const subject = encodeURIComponent('New Project Inquiry')
      const body = encodeURIComponent(message)

      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ayoolaolusodo2008@gmail.com&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="contact" className="px-6 md:px-32 py-28 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 items-start gap-12 lg:gap-20">

          {/* Left Side */}
        <div>
            {/* Heading */}
            <div className="mb-16">
            <p className="text-blue-500 text-sm font-semibold tracking-[0.3em] mb-4">
                GET IN TOUCH
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
                Let's build something <span className="text-blue-500">great.</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
                Have a project in mind or need a website for your business?
                Tell me a little about it. Let's make something happen.
            </p>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's talk about your project.
            </h3>

            <p className="text-gray-400 leading-relaxed mb-10">
              Whether you have a clear idea or just getting started,
              I'm happy to hear from you.
            </p>

            <div className="space-y-6">

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayoolaolusodo2008@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group" >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition">
                  <Mail className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email me</p>
                  <p className="text-sm md:text-base group-hover:text-blue-400 transition">
                    ayoolaolusodo2008@gmail.com
                  </p>
                </div>

                <ArrowUpRight className="ml-auto text-gray-500 group-hover:text-blue-500 transition" />
              </a>

              <a href="https://wa.me/2349164228206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition">
                  <MessageCircle className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="group-hover:text-blue-400 transition">
                    +234 916 422 8206
                  </p>
                </div>

                <ArrowUpRight className="ml-auto text-gray-500 group-hover:text-blue-500 transition" />
              </a>

              <a href="https://github.com/AYO-PRODUCTIONS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition">
                  <FaGithub className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="group-hover:text-blue-400 transition">
                    AYO-PRODUCTIONS
                  </p>
                </div>

                <ArrowUpRight className="ml-auto text-gray-500 group-hover:text-blue-500 transition" />
              </a>

            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="bg-[#0b0d12] border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Send an inquiry</h3>
              <p className="text-gray-500 text-sm mt-2">
                Tell me a little about what you have in mind.
              </p>
            </div>
            
            {/* Name */}
            <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                Full name
            </label>

            <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition text-white placeholder:text-gray-600"
            />
            </div>

            {/* Email */}
            <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                Email address
            </label>

            <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition text-white placeholder:text-gray-600"
            />
            </div>

            {/* Business */}
            <div>
            <label htmlFor="business" className="block text-sm text-gray-300 mb-2">
                Business name <span className="text-gray-600">(optional)</span>
            </label>

            <input
                id="business"
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Your business name"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition text-white placeholder:text-gray-600"
            />
            </div>

            {/* Project Details */}
            <div>
            <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                Tell me about your project
            </label>

            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you have in mind?"
                rows="5"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition text-white placeholder:text-gray-600 resize-none"
            />
            </div>

            {/* Sending Method */}
            <div>
              <p className="text-sm text-gray-300 mb-3">
                Where should we send your message?
              </p>

              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={() => setSendMethod('whatsapp')}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition ${
                    sendMethod === 'whatsapp'
                      ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                      : 'border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>

                <button  type="button" onClick={() => setSendMethod('email')} 
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition 
                ${sendMethod === 'email' ? 'border-blue-500 bg-blue-500/10 text-blue-400': 'border-white/10 text-gray-400 hover:border-white/30'}`}>
                <Mail size={18} />
                  Email
                </button>

              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition">
              Send Message
            <Send size={18} />
            </button>

            <p className="text-xs text-gray-600 text-center">
              Your message will open in your selected app for you to send.
            </p>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact