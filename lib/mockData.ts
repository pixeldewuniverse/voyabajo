import type { Product, Booking, Testimonial, User, RevenueMonth } from './types'

export const mockProducts: Product[] = [
  { id: '1', name: 'Phinisi Labuan Bajo Premium', category: 'phinisi', price: 2500000, rating: 4.9, reviews: 128, image: '/images/phinisi1.jpg', description: 'Jelajahi Komodo dengan kapal phinisi mewah berkapasitas 20 orang.', featured: true },
  { id: '2', name: 'Phinisi Explorer Tour', category: 'phinisi', price: 1800000, rating: 4.7, reviews: 95, image: '/images/phinisi2.jpg', description: 'Tour 2 hari 1 malam mengelilingi pulau-pulau cantik Flores.' },
  { id: '3', name: 'Phinisi Sunset Cruise', category: 'phinisi', price: 750000, rating: 4.8, reviews: 210, image: '/images/phinisi3.jpg', description: 'Nikmati matahari terbenam di atas kapal phinisi tradisional.' },
  { id: '4', name: 'Phinisi Snorkeling Trip', category: 'phinisi', price: 950000, rating: 4.6, reviews: 87, image: '/images/phinisi4.jpg', description: 'Snorkeling di Pink Beach dan Pulau Padar dalam satu hari.' },
  { id: '5', name: 'Rental Motor Matic', category: 'rental', price: 75000, rating: 4.5, reviews: 340, image: '/images/rental1.jpg', description: 'Motor matic irit BBM, cocok untuk keliling kota.' },
  { id: '6', name: 'Rental Mobil Avanza', category: 'rental', price: 350000, rating: 4.6, reviews: 156, image: '/images/rental2.jpg', description: 'Mobil keluarga nyaman dengan AC dan audio system.' },
  { id: '7', name: 'Rental Speedboat', category: 'rental', price: 1200000, rating: 4.8, reviews: 72, image: '/images/rental3.jpg', description: 'Speedboat untuk island hopping dengan kapasitas 8 orang.' },
  { id: '8', name: 'Restoran Bajo Sea View', category: 'restoran', price: 150000, rating: 4.9, reviews: 520, image: '/images/resto1.jpg', description: 'Makan seafood segar dengan pemandangan laut yang menakjubkan.', featured: true },
  { id: '9', name: 'Warung Bu Yati', category: 'restoran', price: 50000, rating: 4.7, reviews: 890, image: '/images/resto2.jpg', description: 'Masakan Flores otentik dengan harga terjangkau.' },
  { id: '10', name: 'Komodo Grill Restaurant', category: 'restoran', price: 200000, rating: 4.8, reviews: 320, image: '/images/resto3.jpg', description: 'Fine dining dengan menu western dan Indonesian fusion.' },
  { id: '11', name: 'Kain Tenun Flores', category: 'oleh-oleh', price: 250000, rating: 4.9, reviews: 445, image: '/images/souvenir1.jpg', description: 'Kain tenun tradisional Flores dengan motif batik khas.', featured: true },
  { id: '12', name: 'Kerajinan Tangan Komodo', category: 'oleh-oleh', price: 85000, rating: 4.6, reviews: 280, image: '/images/souvenir2.jpg', description: 'Miniatur komodo dan kerajinan kayu lokal berkualitas.' },
]

export const mockBookings: Booking[] = [
  { id: 'BK001', guestName: 'Ahmad Rizki', guestEmail: 'ahmad@email.com', guestPhone: '081234567890', productId: '1', productName: 'Phinisi Labuan Bajo Premium', date: '2024-02-15', guests: 4, status: 'confirmed', total: 10000000, createdAt: '2024-02-01' },
  { id: 'BK002', guestName: 'Sari Dewi', guestEmail: 'sari@email.com', guestPhone: '085678901234', productId: '8', productName: 'Restoran Bajo Sea View', date: '2024-02-16', guests: 2, status: 'pending', total: 300000, createdAt: '2024-02-02' },
  { id: 'BK003', guestName: 'Budi Santoso', guestEmail: 'budi@email.com', guestPhone: '082345678901', productId: '3', productName: 'Phinisi Sunset Cruise', date: '2024-02-14', guests: 6, status: 'completed', total: 4500000, createdAt: '2024-01-28' },
  { id: 'BK004', guestName: 'Rina Wati', guestEmail: 'rina@email.com', guestPhone: '087890123456', productId: '6', productName: 'Rental Mobil Avanza', date: '2024-02-17', guests: 1, status: 'confirmed', total: 1050000, createdAt: '2024-02-03' },
  { id: 'BK005', guestName: 'Doni Pratama', guestEmail: 'doni@email.com', guestPhone: '089012345678', productId: '11', productName: 'Kain Tenun Flores', date: '2024-02-13', guests: 1, status: 'completed', total: 500000, createdAt: '2024-01-25' },
]

export const merchantStats = {
  totalBookings: 128,
  totalRevenue: 95600000,
  pendingBookings: 12,
  averageRating: 4.8,
}

export const features = [
  { icon: '⛵', title: 'Kapal Phinisi', description: 'Jelajahi kepulauan Komodo dengan kapal phinisi tradisional terbaik', category: 'phinisi' },
  { icon: '🚗', title: 'Rental Kendaraan', description: 'Motor, mobil, dan speedboat siap menemani petualangan Anda', category: 'rental' },
  { icon: '🍽️', title: 'Restoran Lokal', description: 'Nikmati cita rasa autentik masakan Flores dan seafood segar', category: 'restoran' },
  { icon: '🎁', title: 'Oleh-oleh Khas', description: 'Bawa pulang kenangan indah berupa kerajinan dan produk lokal', category: 'oleh-oleh' },
]

export const mockTestimonials: Testimonial[] = [
  { id: '1', name: 'Budi Setiawan', origin: 'Jakarta', rating: 5, quote: 'Pengalaman luar biasa! Kapal phinisi yang kami sewa sangat nyaman dan kru sangat profesional. Komodo trip tak terlupakan!' },
  { id: '2', name: 'Siti Rahma', origin: 'Surabaya', rating: 5, quote: 'VoyaBajo membuat perjalanan kami ke Labuan Bajo sangat mudah. Semua tersedia dalam satu aplikasi — highly recommended!' },
  { id: '3', name: 'Michael Chen', origin: 'Singapore', rating: 5, quote: 'Best travel platform for Labuan Bajo! The booking process was seamless and the local experiences were authentic and unforgettable.' },
]

export const mockRevenueData: RevenueMonth[] = [
  { month: 'Sep', revenue: 12500000, bookings: 18 },
  { month: 'Okt', revenue: 18700000, bookings: 25 },
  { month: 'Nov', revenue: 22300000, bookings: 31 },
  { month: 'Des', revenue: 31500000, bookings: 44 },
  { month: 'Jan', revenue: 26800000, bookings: 37 },
  { month: 'Feb', revenue: 29400000, bookings: 41 },
]

export const mockUser: User = {
  id: 'U001',
  name: 'Merchant VoyaBajo',
  email: 'merchant@voyabajo.id',
  phone: '081234567890',
  joinedAt: '2023-09-01',
}
