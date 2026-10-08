import { Link } from "react-router-dom"
import logo from "../../assets/main-icon-white.png"

const INK = "#0e0a1f"

// [x, width, roofY] — rectangles run from the roof down to the bottom of the scene
const BACK_SKYLINE = [[0, 90, 250], [90, 70, 210], [160, 110, 270], [270, 60, 190], [330, 90, 240], [420, 120, 220], [540, 70, 170], [610, 100, 250], [710, 80, 200], [790, 130, 260], [920, 70, 180], [990, 110, 230], [1100, 80, 200], [1180, 120, 260], [1300, 60, 210], [1360, 130, 240]]
const FRONT_SKYLINE = [[0, 120, 330], [120, 90, 350], [210, 130, 320], [340, 130, 345], [470, 140, 300], [610, 140, 330], [750, 90, 355], [840, 150, 325], [990, 100, 345], [1090, 130, 315], [1220, 100, 340], [1320, 170, 325]]

// Spider-Man hanging from the web, hand at (0,0): [points, color, strokeWidth]
const SPIDEY = [
  ["0,0 6,32", "#e8313b", 10],
  ["2,50 -24,66 -46,58", "#e8313b", 10],
  ["16,90 46,98 42,130", "#1f4fd6", 13],
  ["12,94 -6,122 20,134", "#1f4fd6", 13],
  ["6,40 16,88", "#e8313b", 26],
]

const LINK_GROUPS = [
  ["Movies", ["Now showing", "Coming soon", "Cinemas"]],
  ["Explore", ["Events", "Plays", "Sports", "Activities"]],
  ["Work with us", ["List your show", "Corporates", "Offers", "Gift cards"]],
]

const Windows = ({ x, w, top, seed }) => {
  const lit = []
  for (let row = 0, y = top + 14; y < 410; row++, y += 18)
    for (let col = 0, wx = x + 10; wx < x + w - 10; col++, wx += 16)
      if ((row + col + seed) % 4 === 0) lit.push(<rect key={`${row}-${col}`} x={wx} y={y} width="6" height="8" />)
  return lit
}

