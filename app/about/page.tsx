'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TeamSection } from '@/components/team'
import { CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-600 font-semibold mb-4">About Us</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
                Building Trust in Skill Assessment & Certification
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Testkit Skills is an assessment agency focused on secure, transparent, and technology-enabled skill evaluation for training partners, institutions, employers, and workforce development projects.
              </p>
            </div>
            <div className="rounded-2xl bg-black p-8 text-white">
              <div className="grid grid-cols-2 gap-4">
                {['Online Assessments', 'Offline Assessments', 'AI Proctoring', 'NCVET-Aligned'].map((item, index) => (
                  <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl mb-4">{index === 0 ? '💻' : index === 1 ? '📝' : index === 2 ? '🛡️' : '✅'}</div>
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">What We Do</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  We manage end-to-end assessment operations including candidate scheduling, assessor coordination, exam delivery, verification, evaluation, MIS reporting, compliance documentation, and certification support.
                </p>
                <p>
                  Our services are designed for secure online and offline assessments with AI proctoring, real-time dashboards, data analysis, and audit-ready reporting.
                </p>
                <p>
                  Inspired by international assessment platforms, our work focuses on transparency, standardization, scalability, and reliable outcomes for every stakeholder.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-12 border border-orange-200">
              <div className="space-y-6">
                {['Secure exam delivery with candidate verification', 'Certified assessor network for practical evaluations', 'Project-wise MIS dashboards and compliance reports', 'Certification workflow support and documentation'].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={22} />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-6">
                <div className="text-xl font-bold text-orange-600">🎯</div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver fair, secure, and technology-driven assessment systems that improve workforce quality and support skill-based career growth.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-6">
                <div className="text-xl font-bold text-orange-600">✨</div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted national assessment and certification partner known for compliance, innovation, operational excellence, and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-semibold mb-3">First Our Team</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">People Behind Reliable Assessment Delivery</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">Our team combines assessment operations, compliance, reporting, technology, and project coordination to deliver quality outcomes.</p>
        </div>
      </section>

      <TeamSection />

      <Footer />
    </main>
  )
}
