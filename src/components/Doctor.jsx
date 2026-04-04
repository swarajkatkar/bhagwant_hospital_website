import React, { useState, useEffect } from 'react'

const doctors = [
  {
    id: 'amit',
    name: 'Dr. Amit D. Padwal',
    specialty: 'Neurosurgeon',
    degree: 'M.S., M.Ch. (Neurosurgery)',
    training: 'NIMHANS · Fellowship in Neuroendoscopy',
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775300571/dr-amit_tpfn3q.png',
    description: 'Senior Neurosurgeon specializing in keyhole brain & spine surgery, neuroendoscopy, and complex trauma management. Trained at India\'s premier neuroscience institute.',
    about: 'Dr. Amit D. Padwal is a highly accomplished Neurosurgeon trained at NIMHANS, Bengaluru — India\'s foremost neuroscience institution. With over 15 years of surgical experience, he has performed more than 1,000 brain and spine procedures, bringing world-class neurosurgical expertise to the Barshi region.',
    qualifications: [
      'M.S. (General Surgery)',
      'M.Ch. (Neurosurgery) — NIMHANS, Bengaluru',
      'Fellowship in Neuroendoscopy'
    ],
    expertise: ['Keyhole Brain Surgery', 'Neuroendoscopy', 'Spine Surgery', 'Brain Tumour Surgery', 'Epilepsy Surgery', 'Trauma & Stroke', 'NCV & EEG'],
    achievements: [
      '1,000+ successful brain & spine surgeries',
      'Pioneer of Neuroendoscopy in the Barshi–Solapur region',
      'Member — Neurological Society of India (NSI)'
    ],
    phone: '7057993990',
  },
  {
    id: 'sumit',
    name: 'Dr. Sumit D. Padwal',
    specialty: 'Orthopaedic Surgeon',
    degree: 'MBBS, D. Ortho',
    training: 'Joint Replacement (Mumbai) · Arthroscopy (Pune)',
    image: 'https://res.cloudinary.com/dt4mqa1ba/image/upload/v1775314302/a2e1c810-368c-4bc8-910e-b123dee978dc.png',
    description: 'Orthopaedic surgeon specializing in joint replacement, arthroscopy, and sports injury management. Fellowship trained at leading centres in Mumbai and Pune.',
    about: 'Dr. Sumit D. Padwal is an experienced Orthopaedic Surgeon with specialized fellowship training in Joint Replacement from Mumbai and Arthroscopy & Sports Injury from Pune. He brings advanced orthopaedic expertise to the Barshi region.',
    qualifications: [
      'MBBS',
      'D. Ortho (Diploma in Orthopaedics)',
      'Fellowship — Joint Replacement (Mumbai)',
      'Fellowship — Arthroscopy & Sports Injury (Pune)'
    ],
    expertise: ['Total Knee Replacement', 'Hip Replacement', 'Arthroscopy', 'ACL/PCL Reconstruction', 'Sports Injury', 'Fracture Management', 'Spine Procedures'],
    achievements: [
      '500+ successful joint replacement surgeries',
      '5000+ successful trauma surgeries',
      '2000+ succcessful arthroscopic surgeries',
      'Member — Indian Orthopaedic Association (IOA)',
    ],
    phone: '7720858586',
  },
]

function DoctorModal({ doctor, isOpen, onClose }) {
  if (!isOpen || !doctor) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100 pointer-events-auto transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300 z-10"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-20 w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 sm:p-8 pb-0 clear-both">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg shrink-0 border-4 border-primary-light">
            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
          </div>
          <div className="text-center sm:text-left">
            <span className="inline-block bg-primary text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
              {doctor.specialty}
            </span>
            <h3 className="text-2xl font-extrabold text-text-dark">{doctor.name}</h3>
            <p className="text-sm text-primary font-medium mt-0.5">{doctor.degree}</p>
            <p className="text-xs text-text-body mt-1">Reg. No: {doctor.id === 'amit' ? '2006/04/2383' : '2010/07/2539'}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 sm:mx-8 mt-6 border-t border-gray-100" />

        {/* Content */}
        <div className="px-6 sm:px-8 py-6 space-y-7">
          {/* About */}
          <div>
            <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              About
            </h4>
            <p className="text-sm text-text-body leading-relaxed">{doctor.about}</p>
          </div>

          {/* Qualifications */}
          <div>
            <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Qualifications & Training
            </h4>
            <ul className="space-y-2">
              {doctor.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-body">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {qual}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.expertise.map((skill, i) => (
                <span key={i} className="text-xs bg-primary-light text-primary font-medium px-3 py-1.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Achievements
            </h4>
            <ul className="space-y-2">
              {doctor.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-body">
                  <span className="text-primary shrink-0 mt-0.5">★</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Call CTA */}
          <a
            href={`tel:${doctor.phone}`}
            className="flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-2xl transition-colors duration-200 shadow-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book Appointment — {doctor.phone}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Doctor() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const cards = document.querySelectorAll('.doctor-card')
    const section = document.getElementById('doctors')

    if (!section || !cards.length) return

    cards.forEach((c, i) => {
      c.style.cssText = `opacity:0;transform:translateY(28px);transition:opacity 0.55s ease ${i * 0.15}s,transform 0.55s ease ${i * 0.15}s`
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) cards.forEach(c => {
            c.style.opacity = '1'
            c.style.transform = 'translateY(0)'
          })
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleViewProfile = (doctorId) => {
    const doctor = doctors.find(d => d.id === doctorId)
    setSelectedDoctor(doctor)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedDoctor(null), 300)
  }

  return (
    <section id="doctors" className="py-20 sm:py-24 bg-white font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary-light px-4 py-1.5 rounded-full mb-4">
            Our Expert Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4">Meet Our Doctors</h2>
          <p className="text-text-body text-base max-w-xl mx-auto leading-relaxed">
            Highly trained specialists committed to delivering world-class care with precision, compassion, and cutting-edge technology.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
          {doctors.map(doctor => (
            <article
              key={doctor.id}
              className="doctor-card bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Header with Image */}
              <div className="relative h-72 bg-primary-light overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                  {doctor.specialty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-text-dark mb-0.5">{doctor.name}</h3>
                <p className="text-sm font-medium text-primary mb-1">{doctor.degree}</p>
                <p className="text-xs text-text-body mb-4">{doctor.training}</p>
                <p className="text-sm text-text-body leading-relaxed mb-6">{doctor.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] bg-primary-light text-primary font-medium px-3 py-1 rounded-full">
                    {doctor.degree.split(',')[0].trim()}
                  </span>
                  {doctor.expertise.slice(0, 2).map((skill, i) => (
                    <span key={i} className="text-[11px] bg-primary-light text-primary font-medium px-3 py-1 rounded-full">
                      {skill.split('')[0] + skill.split(' ')[0].slice(1)}...
                    </span>
                  ))}
                </div>

                {/* View Profile Button */}
                <button
                  onClick={() => handleViewProfile(doctor.id)}
                  className="view-profile-btn w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3.5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  View Full Profile
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Visiting Doctors Info */}
        <div className="text-center mt-6">
          <p className="text-text-body text-base font-medium">
            and <span className="font-semibold text-primary">10+ visiting doctors</span>
          </p>
        </div>
      </div>

      {/* Modal */}
      <DoctorModal doctor={selectedDoctor} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
