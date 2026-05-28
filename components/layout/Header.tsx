'use client'
import { useState } from 'react'

const navLinks = [
  { label: 'Beranda',  href: '/home' },
  { label: 'Produk',   href: '/home/products' },
  { label: 'Booking',  href: '/home/booking' },
  { label: 'Dashboard',href: '/dashboard' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-charcoal-DEFAULT text-white sticky top-0 z-40" style={{ backgroundColor: '#22282B' }}>
      <div className="max-w-[1200px] mx-auto px-10 sm:px-10">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>

          {/* Brand wordmark */}
          <a href="/home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 flex items-center justify-center text-white font-bold text-xs"
              style={{ backgroundColor: '#F16222', fontFamily: 'var(--font-display)' }}>
              VB
            </div>
            <span className="text-lg tracking-wide" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: '#FFFFFF' }}>
              VoyaBajo
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '15px' }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/home/login"
              className="text-slate-DEFAULT hover:text-white transition-colors duration-300 text-sm"
              style={{ color: '#758896', fontFamily: 'var(--font-body)' }}>
              Masuk
            </a>
            <a href="/home/booking"
              className="border border-white/70 text-white hover:bg-white hover:text-charcoal-500 transition-all duration-300 text-sm px-6 py-3"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              Pesan Sekarang
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-white/10 py-6 flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="text-white/80 hover:text-white transition-colors py-1 text-sm"
                style={{ fontFamily: 'var(--font-body)' }}>
                {link.label}
              </a>
            ))}
            <a href="/home/booking"
              className="mt-2 border border-white/70 text-white px-6 py-3 text-center text-sm hover:bg-white hover:text-[#22282B] transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              Pesan Sekarang
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
