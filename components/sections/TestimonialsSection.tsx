import { cn } from '@/lib/cn'
import type { Testimonial } from '@/lib/types'

interface TestimonialsSectionProps {
  title?: string
  testimonials: Testimonial[]
  className?: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={cn('w-4 h-4', i < rating ? 'text-yellow-400' : 'text-gray-200')} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection({ title = 'Apa Kata Mereka?', testimonials, className }: TestimonialsSectionProps) {
  return (
    <section className={cn('py-12', className)}>
      <h2 className="text-2xl lg:text-3xl font-bold font-heading text-gray-900 text-center mb-10">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.id} className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 flex flex-col">
            <StarRating rating={t.rating} />
            <p className="text-sm font-body text-gray-600 mt-4 leading-relaxed flex-1 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center font-bold font-heading text-primary-600 text-sm shrink-0">
                {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
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
