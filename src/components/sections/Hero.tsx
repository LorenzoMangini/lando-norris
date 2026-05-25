import { useEffect, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'

/* ─── Topographic lines — light version ────────────────────────── */
function TopoLines() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="hsl(40,10%,70%)" strokeWidth="0.9" opacity="0.35">
        {/* Left cluster */}
        <ellipse cx="160" cy="580" rx="90"  ry="160" />
        <ellipse cx="160" cy="580" rx="150" ry="240" />
        <ellipse cx="160" cy="580" rx="215" ry="330" />
        <ellipse cx="160" cy="580" rx="285" ry="430" />
        {/* Right cluster */}
        <ellipse cx="1280" cy="260" rx="120" ry="200" />
        <ellipse cx="1280" cy="260" rx="180" ry="280" />
        <ellipse cx="1280" cy="260" rx="245" ry="365" />
        {/* Top-center */}
        <circle cx="720" cy="-20" r="110" />
        <circle cx="720" cy="-20" r="165" />
        <circle cx="720" cy="-20" r="225" />
        {/* Bottom-right decorative */}
        <ellipse cx="1360" cy="820" rx="80"  ry="120" />
        <ellipse cx="1360" cy="820" rx="130" ry="190" />
        {/* Small top-left */}
        <circle cx="55"  cy="80"  r="50" />
        <circle cx="55"  cy="80"  r="80" />
      </g>
    </svg>
  )
}

/* ─── Helmet wireframe SVG — behind the portrait ─────────────── */
function HelmetWireframe() {
  return (
    <svg
      viewBox="0 0 520 560"
      fill="none"
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Outer helmet shell */}
      <ellipse cx="260" cy="220" rx="215" ry="195" stroke="hsl(40,8%,60%)" strokeWidth="1.2" opacity="0.28" />
      <ellipse cx="260" cy="220" rx="200" ry="182" stroke="hsl(40,8%,60%)" strokeWidth="0.8" opacity="0.18" />
      {/* Visor opening — large oval */}
      <ellipse cx="260" cy="270" rx="160" ry="105" stroke="hsl(40,8%,55%)" strokeWidth="1.4" opacity="0.32" />
      <ellipse cx="260" cy="265" rx="148" ry="95"  stroke="hsl(40,8%,55%)" strokeWidth="0.7" opacity="0.18" />
      {/* Crown lines */}
      <path d="M145 95 Q260 40 375 95"   stroke="hsl(40,8%,58%)" strokeWidth="0.9" opacity="0.22" />
      <path d="M110 150 Q260 72 410 150" stroke="hsl(40,8%,58%)" strokeWidth="0.8" opacity="0.16" />
      {/* Side air vents */}
      <path d="M48 235 Q55 200 72 175"  stroke="hsl(40,8%,55%)" strokeWidth="1.1" opacity="0.24" />
      <path d="M472 235 Q465 200 448 175" stroke="hsl(40,8%,55%)" strokeWidth="1.1" opacity="0.24" />
      {/* Chin guard */}
      <path d="M115 380 Q145 420 260 435 Q375 420 405 380"
        stroke="hsl(40,8%,55%)" strokeWidth="1.3" opacity="0.28" fill="none" />
      <path d="M140 360 Q175 405 260 418 Q345 405 380 360"
        stroke="hsl(40,8%,52%)" strokeWidth="0.8" opacity="0.16" fill="none" />
      {/* Vertical centre line */}
      <line x1="260" y1="28" x2="260" y2="440" stroke="hsl(40,8%,56%)" strokeWidth="0.6" opacity="0.14" strokeDasharray="6 8" />
      {/* Horizontal grid lines */}
      <path d="M60 210 Q260 200 460 210"  stroke="hsl(40,8%,56%)" strokeWidth="0.6" opacity="0.12" />
      <path d="M48 270 Q260 258 472 270"  stroke="hsl(40,8%,56%)" strokeWidth="0.6" opacity="0.12" />
      <path d="M60 330 Q260 318 460 330"  stroke="hsl(40,8%,56%)" strokeWidth="0.6" opacity="0.12" />
      {/* Neck collar */}
      <ellipse cx="260" cy="478" rx="130" ry="42" stroke="hsl(40,8%,54%)" strokeWidth="1.1" opacity="0.22" />
      <ellipse cx="260" cy="472" rx="118" ry="36" stroke="hsl(40,8%,54%)" strokeWidth="0.7" opacity="0.14" />
    </svg>
  )
}

