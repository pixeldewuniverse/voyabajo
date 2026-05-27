'use client'
import { useEffect } from 'react'
import { cn } from '@/lib/cn'

interface ToastProps {
  message: string
  variant?: 'success' | 'danger' | 'warning' | 'info'
  onClose: () => void
  duration?: number
}

const variantClasses = {
  success: 'bg-success-500 text-white',
  danger: 'bg-danger-500 text-white',
  warning: 'bg-warning-500 text-white',
  info: 'bg-secondary-500 text-white',
}

const icons = {
  success: '✓',
  danger: '✕',
  warning: '⚠',
  info: 'ℹ',
}

export function Toast({ message, variant = 'info', onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div className={cn('fixed bottom-4 right-4 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg animate-slide-up min-w-64', variantClasses[variant])}>
      <span className="font-bold text-lg">{icons[variant]}</span>
      <p className="text-sm font-body font-medium">{message}</p>
      <button onClick={onClose} className="ml-2 opacity-80 hover:opacity-100 text-lg leading-none" aria-label="Tutup notifikasi">×</button>
    </div>
  )
}
