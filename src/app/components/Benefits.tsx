'use client'

import { useEffect, useRef } from 'react'

const benefits = [
  {
    icon: '🩺',
    title: '25+ specjalizacji',
    description: 'Internista, pediatra, dermatolog, kardiolog i wiele innych. Wszystko bez skierowania!',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: '⚡',
    title: 'Teleporada w ten sam dzień',
    description: 'Kup pakiet rano, skonsultuj się po południu. Natychmiastowy dostęp do specjalistów.',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: '👩‍⚕️',
    title: '7 lat doświadczenia',
    description: 'Zaufany partner w opiece zdrowotnej. Pomagamy rodzinom już od 2017 roku.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    icon: '🕐',
    title: 'Szybka odpowiedź',
    description: 'Lekarz Ogólny - do 4h • Lekarze Specjaliści - do 24h',
    color: 'from-primary-600 to-secondary-500'
  },
  {
    icon: '🔬',
    title: 'Specjaliści dla dzieci',
    description: 'Pulmonolog, neurolog, endokrynolog, dermatolog i alergolog dziecięcy z wieloletnim doświadczeniem.',
    color: 'from-secondary-600 to-primary-500'
  },
  {
    icon: '🏠',
    title: 'Bez wychodzenia z domu',
    description: 'Konsultacje online bez kolejek i czekania. Idealne dla chorych dzieci i zajętych rodziców.',
    color: 'from-accent-600 to-primary-500'
  },
  {
    icon: '📋',
    title: 'Kompleksowa diagnostyka',
    description: 'E-recepty, skierowania na badania, zalecenia leczenia - wszystko online bez dodatkowych wizyt.',
    color: 'from-primary-500 to-accent-500'
  },
  {
    icon: '⏰',
    title: 'Elastyczne godziny',
    description: 'Dostęp do lekarzy także w godzinach wieczornych i weekendy. Pomoc gdy najbardziej potrzebujesz.',
    color: 'from-secondary-500 to-accent-500'
  },
  {
    icon: '💰',
    title: 'Przystępna cena',
    description: 'Zaledwie 1,36 zł dziennie to niewielka inwestycja w zdrowie całej rodziny.',
    color: 'from-accent-500 to-secondary-500'
  }
]

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0')
                card.classList.add('opacity-100', 'animate-fade-in-up')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="benefits" ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dlaczego mamy wybierają
            <span className="text-primary-600"> Home Doctor</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rozumiemy, jak ważne jest dla Ciebie zdrowie Twojego dziecka. 
            Dlatego stworzyliśmy rozwiązanie, które daje Ci spokój i pewność, 
            że pomoc jest zawsze w zasięgu ręki.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Gotowa na spokój ducha?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Dołącz do tysięcy rodzin, które już nie martwią się o dostęp do lekarza dla swojego dziecka
            </p>
            <a
              href="https://app.homedoctor.pl/operator/open/subscriptions/individual/sold/add/78/888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl">💝</span>
              Zadbaj o swoje dziecko już dziś
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
