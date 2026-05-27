import { cn } from '@/lib/cn'

interface BadgeProps {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'default'
  size?: 'sm' | 'md'
  className?: string
  children: React.ReactNode
}

const variantClasses = {
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-100 text-warning-700',
  danger: 'bg-danger-100 text-danger-700',
  info: 'bg-secondary-100 text-secondary-700',
  primary: 'bg-primary-100 text-primary-700',
  default: 'bg-gray-100 text-gray-700',
}

export function Badge({ variant = 'default', size = 'sm', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-semibold rounded-full font-heading',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
