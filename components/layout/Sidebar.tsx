'use client'
import { useState } from 'react'
import { cn } from '@/lib/cn'

const menuItems = [
  { icon: '📊', label: 'Dashboard', href: '/dashboard' },
  { icon: '📋', label: 'Semua Booking', href: '/dashboard/bookings' },
  { icon: '🛍️', label: 'Produk', href: '/dashboard/products' },
  { icon: '📈', label: 'Laporan', href: '/dashboard/reports' },
  { icon: '⚙️', label: 'Pengaturan', href: '/dashboard/settings' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <aside className={cn('bg-white border-r border-gray-100 min-h-screen flex flex-col transition-all duration-300', collapsed ? 'w-16' : 'w-64')}>
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!collapsed && (
          <a href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold font-heading text-sm">VB</div>
            <span className="font-extrabold font-heading text-gray-900 text-sm">VoyaBajo</span>
          </a>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn('p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors', collapsed && 'mx-auto')}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={collapsed ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'} />
          </svg>
        </button>
      </div>
      <nav className="flex-1 p-3 space-y-1" aria-label="Dashboard navigation">
        {menuItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={cn('flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold font-heading text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-colors', collapsed && 'justify-center')}
            title={collapsed ? item.label : undefined}
          >
            <span className="text-lg shrink-0">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
      {!collapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 font-heading">MR</div>
            <div className="min-w-0">
              <p className="text-xs font-bold font-heading text-gray-900 truncate">Merchant</p>
              <p className="text-xs text-gray-400 font-body truncate">merchant@voyabajo.id</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
