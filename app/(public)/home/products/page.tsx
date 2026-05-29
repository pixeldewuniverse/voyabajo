'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { mockProducts } from '@/lib/mockData'
import type { Product } from '@/lib/types'
import { formatIDR } from '@/lib/formatters'

const categories = [
  { value: 'all', label: 'Semua' },
  { value: 'phinisi', label: '⛵ Phinisi' },
  { value: 'rental', label: '🚗 Rental' },
  { value: 'restoran', label: '🍽️ Restoran' },
  { value: 'oleh-oleh', label: '🎁 Oleh-oleh' },
]

const categoryBadge: Record<string, 'primary' | 'info' | 'success' | 'warning'> = {
  phinisi: 'primary',
  rental: 'info',
  restoran: 'success',
  'oleh-oleh': 'warning',
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card variant={product.featured ? 'featured' : 'default'} className="flex flex-col h-full">
      <div className="w-full h-40 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-4 flex items-center justify-center text-4xl overflow-hidden">
        {product.category === 'phinisi' ? '⛵' : product.category === 'rental' ? '🚗' : product.category === 'restoran' ? '🍽️' : '🎁'}
      </div>
      <div className="flex items-start justify-between gap-2 mb-2">
        <Badge variant={categoryBadge[product.category]}>{product.category}</Badge>
        {product.featured && <Badge variant="primary">Unggulan</Badge>}
      </div>
      <h3 className="font-bold font-heading text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 font-body flex-1 mb-3">{product.description}</p>
      <div className="flex items-center gap-1 mb-3">
        <span className="text-yellow-400 text-sm">★</span>
        <span className="text-sm font-semibold font-heading text-gray-700">{product.rating}</span>
        <span className="text-xs text-gray-400 font-body">({product.reviews} ulasan)</span>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-gray-400 font-body">mulai dari</span>
          <p className="font-bold font-heading text-primary-500">{formatIDR(product.price)}</p>
        </div>
        <a href="/home/booking" className="px-4 py-2 bg-primary-500 text-white text-sm font-heading font-bold rounded-xl hover:bg-primary-600 transition-colors">
          Pesan
        </a>
      </div>
    </Card>
  )
}

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = mockProducts.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'all' || p.category === category
    return matchSearch && matchCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Jelajahi Produk"
        subtitle="Temukan pengalaman terbaik di Labuan Bajo"
        breadcrumbs={[{ label: 'Beranda', href: '/home' }, { label: 'Produk' }]}
      />
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Cari produk atau aktivitas..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Cari produk"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <Button
              key={c.value}
              variant={category === c.value ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setCategory(c.value)}
            >
              {c.label}
            </Button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🔍</p>
          <h3 className="text-lg font-bold font-heading text-gray-700 mb-2">Produk tidak ditemukan</h3>
          <p className="text-sm text-gray-400 font-body mb-4">Coba kata kunci lain atau hapus filter</p>
          <Button variant="outline" onClick={() => { setSearch(''); setCategory('all') }}>Reset Filter</Button>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 font-body mb-4">{filtered.length} produk ditemukan</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </>
      )}
    </div>
  )
}
