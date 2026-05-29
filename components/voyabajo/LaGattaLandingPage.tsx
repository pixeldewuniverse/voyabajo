'use client'
import { mockTestimonials, mockProducts, features, merchantStats } from '@/lib/mockData'
import type { Product } from '@/lib/types'
import { formatIDR } from '@/lib/formatters'

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0d1b26', height: '100vh', minHeight: '600px' }}
    >
      {/* ── SVG full-bleed dark ocean background ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-sky2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#060e14" />
            <stop offset="40%"  stopColor="#0d1b26" />
            <stop offset="100%" stopColor="#0a1520" />
          </linearGradient>
          <linearGradient id="lg-ocean2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0e2535" />
            <stop offset="100%" stopColor="#04090d" />
          </linearGradient>
          <radialGradient id="lg-moon2" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fffef0" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#d4c88a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d4c88a" stopOpacity="0" />
          </radialGradient>
          <filter id="lg-glow2">
            <feGaussianBlur stdDeviation="25" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="lg-boat-shadow">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.5"/>
          </filter>
          <linearGradient id="lg-orange-sail2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#F16222" />
            <stop offset="100%" stopColor="#a03a10" />
          </linearGradient>
          {/* Wave highlight */}
          <linearGradient id="lg-wave-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="30%"  stopColor="white" stopOpacity="0.04" />
            <stop offset="70%"  stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          {/* Vignette */}
          <radialGradient id="lg-vig2" cx="50%" cy="50%" r="70%">
            <stop offset="30%"  stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(6,14,20,0.7)" />
          </radialGradient>
        </defs>

        {/* Deep sky */}
        <rect width="1440" height="900" fill="url(#lg-sky2)" />

        {/* Stars */}
        {([
          [150,60],[280,35],[430,90],[560,45],[720,75],[880,30],[1020,95],[1180,55],[1300,80],[1420,40],
          [90,130],[340,110],[510,145],[670,100],[840,120],[1010,140],[1200,105],[1370,125],
          [200,170],[450,155],[630,180],[810,160],[1050,175],[1250,150],[50,85],[380,50],[700,135],[950,60],[1150,90],[1380,70],
        ] as [number,number][]).map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.3 : i % 3 === 0 ? 0.9 : 0.6}
            fill="white" opacity={0.15 + (i % 7) * 0.06} />
        ))}

        {/* Moon */}
        <circle cx="1100" cy="160" r="120" fill="url(#lg-moon2)" filter="url(#lg-glow2)" opacity="0.6" />
        <circle cx="1100" cy="160" r="38" fill="#fffef0" opacity="0.9" />
        <circle cx="1100" cy="160" r="28" fill="#fffff8" />

        {/* Horizon mist */}
        <rect x="0" y="480" width="1440" height="80"
          fill="url(#lg-sky2)" opacity="0.6" />

        {/* Ocean surface */}
        <rect x="0" y="540" width="1440" height="360" fill="url(#lg-ocean2)" />

        {/* Long wave highlights — mimicking real ocean texture */}
        {[560, 590, 620, 655, 695, 740, 790, 850].map((y, i) => (
          <path key={i}
            d={`M${-100 + i * 20} ${y} Q${350 + i * 10} ${y - 6} ${720} ${y} Q${1080 - i * 8} ${y + 5} ${1540 - i * 15} ${y - 3}`}
            stroke="white" strokeWidth={i < 3 ? 0.8 : 0.5} fill="none"
            opacity={0.04 - i * 0.003} />
        ))}

        {/* Wave shimmer patches */}
        <rect x="0" y="555" width="1440" height="3" fill="url(#lg-wave-light)" opacity="0.8" />
        <rect x="0" y="580" width="1440" height="2" fill="url(#lg-wave-light)" opacity="0.5" />

        {/* Moonlight reflection on water */}
        <path d="M980 545 Q1100 555 1220 545 Q1150 600 1050 595 Q980 590 980 545 Z"
          fill="white" opacity="0.04" />
        <path d="M1020 575 Q1100 582 1180 575 Q1140 610 1060 607 Q1020 602 1020 575 Z"
          fill="white" opacity="0.025" />

        {/* Far island silhouettes (very dark) */}
        <path d="M-20 542 Q60 450 150 472 Q210 455 280 470 Q340 458 390 472 L390 542 Z"
          fill="#060e14" opacity="0.95" />
        <path d="M1050 542 Q1120 455 1210 472 Q1270 458 1330 470 Q1400 460 1460 475 L1460 542 Z"
          fill="#060e14" opacity="0.95" />

        {/* MAIN PHINISI — center, angled slightly like La Gatta boat */}
        <g filter="url(#lg-boat-shadow)" transform="translate(530, 390) rotate(-8, 100, 80)">
          {/* Hull — elongated */}
          <path d="M0 95 Q55 108 130 100 Q145 118 110 126 Q65 132 15 126 Z" fill="#120a04" />
          <path d="M0 95 L15 126 Q65 132 110 126 L125 100 Z" fill="#1e0f06" />
          {/* Deck */}
          <rect x="15" y="88" width="90" height="8" fill="#2a1408" />
          {/* Cabin structures */}
          <rect x="35" y="78" width="30" height="12" fill="#251208" />
          <rect x="72" y="82" width="20" height="8" fill="#251208" />
          {/* Mast */}
          <line x1="62" y1="88" x2="62" y2="-5" stroke="#1e0f06" strokeWidth="4" />
          {/* Fore mast */}
          <line x1="62" y1="88" x2="62" y2="35" stroke="#1e0f06" strokeWidth="2.5" />
          {/* Bowsprit */}
          <line x1="62" y1="82" x2="5" y2="62" stroke="#1e0f06" strokeWidth="2" />
          {/* ORANGE main sail */}
          <polygon points="62,-2 62,84 128,66" fill="url(#lg-orange-sail2)" opacity="0.88" />
          {/* Cream fore sail */}
          <polygon points="62,38 62,84 14,74" fill="#d4c8a8" opacity="0.82" />
          {/* Orange mizzen */}
          <polygon points="62,15 62,70 8,62" fill="#F16222" opacity="0.35" />
          {/* Flag */}
          <polygon points="62,-5 62,10 76,3" fill="#F16222" opacity="0.9" />
          {/* Water line reflection */}
          <path d="M15 126 Q65 136 110 126" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        </g>

        {/* Smaller boat left */}
        <g transform="translate(280, 460)" opacity="0.55">
          <path d="M3 65 Q35 74 66 65 Q72 78 52 84 Q35 88 12 84 Z" fill="#120a04" />
          <line x1="35" y1="65" x2="35" y2="8" stroke="#1e0f06" strokeWidth="2.5" />
          <polygon points="35,10 35,62 66,50" fill="#F16222" opacity="0.7" />
          <polygon points="35,28 35,62 8,56" fill="#d4c8a8" opacity="0.75" />
        </g>

        {/* Smaller boat right */}
        <g transform="translate(870, 450)" opacity="0.45">
          <path d="M3 60 Q32 68 62 60 Q67 72 48 78 Q32 82 11 78 Z" fill="#120a04" />
          <line x1="32" y1="60" x2="32" y2="8" stroke="#1e0f06" strokeWidth="2" />
          <polygon points="32,10 32,56 62,46" fill="#C94912" opacity="0.65" />
          <polygon points="32,26 32,56 8,52" fill="#d4c8a8" opacity="0.7" />
        </g>

        {/* Vignette */}
        <rect width="1440" height="900" fill="url(#lg-vig2)" />

        {/* Extra dark bottom fade */}
        <linearGradient id="lg-bottom-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(6,14,20,0.6)" />
        </linearGradient>
        <rect x="0" y="600" width="1440" height="300" fill="url(#lg-bottom-fade)" />
      </svg>

      {/* ── Transparent Nav Overlay ── */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between"
        style={{ padding: '36px 48px' }}>
        {/* Left: Menu button */}
        <button
          className="flex items-center gap-2 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '15px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.65)', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => {
            // open full-screen menu — handled by Header component in layout
            // For now, link to products
            window.location.href = '/home/products'
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
          <span>Menu</span>
        </button>

        {/* Center: Bordered icon */}
        <a href="/home" className="flex items-center justify-center transition-colors duration-300 hover:border-white/60"
          style={{ width: '52px', height: '52px', border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.75)' }}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '22px', height: '22px' }}>
            <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <line x1="16" y1="12" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 18 Q16 22 24 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M10 26 Q16 20 22 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </a>

        {/* Right: Book */}
        <a href="/home/booking"
          className="transition-colors duration-300 hover:text-white"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '15px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.65)' }}>
          Book
        </a>
      </div>

      {/* ── GHOST HEADLINE — La Gatta style ── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        style={{ padding: '0 40px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(52px, 9vw, 120px)',
            lineHeight: '1.0',
            letterSpacing: '-0.02em',
            color: 'rgba(255,255,255,0.18)',
            textAlign: 'center',
            maxWidth: '1100px',
            userSelect: 'none',
          }}
        >
          Semua Perjalanan
          <br />
          Bajo, 1 Aplikasi
        </h1>
      </div>

      {/* ── Brand name bottom center ── */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center gap-4">
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          V O Y A B A J O
        </p>

        {/* Scroll line */}
        <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.25)' }} />
      </div>
    </section>
  )
}

