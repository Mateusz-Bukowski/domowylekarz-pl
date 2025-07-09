'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">
              🏥
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
              Home Doctor
            </span>
          </Link>

          {/* CTA Button */}
          <Link
            href="https://app.homedoctor.pl/operator/open/subscriptions/individual/sold/add/78/888"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm md:text-base whitespace-nowrap"
          >
            <span className="hidden sm:inline">📞 </span>
            Zamów już dziś
          </Link>
        </div>
      </div>
    </header>
  )
}
