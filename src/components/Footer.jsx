import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#doctors', label: 'Our Doctors' },
    { href: '#services', label: 'Services' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  // Back to top button
  useEffect(() => {
    const handleScroll = () => {
      setScrollToTopVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const headerH = document.getElementById('main-header')?.offsetHeight || 72
          const top = target.getBoundingClientRect().top + window.scrollY - headerH
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <>
      {/* Call Button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3 items-end">
        <a href="tel:7057993990" aria-label="Call Now" className="group flex items-center gap-3 cursor-pointer">
          <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-white text-text-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap border border-border">
            Call: 70579 93990
          </span>
          <div className="w-12 h-12 bg-primary hover:bg-primary-dark hover:scale-110 rounded-full flex items-center justify-center shadow-lg transition-all duration-200">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </a>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-4 sm:left-6 z-40 w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-primary hover:border-primary text-text-body hover:text-white transition-all duration-300 cursor-pointer ${
          scrollToTopVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Footer */}
      <footer id="footer" className="w-full font-inter bg-slate-900">
        <div className="w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#hero" className="flex items-center gap-3 mb-5 group w-fit">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                  <img src="https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300573/logo_vdhdad.png" alt="Hospital Logo" className="w-full h-full object-contain" />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-bold text-sm">Shree Bhagwant</p>
                  <p className="text-white/50 text-[10px] tracking-wide">Superspeciality Hospital</p>
                </div>
              </a>
              <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
                Advanced Neuro &amp; Orthopaedic Care in Barshi. NABH Accredited. Available 24 × 7.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 px-3 py-1.5 rounded-full mb-6">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[11px] text-white/70 font-medium">NABH Accredited Hospital</span>
              </div>
              
              {/* Social Icons */}
              {/* <div className="flex items-center gap-3">
                {['facebook', 'instagram', 'youtube', 'whatsapp'].map(social => (
                  <a
                    key={social}
                    href={social === 'whatsapp' ? 'https://wa.me/917057993990' : '#'}
                    target={social === 'whatsapp' ? '_blank' : undefined}
                    rel={social === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    aria-label={social}
                    className="w-9 h-9 bg-white/8 hover:bg-primary border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                  >
                    {social === 'facebook' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    )}
                    {social === 'instagram' && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                      </svg>
                    )}
                    {social === 'youtube' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                        <polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98" />
                      </svg>
                    )}
                    {social === 'whatsapp' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[0.12em]">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/55 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200">
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-200 shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[0.12em]">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Gate No. 634, Bhagwant Colony,
                    <br />
                    Behind Shivshakti Ground,
                    <br />
                    Barshi – 413401, Solapur
                  </p>
                </li>
                {['7057993990', '7720858586'].map((phone, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${phone}`} className="text-white/55 hover:text-white text-sm transition-colors duration-200">
                      {phone === '02184226231' ? '(02184) 226231' : phone === '7057993990' ? '70579 93990' : '77208 58586'}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timings */}
            <div>
              <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[0.12em]">Timings</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Emergency', value: '24 / 7', green: true },
                  { label: 'OPD', value: '11 am – 9 pm' },
                  { label: 'ICU', value: '24 / 7', green: true },
                  { label: 'Lab / Diagnostics', value: '24 / 7' },
                ].map((timing, i) => (
                  <li key={i} className="flex justify-between gap-4">
                    <span className="text-white/55 text-sm">{timing.label}</span>
                    <span className={`text-sm ${timing.green ? 'text-green-400 font-semibold' : 'text-white/80'}`}>
                      {timing.value}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="tel:7057993990" className="mt-6 flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 shadow-md">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                Emergency: 70579 93990
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/35 text-xs text-center sm:text-left">
              © 2024 Shree Bhagwant Superspeciality Hospital, Barshi. All rights reserved.
            </p>
            <p className="text-white/25 text-xs">NABH Accredited &nbsp;·&nbsp; Reg. MH/SOL/2006</p>
          </div>

          {/* Made with Love */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs flex items-center justify-center gap-1 flex-wrap">
              Made with
              <span className="text-red-500 text-sm">❤️</span>
              by
              <a
                href="https://www.linkedin.com/in/pranav-kulkarni1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-400 font-semibold transition-colors duration-200"
              >
                Pranav
              </a>
              and
              <a
                href="https://www.linkedin.com/in/swaraj-katkar-48a2b5282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-400 font-semibold transition-colors duration-200"
              >
                Swaraj
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
