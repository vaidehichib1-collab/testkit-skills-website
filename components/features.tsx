'use client'

import { CheckCircle, Users, Zap, BarChart3, Lock, Gauge } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'NCVET Recognized Assessment Agency',
    description: 'Certified & compliance-driven assessments aligned with national standards.',
  },
  {
    icon: Users,
    title: 'Online & Offline Assessments',
    description: 'Flexible assessment delivery across multiple channels and formats.',
  },
  {
    icon: Lock,
    title: 'AI Proctoring Solutions',
    description: 'Advanced technology-enabled proctoring for secure, reliable assessments.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics & Reporting',
    description: 'Comprehensive dashboards with instant insights and actionable data.',
  },
  {
    icon: Users,
    title: 'Experienced Assessor Network',
    description: 'PAN India network of trained and certified assessment professionals.',
  },
  {
    icon: Gauge,
    title: 'Fast & Accurate Assessment Delivery',
    description: 'Optimized processes for quick turnaround without compromising quality.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Why Choose Testkit Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine expertise, technology, and innovation to deliver trusted assessment solutions across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors">
                  <Icon className="text-orange-600 group-hover:text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