/* ─── Visor — yellow/black patterned band across lower face ─── */
function Visor() {
  return (
    <svg
      viewBox="0 0 900 190"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
    >
      <defs>
        {/* Blob pattern — approximating the Android/Lakart squiggles */}
        <pattern id="visorPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="hsl(50,95%,55%)" />
          {/* Dark squiggly blob shapes */}
          <path d="M8 10 Q14 2 20 10 Q26 18 32 10 Q38 2 44 10 Q50 18 56 10" stroke="hsl(220,14%,18%)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M2 28 Q8 20 14 28 Q20 36 26 28 Q32 20 38 28 Q44 36 50 28 Q56 20 62 28" stroke="hsl(220,14%,18%)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M8 46 Q14 38 20 46 Q26 54 32 46 Q38 38 44 46 Q50 54 56 46" stroke="hsl(220,14%,18%)" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Random blobs */}
          <ellipse cx="16" cy="16" rx="6" ry="8" fill="hsl(220,14%,18%)" opacity="0.85" />
          <ellipse cx="44" cy="42" rx="5" ry="7" fill="hsl(220,14%,18%)" opacity="0.85" />
          <circle cx="30" cy="30" r="4" fill="hsl(220,14%,18%)" opacity="0.6" />
        </pattern>
        {/* Slight 3d curve via gradient overlay */}
        <linearGradient id="visorShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0.22" />
          <stop offset="40%"  stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="black" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="visorFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="black" stopOpacity="0.6" />
          <stop offset="8%"   stopColor="black" stopOpacity="0" />
          <stop offset="92%"  stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.6" />
        </linearGradient>
        <clipPath id="visorClip">
          <path d="M0 30 Q50 0 450 10 Q850 0 900 30 L900 160 Q850 190 450 180 Q50 190 0 160 Z" />
        </clipPath>
      </defs>
      {/* Main visor band */}
      <g clipPath="url(#visorClip)">
        <rect x="0" y="0" width="900" height="190" fill="url(#visorPattern)" />
        {/* Shine overlay */}
        <rect x="0" y="0" width="900" height="190" fill="url(#visorShine)" />
        {/* Edge fade */}
        <rect x="0" y="0" width="900" height="190" fill="url(#visorFade)" />
      </g>
      {/* Visor border / edge highlight */}
      <path d="M0 30 Q50 0 450 10 Q850 0 900 30 L900 160 Q850 190 450 180 Q50 190 0 160 Z"
        fill="none" stroke="hsl(50,80%,42%)" strokeWidth="1.5" opacity="0.7" />
      {/* Top chrome highlight */}
      <path d="M20 32 Q450 6 880 32"
        fill="none" stroke="white" strokeWidth="2" opacity="0.35" />
    </svg>
  )
}

