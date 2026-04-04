import React, { useEffect, useState } from 'react'

const facilities = [
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300577/ot-room_xgdmpg.png',
    tag: 'Surgical',
    title: 'Neuro Operation Theatre',
    description: 'Modular OT · Laminar Air Flow System',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300573/icu_nefdsw.png',
    tag: 'Critical Care',
    title: 'ICU & HDU',
    description: '25-Bed Trauma & Stroke ICU',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300574/mri_rti013.png',
    tag: 'Diagnostics',
    title: 'MRI & CT Scan',
    description: 'Siemens MRI · GE 32-Slice CT',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300579/reception_ic9zyc.png',
    tag: 'Welcome',
    title: 'Reception & Lobby',
    description: 'Warm & welcoming patient lobby',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300580/xray_vzlmvz.png',
    tag: 'Imaging',
    title: 'X-Ray & Ultrasound',
    description: 'Advanced imaging diagnostics',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300571/ayruveda_bttyms.png',
    tag: 'Wellness',
    title: 'Ayurveda Centre',
    description: 'Traditional holistic healing',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300580/ortho-ot_ajvzzs.png',
    tag: 'Surgical',
    title: 'Ortho Operation Theatre',
    description: 'Modular ortho operation theatre',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300583/parking_vsz7te.png',
    tag: 'Amenities',
    title: 'Parking Facility',
    description: 'Spacious patient parking',
  },
  {
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300575/medical_ubjvhq.png',
    tag: 'Services',
    title: 'Medical Center',
    description: 'Modern medical services',
  },

]

function FacilityModal({ facility, isOpen, onClose }) {
  if (!isOpen || !facility) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm opacity-100 pointer-events-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 cursor-pointer z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-auto object-contain max-h-[80vh]"
          />
        </div>

        {/* Facility Info */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">{facility.tag}</span>
          </div>
          <h3 className="text-white font-bold text-2xl leading-tight mb-2">{facility.title}</h3>
          <p className="text-white/70 text-sm">{facility.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const items = document.querySelectorAll('.facility-tile')
    const section = document.getElementById('facilities')

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

  const handleOpenModal = (facility) => {
    setSelectedFacility(facility)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedFacility(null), 300)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return
      if (e.key === 'Escape') handleCloseModal()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  return (
    <section id="facilities" className="py-20 sm:py-24 bg-white font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
            Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4">World-Class Facilities</h2>
          <p className="text-text-body text-base max-w-xl mx-auto leading-relaxed">
            Our hospital is designed for patient comfort, clinical safety, and operational efficiency — every facility built to the highest standard.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((facility, i) => (
            <div
              key={i}
              onClick={() => handleOpenModal(facility)}
              className={`facility-tile group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                facility.isNew ? 'ring-2 ring-primary/50 ring-offset-2' : ''
              }`}
              role="button"
              tabIndex={0}
              aria-label={`View ${facility.title}`}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleOpenModal(facility)
              }}
            >
              {facility.isNew && (
                <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider z-10">
                  New
                </div>
              )}
              <img
                src={facility.image}
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-all duration-300" />

              {/* View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-primary text-[10px] font-semibold uppercase tracking-wider">{facility.tag}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{facility.title}</h3>
                <p className="text-white/70 text-xs mt-0.5">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <FacilityModal
        facility={selectedFacility}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
