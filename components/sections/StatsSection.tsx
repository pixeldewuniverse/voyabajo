import { cn } from '@/lib/cn'

interface Stat {
  value: string
  label: string
  icon: string
}

interface StatsSectionProps {
  title?: string
  stats: Stat[]
  className?: string
}

export function StatsSection({ title, stats, className }: StatsSectionProps) {
  return (
    <section className={cn('py-12', className)}>
      {title && (
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-gray-900 text-center mb-10">{title}</h2>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 flex flex-col items-center text-center hover:shadow-card-hover transition-all duration-200">
            <span className="text-3xl mb-3">{stat.icon}</span>
            <p className="text-2xl lg:text-3xl font-extrabold font-heading text-primary-500 mb-1">{stat.value}</p>
            <p className="text-sm font-body text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
