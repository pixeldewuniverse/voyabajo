import { NextRequest, NextResponse } from 'next/server'
import { mockBookings } from '@/lib/mockData'
import type { BookingFormData } from '@/lib/types'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const status = searchParams.get('status')

  const filtered = status ? mockBookings.filter(b => b.status === status) : mockBookings
  const total = filtered.length
  const bookings = filtered.slice((page - 1) * pageSize, page * pageSize)

  return NextResponse.json({ success: true, bookings, total, page, pageSize })
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json()

    if (!body.name?.trim()) return NextResponse.json({ success: false, message: 'Nama wajib diisi' }, { status: 400 })
    if (!body.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return NextResponse.json({ success: false, message: 'Email tidak valid' }, { status: 400 })
    if (!body.phone?.match(/^(\+62|0)[0-9]{9,12}$/)) return NextResponse.json({ success: false, message: 'Nomor HP tidak valid' }, { status: 400 })
    if (!body.date) return NextResponse.json({ success: false, message: 'Tanggal wajib diisi' }, { status: 400 })
    const today = new Date().toISOString().split('T')[0]
    if (body.date < today) return NextResponse.json({ success: false, message: 'Tanggal harus di masa depan' }, { status: 400 })
    if (!body.guests || body.guests < 1) return NextResponse.json({ success: false, message: 'Jumlah tamu tidak valid' }, { status: 400 })

    const bookingId = `BK${Date.now().toString().slice(-6)}`

    return NextResponse.json({
      success: true,
      bookingId,
      message: `Booking berhasil dibuat dengan ID ${bookingId}`,
    })
  } catch {
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan server' }, { status: 500 })
  }
}
