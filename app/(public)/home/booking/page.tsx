'use client'
import { useState, FormEvent } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { CTASection } from '@/components/sections/CTASection'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Toast } from '@/components/ui/Toast'
import type { BookingFormData } from '@/lib/types'

function formatIDR(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

const PRICE_PER_PERSON = 750000

export default function BookingPage() {
  const [form, setForm] = useState<BookingFormData>({ name: '', email: '', phone: '', date: '', guests: 1 })
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; variant: 'success' | 'danger' } | null>(null)

  const total = form.guests * PRICE_PER_PERSON

  function validate() {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'Nama wajib diisi'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email tidak valid'
    if (!form.phone.match(/^(\+62|0)[0-9]{9,12}$/)) e.phone = 'Nomor HP tidak valid (contoh: 081234567890)'
    if (!form.date) e.date = 'Tanggal wajib diisi'
    else if (new Date(form.date) < new Date()) e.date = 'Tanggal harus di masa depan'
    if (form.guests < 1 || form.guests > 50) e.guests = 'Jumlah tamu 1-50 orang'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setToast({ message: `Booking berhasil! ID: ${data.bookingId}`, variant: 'success' })
        setForm({ name: '', email: '', phone: '', date: '', guests: 1 })
        setErrors({})
      } else {
        setToast({ message: data.message || 'Terjadi kesalahan', variant: 'danger' })
      }
    } catch {
      setToast({ message: 'Gagal menghubungi server', variant: 'danger' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Buat Pemesanan"
        subtitle="Isi formulir di bawah untuk memesan"
        breadcrumbs={[{ label: 'Beranda', href: '/home' }, { label: 'Booking' }]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} noValidate className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-6 space-y-5">
            <h2 className="font-bold font-heading text-gray-900 text-lg">Data Pemesan</h2>
            <Input label="Nama Lengkap" required placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} error={errors.name} />
            <Input label="Email" type="email" required placeholder="john@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} error={errors.email} />
            <Input label="Nomor HP" type="tel" required placeholder="081234567890" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} error={errors.phone} />
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-6 space-y-5">
            <h2 className="font-bold font-heading text-gray-900 text-lg">Detail Perjalanan</h2>
            <Input label="Tanggal" type="date" required value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} error={errors.date} />
            <Input label="Jumlah Tamu" type="number" required min={1} max={50} value={form.guests} onChange={e => setForm(f => ({ ...f, guests: parseInt(e.target.value) || 1 }))} error={errors.guests} helperText="Maksimum 50 orang" />
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700 font-heading">Catatan (opsional)</label>
              <textarea
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-body transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows={3}
                placeholder="Permintaan khusus, alergi makanan, dll."
                value={form.notes || ''}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
              />
            </div>
          </div>
          <Button type="submit" loading={loading} fullWidth size="lg">
            {loading ? 'Memproses...' : 'Konfirmasi Pemesanan'}
          </Button>
        </form>
        <aside className="space-y-4">
          <Card variant="default" className="sticky top-24">
            <h3 className="font-bold font-heading text-gray-900 mb-4">Ringkasan Harga</h3>
            <div className="space-y-3 text-sm font-body">
              <div className="flex justify-between">
                <span className="text-gray-600">Harga per orang</span>
                <span className="font-semibold">{formatIDR(PRICE_PER_PERSON)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Jumlah tamu</span>
                <span className="font-semibold">{form.guests} orang</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between font-bold font-heading text-base">
                <span>Total</span>
                <span className="text-primary-500">{formatIDR(total)}</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-body mt-4">Pembayaran dilakukan setelah konfirmasi booking</p>
          </Card>
        </aside>
      </div>
      <CTASection
        title="Butuh Bantuan?"
        description="Tim kami siap membantu Anda merencanakan perjalanan terbaik."
        primaryLabel="Hubungi Kami"
        primaryHref="#"
        className="mt-12"
      />
      {toast && <Toast message={toast.message} variant={toast.variant} onClose={() => setToast(null)} />}
    </div>
  )
}
