'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Modal } from '@/components/ui/Modal'
import { mockProducts } from '@/lib/mockData'
import { formatIDR } from '@/lib/formatters'

const categoryVariant: Record<string, 'primary' | 'info' | 'success' | 'warning'> = {
  phinisi: 'primary', rental: 'info', restoran: 'success', 'oleh-oleh': 'warning',
}

export default function DashboardProductsPage() {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const filtered = mockProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Kelola Produk"
        description="Tambah, edit, dan hapus produk Anda"
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Produk' }]}
        actions={
          <Button size="sm" onClick={() => setShowModal(true)}>+ Tambah Produk</Button>
        }
      />
      <div className="mb-6">
        <Input placeholder="Cari produk..." value={search} onChange={e => setSearch(e.target.value)} aria-label="Cari produk" />
      </div>
      <Card variant="default" className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50">
              <tr>
                {['Produk', 'Kategori', 'Harga', 'Rating', 'Ulasan', 'Aksi'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 bg-white">
              {filtered.map(p => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                        {p.category === 'phinisi' ? '⛵' : p.category === 'rental' ? '🚗' : p.category === 'restoran' ? '🍽️' : '🎁'}
                      </div>
                      <div>
                        <p className="text-sm font-semibold font-heading text-gray-900">{p.name}</p>
                        {p.featured && <span className="text-xs text-primary-500 font-body">Unggulan</span>}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><Badge variant={categoryVariant[p.category]}>{p.category}</Badge></td>
                  <td className="px-6 py-4 text-sm font-bold font-heading text-gray-900">{formatIDR(p.price)}</td>
                  <td className="px-6 py-4 text-sm font-body text-gray-600">★ {p.rating}</td>
                  <td className="px-6 py-4 text-sm font-body text-gray-600">{p.reviews}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="ghost">Hapus</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Tambah Produk Baru"
        footer={<><Button variant="outline" onClick={() => setShowModal(false)}>Batal</Button><Button onClick={() => setShowModal(false)}>Simpan</Button></>}
      >
        <div className="space-y-4">
          <Input label="Nama Produk" required placeholder="Contoh: Phinisi Sunset Cruise" />
          <Input label="Harga (IDR)" type="number" required placeholder="750000" />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 font-heading">Kategori <span className="text-danger-500">*</span></label>
            <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="phinisi">⛵ Phinisi</option>
              <option value="rental">🚗 Rental</option>
              <option value="restoran">🍽️ Restoran</option>
              <option value="oleh-oleh">🎁 Oleh-oleh</option>
            </select>
          </div>
          <Input label="Deskripsi" placeholder="Deskripsi singkat produk..." />
        </div>
      </Modal>
    </div>
  )
}
