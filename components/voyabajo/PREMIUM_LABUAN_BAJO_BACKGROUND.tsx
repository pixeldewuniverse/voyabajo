'use client'
import { cn } from '@/lib/cn'

interface PremiumLabuanBajoHeroProps {
  className?: string
}

export function PremiumLabuanBajoHero({ className }: PremiumLabuanBajoHeroProps) {
  return (
    <section className={cn('relative overflow-hidden rounded-3xl min-h-[600px] lg:min-h-[700px] flex items-center', className)}>

      {/* ===== HIGH-DETAIL SVG BACKGROUND ===== */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Multi-stop atmospheric sky */}
          <linearGradient id="prem-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0d2f5c" />
            <stop offset="25%"  stopColor="#1b5e8c" />
            <stop offset="55%"  stopColor="#3a8fc4" />
            <stop offset="80%"  stopColor="#6bb8d8" />
            <stop offset="100%" stopColor="#a8d8f0" />
          </linearGradient>

          {/* Deep ocean */}
          <linearGradient id="prem-ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0e4f75" />
            <stop offset="40%"  stopColor="#0a3555" />
            <stop offset="100%" stopColor="#061c30" />
          </linearGradient>

          {/* Ocean shimmer */}
          <linearGradient id="prem-shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="50%"  stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Island gradients */}
          <linearGradient id="prem-isl-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#2d5a1e" />
            <stop offset="100%" stopColor="#1a3410" />
          </linearGradient>
          <linearGradient id="prem-isl-main" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#3d7a28" />
            <stop offset="60%" stopColor="#264d18" />
            <stop offset="100%" stopColor="#152c0d" />
          </linearGradient>
          <linearGradient id="prem-isl-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#358020" />
            <stop offset="100%" stopColor="#1e4810" />
          </linearGradient>

          {/* Sun radial */}
          <radialGradient id="prem-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fffde7" stopOpacity="1" />
            <stop offset="30%"  stopColor="#ffe082" stopOpacity="0.9" />
            <stop offset="70%"  stopColor="#ffb300" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff8f00" stopOpacity="0" />
          </radialGradient>

          {/* Sun glow filter */}
          <filter id="prem-sun-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Boat shadow */}
          <filter id="prem-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.35"/>
          </filter>

          {/* Vignette */}
          <radialGradient id="prem-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
          </radialGradient>

          {/* Dark overlay for text */}
          <linearGradient id="prem-overlay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#000000" stopOpacity="0.45" />
            <stop offset="50%"  stopColor="#000000" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
          </linearGradient>

          {/* Sail gradients */}
          <linearGradient id="prem-sail-main" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F16222" />
            <stop offset="100%" stopColor="#a03a10" />
          </linearGradient>
          <linearGradient id="prem-sail-fore" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8d8b8" />
            <stop offset="100%" stopColor="#c8b890" />
          </linearGradient>
        </defs>

        {/* ---- SKY ---- */}
        <rect width="1440" height="700" fill="url(#prem-sky)" />

        {/* Sun + glow halo */}
        <circle cx="1100" cy="140" r="110" fill="url(#prem-sun)" filter="url(#prem-sun-glow)" opacity="0.7" />
        <circle cx="1100" cy="140" r="48"  fill="#ffe082" opacity="0.95" />
        <circle cx="1100" cy="140" r="32"  fill="#fffde7" />

        {/* Sun rays */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 1100 + Math.cos(rad) * 55
          const y1 = 140  + Math.sin(rad) * 55
          const x2 = 1100 + Math.cos(rad) * (i % 2 === 0 ? 95 : 75)
          const y2 = 140  + Math.sin(rad) * (i % 2 === 0 ? 95 : 75)
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffe082" strokeWidth={i % 2 === 0 ? 2 : 1} opacity="0.5" />
        })}

        {/* Clouds */}
        <g opacity="0.75">
          <ellipse cx="220" cy="95" rx="95" ry="32" fill="white" opacity="0.85" />
          <ellipse cx="280" cy="78" rx="65" ry="25" fill="white" />
          <ellipse cx="165" cy="85" rx="55" ry="20" fill="white" opacity="0.7" />
          <ellipse cx="300" cy="105" rx="45" ry="16" fill="white" opacity="0.6" />
        </g>
        <g opacity="0.55">
          <ellipse cx="650" cy="75" rx="80" ry="26" fill="white" opacity="0.8" />
          <ellipse cx="710" cy="62" rx="55" ry="20" fill="white" />
          <ellipse cx="600" cy="68" rx="50" ry="18" fill="white" opacity="0.7" />
        </g>
        <g opacity="0.4">
          <ellipse cx="950" cy="88" rx="70" ry="22" fill="white" opacity="0.7" />
          <ellipse cx="1000" cy="78" rx="45" ry="16" fill="white" />
        </g>

        {/* ---- DISTANT HAZE ISLANDS ---- */}
        <path d="M-10 450 Q80 330 170 360 Q230 340 290 365 Q350 345 400 362 L400 450 Z" fill="#1a3a12" opacity="0.45" />
        <path d="M1050 450 Q1140 310 1240 340 Q1310 322 1380 345 Q1420 335 1460 355 L1460 450 Z" fill="#1a3a12" opacity="0.45" />

        {/* ---- MAIN LEFT ISLAND ---- */}
        <path d="
          M-30 450
          Q20 260 100 290
          Q150 255 220 275
          Q270 245 330 268
          Q375 252 415 272
          Q440 260 470 278
          L470 450 Z
        " fill="url(#prem-isl-main)" />
        {/* Jungle foliage clusters */}
        {[
          {cx:70,  cy:292, rx:32, ry:22},
          {cx:130, cy:268, rx:28, ry:20},
          {cx:195, cy:278, rx:30, ry:21},
          {cx:265, cy:270, rx:26, ry:18},
          {cx:335, cy:272, rx:28, ry:19},
          {cx:400, cy:275, rx:24, ry:17},
          {cx:450, cy:282, rx:20, ry:14},
        ].map((e,i) => (
          <ellipse key={i} cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry}
            fill={i % 2 === 0 ? '#4a9030' : '#5aa838'} opacity={0.85 + (i % 3) * 0.05} />
        ))}
        {/* Tree tops */}
        {[90, 160, 230, 300, 370, 430].map((x, i) => (
          <path key={i}
            d={`M${x} ${260 + i * 3} L${x - 10} ${285 + i * 3} L${x + 10} ${285 + i * 3} Z`}
            fill="#3d8020" opacity="0.7" />
        ))}

        {/* ---- MAIN RIGHT ISLAND ---- */}
        <path d="
          M970 450
          Q1020 260 1110 285
          Q1165 255 1225 272
          Q1275 248 1330 265
          Q1375 255 1420 272
          L1470 450 Z
        " fill="url(#prem-isl-right)" />
        {[
          {cx:1040, cy:290, rx:28, ry:20},
          {cx:1105, cy:268, rx:32, ry:22},
          {cx:1175, cy:275, rx:28, ry:19},
          {cx:1245, cy:270, rx:26, ry:18},
          {cx:1310, cy:272, rx:28, ry:20},
          {cx:1375, cy:278, rx:22, ry:15},
          {cx:1430, cy:285, rx:20, ry:14},
        ].map((e,i) => (
          <ellipse key={i} cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry}
            fill={i % 2 === 0 ? '#4a9030' : '#55a535'} opacity={0.85 + (i % 3) * 0.05} />
        ))}

        {/* ---- OCEAN ---- */}
        <rect x="0" y="448" width="1440" height="252" fill="url(#prem-ocean)" />

        {/* Wave layers */}
        <path d="M0 460 Q180 450 360 462 Q540 472 720 460 Q900 448 1080 460 Q1260 470 1440 460 L1440 480 L0 480 Z"
          fill="white" opacity="0.04" />
        <path d="M0 490 Q180 480 360 492 Q540 502 720 490 Q900 478 1080 490 Q1260 500 1440 490 L1440 510 L0 510 Z"
          fill="white" opacity="0.03" />

        {/* Shimmer stripes */}
        {[470, 510, 550, 590, 630].map((y, i) => (
          <rect key={i} x="0" y={y} width="1440" height="2" fill="url(#prem-shimmer)" opacity={0.6 - i * 0.08} />
        ))}

        {/* Water reflections under boats */}
        <ellipse cx="680" cy="470" rx="55" ry="10" fill="white" opacity="0.06" />
        <ellipse cx="380" cy="480" rx="40" ry="8" fill="white" opacity="0.05" />
        <ellipse cx="1000" cy="478" rx="42" ry="8" fill="white" opacity="0.05" />

        {/* ---- PHINISI BOAT 1 — CENTER MAIN ---- */}
        <g filter="url(#prem-shadow)" transform="translate(620, 340)">
          {/* Hull */}
          <path d="M10 95 Q60 105 120 95 Q130 110 100 118 Q60 124 20 118 Z" fill="#3d2008" />
          <path d="M10 95 L20 118 Q60 124 100 118 L110 95 Z" fill="#5d3010" />
          {/* Deck structure */}
          <rect x="28" y="88" width="64" height="8" rx="2" fill="#7a4518" />
          {/* Mast */}
          <line x1="60" y1="88" x2="60" y2="5"  stroke="#4a2a0a" strokeWidth="4" strokeLinecap="round" />
          <line x1="60" y1="88" x2="60" y2="40" stroke="#4a2a0a" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bowsprit */}
          <line x1="60" y1="88" x2="5" y2="72" stroke="#4a2a0a" strokeWidth="2" />
          {/* Main sail */}
          <polygon points="60,8 60,83 115,68" fill="url(#prem-sail-main)" opacity="0.95" />
          {/* Fore sail */}
          <polygon points="60,42 60,83 10,74" fill="url(#prem-sail-fore)" opacity="0.9" />
          {/* Jib */}
          <polygon points="60,18 60,68 5,72" fill="#F16222" opacity="0.55" />
          {/* Rigging lines */}
          <line x1="60" y1="8" x2="115" y2="68" stroke="#8B5E3C" strokeWidth="0.8" opacity="0.6" />
          <line x1="60" y1="8" x2="5" y2="72" stroke="#8B5E3C" strokeWidth="0.8" opacity="0.6" />
          {/* Flag */}
          <polygon points="60,5 60,18 72,11" fill="#F16222" opacity="0.9" />
        </g>

        {/* ---- PHINISI BOAT 2 — LEFT ---- */}
        <g filter="url(#prem-shadow)" transform="translate(330, 360)" opacity="0.85">
          <path d="M8 72 Q48 80 90 72 Q98 84 74 90 Q48 95 16 90 Z" fill="#3d2008" />
          <path d="M8 72 L16 90 Q48 95 74 90 L82 72 Z" fill="#5d3010" />
          <rect x="20" y="66" width="52" height="7" rx="2" fill="#7a4518" />
          <line x1="46" y1="66" x2="46" y2="4" stroke="#4a2a0a" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="46,6 46,62 90,50" fill="url(#prem-sail-main)" opacity="0.9" />
          <polygon points="46,30 46,62 8,56" fill="url(#prem-sail-fore)" opacity="0.85" />
          <polygon points="46,6 46,54 6,58" fill="#C94912" opacity="0.5" />
          <polygon points="46,4 46,15 56,9" fill="#F16222" opacity="0.9" />
        </g>

        {/* ---- PHINISI BOAT 3 — RIGHT ---- */}
        <g filter="url(#prem-shadow)" transform="translate(960, 355)" opacity="0.8">
          <path d="M8 68 Q46 76 86 68 Q93 80 70 86 Q45 90 15 86 Z" fill="#3d2008" />
          <path d="M8 68 L15 86 Q45 90 70 86 L78 68 Z" fill="#5d3010" />
          <rect x="18" y="62" width="50" height="6" rx="2" fill="#7a4518" />
          <line x1="44" y1="62" x2="44" y2="4" stroke="#4a2a0a" strokeWidth="3" strokeLinecap="round" />
          <polygon points="44,6 44,58 86,46" fill="#C94912" opacity="0.9" />
          <polygon points="44,28 44,58 8,52" fill="url(#prem-sail-fore)" opacity="0.85" />
          <polygon points="44,4 44,14 54,9" fill="#F16222" opacity="0.9" />
        </g>

        {/* ---- BIRDS ---- */}
        {[
          {x:500, y:160, s:1.0},
          {x:530, y:150, s:0.85},
          {x:555, y:165, s:0.75},
          {x:400, y:180, s:0.8},
          {x:425, y:170, s:0.7},
          {x:820, y:145, s:0.9},
          {x:845, y:158, s:0.75},
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x},${b.y}) scale(${b.s})`} opacity={0.55 + i * 0.05}>
            <path d="M-8 0 Q-4 -5 0 0 Q4 -5 8 0" stroke="#1a3d6e" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        ))}

        {/* Overlays */}
        <rect width="1440" height="700" fill="url(#prem-overlay)" />
        <rect width="1440" height="700" fill="url(#prem-vignette)" />
      </svg>

      {/* ===== CONTENT OVERLAY ===== */}
      <div className="relative z-10 w-full px-8 py-16 lg:px-24 lg:py-28 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-xs font-semibold px-5 py-2 rounded-full mb-6 font-heading tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
          Platform Wisata #1 di Labuan Bajo
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-6 drop-shadow-2xl">
          Semua Perjalanan Bajo,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-orange-300 to-primary-400">
            1 Aplikasi Aja
          </span>
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl font-body text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dari kapal phinisi hingga restoran lokal — temukan semua yang kamu butuhkan untuk petualangan sempurna di Labuan Bajo.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="/home/products"
            className="group px-9 py-4 bg-primary-500 text-white font-heading font-bold text-base rounded-2xl hover:bg-primary-600 transition-all duration-300 shadow-xl hover:shadow-primary hover:-translate-y-1 hover:scale-105"
          >
            Jelajahi Sekarang
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="/home/booking"
            className="px-9 py-4 bg-white/15 text-white font-heading font-bold text-base rounded-2xl hover:bg-white/25 border border-white/35 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Pesan Perjalanan
          </a>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['⛵ 500+ Kapal Phinisi', '🌟 Rating 4.8', '👥 10K+ Wisatawan', '✅ Terpercaya'].map(item => (
            <span key={item} className="bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-body px-4 py-1.5 rounded-full">
              {item}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-1 opacity-60 animate-bounce">
          <span className="text-xs font-body text-white/60 tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
