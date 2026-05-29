export async function fetchProducts(params?: { search?: string; category?: string }) {
  const qs = new URLSearchParams()
  if (params?.search) qs.set('search', params.search)
  if (params?.category) qs.set('category', params.category)
  const res = await fetch(`/api/products?${qs}`)
  return res.json()
}

export async function createBooking(data: Record<string, unknown>) {
  const res = await fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}

export async function fetchBookings(params?: { page?: number; status?: string }) {
  const qs = new URLSearchParams()
  if (params?.page) qs.set('page', String(params.page))
  if (params?.status) qs.set('status', params.status)
  const res = await fetch(`/api/bookings?${qs}`)
  return res.json()
}
