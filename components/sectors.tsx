'use client'

const sectors = [
  'Electronics',
  'Capital Goods',
  'IT-ITeS',
  'Retail',
  'Healthcare',
  'Construction',
  'Logistics',
  'Automotive',
  'Telecom',
  'Agriculture',
]

export function SectorsSection() {
  return (
    <section id="sectors" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Sectors We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serving diverse industry verticals with tailored assessment solutions across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h3 className="relative text-lg font-semibold text-black group-hover:text-orange-700 transition-colors">
                {sector}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
