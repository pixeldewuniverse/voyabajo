import { cn } from '@/lib/cn'

interface CTASectionProps {
  title: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  className?: string
}

export function CTASection({ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref, className }: CTASectionProps) {
  return (
    <section className={cn('bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-10 text-center text-white my-12', className)}>
      <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4">{title}</h2>
      {description && <p className="text-white/80 font-body mb-8 max-w-xl mx-auto">{description}</p>}
      <div className="flex flex-wrap gap-4 justify-center">
        {primaryLabel && primaryHref && (
          <a href={primaryHref} className="px-8 py-3.5 bg-white text-primary-600 font-heading font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg">
            {primaryLabel}
          </a>
        )}
        {secondaryLabel && secondaryHref && (
          <a href={secondaryHref} className="px-8 py-3.5 bg-white/20 text-white font-heading font-bold rounded-xl hover:bg-white/30 border border-white/30 transition-colors">
            {secondaryLabel}
          </a>
        )}
      </div>
    </section>
  )
}
