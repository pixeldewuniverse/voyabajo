import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { mockRevenueData } from '@/lib/mockData'

function formatIDR(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}

const maxRevenue = Math.max(...mockRevenueData.map(d => d.revenue))

export default function RevenuePage() {
  const totalRevenue = mockRevenueData.reduce((sum, d) => sum + d.revenue, 0)
  const totalBookings = mockRevenueData.reduce((sum, d) => sum + d.bookings, 0)
  const avgRevenue = Math.round(totalRevenue / mockRevenueData.length)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Laporan Pendapatan"
        description="Pantau pertumbuhan revenue bisnis Anda"
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Revenue' }]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card variant="default" className="p-5">
          <p className="text-xs text-gray-400 font-heading uppercase tracking-wide mb-2">Total Revenue</p>
          <p className="text-2xl font-extrabold font-heading text-primary-500">{formatIDR(totalRevenue)}</p>
        </Card>
        <Card variant="default" className="p-5">
          <p className="text-xs text-gray-400 font-heading uppercase tracking-wide mb-2">Total Booking</p>
          <p className="text-2xl font-extrabold font-heading text-gray-900">{totalBookings}</p>
        </Card>
        <Card variant="default" className="p-5">
          <p className="text-xs text-gray-400 font-heading uppercase tracking-wide mb-2">Rata-rata per Bulan</p>
          <p className="text-2xl font-extrabold font-heading text-success-600">{formatIDR(avgRevenue)}</p>
        </Card>
      </div>
      <Card variant="default">
        <h2 className="font-bold font-heading text-gray-900 mb-6 text-lg">Revenue 6 Bulan Terakhir</h2>
        <div className="flex items-end gap-3 h-48">
          {mockRevenueData.map((d, i) => {
            const heightPct = Math.round((d.revenue / maxRevenue) * 100)
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs font-heading text-gray-500 font-semibold">{formatIDR(d.revenue).replace('Rp ', 'Rp').replace('.000', 'K')}</span>
                <div
                  className="w-full bg-primary-500 rounded-t-lg hover:bg-primary-600 transition-colors cursor-default"
                  style={{ height: `${heightPct}%` }}
                  role="img"
                  aria-label={`${d.month}: ${formatIDR(d.revenue)}`}
                />
                <span className="text-xs font-body text-gray-400">{d.month}</span>
              </div>
            )
          })}
        </div>
      </Card>
      <Card variant="default" className="mt-6">
        <h2 className="font-bold font-heading text-gray-900 mb-5 text-lg">Breakdown Bulanan</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {['Bulan', 'Booking', 'Revenue', 'Rata-rata per Booking'].map(h => (
                  <th key={h} className="pb-3 text-left text-xs font-bold font-heading text-gray-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockRevenueData.map((d, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 font-semibold font-heading text-gray-900">{d.month} 2024</td>
                  <td className="py-3 font-body text-gray-600">{d.bookings} booking</td>
                  <td className="py-3 font-bold font-heading text-primary-500">{formatIDR(d.revenue)}</td>
                  <td className="py-3 font-body text-gray-600">{formatIDR(Math.round(d.revenue / d.bookings))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
