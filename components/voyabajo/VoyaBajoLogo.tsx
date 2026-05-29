import { cn } from '@/lib/cn'

type LogoVariant = 'icon' | 'wordmark' | 'full' | 'full-white'
type LogoSize = 'sm' | 'md' | 'lg' | 'xl'

interface VoyaBajoLogoProps {
  variant?: LogoVariant
  size?: LogoSize
  className?: string
}

const sizeMap: Record<LogoSize, { icon: string; text: string }> = {
  sm: { icon: 'w-7 h-7 text-xs', text: 'text-sm' },
  md: { icon: 'w-9 h-9 text-sm', text: 'text-base' },
  lg: { icon: 'w-12 h-12 text-base', text: 'text-xl' },
  xl: { icon: 'w-16 h-16 text-xl', text: 'text-3xl' },
}

export function VoyaBajoLogo({ variant = 'full', size = 'md', className }: VoyaBajoLogoProps) {
  const s = sizeMap[size]
  const isWhite = variant === 'full-white'

  const Icon = () => (
    <div className={cn('rounded-xl flex items-center justify-center font-extrabold font-heading shrink-0', s.icon, isWhite ? 'bg-white text-primary-500' : 'bg-primary-500 text-white')}>
      VB
    </div>
  )

  const Text = () => (
    <span className={cn('font-extrabold font-heading', s.text, isWhite ? 'text-white' : 'text-gray-900')}>
      VoyaBajo
    </span>
  )

  if (variant === 'icon') return <Icon />
  if (variant === 'wordmark') return <Text />

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Icon />
      <Text />
    </div>
  )
}
