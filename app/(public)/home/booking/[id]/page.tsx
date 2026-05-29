import { mockBookings } from '@/lib/mockData'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatIDR } from '@/lib/formatters'

const statusVariant: Record<string, 'success' | 'warning' | 'info' | 'default'> = {
  confirmed: 'success', pending: 'warning', completed: 'info', cancelled: 'default',
}
const statusLabel: Record<string, string> = {
  confirmed: 'Dikonfirmasi', pending: 'Menunggu Konfirmasi', completed: 'Selesai', cancelled: 'Dibatalkan',
}

export function generateStaticParams() {
  return mockBookings.map(b => ({ id: b.id }))
}

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  const booking = mockBookings.find(b => b.id === params.id)

  if (!booking) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-2xl font-bold font-heading text-gray-900 mb-2">Booking tidak ditemukan</h1>
        <p className="text-gray-500 font-body mb-6">ID booking <strong>{params.id}</strong> tidak ada dalam sistem.</p>
        <a href="/home/booking" className="px-6 py-3 bg-primary-500 text-white font-heading font-bold rounded-xl hover:bg-primary-600 transition-colors">
          Buat Booking Baru
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Detail Booking"
        breadcrumbs={[{ label: 'Beranda', href: '/home' }, { label: 'Booking', href: '/home/booking' }, { label: booking.id }]}
      />
      <Card variant="default" className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-heading text-gray-900">{booking.id}</h2>
          <Badge variant={statusVariant[booking.status]}>{statusLabel[booking.status]}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm font-body">
          <div><p className="text-gray-400 text-xs font-heading uppercase tracking-wide mb-1">Produk</p><p className="font-semibold text-gray-900">{booking.productName}</p></div>
          <div><p className="text-gray-400 text-xs font-heading uppercase tracking-wide mb-1">Tanggal</p><p className="font-semibold text-gray-900">{booking.date}</p></div>
          <div><p className="text-gray-400 text-xs font-heading uppercase tracking-wide mb-1">Nama Tamu</p><p className="font-semibold text-gray-900">{booking.guestName}</p></div>
          <div><p className="text-gray-400 text-xs font-heading uppercase tracking-wide mb-1">Jumlah Tamu</p><p className="font-semibold text-gray-900">{booking.guests} orang</p></div>
          <div><p className="text-gray-400 text-xs font-heading uppercase tracking-wide mb-1">Email</p><p className="font-semibold text-gray-900">{booking.guestEmail}</p></div>
          <div><p className="text-gray-400 text-xs font-heading uppercase tracking-wide mb-1">Telepon</p><p className="font-semibold text-gray-900">{booking.guestPhone}</p></div>
        </div>
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm font-body text-gray-500">Total Pembayaran</span>
          <span className="text-2xl font-extrabold font-heading text-primary-500">{formatIDR(booking.total)}</span>
        </div>
        <div className="flex gap-3">
          <a href="/home/booking" className="flex-1 text-center py-3 bg-primary-500 text-white font-heading font-bold rounded-xl hover:bg-primary-600 transition-colors text-sm">
            Pesan Lagi
          </a>
          <a href="/home" className="flex-1 text-center py-3 border-2 border-primary-500 text-primary-500 font-heading font-bold rounded-xl hover:bg-primary-50 transition-colors text-sm">
            Kembali ke Beranda
          </a>
        </div>
      </Card>
    </div>
  )
}
