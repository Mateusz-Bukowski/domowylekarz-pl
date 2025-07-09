'use client'

import { useState } from 'react'
import Link from 'next/link'

const specializations = [
  'Internista', 'Lekarz medycyny rodzinnej', 'Pediatra', 'Alergolog',
  'Alergolog dziecięcy', 'Chirurg', 'Dermatolog', 'Dermatolog dziecięcy',
  'Diabetolog', 'Endokrynolog', 'Endokrynolog dziecięcy', 'Gastrolog',
  'Gastrolog dziecięcy', 'Ginekolog', 'Kardiolog', 'Laryngolog',
  'Laryngolog dziecięcy', 'Nefrolog', 'Neurolog', 'Neurolog dziecięcy',
  'Onkolog', 'Ortopeda', 'Ortopeda dziecięcy', 'Pulmonolog',
  'Pulmonolog dziecięcy', 'Okulista', 'Urolog'
]

export default function Hero() {
  const [isSpecializationsOpen, setIsSpecializationsOpen] = useState(false)

  const toggleSpecializations = () => {
    setIsSpecializationsOpen(!isSpecializationsOpen)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline - Emotional for mothers */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Spokój dla mamy,
            <br />
            <span className="text-accent-300">zdrowie dla dziecka</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 opacity-95 animate-fade-in-up animation-delay-200">
            Lekarz dostępny 24/7 • Bez kolejek • Bez wychodzenia z domu
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-400">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base">
              ✨ 25+ specjalizacji
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base">
              ⚡ Teleporada w ten sam dzień
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base">
              👶 Specjaliści dla dzieci
            </div>
          </div>
          
          {/* Price Highlight */}
          <div className="mb-8 animate-fade-in-up animation-delay-600">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-300 mb-2">
              Już od 1,36 zł dziennie
            </p>
            <p className="text-lg md:text-xl opacity-90">
              Mniej niż kawa z automatu
            </p>
          </div>

          {/* Specializations Dropdown */}
          <div id="specializations" className="max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-800">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
              <button
                onClick={toggleSpecializations}
                className="w-full p-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg flex items-center justify-center gap-3 hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
              >
                <span className="text-2xl">👨‍⚕️</span>
                <span>Zobacz wszystkie dostępne specjalizacje</span>
                <span className={`text-xl transition-transform duration-300 ${isSpecializationsOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                isSpecializationsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {specializations.map((spec, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg text-gray-700 font-medium text-sm border-l-4 border-primary-400 hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-1000">
            <Link
              href="https://app.homedoctor.pl/operator/open/subscriptions/individual/sold/add/78/888"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-accent-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-2xl">📞</span>
              Rozpocznij już dziś
            </Link>
            
            <div className="text-center">
              <p className="text-sm opacity-80 mb-1">Zaufało nam już</p>
              <p className="text-2xl font-bold">15,000+ rodzin</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80 animate-fade-in-up animation-delay-1200">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">98% zadowolonych pacjentów</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="text-sm">7 lat doświadczenia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">Bezpieczne i poufne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
