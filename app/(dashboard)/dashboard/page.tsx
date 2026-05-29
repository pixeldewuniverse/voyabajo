import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { mockBookings, merchantStats } from '@/lib/mockData'
import { formatIDR } from '@/lib/formatters'

const statusVariant: Record<string, 'success' | 'warning' | 'info' | 'default'> = {
  confirmed: 'success',
  pending: 'warning',
  completed: 'info',
  cancelled: 'default',
}

const statusLabel: Record<string, string> = {
  confirmed: 'Dikonfirmasi',
  pending: 'Menunggu',
  completed: 'Selesai',
  cancelled: 'Dibatalkan',
}

const statsConfig = [
  { label: 'Total Booking', value: merchantStats.totalBookings.toString(), icon: '📋', change: '+12%' },
  { label: 'Pendapatan', value: formatIDR(merchantStats.totalRevenue), icon: '💰', change: '+8%' },
  { label: 'Menunggu', value: merchantStats.pendingBookings.toString(), icon: '⏳', change: '-3%' },
  { label: 'Rating', value: `${merchantStats.averageRating} ★`, icon: '⭐', change: '+0.1' },
]

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Dashboard Merchant"
        subtitle="Selamat datang kembali!"
        description="Pantau performa bisnis Anda hari ini"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statsConfig.map((stat, i) => (
          <Card key={i} variant="default" className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-xs font-bold font-heading ${stat.change.startsWith('+') ? 'text-success-600' : 'text-danger-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-xl font-extrabold font-heading text-gray-900 mb-1 truncate">{stat.value}</p>
            <p className="text-xs text-gray-500 font-body">{stat.label}</p>
          </Card>
        ))}
      </div>
      <Card variant="default">
        <h2 className="font-bold font-heading text-gray-900 mb-5 text-lg">Booking Terbaru</h2>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full min-w-[640px]" role="table">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left pb-3 text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">Tamu</th>
                <th className="text-left pb-3 text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">Produk</th>
                <th className="text-left pb-3 text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">Tanggal</th>
                <th className="text-left pb-3 text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">Tamu</th>
                <th className="text-left pb-3 text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-right pb-3 text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockBookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={booking.guestName} size="sm" />
                      <div>
                        <p className="text-sm font-semibold font-heading text-gray-900">{booking.guestName}</p>
                        <p className="text-xs text-gray-400 font-body">{booking.guestEmail}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm font-body text-gray-600">{booking.productName}</td>
                  <td className="py-4 text-sm font-body text-gray-600">{booking.date}</td>
                  <td className="py-4 text-sm font-body text-gray-600">{booking.guests} orang</td>
                  <td className="py-4">
                    <Badge variant={statusVariant[booking.status]}>{statusLabel[booking.status]}</Badge>
                  </td>
                  <td className="py-4 text-sm font-bold font-heading text-gray-900 text-right">{formatIDR(booking.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
