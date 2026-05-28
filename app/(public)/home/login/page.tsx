'use client'
import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Toast } from '@/components/ui/Toast'
import { VoyaBajoLogo } from '@/components/voyabajo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; variant: 'success' | 'danger' } | null>(null)

  function validate() {
    const e: typeof errors = {}
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email tidak valid'
    if (password.length < 6) e.password = 'Password minimal 6 karakter'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (data.success) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('voyabajo_session', JSON.stringify({ token: data.token, user: data.user }))
        }
        setToast({ message: 'Login berhasil! Mengalihkan ke dashboard...', variant: 'success' })
        setTimeout(() => { window.location.href = '/dashboard' }, 1200)
      } else {
        setToast({ message: data.message || 'Email atau password salah', variant: 'danger' })
      }
    } catch {
      setToast({ message: 'Gagal menghubungi server', variant: 'danger' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <VoyaBajoLogo variant="full" size="lg" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold font-heading text-gray-900">Masuk ke Dashboard</h1>
          <p className="text-sm text-gray-500 font-body mt-1">Kelola bisnis wisata Anda</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Input
              label="Email"
              type="email"
              required
              placeholder="merchant@voyabajo.id"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={errors.email}
              helperText="Demo: merchant@voyabajo.id"
            />
            <Input
              label="Password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              error={errors.password}
              helperText="Demo: voyabajo123"
            />
            <Button type="submit" loading={loading} fullWidth size="lg">
              {loading ? 'Memproses...' : 'Masuk'}
            </Button>
          </form>
          <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
            <p className="text-xs font-body text-primary-700 font-semibold mb-1">Demo credentials:</p>
            <p className="text-xs font-body text-primary-600">Email: merchant@voyabajo.id</p>
            <p className="text-xs font-body text-primary-600">Password: voyabajo123</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 font-body mt-6">
          <a href="/home" className="hover:text-primary-500 transition-colors">← Kembali ke Beranda</a>
        </p>
      </div>
      {toast && <Toast message={toast.message} variant={toast.variant} onClose={() => setToast(null)} />}
    </div>
  )
}
