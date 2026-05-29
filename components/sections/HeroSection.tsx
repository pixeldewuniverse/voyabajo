import { cn } from '@/lib/cn'

interface CTAButton {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  ctas?: CTAButton[]
  className?: string
  badge?: string
}

export function HeroSection({ title, subtitle, description, image, ctas, className, badge }: HeroSectionProps) {
  return (
    <section className={cn('relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl text-white', className)}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
      </div>
      <div className="relative px-8 py-16 lg:px-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          {badge && (
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 font-heading">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight mb-4">{title}</h1>
          {subtitle && <p className="text-xl font-semibold font-heading text-primary-100 mb-3">{subtitle}</p>}
          {description && <p className="text-base font-body text-white/80 mb-8 max-w-lg">{description}</p>}
          {ctas && ctas.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {ctas.map((cta, i) => (
                <a
                  key={i}
                  href={cta.href}
                  className={cn(
                    'px-7 py-3.5 rounded-xl font-heading font-bold text-base transition-all duration-200',
                    cta.variant === 'secondary'
                      ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                      : 'bg-white text-primary-600 hover:bg-primary-50 shadow-lg'
                  )}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>
        {image && (
          <div className="flex-shrink-0 w-full lg:w-80 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img src={image} alt="Hero" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </section>
  )
}