// ─── FEATURE SECTION ──────────────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <div className="mb-16" style={{ borderLeft: '3px solid #F16222', paddingLeft: '24px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#758896', marginBottom: '12px' }}>
            Apa yang Kami Tawarkan
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '1.2', color: '#22282B' }}>
            Semua Ada di VoyaBajo
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
          style={{ border: '1px solid #E8E8E8' }}>
          {features.map((f, i) => (
            <div key={i}
              className="group p-10 transition-all duration-500 hover:bg-[#22282B] cursor-default"
              style={{
                borderRight: i < 3 ? '1px solid #E8E8E8' : 'none',
                borderBottom: '1px solid transparent',
              }}>
              <div className="text-3xl mb-6 transition-transform duration-500 group-hover:scale-110">{f.icon}</div>
              <h3 className="mb-3 transition-colors duration-500 group-hover:text-white"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '20px', color: '#22282B', lineHeight: '1.3' }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', lineHeight: '22px', color: '#758896' }}
                className="transition-colors duration-500 group-hover:text-white/70">
                {f.description}
              </p>
              {/* Orange accent line */}
              <div className="mt-6 h-px w-0 group-hover:w-8 transition-all duration-500"
                style={{ backgroundColor: '#F16222' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PRODUCTS SECTION ─────────────────────────────────────────────────────────
const categoryEmoji: Record<string, string> = { phinisi: '⛵', rental: '🚗', restoran: '🍽️', 'oleh-oleh': '🎁' }

function ProductRow({ product, reverse }: { product: Product; reverse?: boolean }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:grid-cols-2' : ''}`}
      style={{ borderBottom: '1px solid #E8E8E8', minHeight: '320px' }}>
      {/* Image block */}
      <div
        className={`${reverse ? 'lg:order-2' : ''} flex items-center justify-center`}
        style={{ backgroundColor: '#22282B', minHeight: '280px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: '72px', opacity: 0.4 }}>{categoryEmoji[product.category]}</div>
        {/* Category label */}
        <div className="absolute top-6 left-6">
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#758896',
          }}>
            {product.category}
          </span>
        </div>
        {product.featured && (
          <div className="absolute top-6 right-6">
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#F16222', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Unggulan
            </span>
          </div>
        )}
      </div>

      {/* Content block */}
      <div className={`${reverse ? 'lg:order-1' : ''} flex flex-col justify-center`}
        style={{ padding: '48px 48px', backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-2 mb-4">
          <span style={{ color: '#F16222', fontSize: '14px' }}>{'★'.repeat(Math.floor(product.rating))}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#758896' }}>
            {product.rating} ({product.reviews} ulasan)
          </span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '26px', lineHeight: '1.3', color: '#22282B', marginBottom: '16px' }}>
          {product.name}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '15px', lineHeight: '24px', color: '#758896', marginBottom: '32px' }}>
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#758896', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Mulai dari
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: '#F16222', fontWeight: 400 }}>
              {formatIDR(product.price)}
            </p>
          </div>
          <a href="/home/booking"
            className="transition-all duration-300 hover:bg-[#22282B] hover:text-white"
            style={{
              border: '1px solid #22282B',
              color: '#22282B',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '14px',
              padding: '14px 32px',
              display: 'inline-block',
            }}>
            Pesan
          </a>
        </div>
      </div>
    </div>
  )
}

