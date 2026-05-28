'use client'
import { mockTestimonials, mockProducts, features, merchantStats } from '@/lib/mockData'
import type { Product } from '@/lib/types'

function formatIDR(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#22282B', minHeight: '100vh' }}>
      {/* SVG ocean/sky background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0d1b26" />
            <stop offset="45%"  stopColor="#22282B" />
            <stop offset="100%" stopColor="#1a2830" />
          </linearGradient>
          <linearGradient id="lg-ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0e2535" />
            <stop offset="100%" stopColor="#071419" />
          </linearGradient>
          <radialGradient id="lg-moon" cx="50%" cy="50%">
            <stop offset="0%"   stopColor="#fffef0" stopOpacity="0.95" />
            <stop offset="60%"  stopColor="#f5e8c0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f5e8c0" stopOpacity="0" />
          </radialGradient>
          <filter id="lg-glow">
            <feGaussianBlur stdDeviation="20" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="lg-orange-sail" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#F16222" />
            <stop offset="100%" stopColor="#C94912" />
          </linearGradient>
          <linearGradient id="lg-shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#F16222" stopOpacity="0" />
            <stop offset="50%"  stopColor="#F16222" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F16222" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lg-horizon-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#22282B" stopOpacity="0" />
            <stop offset="40%"  stopColor="#22282B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22282B" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1440" height="900" fill="url(#lg-sky)" />

        {/* Stars — dots */}
        {[
          [200,80],[350,45],[500,120],[650,60],[800,90],[950,40],[1100,110],[1250,75],[100,140],[420,30],[730,155],[1060,50],[1350,130],[80,60],[300,170],[600,25],[900,145],[1200,80],[1400,55],[170,100],[470,75],[760,35],[1020,160],[1310,95],
        ].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.2 : 0.7} fill="white" opacity={0.3 + (i % 5) * 0.1} />
        ))}

        {/* Moon glow */}
        <circle cx="1150" cy="130" r="90" fill="url(#lg-moon)" filter="url(#lg-glow)" opacity="0.5" />
        <circle cx="1150" cy="130" r="35" fill="#fffef0" opacity="0.85" />
        <circle cx="1150" cy="130" r="28" fill="#fffff8" />

        {/* Horizon mist */}
        <rect x="0" y="490" width="1440" height="60" fill="#22282B" opacity="0.5" />

        {/* Ocean */}
        <rect x="0" y="530" width="1440" height="370" fill="url(#lg-ocean)" />

        {/* Subtle wave lines */}
        {[560, 600, 640, 680, 720, 760].map((y, i) => (
          <path key={i}
            d={`M0 ${y} Q360 ${y - 8} 720 ${y} Q1080 ${y + 8} 1440 ${y}`}
            stroke="white" strokeWidth="0.5" fill="none" opacity={0.04 - i * 0.005} />
        ))}

        {/* Orange shimmer reflections (moonlight + orange) */}
        {[570, 610, 650].map((y, i) => (
          <rect key={i} x="0" y={y} width="1440" height="1.5" fill="url(#lg-shimmer)" opacity={0.7 - i * 0.15} />
        ))}

        {/* Far island silhouettes */}
        <path d="M-20 535 Q80 430 180 460 Q240 445 300 462 Q360 448 420 464 L420 535 Z"
          fill="#0d1a22" opacity="0.8" />
        <path d="M1020 535 Q1100 435 1190 458 Q1260 440 1330 456 Q1390 445 1450 462 L1450 535 Z"
          fill="#0d1a22" opacity="0.8" />

        {/* Main left island */}
        <path d="M-30 535 Q40 395 140 420 Q200 400 270 418 Q330 405 390 420 Q430 410 460 424 L460 535 Z"
          fill="#0a1a22" />
        {/* Island vegetation silhouette */}
        {[70, 140, 210, 290, 360, 420].map((x, i) => (
          <path key={i} d={`M${x} ${420 + i * 2} L${x - 12} ${440 + i * 2} L${x + 12} ${440 + i * 2} Z`}
            fill="#0e2535" opacity="0.9" />
        ))}

        {/* Main right island */}
        <path d="M980 535 Q1040 400 1130 422 Q1190 408 1250 422 Q1310 410 1380 425 Q1420 418 1460 430 L1460 535 Z"
          fill="#0a1a22" />
        {[1010, 1080, 1155, 1230, 1310, 1390].map((x, i) => (
          <path key={i} d={`M${x} ${422 + i * 2} L${x - 11} ${440 + i * 2} L${x + 11} ${440 + i * 2} Z`}
            fill="#0e2535" opacity="0.9" />
        ))}

        {/* Phinisi 1 — center, orange sails (hero boat) */}
        <g transform="translate(640, 420)">
          {/* Hull */}
          <path d="M5 90 Q50 100 100 90 Q108 108 82 115 Q50 120 18 115 Z" fill="#1a0e05" />
          <path d="M5 90 L18 115 Q50 120 82 115 L95 90 Z" fill="#2d1808" />
          {/* Deck */}
          <rect x="20" y="84" width="62" height="7" fill="#3d2010" />
          {/* Mast */}
          <line x1="55" y1="84" x2="55" y2="5" stroke="#2d1808" strokeWidth="3.5" />
          <line x1="55" y1="84" x2="55" y2="40" stroke="#2d1808" strokeWidth="2" />
          {/* Bowsprit */}
          <line x1="55" y1="80" x2="5" y2="65" stroke="#2d1808" strokeWidth="1.8" />
          {/* ORANGE main sail */}
          <polygon points="55,8 55,80 108,65" fill="url(#lg-orange-sail)" opacity="0.92" />
          {/* White fore sail */}
          <polygon points="55,38 55,80 12,70" fill="#e8dcc8" opacity="0.85" />
          {/* Orange jib */}
          <polygon points="55,22 55,68 5,65" fill="#F16222" opacity="0.45" />
          {/* Flag */}
          <polygon points="55,5 55,17 66,11" fill="#F16222" />
          {/* Water reflection */}
          <path d="M18 115 Q50 125 82 115 Q50 135 18 115 Z" fill="#F16222" opacity="0.05" />
        </g>

        {/* Phinisi 2 — left */}
        <g transform="translate(360, 448)" opacity="0.75">
          <path d="M4 68 Q38 77 72 68 Q79 82 58 88 Q38 92 14 88 Z" fill="#1a0e05" />
          <line x1="38" y1="68" x2="38" y2="6" stroke="#2d1808" strokeWidth="2.8" />
          <polygon points="38,8 38,64 72,52" fill="#F16222" opacity="0.7" />
          <polygon points="38,30 38,64 10,58" fill="#e8dcc8" opacity="0.8" />
          <polygon points="38,6 38,16 47,11" fill="#F16222" opacity="0.9" />
        </g>

        {/* Phinisi 3 — right */}
        <g transform="translate(940, 442)" opacity="0.7">
          <path d="M4 64 Q36 72 68 64 Q74 77 55 83 Q36 87 13 83 Z" fill="#1a0e05" />
          <line x1="36" y1="64" x2="36" y2="6" stroke="#2d1808" strokeWidth="2.5" />
          <polygon points="36,8 36,60 68,48" fill="#C94912" opacity="0.75" />
          <polygon points="36,28 36,60 8,54" fill="#e8dcc8" opacity="0.75" />
          <polygon points="36,6 36,15 45,10" fill="#F16222" opacity="0.9" />
        </g>

        {/* Horizon fade */}
        <rect x="0" y="400" width="1440" height="500" fill="url(#lg-horizon-fade)" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white"
        style={{ minHeight: '100vh', padding: '0 40px' }}>

        {/* Eyebrow */}
        <p className="mb-8 tracking-widest uppercase text-xs"
          style={{ color: '#758896', fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.15em' }}>
          Labuan Bajo · Indonesia
        </p>

        {/* Display heading — Ogg/Playfair style */}
        <h1 className="mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(48px, 8vw, 84px)',
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            maxWidth: '820px',
          }}>
          Semua Perjalanan Bajo,
          <br />
          <em style={{ color: '#F16222', fontStyle: 'italic' }}>1 Aplikasi Aja</em>
        </h1>

        {/* Subheading */}
        <p className="mb-12 max-w-xl"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: '28px',
            color: 'rgba(255,255,255,0.7)',
          }}>
          Dari kapal phinisi hingga restoran lokal — temukan semua yang kamu butuhkan untuk petualangan sempurna.
        </p>

        {/* CTAs — La Gatta style: ghost + text */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <a href="/home/products"
            className="transition-all duration-300 hover:bg-white hover:text-[#22282B]"
            style={{
              border: '1px solid rgba(255,255,255,0.7)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '16px',
              padding: '16px 40px',
              display: 'inline-block',
            }}>
            Jelajahi Sekarang
          </a>
          <a href="/home/booking"
            className="transition-colors duration-300 hover:text-white"
            style={{
              color: '#758896',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '16px',
              display: 'inline-block',
              padding: '16px 0',
            }}>
            Pesan Perjalanan →
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-12"
          style={{ borderTop: '1px solid rgba(117,136,150,0.2)', paddingTop: '40px', maxWidth: '600px', width: '100%' }}>
          {[
            { value: '500+', label: 'Kapal Phinisi' },
            { value: '10K+', label: 'Wisatawan' },
            { value: '4.8★', label: 'Rating' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, color: '#F16222' }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#758896', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div style={{ width: '1px', height: '48px', backgroundColor: '#758896' }} className="animate-bounce" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#758896', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</p>
        </div>
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
