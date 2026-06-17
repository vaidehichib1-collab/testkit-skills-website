'use client'

const team = [
  {
    name: 'Chirag Deswal',
    role: 'Managing Director',
    description: 'Leads business strategy, partnerships, and long-term growth for assessment operations.',
  },
  {
    name: 'Anurag Kumar Rai',
    role: 'Chief Executive Officer',
    description: 'Oversees execution, compliance, client delivery, and scalable assessment processes.',
  },
  {
    name: 'Vaidehi Chib',
    role: 'Operations Head',
    description: 'Manages assessment operations, MIS reporting, candidate data, and process coordination.',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated leadership team building reliable assessment delivery, compliance, reporting, and certification support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-black flex items-center justify-center overflow-hidden">
                <div className="w-20 h-20 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="text-4xl font-bold text-orange-500">{member.name.charAt(0)}</div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-1">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
