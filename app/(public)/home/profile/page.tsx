'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { Toast } from '@/components/ui/Toast'
import { mockBookings } from '@/lib/mockData'

function formatIDR(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

const statusVariant: Record<string, 'success' | 'warning' | 'info' | 'default'> = {
  confirmed: 'success', pending: 'warning', completed: 'info', cancelled: 'default',
}
const statusLabel: Record<string, string> = {
  confirmed: 'Dikonfirmasi', pending: 'Menunggu', completed: 'Selesai', cancelled: 'Dibatalkan',
}

export default function ProfilePage() {
  const [name, setName] = useState('Ahmad Rizki')
  const [email, setEmail] = useState('ahmad@email.com')
  const [phone, setPhone] = useState('081234567890')
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  async function handleSave() {
    setSaving(true)
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    setToast('Profil berhasil diperbarui')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Profil Saya"
        breadcrumbs={[{ label: 'Beranda', href: '/home' }, { label: 'Profil' }]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside>
          <Card variant="default" className="text-center">
            <Avatar name={name} size="lg" className="mx-auto mb-4" />
            <h2 className="font-bold font-heading text-gray-900 text-lg">{name}</h2>
            <p className="text-sm text-gray-400 font-body mt-1">{email}</p>
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-center">
              <div><p className="text-xl font-extrabold font-heading text-primary-500">{mockBookings.length}</p><p className="text-xs text-gray-400 font-body">Total Booking</p></div>
              <div><p className="text-xl font-extrabold font-heading text-success-600">2</p><p className="text-xs text-gray-400 font-body">Selesai</p></div>
            </div>
          </Card>
        </aside>
        <div className="lg:col-span-2 space-y-6">
          <Card variant="default">
            <h3 className="font-bold font-heading text-gray-900 mb-5">Edit Profil</h3>
            <div className="space-y-4">
              <Input label="Nama Lengkap" value={name} onChange={e => setName(e.target.value)} required />
              <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              <Input label="Nomor HP" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="mt-5">
              <Button loading={saving} onClick={handleSave}>Simpan Perubahan</Button>
            </div>
          </Card>
          <Card variant="default">
            <h3 className="font-bold font-heading text-gray-900 mb-5">Riwayat Booking</h3>
            <div className="space-y-3">
              {mockBookings.map(b => (
                <div key={b.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold font-heading text-gray-900">{b.productName}</p>
                    <p className="text-xs text-gray-400 font-body">{b.date} · {b.guests} orang</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-heading text-gray-700">{formatIDR(b.total)}</span>
                    <Badge variant={statusVariant[b.status]}>{statusLabel[b.status]}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      {toast && <Toast message={toast} variant="success" onClose={() => setToast(null)} />}
    </div>
  )
}
