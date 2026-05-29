'use client'
import { useId } from 'react'
import { cn } from '@/lib/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

export function Input({ label, error, helperText, required, className, id, ...props }: InputProps) {
  const autoId = useId()
  const inputId = id || autoId
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-gray-700 font-heading">
          {label}{required && <span className="text-danger-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-2.5 rounded-xl border text-sm font-body transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          error ? 'border-danger-500 bg-danger-50' : 'border-gray-300 bg-white hover:border-gray-400',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && <p id={`${inputId}-error`} className="text-xs text-danger-600">{error}</p>}
      {helperText && !error && <p id={`${inputId}-helper`} className="text-xs text-gray-500">{helperText}</p>}
    </div>
  )
}
