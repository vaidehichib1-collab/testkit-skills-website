'use client'

import Link from 'next/link'
import { Globe, Send } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8 lg:gap-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TS</span>
              </div>
              <span className="text-lg font-bold">Testkit Skills</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Assessment agency delivering secure online and offline skill evaluation, AI proctoring, compliance reporting, and certification support across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Services</Link></li>
              <li><Link href="/sectors" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Sectors</Link></li>
              <li><Link href="/technology" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Technology</Link></li>
              <li><Link href="/clients" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Clients</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Skill Assessments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Compliance Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">IT Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:assessments@testkit.in" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Email Us</a></li>
              <li><a href="tel:+919599287304" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Call Us</a></li>
                          </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Testkit Skills Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Twitter">
              <Globe size={20} />
            </a>
            <a href="mailto:assessments@testkit.in" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Email">
              <Send size={20} />
            </a>
            <a href="tel:+919599287304" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Phone">
              <Send size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
