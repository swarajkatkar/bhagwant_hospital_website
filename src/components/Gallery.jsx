import React, { useState, useEffect } from 'react'

const galleryImages = [
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300576/hospital-day_eusora.png', name: 'Hospital Building - Day' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300576/hospital-night_crbbtb.jpg', name: 'Hospital Building - Night' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300579/reception_ic9zyc.png', name: 'Reception & Lobby' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300577/ot-room_xgdmpg.png', name: ' Neuro Operation Theatre' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300573/icu_nefdsw.png', name: 'ICU & HDU' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300573/hospital-corridor_pf1cjy.png', name: 'Hospital Corridor' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300574/mri_rti013.png', name: 'MRI Scan Center' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300577/ct-scan_ghkewo.png', name: 'CT Scan Suite' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300580/xray_vzlmvz.png', name: 'X-Ray Department' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300571/ayruveda_bttyms.png', name: 'Ayurveda Centre' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300572/guest-room_tjgimq.png', name: 'Dormitory' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300571/canteen_v4brym.png', name: 'Canteen & Dining' },
   { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300579/special-corridor_kklqi9.png', name: 'Special Room Corridor' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300579/special-room_k9qgvs.png', name: 'Special Room' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300580/semispecial-coridor_omyljm.png', name: ' Semi Special Room Corridor' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300578/semi-special-room_xtv2zi.png', name: 'Semi-Special Room' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300580/ortho-ot_ajvzzs.png', name: 'Modular Ortho Operation Theatre' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775326708/a8b25a8d-b843-4127-8369-224c053d4b2a.png', name: 'Parking Facility' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300575/medical_ubjvhq.png', name: 'Medical Center' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300575/opd-waiting-area_bblv4z.png', name: 'OPD Waiting Area' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300948/e97f9823-7b44-4450-8f06-f0eb5cc1b185.png', name: 'Panchkarma Therapy' },
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300571/ayurveda-pharmacy_tbgjp7.png', name: 'Ayurveda Pharmacy' }, 
  { src: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300571/ambulance_azitv0.png', name: 'Ambulance' }, 

]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Scroll reveal animation
  useEffect(() => {
    const section = document.getElementById('gallery')
    if (!section) return

    const carousel = document.querySelector('.carousel-container')
    if (carousel) {
      carousel.style.cssText = 'opacity:0;transform:translateY(30px);transition:opacity 0.7s ease,transform 0.7s ease'
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && carousel) {
            carousel.style.opacity = '1'
            carousel.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const currentImage = galleryImages[currentIndex]

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark mb-4">Inside Our Hospital</h2>
          <p className="text-text-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A look at our world-class facilities, infrastructure, and the dedicated team that makes it all possible.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="carousel-container">
          {/* Single Image Display with Side Arrows */}
          <div className="flex justify-between items-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 flex-shrink-0"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Center Image */}
            <div className="relative flex-1 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[18/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                key={currentIndex}
                src={currentImage.src}
                alt={currentImage.name}
                className="w-full h-full object-cover transition-opacity duration-500 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Image Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-5 sm:px-8 lg:px-10 py-5 sm:py-7 lg:py-8">
                <p className="text-white font-semibold text-base sm:text-xl lg:text-2xl">{currentImage.name}</p>
                <p className="text-white/70 text-xs sm:text-sm mt-1">
                  {currentIndex + 1} <span className="text-white/50">/ {galleryImages.length}</span>
                </p>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 flex-shrink-0"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2.5 flex-wrap">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-3 h-3 bg-primary shadow-lg'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
