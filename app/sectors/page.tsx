'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

const sectors = [
  { name: 'Electronics', icon: '🔌', description: 'Component manufacturing and electronics assembly' },
  { name: 'Capital Goods', icon: '⚙️', description: 'Heavy machinery and industrial equipment' },
  { name: 'IT-ITeS', icon: '💻', description: 'Information technology and software services' },
  { name: 'Retail', icon: '🛍️', description: 'Retail management and customer service' },
  { name: 'Healthcare', icon: '🏥', description: 'Medical services and healthcare professionals' },
  { name: 'Construction', icon: '🏗️', description: 'Building and infrastructure development' },
  { name: 'Logistics', icon: '📦', description: 'Supply chain and logistics management' },
  { name: 'Automotive', icon: '🚗', description: 'Vehicle manufacturing and services' },
  { name: 'Telecom', icon: '📱', description: 'Telecommunications and mobile services' },
  { name: 'Agriculture', icon: '🌾', description: 'Agribusiness and farming technology' },
]

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Industry Sectors We Serve
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Specialized assessment solutions tailored to the unique needs of 20+ industry sectors across India
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">20+</div>
              <p className="text-gray-300">Industry Sectors</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">10,000+</div>
              <p className="text-gray-300">Professionals Assessed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">500+</div>
              <p className="text-gray-300">Clients Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">98%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className="group p-6 bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-xl hover:border-orange-600 hover:shadow-lg transition-all text-center"
              >
                <div className="text-5xl mb-4">{sector.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-orange-600 transition-colors">
                  {sector.name}
                </h3>
                <p className="text-sm text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Solutions */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Customized Solutions by Sector
            </h2>
            <p className="text-lg text-gray-600">
              We develop industry-specific assessment frameworks aligned with sector skill councils
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Skill Framework Alignment',
                description: 'Our assessments align with National Occupation Standards (NOS) and sector-specific competency frameworks.',
              },
              {
                title: 'Industry Expert Panel',
                description: 'Assessments designed by industry experts ensuring relevance and practical applicability.',
              },
              {
                title: 'Real-World Scenarios',
                description: 'Practical assessments using real industry scenarios and use cases for accurate evaluation.',
              },
              {
                title: 'Sector-Specific Reports',
                description: 'Detailed reports with sector benchmarks and workforce development recommendations.',
              },
              {
                title: 'Compliance Support',
                description: 'Full support for sector compliance and regulatory requirements across all assessments.',
              },
              {
                title: 'Certification Programs',
                description: 'Recognized certifications that add value to professional profiles in each sector.',
              },
            ].map((solution, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <h4 className="text-lg font-semibold text-black mb-3">{solution.title}</h4>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Looking for sector-specific assessments?</h2>
          <p className="text-xl mb-8 opacity-90">Contact our team to discuss your sector&apos;s unique assessment needs</p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
