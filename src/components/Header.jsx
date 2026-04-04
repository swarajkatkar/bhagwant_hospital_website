import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#doctors', label: 'Doctors' },
    { href: '#services', label: 'Services' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Main Header */}
      <header id="main-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 shrink-0 group">
              <img 
                    src="https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300573/logo_vdhdad.png"
                    alt="Shree Bhagwant Hospital Logo"
                    className="h-10 w-auto object-contain rounded-xl"
               />
              <div className="flex flex-col leading-tight">
                <span id="logo-name" className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-text-dark' : 'text-white'
                }`}>
                  Shree Bhagwant
                </span>
                <span id="logo-sub" className={`text-[10px] sm:text-xs font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-text-body' : 'text-white/75'
                }`}>
                  Superspeciality Hospital
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isScrolled
                      ? 'text-text-dark hover:text-primary'
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Call & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:7057993990"
                className={`hidden sm:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 ${
                  isScrolled ? 'bg-primary hover:bg-primary-dark' : 'bg-primary hover:bg-primary-dark'
                }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-lg p-2 hover:bg-white/10 transition-colors duration-200"
              >
                <span className={`ham-bar block w-full h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`} />
                <span className={`ham-bar block w-full h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`} />
                <span className={`ham-bar block w-4 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 pointer-events-none transition-opacity duration-300 ${
          mobileMenuOpen ? '' : 'pointer-events-none'
        }`}
        role="presentation"
      >
        <div
          className={`absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 backdrop-blur-sm ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-text-dark">Shree Bhagwant</p>
                <p className="text-[10px] text-text-body tracking-wide">Superspeciality Hospital</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col px-4 py-5 gap-1 flex-1 overflow-y-auto">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="mob-nav-link group flex items-center gap-3 text-text-body hover:text-primary hover:bg-primary-light text-sm font-medium px-4 py-3.5 rounded-xl transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-200" />
                {link.label === 'About' ? 'About Us' : link.label === 'Doctors' ? 'Our Doctors' : link.label}
              </a>
            ))}
          </nav>

          {/* Menu Call Button */}
          <div className="px-4 pb-8 pt-2">
            <a
              href="tel:7057993990"
              className="mob-nav-link flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-2xl transition-colors duration-200 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 70579 93990
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}
