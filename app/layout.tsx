import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VoyaBajo - Semua Perjalanan Bajo, 1 Aplikasi Aja',
  description: 'Platform wisata terlengkap untuk menjelajahi keindahan Labuan Bajo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
