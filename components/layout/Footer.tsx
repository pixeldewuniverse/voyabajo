export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold font-heading text-sm">VB</div>
            <span className="font-extrabold font-heading text-lg">VoyaBajo</span>
          </div>
          <p className="text-gray-400 font-body text-sm text-center">
            Semua Perjalanan Bajo, 1 Aplikasi Aja
          </p>
          <p className="text-gray-500 font-body text-sm">© 2024 VoyaBajo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