const CityScene = () => (
  <svg viewBox="45 80 1440 340" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#12092e" />
        <stop offset="0.55" stopColor="#3b1366" />
        <stop offset="0.85" stopColor="#8a1d6e" />
        <stop offset="1" stopColor="#f84464" />
      </linearGradient>
      <linearGradient id="beam" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#ffd23f" stopOpacity="0.55" />
        <stop offset="1" stopColor="#ffd23f" stopOpacity="0.05" />
      </linearGradient>
      <pattern id="halftone" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="4.5" cy="4.5" r="1.3" fill="#fff" />
      </pattern>
    </defs>

    <rect width="1500" height="420" fill="url(#sky)" />
    <rect width="1500" height="300" fill="url(#halftone)" opacity="0.08" />

    {/* Moon with a caped flyer crossing it */}
    <circle cx="1080" cy="175" r="80" fill="#fff1c1" />
    <circle cx="1080" cy="175" r="80" fill="url(#halftone)" opacity="0.18" />
    <g transform="translate(1092 165) rotate(-10)" fill={INK} stroke={INK} strokeLinecap="round">
      <path d="M24,-4 Q0,-16 -34,-10 Q-20,-2 -30,10 Q0,4 24,2Z" fill="#e8313b" stroke="none" />
      <line x1="0" y1="0" x2="28" y2="-2" strokeWidth="10" />
      <line x1="0" y1="0" x2="-32" y2="2" strokeWidth="7" />
      <line x1="26" y1="-4" x2="52" y2="-8" strokeWidth="5" />
      <circle cx="35" cy="-8" r="6" stroke="none" />
    </g>

    {/* Searchlight with the bat in the clouds */}
    <polygon points="582,300 598,300 712,124 548,112" fill="url(#beam)" />
    <ellipse cx="630" cy="118" rx="86" ry="34" fill="#ffd23f" opacity="0.45" />
    <path transform="translate(630 120) scale(1.3)" fill={INK} d="M-40,0 Q-30,-6 -24,-14 Q-20,-6 -12,-6 L-6,-14 L-3,-8 L3,-8 L6,-14 L12,-6 Q20,-6 24,-14 Q30,-6 40,0 Q28,0 22,8 Q14,4 8,12 L0,6 L-8,12 Q-14,4 -22,8 Q-28,0 -40,0Z" />

    <g fill="#2b1259">
      {BACK_SKYLINE.map(([x, w, top]) => <rect key={x} x={x} y={top} width={w} height={420 - top} />)}
    </g>
    <g fill={INK}>
      {FRONT_SKYLINE.map(([x, w, top]) => <rect key={x} x={x} y={top} width={w} height={420 - top} />)}
    </g>
    <g fill="#ffd23f" opacity="0.7">
      {FRONT_SKYLINE.map(([x, w, top], i) => <Windows key={x} x={x} w={w} top={top} seed={i} />)}
    </g>

    {/* Batman on the rooftop, cape caught in the wind */}
    <g transform="translate(540 300) scale(0.8)" fill={INK} stroke="#ffd23f" strokeOpacity="0.35" strokeWidth="2">
      <path d="M-14,-136 Q-30,-132 -34,-118 L-40,-60 L-70,-10 L-30,-20 L-28,0 L-8,0 L-4,-50 L4,-50 L8,0 L28,0 L30,-20 L90,-30 L50,-70 L36,-118 Q30,-132 14,-136Z" />
      <path d="M-12,-150 L-14,-174 L-6,-158 L6,-158 L14,-174 L12,-150 Q12,-136 0,-130 Q-12,-136 -12,-150Z" />
      <path d="M-9,-150 L-3,-148 L-4,-145Z M9,-150 L3,-148 L4,-145Z" fill="#fff" stroke="none" />
    </g>

    {/* Stays put while Spider-Man swings, so it never leaves the frame or drifts onto Batman */}
    <text x="690" y="230" transform="rotate(-12 690 230)" fontFamily="Bangers" fontSize="46" letterSpacing="2" fill="#ffd23f" stroke={INK} strokeWidth="7" paintOrder="stroke">
      THWIP!
    </text>

    {/* Spider-Man swinging from a web anchored above the frame */}
    <g className="animate-swing" style={{ transformBox: "view-box", transformOrigin: "960px -40px" }}>
      <line x1="960" y1="-40" x2="960" y2="215" stroke="#fff" strokeWidth="2" />
      <g transform="translate(960 215)" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M-46,58 L-110,30" stroke="#fff" strokeWidth="1.5" strokeDasharray="6 4" />
        {SPIDEY.map(([pts, , w]) => <polyline key={pts} points={pts} stroke={INK} strokeWidth={w + 6} />)}
        <circle cx="-6" cy="40" r="18" fill={INK} />
        {SPIDEY.map(([pts, color, w]) => <polyline key={pts} points={pts} stroke={color} strokeWidth={w} />)}
        <circle cx="-6" cy="40" r="15" fill="#e8313b" />
        <path d="M-6,25 V55 M-21,40 H9 M-17,30 Q-6,36 5,30 M-17,50 Q-6,44 5,50" stroke={INK} strokeWidth="0.8" opacity="0.5" />
        <path d="M-18,35 L-9,32 L-10,44Z M-3,32 L6,35 L-2,44Z" fill="#fff" stroke={INK} strokeWidth="2" />
        <path d="M11,56 l0,14 M5,60 l12,6 M5,66 l12,-6" stroke={INK} strokeWidth="2" />
      </g>
    </g>
  </svg>
)

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e0a1f] text-gray-400">
      <div className="relative h-[200px] lg:h-auto lg:aspect-[1440/340] overflow-hidden">
        <CityScene />
      </div>

      {/* Phones: headline, button, links stacked. md: headline + button share a row. lg: headline, links, button in one row. */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 flex flex-wrap items-start justify-between gap-x-12 gap-y-6">
        <div>
          <h2 className="font-['Bangers'] text-4xl md:text-5xl leading-none tracking-wide text-white whitespace-nowrap [text-shadow:3px_3px_0_#e8313b]">
            Grab the best seat<br />in the multiverse.
          </h2>
          <p className="mt-3 text-sm">Movies, events and live shows playing near you.</p>
        </div>

        <Link
          to="/movies"
          className="lg:order-last shrink-0 bg-[#f84464] text-white text-sm font-medium px-5 py-2.5 rounded border-2 border-black shadow-[4px_4px_0_#ffd23f] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd23f]"
        >
          Book tickets
        </Link>

        <nav className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-[repeat(3,auto)] gap-x-12 gap-y-6 text-sm">
          {LINK_GROUPS.map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-medium mb-2">{title}</h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#ffd23f] focus-visible:outline-2 focus-visible:outline-[#ffd23f]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <img src={logo} alt="bookMyScreen" className="h-6 object-contain" />
          <p>© {new Date().getFullYear()} bookMyScreen. Built by{" "}
            <a href="https://github.com/jainakshat30" target="_blank" rel="noreferrer" className="text-white hover:underline">
              Akshat Jain
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
