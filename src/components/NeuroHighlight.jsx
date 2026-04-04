import React, { useEffect } from 'react'

export default function NeuroHighlight() {
  useEffect(() => {
    const section = document.getElementById('neuro-highlight')
    if (!section) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const elements = section.querySelectorAll('.neuro-content > *')
            elements.forEach((el, i) => {
              el.style.cssText = `opacity:0;transform:translateY(24px);transition:opacity 0.6s ease ${i * 0.1}s,transform 0.6s ease ${i * 0.1}s`
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, 50)
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
    <section id="neuro-highlight" className="py-20 sm:py-28 bg-gray-50 font-inter relative overflow-hidden">
      {/* Decorative background elements */}
      {/* <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -mr-36 -mt-36" /> */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
            Clinical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4">
            Neuro Cath Lab 
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section - Left */}
          <div className="neuro-content">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src="https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300574/neuro-scan_oaqulu.jpg"
                alt="Neuro Cath Lab"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover group-hover:shadow-3xl transition-shadow duration-300"
              />
              {/* Badge */}
              {/* <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                First in District
              </div> */}
            </div>
          </div>

          {/* Information Section - Right */}
          <div className="neuro-content space-y-8">
            {/* Main description with highlighted words */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-text-body">
                Shree Bhagwant Superspeciality Hospital features a{' '}
                <span className="font-bold text-primary">state-of-the-art Neuro Cath Lab</span> —{' '}
                <span className="font-bold text-primary">the first and only facility of its kind</span> in the{' '}
                <span className="font-bold text-primary">entire Solapur district</span> that can rotate upto 180 °. This advanced technology enables{' '}
                <span className="font-bold text-primary">precise diagnosis</span> and minimally invasive treatment of{' '}
                <span className="font-bold text-primary">brain and stroke-related conditions</span>, ensuring{' '}
                <span className="font-bold text-primary">safer procedures</span> and faster recovery for patients.{' '}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="font-bold text-lg text-text-dark flex items-center gap-2">
                {/* <span className="w-2 h-2 rounded-full bg-primary" /> */}
                Key Capabilities
              </h3>

              <div className="space-y-3">
                {[
                  'Minimally Invasive Catheterization Procedures',
                  'Real-time Imaging & Visualization',
                  'Neuro-vascular Interventions',
                  'Stroke Management & Thrombectomy',
                  'Brain Aneurysm Treatment',
                  'Faster Patient Recovery & Reduced Hospital Stay',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text-body leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Book a Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
