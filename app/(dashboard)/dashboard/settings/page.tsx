'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { Toast } from '@/components/ui/Toast'
import { mockUser } from '@/lib/mockData'

export default function SettingsPage() {
  const [name, setName] = useState(mockUser.name)
  const [email, setEmail] = useState(mockUser.email)
  const [phone, setPhone] = useState(mockUser.phone || '')
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [emailNotif, setEmailNotif] = useState(true)
  const [smsNotif, setSmsNotif] = useState(false)

  async function handleSave() {
    setSaving(true)
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    setToast('Pengaturan berhasil disimpan')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Pengaturan"
        description="Kelola akun dan preferensi Anda"
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Pengaturan' }]}
      />
      <div className="space-y-6">
        <Card variant="default">
          <div className="flex items-center gap-4 mb-6">
            <Avatar name={name} size="lg" />
            <div>
              <h3 className="font-bold font-heading text-gray-900">{name}</h3>
              <p className="text-sm text-gray-400 font-body">{email}</p>
              <p className="text-xs text-gray-300 font-body mt-0.5">Bergabung sejak {mockUser.joinedAt}</p>
            </div>
          </div>
          <h3 className="font-bold font-heading text-gray-900 mb-4">Informasi Akun</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Nama Merchant" value={name} onChange={e => setName(e.target.value)} required />
            <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input label="Nomor HP" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
            <Input label="Alamat Usaha" placeholder="Jl. Raya Labuan Bajo..." />
          </div>
        </Card>
        <Card variant="default">
          <h3 className="font-bold font-heading text-gray-900 mb-4">Keamanan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Password Baru" type="password" placeholder="Minimal 8 karakter" />
            <Input label="Konfirmasi Password" type="password" placeholder="Ulangi password baru" />
          </div>
        </Card>
        <Card variant="default">
          <h3 className="font-bold font-heading text-gray-900 mb-4">Notifikasi</h3>
          <div className="space-y-3">
            {[
              { label: 'Notifikasi Email', desc: 'Kirim konfirmasi booking via email', checked: emailNotif, set: setEmailNotif },
              { label: 'Notifikasi SMS', desc: 'Kirim notifikasi booking via SMS', checked: smsNotif, set: setSmsNotif },
            ].map(item => (
              <label key={item.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                <div>
                  <p className="text-sm font-semibold font-heading text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-400 font-body">{item.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => item.set(!item.checked)}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${item.checked ? 'bg-primary-500' : 'bg-gray-200'}`}
                  aria-checked={item.checked}
                  role="switch"
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${item.checked ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </label>
            ))}
          </div>
        </Card>
        <div className="flex gap-3">
          <Button loading={saving} onClick={handleSave}>Simpan Semua Perubahan</Button>
          <Button variant="outline">Batal</Button>
        </div>
      </div>
      {toast && <Toast message={toast} variant="success" onClose={() => setToast(null)} />}
    </div>
  )
}
