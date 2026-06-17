'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', organization: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Request a Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI-Driven Assessment Platform for Secure Skill Evaluation & Certification
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <Mail className="text-orange-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Email</h3>
                <p className="text-gray-600">assessments@testkit.in</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <Phone className="text-orange-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Phone</h3>
                <p className="text-gray-600">+91 95992 87304</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <MapPin className="text-orange-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-1">Address</h3>
                <p className="text-gray-600">Pan India Operations<br />New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-black mb-2">
                    Organization
                  </label>
                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                    placeholder="Your organization"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send size={20} />
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
                  Thank you! We&apos;ll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
