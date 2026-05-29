import { NextRequest, NextResponse } from 'next/server'

const MOCK_CREDENTIALS = { email: 'merchant@voyabajo.id', password: 'voyabajo123' }
const MOCK_USER = { id: 'U001', name: 'Merchant VoyaBajo', email: 'merchant@voyabajo.id', phone: '081234567890', joinedAt: '2023-09-01' }

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email dan password wajib diisi' }, { status: 400 })
    }
    if (email !== MOCK_CREDENTIALS.email || password !== MOCK_CREDENTIALS.password) {
      return NextResponse.json({ success: false, message: 'Email atau password salah' }, { status: 401 })
    }
    return NextResponse.json({
      success: true,
      token: 'mock-jwt-token-voyabajo-2024',
      user: MOCK_USER,
      message: 'Login berhasil',
    })
  } catch {
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan server' }, { status: 500 })
  }
}
