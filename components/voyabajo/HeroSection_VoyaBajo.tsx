import { cn } from '@/lib/cn'

interface HeroVoyaBajoProps {
  className?: string
}

export function HeroSection_VoyaBajo({ className }: HeroVoyaBajoProps) {
  return (
    <section className={cn('relative overflow-hidden rounded-3xl min-h-[520px] lg:min-h-[600px] flex items-center', className)}>
      {/* SVG Background: Labuan Bajo Scene */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a6fa8" />
            <stop offset="60%" stopColor="#4aa3d4" />
            <stop offset="100%" stopColor="#a8d8f0" />
          </linearGradient>
          <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b7fa8" />
            <stop offset="100%" stopColor="#0f4f6e" />
          </linearGradient>
          <linearGradient id="island1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d6a1f" />
            <stop offset="100%" stopColor="#1a3d10" />
          </linearGradient>
          <linearGradient id="island2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a8025" />
            <stop offset="100%" stopColor="#1e4a12" />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fff9c4" />
            <stop offset="40%" stopColor="#ffd54f" />
            <stop offset="100%" stopColor="#ffb300" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sail1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F16222" />
            <stop offset="100%" stopColor="#C94912" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1200" height="600" fill="url(#sky)" />

        {/* Sun with glow */}
        <circle cx="900" cy="130" r="60" fill="url(#sun)" filter="url(#glow)" opacity="0.8" />
        <circle cx="900" cy="130" r="35" fill="#ffd54f" opacity="0.9" />

        {/* Clouds */}
        <ellipse cx="200" cy="90" rx="80" ry="28" fill="white" opacity="0.7" />
        <ellipse cx="250" cy="78" rx="55" ry="22" fill="white" opacity="0.8" />
        <ellipse cx="160" cy="80" rx="45" ry="18" fill="white" opacity="0.6" />
        <ellipse cx="600" cy="70" rx="70" ry="24" fill="white" opacity="0.5" />
        <ellipse cx="650" cy="60" rx="50" ry="20" fill="white" opacity="0.6" />

        {/* Ocean */}
        <rect x="0" y="380" width="1200" height="220" fill="url(#ocean)" />

        {/* Ocean shimmer lines */}
        <line x1="0" y1="400" x2="1200" y2="400" stroke="white" strokeWidth="1" opacity="0.1" />
        <line x1="0" y1="430" x2="1200" y2="430" stroke="white" strokeWidth="1" opacity="0.08" />
        <line x1="0" y1="460" x2="1200" y2="460" stroke="white" strokeWidth="1" opacity="0.06" />

        {/* Background islands (far) */}
        <path d="M0 380 Q100 260 200 300 Q260 280 320 320 Q380 290 420 310 L420 380 Z" fill="#1e4a14" opacity="0.6" />
        <path d="M800 380 Q900 250 1000 280 Q1060 260 1100 290 Q1150 275 1200 300 L1200 380 Z" fill="#1e4a14" opacity="0.6" />

        {/* Main island left */}
        <path d="M-20 380 Q50 220 150 260 Q200 230 260 255 Q300 240 350 270 Q380 255 420 270 L420 380 Z" fill="url(#island1)" />
        {/* Vegetation dots on island */}
        <ellipse cx="80" cy="265" rx="25" ry="18" fill="#3a8025" opacity="0.9" />
        <ellipse cx="130" cy="248" rx="20" ry="15" fill="#4a9030" opacity="0.8" />
        <ellipse cx="200" cy="255" rx="22" ry="16" fill="#3a8025" opacity="0.9" />
        <ellipse cx="270" cy="260" rx="18" ry="13" fill="#4a9030" opacity="0.8" />
        <ellipse cx="340" cy="268" rx="20" ry="14" fill="#3a8025" opacity="0.7" />

        {/* Main island right */}
        <path d="M780 380 Q850 240 950 265 Q1010 240 1060 260 Q1110 245 1160 265 Q1190 260 1220 280 L1220 380 Z" fill="url(#island2)" />
        {/* Vegetation */}
        <ellipse cx="860" cy="268" rx="22" ry="16" fill="#4a9030" opacity="0.9" />
        <ellipse cx="930" cy="250" rx="25" ry="18" fill="#3a8025" opacity="0.8" />
        <ellipse cx="1010" cy="260" rx="20" ry="15" fill="#4a9030" opacity="0.9" />
        <ellipse cx="1080" cy="265" rx="18" ry="13" fill="#3a8025" opacity="0.7" />
        <ellipse cx="1140" cy="268" rx="22" ry="15" fill="#4a9030" opacity="0.8" />

        {/* Phinisi boat 1 (center) */}
        <g transform="translate(540, 290)">
          <polygon points="0,80 80,80 70,95 10,95" fill="#5d3a1a" />
          <line x1="40" y1="80" x2="40" y2="0" stroke="#4a2d10" strokeWidth="3" />
          <line x1="40" y1="80" x2="40" y2="30" stroke="#4a2d10" strokeWidth="2" />
          <polygon points="40,5 40,75 75,65" fill="url(#sail1)" opacity="0.95" />
          <polygon points="40,35 40,75 10,68" fill="#e8e0d0" opacity="0.9" />
          <polygon points="40,20 40,60 0,50" fill="#F16222" opacity="0.7" />
        </g>

        {/* Phinisi boat 2 (left) */}
        <g transform="translate(300, 310)" opacity="0.8">
          <polygon points="0,60 60,60 52,72 8,72" fill="#5d3a1a" />
          <line x1="30" y1="60" x2="30" y2="0" stroke="#4a2d10" strokeWidth="2.5" />
          <polygon points="30,5 30,55 58,48" fill="url(#sail1)" opacity="0.9" />
          <polygon points="30,25 30,55 8,50" fill="#e8e0d0" opacity="0.8" />
        </g>

        {/* Phinisi boat 3 (right) */}
        <g transform="translate(820, 315)" opacity="0.75">
          <polygon points="0,55 55,55 48,66 7,66" fill="#5d3a1a" />
          <line x1="27" y1="55" x2="27" y2="0" stroke="#4a2d10" strokeWidth="2" />
          <polygon points="27,5 27,50 53,44" fill="#C94912" opacity="0.9" />
          <polygon points="27,22 27,50 6,45" fill="#e8e0d0" opacity="0.8" />
        </g>

        {/* Birds */}
        <path d="M450 140 Q460 133 470 140" stroke="#1a3d6e" strokeWidth="2" fill="none" />
        <path d="M480 130 Q490 123 500 130" stroke="#1a3d6e" strokeWidth="2" fill="none" />
        <path d="M510 148 Q518 142 526 148" stroke="#1a3d6e" strokeWidth="1.5" fill="none" />

        {/* Dark overlay for text readability */}
        <rect width="1200" height="600" fill="url(#overlay)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full px-8 py-16 lg:px-20 text-center text-white">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-extrabold font-heading text-primary-500 text-base shadow-lg">
            VB
          </div>
          <span className="text-2xl font-extrabold font-heading text-white drop-shadow-lg">VoyaBajo</span>
        </div>

        <div className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 font-heading backdrop-blur-sm border border-white/30">
          Platform Wisata #1 di Labuan Bajo
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-5 drop-shadow-lg">
          Semua Perjalanan Bajo,
          <br />
          <span className="text-primary-300">1 Aplikasi Aja</span>
        </h1>

        <p className="text-lg font-body text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dari kapal phinisi hingga restoran lokal — temukan semua yang kamu butuhkan untuk petualangan sempurna di Labuan Bajo.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="/home/products" className="px-8 py-3.5 bg-primary-500 text-white font-heading font-bold rounded-xl hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Jelajahi Sekarang
          </a>
          <a href="/home/booking" className="px-8 py-3.5 bg-white/20 text-white font-heading font-bold rounded-xl hover:bg-white/30 border border-white/40 transition-all duration-200 backdrop-blur-sm">
            Pesan Perjalanan
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 opacity-70 animate-bounce">
          <span className="text-xs font-body text-white/70">Scroll ke bawah</span>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
