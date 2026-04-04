import React, { useEffect } from 'react'

const services = [
  {
    title: 'Neurosurgery',
    description: 'Advanced brain & spine surgery using cutting-edge technology with a dedicated 25-bed Trauma & Stroke ICU.',
    features: [
      'Modular OT with Laminar Air Flow',
      'Leica Microscope & Neuro Navigation',
      'Stryker Endoscopy (Brain & Spine)',
      'Keyhole Brain & Spine Surgery',
      'NCV & EEG',
    ],
    icon: 'neurosurgery',
  },
  {
    title: 'Orthopaedics',
    description: 'Comprehensive bone, joint, and sports injury care with fellowship-trained surgeons using the latest orthopaedic techniques.',
    features: [
      'Joint Replacement (Knee & Hip)',
      'Arthroscopy',
      'Ligament Reconstruction (ACL/PCL)',
      'Fracture Management',
      'Spine Procedures',
    ],
    icon: 'orthopaedics',
  },
  {
    title: 'Physiotherapy',
    description: 'Fully equipped physiotherapy unit for post-surgical recovery, neuro rehabilitation, and sports injury management.',
    features: [
      'Robotic Hand Therapy',
      'Ultrasound · TENS · IFT',
      'Paraffin Wax Bath · EMS',
      'Manual Therapy · CPM · Traction',
    ],
    icon: 'physiotherapy',
  },
  {
    title: 'Ayurveda',
    description: 'Traditional Ayurvedic treatments combined with modern medicine for holistic healing and long-term wellness.',
    features: [
      'Panchakarma Therapies',
      'Women\'s Health Treatments',
      'Children\'s Ayurvedic Care',
      'Herbal & Detox Therapies',
    ],
    icon: 'ayurveda',
  },
  {
    title: 'Diagnostics',
    description: 'Advanced in-house diagnostic facilities for accurate and rapid diagnosis — reducing the need for referrals.',
    features: [
      'Siemens Magnetom Sempra MRI',
      'GE 32-Slice CT Scan',
      'Blood Test Facility (In-house Lab)',
      'NCV & EEG',
    ],
    icon: 'diagnostics',
  },
]

const SvgIcon = ({ type }) => {
  const icons = {
    neurosurgery: (
      <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    orthopaedics: (
      <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    physiotherapy: (
      <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    ayurveda: (
      <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    diagnostics: (
      <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
  }
  return icons[type] || icons.neurosurgery
}

export default function Services() {
  useEffect(() => {
    const items = document.querySelectorAll('.service-card')
    const section = document.getElementById('services')

    if (!section || !items.length) return

    items.forEach((el, i) => {
      el.style.cssText = `opacity:0;transform:translateY(24px);transition:opacity 0.5s ease ${i * 0.08}s,transform 0.5s ease ${i * 0.08}s`
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            items.forEach(el => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-50 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
            Departments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4">Our Services</h2>
          <p className="text-text-body text-base max-w-xl mx-auto leading-relaxed">
            Advanced multispeciality care delivered by expert doctors using state-of-the-art technology under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:block">
          {/* First 3 services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 lg:mb-6">
            {services.slice(0, 3).map((service, i) => (
              <div key={i} className="service-card group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <SvgIcon type={service.icon} />
                </div>
                <h3 className="text-base font-bold text-text-dark mb-2 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-xs text-text-body leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-text-body">
                      <span className="text-primary mt-0.5 shrink-0">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Last 2 services - Centered */}
          <div className="flex flex-col sm:flex-row gap-6 lg:flex lg:justify-center lg:gap-6">
            {services.slice(3, 5).map((service, i) => (
              <div key={i + 3} className="service-card group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 sm:flex-1 sm:max-w-xs lg:max-w-sm">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <SvgIcon type={service.icon} />
                </div>
                <h3 className="text-base font-bold text-text-dark mb-2 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-xs text-text-body leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-text-body">
                      <span className="text-primary mt-0.5 shrink-0">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
