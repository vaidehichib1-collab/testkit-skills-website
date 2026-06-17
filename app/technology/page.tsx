'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function TechnologyPage() {
  const features = [
    {
      title: 'AI-Based Proctoring',
      description: 'Advanced artificial intelligence monitors assessments in real-time, ensuring integrity and preventing fraud.',
      icon: '🤖',
      benefits: ['Real-time monitoring', 'Behavioral analysis', 'Automated alerts', 'Cheating prevention'],
    },
    {
      title: 'Automated Reporting',
      description: 'Instant generation of comprehensive reports with detailed analytics and actionable insights.',
      icon: '📊',
      benefits: ['Instant report generation', 'Custom metrics', 'Performance analytics', 'Trend analysis'],
    },
    {
      title: 'Real-Time Dashboard',
      description: 'Live monitoring dashboard providing instant visibility into assessment status and candidate progress.',
      icon: '📈',
      benefits: ['Live tracking', 'Customizable metrics', 'Performance overview', 'Quick insights'],
    },
    {
      title: 'Candidate Tracking',
      description: 'Complete tracking of candidate journey from registration through certification and employment.',
      icon: '👤',
      benefits: ['End-to-end tracking', 'Status updates', 'Document management', 'Progress monitoring'],
    },
    {
      title: 'Assessment Analytics',
      description: 'Deep-dive analysis revealing performance patterns, skill gaps, and workforce development opportunities.',
      icon: '🔍',
      benefits: ['Performance insights', 'Skill gap analysis', 'Trend identification', 'Recommendations'],
    },
    {
      title: 'Secure Data Management',
      description: 'Enterprise-grade security with full compliance to data protection and regulatory standards.',
      icon: '🔒',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready'],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Technology & Analytics
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cutting-edge assessment platform combining AI, analytics, and security for modern workforce evaluation
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-orange-200 p-12">
            <h2 className="text-3xl font-bold text-black mb-6">Our Platform</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The Testkit Skills platform integrates advanced technologies to deliver secure, scalable, and insightful assessment solutions. Our comprehensive system handles everything from assessment creation and administration to real-time proctoring and detailed analytics.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Built with enterprise standards, our platform supports thousands of concurrent assessments while maintaining data integrity and providing instant insights for decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Core Capabilities</h2>
            <p className="text-lg text-gray-600">Comprehensive features designed for modern assessment needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-xl hover:border-orange-600 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-orange-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Integration & API</h2>
            <p className="text-lg text-gray-600">Seamlessly integrate with your existing systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Integration Options</h3>
              <ul className="space-y-4">
                {[
                  'REST API for seamless connectivity',
                  'SAML/SSO authentication support',
                  'Real-time webhook notifications',
                  'Bulk data import/export',
                  'Custom API endpoints',
                  'Developer sandbox environment',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Security & Compliance</h3>
              <ul className="space-y-4">
                {[
                  'ISO 27001 certified infrastructure',
                  'End-to-end encryption',
                  'GDPR and data protection compliant',
                  'Regular security audits',
                  'Multi-factor authentication',
                  'Role-based access control',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Performance Metrics</h2>
            <p className="text-lg text-gray-600">Enterprise-grade performance and reliability</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Uptime', value: '99.9%', description: 'Guaranteed availability' },
              { label: 'Response Time', value: '<200ms', description: 'Lightning fast' },
              { label: 'Concurrent Users', value: '10,000+', description: 'Simultaneous assessments' },
              { label: 'Data Centers', value: '3+', description: 'Geographic redundancy' },
            ].map((metric, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-200 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{metric.value}</div>
                <div className="font-semibold text-black mb-2">{metric.label}</div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold mb-4">International Trendsetter Approach</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">Digital, Secure, Scalable</h2>
              <p className="text-gray-300 text-lg leading-relaxed">The platform experience is shaped around global assessment trends: AI proctoring, identity checks, live dashboards, automated MIS, audit trails, and cloud-ready operations.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Identity Check', 'Live Monitoring', 'Data Insights', 'Audit Trail'].map((item, index) => (
                <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <div className="text-3xl mb-3">{index === 0 ? '🧾' : index === 1 ? '👁️' : index === 2 ? '📈' : '🗂️'}</div>
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to experience our technology?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a demo and see our platform in action</p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Demo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
