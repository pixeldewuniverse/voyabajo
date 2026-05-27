import { NextRequest, NextResponse } from 'next/server'
import { mockProducts } from '@/lib/mockData'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '12')

  let filtered = mockProducts
  if (search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    )
  }
  if (category) {
    filtered = filtered.filter(p => p.category === category)
  }

  const total = filtered.length
  const products = filtered.slice((page - 1) * pageSize, page * pageSize)

  return NextResponse.json({ success: true, products, total, page, pageSize })
}
