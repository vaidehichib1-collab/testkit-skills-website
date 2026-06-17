'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Leading Automotive Manufacturer',
    role: 'HR Director',
    text: 'Testkit Skills helped us streamline our assessment process. The AI proctoring ensures fairness and the real-time reporting gives us instant insights.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Technology Solutions Company',
    role: 'Talent Acquisition Head',
    text: 'The platform is intuitive and the support team is exceptional. We have been able to assess more candidates in less time while maintaining quality.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Retail Chain',
    role: 'Operations Manager',
    text: 'The sector-specific assessments are perfectly aligned with our needs. The certification program adds tremendous value to our employees.',
    rating: 5,
  },
  {
    name: 'Sarah Anderson',
    company: 'Construction Group',
    role: 'Training Manager',
    text: 'Professional, reliable, and comprehensive. Testkit Skills has become an integral part of our talent development strategy.',
    rating: 5,
  },
]

const partners = [
  { name: 'Partner 1', category: 'Technology' },
  { name: 'Partner 2', category: 'Sector Skill Council' },
  { name: 'Partner 3', category: 'Educational Institution' },
  { name: 'Partner 4', category: 'Corporate' },
  { name: 'Partner 5', category: 'Government Body' },
  { name: 'Partner 6', category: 'Industry Association' },
]

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Trusted by Organizations Across India
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join hundreds of leading organizations using Testkit Skills for their assessment and certification needs
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">500+</div>
              <p className="text-gray-300">Active Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">10,000+</div>
              <p className="text-gray-300">Candidates Assessed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">98%</div>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">20+</div>
              <p className="text-gray-300">Industry Sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Hear from organizations that have partnered with us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border-2 border-orange-100 hover:border-orange-600 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-600 text-orange-600" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-orange-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600">Collaborating with industry leaders and organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center hover:border-orange-600 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-orange-600 mb-3">🏢</div>
                <p className="font-semibold text-black mb-2">{partner.name}</p>
                <p className="text-sm text-gray-600">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">How organizations achieved their goals with Testkit Skills</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing Excellence',
                description: 'Leading automotive manufacturer improved assessment quality by 40% and reduced certification time by 50%',
                sector: 'Automotive',
              },
              {
                title: 'Retail Transformation',
                description: 'National retail chain standardized assessments across 500+ locations with our platform',
                sector: 'Retail',
              },
              {
                title: 'Tech Talent Pipeline',
                description: 'IT services company streamlined hiring process and identified 200+ ready-to-deploy talent',
                sector: 'IT-ITeS',
              },
            ].map((caseStudy, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border-2 border-orange-100">
                <h4 className="text-lg font-bold text-black mb-2">{caseStudy.title}</h4>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full">
                  {caseStudy.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to join our growing network?</h2>
          <p className="text-xl mb-8 opacity-90">Connect with us to explore partnership opportunities</p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Become a Partner
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