/* ─── Next Race card — same as before but styled for light bg ─── */
function NextRaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', bottom: 48, left: 28, zIndex: 30 }}
    >
      <div style={{
        padding: '18px 16px',
        width: 148,
        border: '1px solid hsl(40,8%,82%)',
        background: 'hsla(40,8%,96%,0.85)',
        backdropFilter: 'blur(14px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ width: 18, height: 1, background: 'hsl(73,100%,40%)' }} />
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(73,80%,35%)', margin: 0 }}>
            Next Race
          </p>
        </div>

        {/* F1 car SVG */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <svg viewBox="0 0 90 58" style={{ width: 78, height: 48, opacity: 0.4 }} fill="none"
            stroke="hsl(40,8%,30%)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 44 L10 30 Q10 8 28 8 L62 8 Q74 8 74 22 L74 34" />
            <path d="M74 34 Q74 44 64 44 L36 44 Q26 44 26 36 L26 30 Q26 22 34 22 L52 22" />
            <path d="M52 22 Q62 22 62 30 L62 36 Q62 44 54 44" />
            <path d="M10 36 L4 36 Q2 36 2 28 L2 18 Q2 8 10 8" />
          </svg>
        </div>

        <div style={{ borderTop: '1px solid hsl(40,8%,80%)', paddingTop: 12, marginBottom: 12 }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'hsl(40,8%,22%)', margin: 0 }}>Monaco</p>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'hsl(73,100%,33%)', margin: '3px 0 0' }}>GP</p>
        </div>

        {/* Helmet with laurel */}
        <div style={{ borderTop: '1px solid hsl(40,8%,80%)', paddingTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <svg viewBox="0 0 80 44" style={{ width: 70, height: 38, opacity: 0.4 }} fill="none"
              stroke="hsl(40,8%,35%)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 32 C4 28, 3 23, 5 19" /><path d="M8 32 C5 27, 6 21, 9 18" />
              <path d="M5 19 C3 15, 5 12, 8 11" /><path d="M9 18 C7 14, 9 11, 12 11" />
              <path d="M8 11 C7 8, 9 6, 12 7" /><path d="M12 11 C11 8, 13 6, 16 7" />
              <path d="M5 19 C8 24, 8 28, 8 32" />
              <path d="M72 32 C76 28, 77 23, 75 19" /><path d="M72 32 C75 27, 74 21, 71 18" />
              <path d="M75 19 C77 15, 75 12, 72 11" /><path d="M71 18 C73 14, 71 11, 68 11" />
              <path d="M72 11 C73 8, 71 6, 68 7" /><path d="M68 11 C69 8, 67 6, 64 7" />
              <path d="M75 19 C72 24, 72 28, 72 32" />
              <path d="M28 34 L28 28 Q28 14 40 14 Q52 14 52 28 L52 34 Z" />
              <path d="M25 34 L55 34" />
              <path d="M28 34 Q28 37 32 37 L48 37 Q52 37 52 34" />
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', color: 'hsl(40,8%,45%)', margin: 0 }}>McLaren F1</p>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 7, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', color: 'hsl(40,8%,60%)', margin: '3px 0 0' }}>Since 2019</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════════
   HERO — Light background + close-up portrait + helmet wireframe
