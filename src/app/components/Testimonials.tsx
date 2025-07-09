'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Weronika P.',
    rating: 5,
    text: 'Polecam, wspaniała obsługa jak i przemili lekarze. Kultura osobista na najwyższym poziomie, kompetencja, przyjazne nastawienie do pacjenta i konkretna fachowa pomoc! Wdzięczna pacjentka Weronika. Polecam!',
    verified: true,
    highlight: 'Wspaniała obsługa'
  },
  {
    name: 'Izabela L.',
    rating: 5,
    text: 'Krótki czas oczekiwania na połączenie, rzetelna porada, lekarz poświęcił na moją wizytę tyle czasu, ile potrzebowałam. Miejsce warte polecenia.',
    verified: true,
    highlight: 'Krótki czas oczekiwania'
  },
  {
    name: 'Tomasz D.',
    rating: 5,
    text: 'Miałem konsultację z internistą. Pan doktor bardzo, rzeczowy, dociekliwy i cierpliwy (dziękuję!) wystawił niezbędne skierowania i recepty. Polecam gorąco!',
    verified: true,
    highlight: 'Rzeczowy i cierpliwy'
  },
  {
    name: 'Anna K.',
    rating: 5,
    text: 'Jako mama dwójki dzieci, Home Doctor to dla mnie prawdziwe odkrycie. Nie muszę już siedzieć z chorym dzieckiem w poczekalni. Lekarz pediatra był bardzo cierpliwy i dokładnie wszystko wyjaśnił.',
    verified: true,
    highlight: 'Idealne dla mam'
  },
  {
    name: 'Magdalena S.',
    rating: 5,
    text: 'Córka miała wysypkę i bardzo się martwiłam. Dermatolog dziecięcy odpowiedział w ciągu 2 godzin, uspokoił mnie i wyjaśnił co robić. Ogromna ulga dla każdej mamy!',
    verified: true,
    highlight: 'Szybka pomoc'
  },
  {
    name: 'Katarzyna M.',
    rating: 5,
    text: 'Syn miał problemy z oddychaniem w nocy. Pulmonolog dziecięcy był dostępny nawet wieczorem. Otrzymałam szczegółowe zalecenia i receptę. Spokój ducha bezcenny!',
    verified: true,
    highlight: 'Dostępność 24/7'
  }
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0')
                card.classList.add('opacity-100', 'animate-fade-in-up')
              }, index * 150)
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Opinie o <span className="text-primary-600">Home Doctor</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Mamy aż <span className="font-bold text-primary-600">98% zadowolonych pacjentów!</span>
          </p>
          <div className="flex justify-center items-center gap-2 text-lg">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-gray-600 ml-2">4.9/5 na podstawie 2,847 opinii</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-4xl text-primary-100 group-hover:text-primary-200 transition-colors duration-300">
                "
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.highlight}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-4 italic">
                {testimonial.text}
              </p>

              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-50 px-3 py-2 rounded-full border border-green-200">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Wizyta potwierdzona przez HomeDoctor
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Zadowolonych<br />pacjentów
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                15,000+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Szczęśliwych<br />rodzin
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Specjalizacji<br />medycznych
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Lat<br />doświadczenia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Dołącz do zadowolonych matek
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Nie czekaj, aż będzie za późno. Zapewnij swojemu dziecku dostęp do najlepszych specjalistów już dziś.
            </p>
            <a
              href="https://app.homedoctor.pl/operator/open/subscriptions/individual/sold/add/78/888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl">👩‍⚕️</span>
              Rozpocznij opiekę już dziś
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