function ProductsSection() {
  const featured = mockProducts.filter(p => p.featured).slice(0, 3)
  return (
    <section style={{ backgroundColor: '#FFFFFF', paddingBottom: '96px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div className="flex items-end justify-between mb-12">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#22282B' }}>
            Produk Pilihan
          </h2>
          <a href="/home/products"
            className="transition-colors duration-300 hover:text-[#22282B]"
            style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#758896', borderBottom: '1px solid #758896', paddingBottom: '2px' }}>
            Lihat Semua →
          </a>
        </div>
        <div style={{ border: '1px solid #E8E8E8' }}>
          {featured.map((p, i) => <ProductRow key={p.id} product={p} reverse={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  )
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: '5,200+', label: 'Wisatawan Puas',    sub: 'dari seluruh dunia' },
    { value: `Rp ${(merchantStats.totalRevenue / 1000000).toFixed(0)}M`, label: 'Total Transaksi', sub: 'sepanjang 2024' },
    { value: '1,245',  label: 'Booking Aktif',     sub: 'bulan ini' },
    { value: '4.8',    label: 'Rating Rata-rata',  sub: 'dari 10K+ ulasan' },
  ]
  return (
    <section style={{ backgroundColor: '#22282B', padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#758896', marginBottom: '48px' }}>
          Kepercayaan Wisatawan
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: '1px solid rgba(117,136,150,0.2)' }}>
          {stats.map((s, i) => (
            <div key={i} className="group py-12 px-8 transition-all duration-300 hover:bg-[#2d3538]"
              style={{ borderRight: i < 3 ? '1px solid rgba(117,136,150,0.2)' : 'none' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '42px', color: '#F16222', lineHeight: 1, marginBottom: '12px' }}>
                {s.value}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px', color: '#FFFFFF', marginBottom: '6px' }}>
                {s.label}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: '#758896' }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div className="flex items-end justify-between mb-16">
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#22282B' }}>
            Kata Mereka
          </h2>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#F16222' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3"
          style={{ border: '1px solid #E8E8E8' }}>
          {mockTestimonials.map((t, i) => (
            <div key={t.id}
              className="group p-10 hover:bg-[#22282B] transition-all duration-500 cursor-default"
              style={{ borderRight: i < 2 ? '1px solid #E8E8E8' : 'none' }}>
              {/* Orange quote mark */}
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '64px', lineHeight: 1, color: '#F16222', marginBottom: '8px', opacity: 0.4 }}>
                &ldquo;
              </p>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} style={{ color: '#F16222', fontSize: '14px' }}>★</span>
                ))}
              </div>
              <p className="mb-8 transition-colors duration-500 group-hover:text-white/80"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '15px', lineHeight: '24px', color: '#22282B', fontStyle: 'italic' }}>
                {t.quote}
              </p>
              <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '24px' }}
                className="transition-colors duration-500 group-hover:border-white/10">
                <p className="transition-colors duration-500 group-hover:text-white"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px', color: '#22282B', marginBottom: '4px' }}>
                  {t.name}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: '#758896' }}>
                  {t.origin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section style={{ backgroundColor: '#22282B', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative orange line */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '2px', backgroundColor: '#F16222', opacity: 0.6 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}
        className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
        <div style={{ maxWidth: '560px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#758896', marginBottom: '24px' }}>
            Mulai Petualangan Anda
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.15', color: '#FFFFFF', marginBottom: '24px' }}>
            Siap Menjelajahi Keajaiban Labuan Bajo?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: 'rgba(255,255,255,0.6)' }}>
            Daftar sekarang dan dapatkan akses ke ratusan pengalaman wisata terbaik — dari phinisi, rental, hingga kuliner lokal.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="/home/booking"
            className="text-center transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: '#F16222',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '15px',
              padding: '18px 48px',
              display: 'inline-block',
              letterSpacing: '0.04em',
            }}>
            Pesan Sekarang
          </a>
          <a href="/home/products"
            className="text-center transition-all duration-300 hover:text-white"
            style={{
              border: '1px solid rgba(117,136,150,0.5)',
              color: '#758896',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '15px',
              padding: '18px 48px',
              display: 'inline-block',
            }}>
            Lihat Produk
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function LaGattaLandingPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