════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0.5)
  const rawY = useMotionValue(0.5)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth)
      rawY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  /* Layer parallax — spring values */
  const topoX      = useSpring(useTransform(rawX, [0, 1], [-10,  10 ]), { stiffness: 22, damping: 12 })
  const topoY      = useSpring(useTransform(rawY, [0, 1], [-10,  10 ]), { stiffness: 22, damping: 12 })

  const portraitX  = useSpring(useTransform(rawX, [0, 1], [-20,  20 ]), { stiffness: 36, damping: 16 })
  const portraitY  = useSpring(useTransform(rawY, [0, 1], [-14,  14 ]), { stiffness: 36, damping: 16 })

  const helmetX    = useSpring(useTransform(rawX, [0, 1], [-38,  38 ]), { stiffness: 52, damping: 18 })
  const helmetY    = useSpring(useTransform(rawY, [0, 1], [-28,  28 ]), { stiffness: 52, damping: 18 })

  const visorX     = useSpring(useTransform(rawX, [0, 1], [-55,  55 ]), { stiffness: 70, damping: 20 })
  const visorY     = useSpring(useTransform(rawY, [0, 1], [-32,  32 ]), { stiffness: 70, damping: 20 })

  const logoX      = useSpring(useTransform(rawX, [0, 1], [-72,  72 ]), { stiffness: 86, damping: 22 })
  const logoY      = useSpring(useTransform(rawY, [0, 1], [-50,  50 ]), { stiffness: 86, damping: 22 })

  /* Scroll transforms */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const scrollImgY    = useTransform(scrollYProgress, [0, 1], ['0%',  '24%'])
  const scrollHelmetY = useTransform(scrollYProgress, [0, 1], ['0%',  '16%'])
  const scrollVisorY  = useTransform(scrollYProgress, [0, 1], ['0%',  '10%'])
  const scrollTextY   = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'hsl(40, 6%, 93%)',
        cursor: 'none',
      }}
    >
      {/* Layer 0 — Topo lines (very subtle on light bg) */}
      <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, x: topoX, y: topoY }}>
        <TopoLines />
      </motion.div>

      {/* Layer 1 — Helmet wireframe (behind portrait) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'min(75vw, 640px)',
          height: 'min(82vw, 700px)',
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 1,
          x: helmetX,
          y: helmetY,
          translateY: scrollHelmetY,
          pointerEvents: 'none',
        }}
      >
        <HelmetWireframe />
      </motion.div>

      {/* Layer 2 — Portrait image (centered, fills viewport) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          height: '100%',
          translateX: '-50%',
          zIndex: 2,
          x: portraitX,
          y: portraitY,
          translateY: scrollImgY,
          pointerEvents: 'none',
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp"
          alt="Lando Norris"
          style={{
            height: '100%',
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'cover',
            objectPosition: '50% 18%',
            display: 'block',
          }}
        />
      </motion.div>

      {/* Layer 3 — Visor overlay (over lower face area) */}
      <motion.div
        initial={{ opacity: 0, y: 30, scaleX: 0.85 }}
        animate={{ opacity: 1, y: 0, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '56%',
          left: '50%',
          width: 'min(68vw, 720px)',
          height: 'auto',
          aspectRatio: '900 / 190',
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 4,
          x: visorX,
          y: visorY,
          translateY: scrollVisorY,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.28)) drop-shadow(0 2px 8px rgba(0,0,0,0.18))',
        }}
      >
        <Visor />
      </motion.div>

      {/* Layer 4 — LN logo (top-center, snappiest) */}
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '9%',
          left: '50%',
          translateX: '-50%',
          zIndex: 5,
          x: logoX,
          y: logoY,
          pointerEvents: 'none',
        }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
          alt="LN logo"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 58,
            height: 'auto',
            opacity: 0.55,
            filter: 'brightness(0) saturate(100%)',
          }}
        />
      </motion.div>

      {/* Layer 5 — LANDO NORRIS watermark text (bottom, scroll-driven) */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          translateY: scrollTextY,
          opacity: scrollOpacity,
          pointerEvents: 'none',
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg"
          alt="Lando Norris"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            opacity: 0.09,
            filter: 'brightness(0)',
          }}
        />
      </motion.div>

      {/* Driver label — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', top: 88, right: 44, zIndex: 6, textAlign: 'right' }}
      >
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 8, letterSpacing: '0.32em',
          textTransform: 'uppercase', lineHeight: 2.4,
          color: 'hsl(40,8%,52%)', margin: 0,
        }}>
          2025 McLaren<br />Formula 1 Driver
        </p>
      </motion.div>

      {/* Next-race card */}
      <NextRaceCard />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.9 }}
        style={{
          position: 'absolute', bottom: 44, right: 36, zIndex: 6,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}
      >
        <motion.div
          animate={{ scaleY: [1, 1.8, 1], opacity: [0.2, 0.65, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1, height: 44,
            background: 'linear-gradient(to bottom, transparent, hsl(40,8%,55%), hsl(73,100%,40%))',
          }}
        />
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 7, letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'hsl(40,8%,55%)', margin: 0,
        }}>Scroll</p>
      </motion.div>
    </section>
  )
}
