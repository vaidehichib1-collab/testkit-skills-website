'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactSection } from '@/components/contact'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const highlights = [
    {
      title: 'Assessment Services',
      description: 'Online and offline skill assessments with secure AI proctoring, assessor allocation, and transparent reporting',
      icon: '📋',
      link: '/services',
    },
    {
      title: 'Solutions',
      description: 'Assessment delivery across training partners, institutions, employers, and government-linked skill projects',
      icon: '🌐',
      link: '/sectors',
    },
    {
      title: 'Technology',
      description: 'Dashboards, candidate tracking, audit-ready MIS, analytics, and certification workflow support',
      icon: '⚙️',
      link: '/technology',
    },
    {
      title: 'About Us',
      description: 'A compliance-focused assessment agency aligned with NCVET standards and sector skill requirements',
      icon: '👥',
      link: '/about',
    },
  ]

  const stats = [
    { value: '10,000+', label: 'Assessments' },
    { value: '25+', label: 'States Covered' },
    { value: '1000+', label: 'Certified Assessors' },
    { value: 'NCVET', label: 'Recognized' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white to-orange-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              AI-Driven Assessment Platform for Secure Skill Evaluation & Certification
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Online • Offline • AI Proctoring • NCVET-Aligned
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Request Demo <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">How We Help</h2>
            <p className="text-lg text-gray-600">Built for assessment agencies, training partners, institutes, employers, and skill development projects</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, idx) => (
              <Link
                key={idx}
                href={highlight.link}
                className="group p-8 border border-gray-200 rounded-lg hover:border-orange-600 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-4">{highlight.description}</p>
                <div className="inline-flex items-center text-orange-600 font-semibold">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Assessment Agency Content */}
      <section className="py-20 bg-gradient-to-br from-white to-orange-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Assessment Agency for Modern Skill Certification</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Testkit Skills supports end-to-end assessment operations, from candidate planning and assessor deployment to secure test delivery, compliance documentation, MIS reporting, and certification support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach follows international assessment trends: digital-first delivery, AI-enabled proctoring, data-driven dashboards, scalable online/offline execution, and transparent audit trails for every project.
              </p>
            </div>
            <div className="relative rounded-2xl bg-black p-8 text-white overflow-hidden">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-600/30 blur-2xl"></div>
              <div className="grid grid-cols-2 gap-4 relative">
                {['Secure Exams', 'AI Proctoring', 'MIS Reports', 'Certification'].map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="text-2xl mb-3">{idx === 0 ? '🔒' : idx === 1 ? '🤖' : idx === 2 ? '📊' : '🏅'}</div>
                    <div className="font-semibold">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Choose Testkit Skills</h2>
            <p className="text-lg text-gray-600">Modern, secure, and compliance-ready assessment solutions inspired by global assessment platform trends</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'NCVET Recognized Assessment Agency',
              'AI-Powered Proctoring Solutions',
              'Real-Time Analytics & Reporting',
              '1000+ Certified Assessors',
              'Online & Offline Assessments',
              'Audit-Ready MIS & Certification Support',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-black font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Assessments?</h2>
          <p className="text-xl mb-8 opacity-90">Let&apos;s discuss how Testkit Skills can help your organization</p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  )
}
