import { cn } from '@/lib/cn'

interface CardProps {
  variant?: 'default' | 'featured' | 'flat'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function Card({ variant = 'default', className, children, onClick }: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-card hover:shadow-card-hover',
    featured: 'bg-white border-2 border-primary-500 shadow-primary',
    flat: 'bg-gray-50 border border-gray-100',
  }
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-200',
        variantClasses[variant],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  )
}
