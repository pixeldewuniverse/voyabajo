'use client'
import { useState } from 'react'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'Beranda', href: '/home' },
  { label: 'Produk', href: '/home/products' },
  { label: 'Booking', href: '/home/booking' },
  { label: 'Dashboard', href: '/dashboard' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold font-heading text-sm">VB</div>
            <span className="font-extrabold font-heading text-gray-900 text-lg">VoyaBajo</span>
          </a>
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="px-4 py-2 rounded-lg text-sm font-semibold font-heading text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="/home/booking" className="px-5 py-2 bg-primary-500 text-white font-heading font-bold text-sm rounded-xl hover:bg-primary-600 transition-colors shadow-primary">
              Pesan Sekarang
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden py-3 border-t border-gray-100 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="px-4 py-2.5 rounded-lg text-sm font-semibold font-heading text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="/home/booking" className="mt-2 px-5 py-2.5 bg-primary-500 text-white font-heading font-bold text-sm rounded-xl text-center hover:bg-primary-600 transition-colors">
              Pesan Sekarang
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
