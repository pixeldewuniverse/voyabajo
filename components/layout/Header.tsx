'use client'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Transparent overlay nav */}
      <header
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{ padding: '32px 40px', backgroundColor: 'transparent' }}
      >
        {/* Left: Menu */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '15px', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Open menu"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
          <span>Menu</span>
        </button>

        {/* Center: Logo icon in bordered box */}
        <a href="/home" className="flex items-center justify-center"
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid rgba(255,255,255,0.4)',
            color: 'rgba(255,255,255,0.85)',
          }}>
          {/* Anchor-style icon = VB monogram */}
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '22px', height: '22px' }}>
            {/* Simplified anchor / wave icon */}
            <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <line x1="16" y1="12" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 18 Q16 22 24 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M10 26 Q16 20 22 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </a>

        {/* Right: Book */}
        <a href="/home/booking"
          className="text-white/70 hover:text-white transition-colors duration-300"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '15px', letterSpacing: '0.05em' }}>
          Book
        </a>
      </header>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: '#22282B' }}
        >
          {/* Close button */}
          <div className="flex items-center justify-between" style={{ padding: '32px 40px' }}>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)', fontSize: '15px', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Close</span>
            </button>
            <a href="/home" className="flex items-center justify-center"
              style={{ width: '48px', height: '48px', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)' }}>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '22px', height: '22px' }}>
                <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <line x1="16" y1="12" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 18 Q16 22 24 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M10 26 Q16 20 22 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </a>
            <div style={{ width: '80px' }} />
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {[
              { label: 'Beranda', href: '/home' },
              { label: 'Produk', href: '/home/products' },
              { label: 'Booking', href: '/home/booking' },
              { label: 'Profil', href: '/home/profile' },
              { label: 'Dashboard', href: '/dashboard' },
            ].map(link => (
              <a key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F16222] transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '-0.01em',
                }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom row */}
          <div className="flex items-center justify-between" style={{ padding: '32px 40px', borderTop: '1px solid rgba(117,136,150,0.2)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#758896' }}>© 2024 VoyaBajo</p>
            <a href="/home/booking"
              className="transition-all duration-300 hover:bg-white hover:text-[#22282B]"
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '14px',
                padding: '12px 32px',
                display: 'inline-block',
              }}>
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </>
  )
}
