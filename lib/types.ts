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

export interface Testimonial {
  id: string
  name: string
  origin: string
  rating: number
  quote: string
  avatar?: string
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  joinedAt: string
}

export interface AuthSession {
  token: string
  user: User
}

export interface RevenueMonth {
  month: string
  revenue: number
  bookings: number
}
