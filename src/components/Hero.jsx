import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [isNight, setIsNight] = useState(false)
  const [heroOpacity, setHeroOpacity] = useState(0)
  const [manuallyOverridden, setManuallyOverridden] = useState(false)
  const [heroHeight, setHeroHeight] = useState(0)

  // Set hero height on mount
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (hero) {
      setHeroHeight(hero.offsetHeight)
    }
  }, [])

  // Handle scroll for day/night transition
  useEffect(() => {
    const handleScroll = () => {
      if (manuallyOverridden || heroHeight === 0) return

      const trigger = heroHeight * 0.3
      const progress = Math.min(window.scrollY / trigger, 1)
      setHeroOpacity(progress)
      setIsNight(progress > 0.5)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [manuallyOverridden, heroHeight])

  // Reset manual override when scrolling back to top
  useEffect(() => {
    if (manuallyOverridden && window.scrollY < heroHeight * 0.05) {
      setManuallyOverridden(false)
    }
  }, [manuallyOverridden, heroHeight])

  const handleDayNightToggle = () => {
    setManuallyOverridden(true)
    setIsNight(!isNight)
    setHeroOpacity(isNight ? 0 : 1)
  }

  return (
    <section id="hero" className="relative h-screen min-h-[640px] overflow-hidden font-inter">
      {/* Background Images */}
      <div
        id="hero-day"
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300576/hospital-day_eusora.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        id="hero-night"
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300576/hospital-night_crbbtb.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: heroOpacity,
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white/90 text-xs sm:text-sm font-medium px-5 py-2 rounded-full mb-6 tracking-[0.15em] uppercase">
          <svg className="w-4 h-4 text-blue-300 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          NABH Accredited Hospital
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-5 drop-shadow-xl hospital-name-cyan">
          Shree Bhagwant
          <br />
          Superspeciality Hospital
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/85 font-light mb-10 max-w-2xl leading-relaxed">
          Advanced Neuro &amp; Orthopaedic Care in Barshi
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="tel:7057993990"
            className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=Gate+No+634+Bhagwant+Colony+Barshi+413401"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-base px-8 py-4 rounded-full border-2 border-white/40 hover:border-white/75 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>

      {/* Day/Night Toggle Button */}
      <button
        onClick={handleDayNightToggle}
        aria-label="Toggle day/night"
        className="absolute bottom-8 right-5 z-30 flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-sm font-medium px-4 py-2.5 rounded-full border border-white/30 hover:border-white/50 transition-all duration-200 shadow-md cursor-pointer"
      >
        <span className="text-lg">{isNight ? '🌙' : '☀️'}</span>
        <span>{isNight ? 'Night' : 'Day'}</span>
      </button>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 z-30 flex flex-col items-center gap-1 text-white/60 text-[10px] tracking-[0.2em] uppercase pointer-events-none">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}