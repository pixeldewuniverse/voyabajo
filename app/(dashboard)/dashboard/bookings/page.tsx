'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { mockBookings } from '@/lib/mockData'
import type { Booking } from '@/lib/types'

function formatIDR(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

const statusVariant: Record<string, 'success' | 'warning' | 'info' | 'default'> = {
  confirmed: 'success', pending: 'warning', completed: 'info', cancelled: 'default',
}
const statusLabel: Record<string, string> = {
  confirmed: 'Dikonfirmasi', pending: 'Menunggu', completed: 'Selesai', cancelled: 'Dibatalkan',
}

const filterOptions = [
  { value: 'all', label: 'Semua' },
  { value: 'pending', label: 'Menunggu' },
  { value: 'confirmed', label: 'Dikonfirmasi' },
  { value: 'completed', label: 'Selesai' },
  { value: 'cancelled', label: 'Dibatalkan' },
]

const PAGE_SIZE = 5

export default function BookingsPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)

  const filtered = mockBookings.filter(b => {
    const matchSearch = b.guestName.toLowerCase().includes(search.toLowerCase()) || b.productName.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || b.status === filter
    return matchSearch && matchFilter
  })

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Daftar Booking"
        description="Kelola semua pemesanan dari satu tempat"
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Booking' }]}
        actions={
          <Button size="sm" variant="primary">
            + Export
          </Button>
        }
      />
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input placeholder="Cari nama tamu atau produk..." value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} aria-label="Cari booking" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {filterOptions.map(f => (
            <Button key={f.value} size="sm" variant={filter === f.value ? 'primary' : 'outline'} onClick={() => { setFilter(f.value); setPage(1) }}>
              {f.label}
            </Button>
          ))}
        </div>
      </div>
      <Card variant="default" className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]" role="table">
            <thead className="bg-gray-50">
              <tr>
                {['Tamu', 'Produk', 'Tanggal', 'Tamu', 'Status', 'Total'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 bg-white">
              {paginated.length === 0 ? (
                <tr><td colSpan={6} className="py-16 text-center">
                  <p className="text-3xl mb-3">📭</p>
                  <p className="text-sm font-semibold font-heading text-gray-600">Tidak ada booking</p>
                  <p className="text-xs text-gray-400 font-body mt-1">Coba ubah filter pencarian</p>
                </td></tr>
              ) : paginated.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={booking.guestName} size="sm" />
                      <div>
                        <p className="text-sm font-semibold font-heading text-gray-900">{booking.guestName}</p>
                        <p className="text-xs text-gray-400">{booking.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-body text-gray-600">{booking.productName}</td>
                  <td className="px-6 py-4 text-sm font-body text-gray-600">{booking.date}</td>
                  <td className="px-6 py-4 text-sm font-body text-gray-600">{booking.guests}</td>
                  <td className="px-6 py-4"><Badge variant={statusVariant[booking.status]}>{statusLabel[booking.status]}</Badge></td>
                  <td className="px-6 py-4 text-sm font-bold font-heading text-gray-900">{formatIDR(booking.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500 font-body">{filtered.length} booking</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>← Prev</Button>
              <span className="px-3 py-1.5 text-sm font-heading font-semibold text-gray-700">{page} / {totalPages}</span>
              <Button size="sm" variant="outline" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next →</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
