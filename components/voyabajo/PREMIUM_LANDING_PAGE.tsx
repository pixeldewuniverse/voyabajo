import { PremiumLabuanBajoHero } from './PREMIUM_LABUAN_BAJO_BACKGROUND'
import { CTASection } from '@/components/sections/CTASection'
import { mockTestimonials, mockProducts, features } from '@/lib/mockData'
import type { Product } from '@/lib/types'

// ─── helpers ─────────────────────────────────────────────────────────────────
function formatIDR(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

// ─── Feature card ─────────────────────────────────────────────────────────────
function PremiumFeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Hover accent bar */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="w-16 h-16 flex items-center justify-center text-3xl bg-primary-50 rounded-2xl mb-5 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-base font-bold font-heading text-gray-900 mb-2">{title}</h3>
      <p className="text-sm font-body text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}

// ─── Stats section ────────────────────────────────────────────────────────────
const stats = [
  { icon: '🧳', value: '5,200+', label: 'Wisatawan Puas' },
  { icon: '📋', value: '1,245',  label: 'Booking Aktif' },
  { icon: '💰', value: 'Rp 2.3M',label: 'Total Transaksi' },
  { icon: '⭐', value: '4.8',    label: 'Rating Rata-rata' },
]

function PremiumStatsSection() {
  return (
    <section className="relative py-20 my-16 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-white text-center mb-12">
        VoyaBajo dalam Angka
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-8">
        {stats.map((s, i) => (
          <div key={i}
            className="group relative bg-white/5 border border-white/10 hover:border-primary-500/50 rounded-2xl p-7 text-center transition-all duration-300 hover:bg-white/10 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
            <p className="text-2xl lg:text-3xl font-extrabold font-heading text-primary-400 mb-1">{s.value}</p>
            <p className="text-sm font-body text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Product card ─────────────────────────────────────────────────────────────
const categoryEmoji: Record<string, string> = {
  phinisi: '⛵', rental: '🚗', restoran: '🍽️', 'oleh-oleh': '🎁',
}
const categoryColor: Record<string, string> = {
  phinisi: 'bg-primary-100 text-primary-700',
  rental: 'bg-blue-100 text-blue-700',
  restoran: 'bg-green-100 text-green-700',
  'oleh-oleh': 'bg-amber-100 text-amber-700',
}

function PremiumProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* Image placeholder */}
      <div className="relative w-full h-44 bg-gradient-to-br from-primary-50 via-primary-100 to-orange-100 flex items-center justify-center text-5xl overflow-hidden">
        {categoryEmoji[product.category]}
        {product.featured && (
          <span className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-heading font-bold px-2.5 py-1 rounded-full">
            Unggulan
          </span>
        )}
        <span className={`absolute top-3 left-3 text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${categoryColor[product.category]}`}>
          {product.category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold font-heading text-gray-900 mb-1 overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</h3>
        <p className="text-sm text-gray-500 font-body flex-1 mb-3 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{product.description}</p>
        <div className="flex items-center gap-1.5 mb-4">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-bold font-heading text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400 font-body">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 font-body">mulai dari</span>
            <p className="font-extrabold font-heading text-primary-500">{formatIDR(product.price)}</p>
          </div>
          <a href="/home/booking"
            className="px-5 py-2 bg-primary-500 text-white text-sm font-heading font-bold rounded-xl hover:bg-primary-600 transition-colors duration-200 hover:shadow-primary"
          >
            Pesan
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function PremiumTestimonials() {
  return (
    <section className="py-16">
      <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-gray-900 text-center mb-12">
        Apa Kata Mereka?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {mockTestimonials.map(t => (
          <div key={t.id} className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 p-7 flex flex-col">
            {/* Quote mark */}
            <div className="text-6xl font-heading text-primary-100 leading-none mb-2 select-none">&ldquo;</div>
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-body text-gray-600 leading-relaxed flex-1 italic">
              {t.quote}
            </p>
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold font-heading text-primary-600 text-sm shrink-0">
                {t.name.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <p className="text-sm font-bold font-heading text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400 font-body">{t.origin}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function PremiumLandingPage() {
  const featuredProducts = mockProducts.filter(p => p.featured).slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">

      {/* Hero */}
      <PremiumLabuanBajoHero />

      {/* Features */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-gray-900 mb-3">Semua Ada di VoyaBajo</h2>
          <p className="text-base text-gray-500 font-body max-w-xl mx-auto">Satu platform, semua kebutuhan wisata Anda terpenuhi</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <PremiumFeatureCard key={i} {...f} />)}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-extrabold font-heading text-gray-900">Produk Unggulan</h2>
          <a href="/home/products" className="text-sm font-semibold font-heading text-primary-500 hover:text-primary-600 transition-colors">
            Lihat Semua →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredProducts.map(p => <PremiumProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Stats */}
      <PremiumStatsSection />

      {/* Testimonials */}
      <PremiumTestimonials />

      {/* CTA */}
      <CTASection
        title="Siap Berpetualang di Labuan Bajo?"
        description="Daftar sekarang dan dapatkan akses ke ratusan pengalaman wisata terbaik — dari kapal phinisi hingga kuliner lokal."
        primaryLabel="Mulai Perjalanan"
        primaryHref="/home/booking"
        secondaryLabel="Lihat Semua Produk"
        secondaryHref="/home/products"
      />
    </div>
  )
}
