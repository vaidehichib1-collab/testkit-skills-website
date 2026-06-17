'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white pt-20 pb-20 lg:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-orange-600 font-semibold uppercase tracking-wider text-sm">
                Transform Workforce Quality
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                AI-Driven Assessment Platform for Skill Evaluation & Certification
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Empowering Skill Development through Reliable Assessments, Compliance Solutions, and Technology-Enabled Services.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-black">10,000+</p>
                <p className="text-gray-600 text-sm">Candidates Assessed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">100+</p>
                <p className="text-gray-600 text-sm">Certified Assessors</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">20+</p>
                <p className="text-gray-600 text-sm">Industry Sectors</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-black">NCVET Recognized Agency</p>
                      <p className="text-sm text-gray-600">Certified & Compliant</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-black">AI Proctoring Solutions</p>
                      <p className="text-sm text-gray-600">Advanced Security & Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-black">Real-Time Reporting</p>
                      <p className="text-sm text-gray-600">Instant Analytics & Insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
