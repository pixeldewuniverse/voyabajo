export interface Product {
  id: string
  name: string
  category: 'phinisi' | 'rental' | 'restoran' | 'oleh-oleh'
  price: number
  rating: number
  reviews: number
  image: string
  description: string
  featured?: boolean
}

export interface Booking {
  id: string
  guestName: string
  guestEmail: string
  guestPhone: string
  productId: string
  productName: string
  date: string
  guests: number
  notes?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  total: number
  createdAt: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  date: string
  guests: number
  notes?: string
}
