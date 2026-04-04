import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const imgCol = document.querySelector('.about-img-col')
    const contentCol = document.querySelector('.about-content-col')
    const features = document.querySelectorAll('.about-feature')
    const section = document.getElementById('about')

    if (!section) return

    if (imgCol) {
      imgCol.style.cssText = 'opacity:0;transform:translateX(-32px);transition:opacity 0.7s ease,transform 0.7s ease'
    }
    if (contentCol) {
      contentCol.style.cssText = 'opacity:0;transform:translateX(32px);transition:opacity 0.7s ease 0.15s,transform 0.7s ease 0.15s'
    }

    features.forEach((el, i) => {
      el.style.cssText = `opacity:0;transform:translateY(16px);transition:opacity 0.5s ease ${0.3 + i * 0.1}s,transform 0.5s ease ${0.3 + i * 0.1}s`
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            if (imgCol) {
              imgCol.style.opacity = '1'
              imgCol.style.transform = 'translateX(0)'
            }
            if (contentCol) {
              contentCol.style.opacity = '1'
              contentCol.style.transform = 'translateX(0)'
            }
            features.forEach(el => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 sm:py-24 bg-gray-50 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative about-img-col">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/3]">
              <img src="https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300570/about_ha3hwt.png" alt="Hospital corridor" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-14 -right-4 sm:right-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4 border border-gray-100 mt-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-primary font-bold text-center" viewBox="0 0 100 100" fill="currentColor">
                  <text x="50" y="60" textAnchor="middle" fontSize="50" fontWeight="bold" fontFamily="Arial">
                    ✓
                  </text>
                </svg>
              </div>
              <div >
                <p className="text-xs font-bold text-text-dark ">NABH Accredited</p>
                <p className="text-[10px] text-text-body mt-0.5">Quality Healthcare Certified</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 sm:left-4 bg-primary text-white rounded-2xl shadow-lg px-5 py-4 text-center">
              <p className="text-2xl font-extrabold leading-none">15+</p>
              <p className="text-[10px] font-medium mt-0.5 tracking-wide uppercase opacity-90">Years of Care</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content-col pt-8 lg:pt-0">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark leading-tight mb-4">
              A Hospital You Can
              <br />
              <span className="text-primary">Trust Completely</span>
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-8">
              Shree Bhagwant Superspeciality Hospital is a premier multispeciality hospital in Barshi, Dist. Solapur. We combine advanced medical technology with compassionate care to deliver the finest healthcare outcomes.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {[
                {
                  title: 'Multispeciality Hospital in Barshi',
                  desc: 'Comprehensive care under one roof — neurology, orthopaedics, physiotherapy & more.',
                },
                {
                  title: 'Advanced Infrastructure',
                  desc: 'Siemens MRI, GE CT Scan, Leica Microscope & Stryker Endoscopy systems.',
                },
                {
                  title: 'Modular Operation Theatres',
                  desc: 'Fully equipped modular OT with Laminar Air Flow for sterile surgical environments.',
                },
                {
                  title: '25-Bed Trauma & Stroke ICU',
                  desc: 'Round-the-clock intensive care with trained ICU specialists and 24/7 emergency response.',
                },
                {
                  title: 'NABH Accredited Hospital',
                  subtitle: 'Certified',
                  desc: 'Quality and safety standards verified by the National Accreditation Board for Hospitals.',
                  isGreen: true,
                },
              ].map((feature, i) => (
                <li key={i} className="about-feature flex items-start gap-4">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      feature.isGreen ? 'bg-green-50' : 'bg-primary-light'
                    }`}
                  >
                    <svg className={`w-3.5 h-3.5 ${feature.isGreen ? 'text-green-600' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-dark">
                      {feature.title}
                      {feature.subtitle && <span className="ml-2 text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">{feature.subtitle}</span>}
                    </p>
                    <p className="text-xs text-text-body mt-0.5">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
              {[
                { value: '15+', label: 'Years of Excellence' },
                { value: '5000+', label: 'Successful Surgeries' },
                { value: '25', label: 'Bed ICU & Trauma Unit' },
                { value: '24/7', label: 'Emergency Services' },
              ].map((stat, i) => (
                <div key={i} className="bg-white px-4 py-5 text-center">
                  <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-[11px] text-text-body mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
