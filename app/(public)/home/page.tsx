import { HeroSection_VoyaBajo } from '@/components/voyabajo'
import { FeatureSection } from '@/components/sections/FeatureSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { features, mockTestimonials } from '@/lib/mockData'

const stats = [
  { value: '5,200+', label: 'Wisatawan Puas', icon: '🧳' },
  { value: '1,245', label: 'Booking Aktif', icon: '📋' },
  { value: 'Rp 2.3M', label: 'Total Transaksi', icon: '💰' },
  { value: '4.8★', label: 'Rating Rata-rata', icon: '⭐' },
]

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HeroSection_VoyaBajo />

      <FeatureSection
        title="Semua Ada di VoyaBajo"
        subtitle="Satu platform, semua kebutuhan wisata Anda terpenuhi"
        features={features}
        columns={4}
      />

      <StatsSection title="VoyaBajo dalam Angka" stats={stats} />

      <TestimonialsSection testimonials={mockTestimonials} />

      <CTASection
        title="Siap Berpetualang?"
        description="Daftar sekarang dan dapatkan akses ke ratusan pengalaman wisata terbaik di Labuan Bajo."
        primaryLabel="Mulai Perjalanan"
        primaryHref="/home/booking"
        secondaryLabel="Lihat Produk"
        secondaryHref="/home/products"
      />
    </div>
  )
}
