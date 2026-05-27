import { cn } from '@/lib/cn'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  actions?: React.ReactNode
  className?: string
}

export function PageHeader({ title, subtitle, description, breadcrumbs, actions, className }: PageHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-body" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {crumb.href ? (
                <a href={crumb.href} className="hover:text-primary-500 transition-colors">{crumb.label}</a>
              ) : (
                <span className="text-gray-900 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-gray-900">{title}</h1>
          {subtitle && <p className="text-base font-semibold text-primary-500 mt-1 font-heading">{subtitle}</p>}
          {description && <p className="text-sm text-gray-500 mt-2 font-body">{description}</p>}
        </div>
        {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
      </div>
    </div>
  )
}
