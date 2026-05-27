import { cn } from '@/lib/cn'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-full',
}

export function PageLayout({ children, className, maxWidth = '2xl' }: PageLayoutProps) {
  return (
    <div className={cn('w-full min-h-screen', className)}>
      <div className={cn('mx-auto px-4 sm:px-6 lg:px-8 py-8', maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </div>
  )
}
