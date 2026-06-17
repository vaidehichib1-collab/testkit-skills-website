'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CheckCircle } from 'lucide-react'

const services = [
  {
    category: 'Assessment Services',
    items: [
      'Skill Assessments (Theory & Practical)',
      'Remote Proctored Assessments',
      'Candidate Verification & Authentication',
      'Assessor Management & Training',
      'Competency-Based Evaluations',
    ],
  },
  {
    category: 'Validation & Verification',
    items: [
      'Audit Support & Compliance',
      'Compliance Verification',
      'Documentation Validation',
      'Quality Assurance Reviews',
      'Process Certification',
    ],
  },
  {
    category: 'IT Solutions',
    items: [
      'Assessment Management Systems',
      'Real-Time Reporting Dashboards',
      'Data Analytics & MIS Solutions',
      'Portal Development & Integration',
      'Workflow Automation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive assessment and compliance solutions designed to meet the evolving needs of organizations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-orange-600 transition-colors">
                  {service.category}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 items-start">
                      <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Delivery Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">End-to-End Assessment Delivery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">From planning to certification, our team supports every operational and compliance step required for reliable skill evaluation.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {['Plan & Schedule', 'Verify & Assess', 'Monitor & Report', 'Certify & Improve'].map((step, index) => (
              <div key={index} className="rounded-xl bg-black text-white p-6">
                <div className="text-orange-500 text-3xl font-bold mb-4">0{index + 1}</div>
                <h3 className="font-semibold text-lg mb-2">{step}</h3>
                <p className="text-sm text-gray-300">Structured workflows, secure data handling, and transparent reporting at every stage.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Features */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Advanced Technology & Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform leverages cutting-edge technology to deliver secure, scalable, and insightful assessment solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI-Based Proctoring',
                description: 'Advanced AI technology ensures secure, unbiased assessments with real-time monitoring capabilities.',
              },
              {
                title: 'Automated Reporting',
                description: 'Comprehensive reports generated instantly with detailed insights and performance analytics.',
              },
              {
                title: 'Real-Time Dashboard',
                description: 'Live tracking and monitoring of assessments with customizable metrics and KPIs.',
              },
              {
                title: 'Candidate Tracking',
                description: 'Complete candidate journey tracking from registration through certification.',
              },
              {
                title: 'Assessment Analytics',
                description: 'Deep-dive analytics revealing performance trends, skill gaps, and workforce insights.',
              },
              {
                title: 'Secure Data Management',
                description: 'Enterprise-grade security with compliance to data protection and regulatory standards.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <h4 className="text-xl font-semibold text-black mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
