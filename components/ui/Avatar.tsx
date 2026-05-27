import { cn } from '@/lib/cn'

interface AvatarProps {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Avatar({ name, src, size = 'md', className }: AvatarProps) {
  const sizeClasses = { sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-lg' }
  const initials = name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '??'

  return (
    <div className={cn('rounded-full flex items-center justify-center overflow-hidden font-heading font-bold bg-primary-100 text-primary-600', sizeClasses[size], className)}>
      {src ? (
        <img src={src} alt={name || 'Avatar'} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}
