import { HeroSection } from '@/components/sections/HeroSection'
import { FeatureSection } from '@/components/sections/FeatureSection'
import { CTASection } from '@/components/sections/CTASection'
import { Card } from '@/components/ui/Card'
import { features } from '@/lib/mockData'

const stats = [
  { value: '500+', label: 'Kapal Phinisi' },
  { value: '10K+', label: 'Wisatawan Puas' },
  { value: '200+', label: 'Mitra Lokal' },
  { value: '4.9', label: 'Rating Rata-rata' },
]

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HeroSection
        badge="Platform Wisata #1 di Labuan Bajo"
        title="Semua Perjalanan Bajo, 1 Aplikasi Aja"
        description="Dari kapal phinisi hingga restoran lokal — temukan semua yang kamu butuhkan untuk petualangan sempurna di Labuan Bajo."
        ctas={[
          { label: 'Jelajahi Sekarang', href: '/home/products' },
          { label: 'Pelajari Lebih Lanjut', href: '#features', variant: 'secondary' },
        ]}
      />

      <div id="features">
        <FeatureSection
          title="Semua Ada di VoyaBajo"
          subtitle="Satu platform, semua kebutuhan wisata Anda terpenuhi"
          features={features}
          columns={4}
        />
      </div>

      <section className="py-12">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-gray-900 text-center mb-10">VoyaBajo dalam Angka</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} variant="flat" className="text-center">
              <p className="text-3xl lg:text-4xl font-extrabold font-heading text-primary-500 mb-2">{stat.value}</p>
              <p className="text-sm font-medium font-body text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <CTASection
        title="Siap Berpetualang?"
        description="Daftar sekarang dan dapatkan akses ke ratusan pengalaman wisata terbaik di Labuan Bajo."
        primaryLabel="Mulai Perjalanan"
        primaryHref="/home/booking"
        secondaryLabel="Download App"
        secondaryHref="#"
      />
    </div>
  )
}
