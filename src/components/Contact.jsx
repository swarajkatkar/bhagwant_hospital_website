import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const departments = [
    'Neurosurgery',
    'Orthopaedics',
    'Physiotherapy',
    'Ayurveda',
    'Diagnostics / Lab',
    'Emergency',
    'General Enquiry',
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit to Formspree
    const form = e.target
    const formDataToSubmit = new FormData(form)
    
    fetch('https://formspree.io/f/mykbnqqp', {
      method: 'POST',
      body: formDataToSubmit,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', department: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        console.error('Form submission error')
      }
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gray-50 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4">Contact Us</h2>
          <p className="text-text-body text-base max-w-xl mx-auto leading-relaxed">
            We're here for you — 24 hours a day, 7 days a week. Reach out for appointments, emergencies, or any enquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Column - Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-body uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm font-semibold text-text-dark leading-relaxed">
                    Gate No. 634, Bhagwant Colony,
                    <br />
                    Behind Shivshakti Ground, Kasarvadi road,
                    <br />
                    Barshi – 413401, Dist. Solapur
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <p className="text-xs font-semibold text-text-body uppercase tracking-wider mb-4">Phone Numbers</p>
              <div className="space-y-3">
                {[
                  { number: '70579 93990', label: 'Primary' },
                  { number: '77208 58586', label: 'Secondary' }
                ].map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.number.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary-light transition-colors duration-200 group"
                  >
                    <div className="w-9 h-9 bg-primary-light group-hover:bg-primary rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200">
                      <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-dark">{phone.number}</p>
                      <p className="text-[11px] text-text-body">{phone.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:7057993990"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Bhagwant+Colony+Barshi+413401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold py-3.5 rounded-2xl transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Directions
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-video">
              <iframe
                title="Hospital Location"
                src="https://maps.google.com/maps?q=Barshi,+Maharashtra,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-border shadow-sm flex flex-col justify-between">
            {!submitted ? (
              <div>
                <h3 className="text-xl font-extrabold text-text-dark mb-1">Send us a Message</h3>
                <p className="text-sm text-text-body mb-8">Fill in the form below and our team will get back to you promptly.</p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" class="block text-xs font-semibold text-text-dark mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors duration-200 ${
                        errors.name ? 'border-red-400' : 'border-border'
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-text-dark mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors duration-200 ${
                        errors.phone ? 'border-red-400' : 'border-border'
                      }`}
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label htmlFor="department" className="block text-xs font-semibold text-text-dark mb-1.5">
                      Department (Optional)
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm text-text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors duration-200"
                    >
                      <option value="" disabled>
                        Select a department
                      </option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-text-dark mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your concern or question..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-text-dark placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors duration-200 ${
                        errors.message ? 'border-red-400' : 'border-border'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-text-dark">Message Sent!</h4>
                <p className="text-sm text-text-body">Thank you. We'll reach out to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
