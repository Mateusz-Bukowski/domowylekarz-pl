'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🏥
              </div>
              <span className="text-2xl font-bold text-white">Home Doctor</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Telemedycyna dla dzieci - 25+ specjalizacji bez skierowania. 
              Zaufany partner w opiece zdrowotnej od 2017 roku. 
              Spokój dla mamy, zdrowie dla dziecka.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-primary-400">📞</span>
                <span>Dostępni 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400">✉️</span>
                <a href="mailto:info@homedoctor.pl" className="hover:text-primary-400 transition-colors">
                  info@homedoctor.pl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400">🏆</span>
                <span>98% zadowolonych pacjentów</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Szybkie linki</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://app.homedoctor.pl/operator/open/subscriptions/individual/sold/add/78/888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <span>🩺</span> Zamów pakiet
                </a>
              </li>
              <li>
                <a href="/#specializations" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span>👨‍⚕️</span> Specjalizacje
                </a>
              </li>
              <li>
                <a href="/#benefits" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span>✨</span> Korzyści
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span>⭐</span> Opinie
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Wsparcie</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/polityka-prywatnosci" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span>🔒</span> Polityka prywatności
                </Link>
              </li>
              <li>
                <Link href="/regulamin" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span>📋</span> Regulamin
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span>❓</span> FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <span>📞</span> Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-green-400">🔒</span>
              <span className="text-sm">Bezpieczne płatności</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-blue-400">🏥</span>
              <span className="text-sm">Licencjonowani lekarze</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm">4.9/5 ocena</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-purple-400">🛡️</span>
              <span className="text-sm">RODO compliance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Home Doctor. Wszystkie prawa zastrzeżone.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-400">
                Zaufało nam już <span className="text-primary-400 font-semibold">15,000+</span> rodzin
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-900 border-t border-red-800">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-red-200 text-sm">
            <span className="font-semibold">⚠️ WAŻNE:</span> W przypadku nagłych stanów zagrożenia życia dzwoń pod numer 112 lub udaj się do najbliższego szpitala.
          </div>
        </div>
      </div>
    </footer>
  )
}
