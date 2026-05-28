const footerLinks = {
  Layanan: [
    { label: 'Kapal Phinisi', href: '/home/products' },
    { label: 'Rental Kendaraan', href: '/home/products' },
    { label: 'Restoran', href: '/home/products' },
    { label: 'Oleh-oleh', href: '/home/products' },
  ],
  Perusahaan: [
    { label: 'Tentang Kami', href: '#' },
    { label: 'Karir', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Kontak', href: '#' },
  ],
  Bantuan: [
    { label: 'FAQ', href: '#' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Dukungan', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#22282B', color: '#FFFFFF' }}>
      {/* Top border accent */}
      <div style={{ height: '1px', backgroundColor: '#F16222', opacity: 0.6 }} />

      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <a href="/home" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: '#F16222', fontFamily: 'var(--font-display)' }}>
                VB
              </div>
              <span className="text-lg" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>VoyaBajo</span>
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#758896', fontFamily: 'var(--font-body)', fontWeight: 300, lineHeight: '24px' }}>
              Platform wisata terlengkap untuk menjelajahi keindahan Labuan Bajo. Semua dalam satu aplikasi.
            </p>
            <div className="flex gap-4">
              {['IG', 'FB', 'TW'].map(s => (
                <a key={s} href="#"
                  className="text-sm hover:text-white transition-colors duration-300"
                  style={{ color: '#758896', fontFamily: 'var(--font-body)' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs tracking-widest uppercase mb-6"
                style={{ color: '#758896', fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.1em' }}>
                {title}
              </p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-sm hover:text-white transition-colors duration-300"
                      style={{ color: '#FFFFFF', opacity: 0.7, fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: '1px solid rgba(117,136,150,0.25)', paddingTop: '32px' }}
          className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#758896', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
            © 2024 VoyaBajo. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#758896', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
            Made with ♥ in Labuan Bajo
          </p>
        </div>
      </div>
    </footer>
  )
}
