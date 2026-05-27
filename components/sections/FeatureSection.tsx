import { cn } from '@/lib/cn'

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureSectionProps {
  title: string
  subtitle?: string
  features: Feature[]
  className?: string
  columns?: 2 | 3 | 4
}

export function FeatureSection({ title, subtitle, features, className, columns = 4 }: FeatureSectionProps) {
  const colClasses = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }
  return (
    <section className={cn('py-12', className)}>
      <div className="text-center mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-gray-900 mb-3">{title}</h2>
        {subtitle && <p className="text-base text-gray-500 font-body max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      <div className={cn('grid grid-cols-1 gap-6', colClasses[columns])}>
        {features.map((f, i) => (
          <div key={i} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1">
            <div className="w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4 bg-primary-50 rounded-2xl">{f.icon}</div>
            <h3 className="text-base font-bold font-heading text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500 font-body leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
