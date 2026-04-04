import React, { useEffect } from 'react'

const highlightData = [
  {
    icon: 'neurosurgery',
    title: 'Neurosurgery',
    subtitle: 'Brain & Spine Care',
  },
  {
    icon: 'orthopaedics',
    title: 'Orthopaedics',
    subtitle: 'Joint & Bone Surgery',
  },
  {
    icon: 'mri',
    title: 'MRI & CT Scan',
    subtitle: 'Advanced Diagnostics',
  },
  {
    icon: 'emergency',
    title: 'Emergency Care',
    subtitle: '24/7 Trauma Response',
  },
  {
    icon: 'blood-test',
    title: 'Blood Test',
    subtitle: 'In-house Lab Facility',
  },
  {
    icon: 'neuro-cath',
    title: 'Neuro Cath Lab',
    subtitle: 'First in Solapur District',
  },
]

const SvgIcon = ({ type }) => {
  const icons = {
    neurosurgery: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    orthopaedics: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    mri: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.343 6.343a8 8 0 000 11.314M17.657 6.343a8 8 0 010 11.314M3.515 3.515a13 13 0 000 16.97M20.485 3.515a13 13 0 010 16.97" />
      </svg>
    ),
    emergency: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4M10 12h4" />
      </svg>
    ),
    'blood-test': (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    'neuro-cath': (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }
  return icons[type] || icons.neurosurgery
}

export default function Highlights() {
  useEffect(() => {
    const observerOptions = { threshold: 0.2 }
    const cards = document.querySelectorAll('.highlight-card')
    const section = document.getElementById('highlights')

    if (!section || !cards.length) return

    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(24px)'
      card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`
    })

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          cards.forEach(c => {
            c.style.opacity = '1'
            c.style.transform = 'translateY(0)'
          })
        }
      })
    }, observerOptions)

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="highlights" className="relative z-20 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
        <div className="bg-white rounded-3xl shadow-xl px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6 sm:mb-8">
            Our Core Specialities
          </p>
          <div className="flex overflow-x-auto gap-4 pb-2 -mx-1 px-1 sm:grid sm:grid-cols-3 sm:overflow-x-visible sm:pb-0 lg:grid-cols-6 snap-x snap-mandatory sm:snap-none scrollbar-hide">
            {highlightData.map((item, index) => (
              <article
                key={index}
                className={`highlight-card group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-gray-50 hover:bg-primary-light border transition-all duration-300 cursor-default min-w-[160px] sm:min-w-0 snap-start shrink-0 sm:shrink ${
                  item.isNew
                    ? 'border-primary/40 shadow-md hover:shadow-lg hover:border-primary/80 relative'
                    : 'border-transparent hover:border-primary/20 shadow-sm hover:shadow-md'
                }`}
              >
                {item.isNew && (
                  <div className="absolute -top-2 right-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl bg-primary-light group-hover:bg-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                  <SvgIcon type={item.icon} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-dark group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-body mt-0.5">{item.subtitle}</p>
                </div>
                <div className="w-8 h-0.5 bg-primary/20 group-hover:bg-primary group-hover:w-12 rounded-full transition-all duration-300" />
              </article>
            ))}
          </div>
          <p className="text-center text-[10px] text-text-body/50 mt-4 sm:hidden tracking-wide">
            ← Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  )
}
