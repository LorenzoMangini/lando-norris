import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'

function TopoLines() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="hsl(78,18%,22%)" strokeWidth="0.7" opacity="0.5">
        <ellipse cx="300" cy="500" rx="120" ry="200" />
        <ellipse cx="300" cy="500" rx="165" ry="260" />
        <ellipse cx="300" cy="500" rx="215" ry="325" />
        <ellipse cx="300" cy="500" rx="265" ry="395" />
        <ellipse cx="300" cy="500" rx="75" ry="130" />
        <ellipse cx="1160" cy="350" rx="105" ry="185" />
        <ellipse cx="1160" cy="350" rx="155" ry="245" />
        <ellipse cx="1160" cy="350" rx="205" ry="305" />
        <circle cx="720" cy="55" r="85" />
        <circle cx="720" cy="55" r="125" />
        <circle cx="80" cy="120" r="50" />
        <circle cx="80" cy="120" r="78" />
      </g>
    </svg>
  )
}

function NextRaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', bottom: 40, left: 24, zIndex: 30 }}
    >
      <div style={{
        padding: 16,
        width: 140,
        border: '1px solid hsl(78,14%,24%)',
        background: 'hsl(78,20%,11%)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 20, height: 1, background: 'hsl(73,100%,50%)' }} />
          <p style={{ fontFamily: 'var(--font-heading)', fontVariationSettings: "'wdth' 100", fontSize: 8, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'hsl(73,100%,50%)', margin: 0 }}>
            Next Race
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <svg viewBox="0 0 90 58" style={{ width: 80, height: 48, opacity: 0.35 }} fill="none"
            stroke="hsl(60,15%,72%)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 44 L10 30 Q10 8 28 8 L62 8 Q74 8 74 22 L74 34" />
            <path d="M74 34 Q74 44 64 44 L36 44 Q26 44 26 36 L26 30 Q26 22 34 22 L52 22" />
            <path d="M52 22 Q62 22 62 30 L62 36 Q62 44 54 44" />
            <path d="M10 36 L4 36 Q2 36 2 28 L2 18 Q2 8 10 8" />
          </svg>
        </div>
        <div style={{ borderTop: '1px solid hsl(78,14%,22%)', paddingTop: 12, marginBottom: 12 }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'hsl(60,15%,82%)', margin: 0 }}>
            Monaco
          </p>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'hsl(73,100%,50%)', margin: '2px 0 0' }}>
            GP
          </p>
        </div>
        <div style={{ borderTop: '1px solid hsl(78,14%,22%)', paddingTop: 10 }}>
          {/* Helmet with laurel wreath icon */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <svg viewBox="0 0 80 44" style={{ width: 72, height: 40, opacity: 0.35 }} fill="none"
              stroke="hsl(60,15%,72%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Left laurel */}
              <path d="M8 32 C4 28, 3 23, 5 19" />
              <path d="M8 32 C5 27, 6 21, 9 18" />
              <path d="M5 19 C3 15, 5 12, 8 11" />
              <path d="M9 18 C7 14, 9 11, 12 11" />
              <path d="M8 11 C7 8, 9 6, 12 7" />
              <path d="M12 11 C11 8, 13 6, 16 7" />
              <path d="M5 19 C8 24, 8 28, 8 32" />
              {/* Right laurel */}
              <path d="M72 32 C76 28, 77 23, 75 19" />
              <path d="M72 32 C75 27, 74 21, 71 18" />
              <path d="M75 19 C77 15, 75 12, 72 11" />
              <path d="M71 18 C73 14, 71 11, 68 11" />
              <path d="M72 11 C73 8, 71 6, 68 7" />
              <path d="M68 11 C69 8, 67 6, 64 7" />
              <path d="M75 19 C72 24, 72 28, 72 32" />
              {/* Helmet */}
              <path d="M28 34 L28 28 Q28 14 40 14 Q52 14 52 28 L52 34 Z" />
              <path d="M25 34 L55 34" />
              <path d="M28 34 Q28 37 32 37 L48 37 Q52 37 52 34" />
              <path d="M32 28 Q33 22 40 22 Q47 22 48 28 L48 33 L32 33 Z" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center', color: 'hsl(78,12%,40%)', margin: 0 }}>
            McLaren F1
          </p>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 7, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', color: 'hsl(78,12%,30%)', margin: '2px 0 0' }}>
            Since 2019
          </p>
        </div>
      </div>
    </motion.div>
  )
}

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

  // Parallax layer springs — depth via stiffness
  const topoX = useSpring(useTransform(rawX, [0,1], ['-0.6%','0.6%']), { stiffness: 28, damping: 14 })
  const topoY = useSpring(useTransform(rawY, [0,1], ['-0.6%','0.6%']), { stiffness: 28, damping: 14 })
  const portraitX = useSpring(useTransform(rawX, [0,1], ['-2%','2%']), { stiffness: 42, damping: 16 })
  const portraitY = useSpring(useTransform(rawY, [0,1], ['-1.5%','1.5%']), { stiffness: 42, damping: 16 })
  const helmetX = useSpring(useTransform(rawX, [0,1], ['-7%','7%']), { stiffness: 68, damping: 18 })
  const helmetY = useSpring(useTransform(rawY, [0,1], ['-5%','5%']), { stiffness: 68, damping: 18 })
  const logoX = useSpring(useTransform(rawX, [0,1], ['-11%','11%']), { stiffness: 90, damping: 20 })
  const logoY = useSpring(useTransform(rawY, [0,1], ['-8%','8%']), { stiffness: 90, damping: 20 })
  const textX = useSpring(useTransform(rawX, [0,1], ['-0.5%','0.5%']), { stiffness: 32, damping: 15 })

  // Scroll
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const scrollImgY = useTransform(scrollYProgress, [0,1], ['0%','22%'])
  const scrollHelmetY = useTransform(scrollYProgress, [0,1], ['0%','14%'])
  const scrollTextY = useTransform(scrollYProgress, [0,1], ['0%','-10%'])
  const scrollOpacity = useTransform(scrollYProgress, [0,0.75], [1,0])
  const scrollScale = useTransform(scrollYProgress, [0,1], [1,1.04])

  return (
    <section
      ref={containerRef}
      style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', background: 'hsl(78,18%,14%)' }}
    >
      {/* Layer 0 — Topo lines */}
      <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, x: topoX, y: topoY }}>
        <TopoLines />
      </motion.div>

      {/* Layer 1 — Full-bleed portrait */}
      <motion.div
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          x: portraitX, y: portraitY, translateY: scrollImgY,
          opacity: scrollOpacity, scale: scrollScale,
          backgroundImage: 'url(https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Lando Norris portrait"
        role="img"
      />

      {/* Vignette — radial dark edges */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 90% at 50% 55%, transparent 25%, hsl(78,18%,14%,0.6) 100%)',
      }} />
      {/* Bottom gradient — blends into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, hsl(78,18%,14%) 0%, transparent 100%)',
      }} />

      {/* Layer 2 — Floating helmet */}
      <motion.div
        style={{
          position: 'absolute', top: '20%', left: '22%', zIndex: 3,
          x: helmetX, y: helmetY, translateY: scrollHelmetY,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, rotate: -14 }}
        animate={{ opacity: 1, rotate: -10 }}
        transition={{ delay: 0.35, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp"
          alt="Lando Norris racing helmet"
          animate={{ y: [0, 10, 0], rotate: [-10, -8, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 140, height: 'auto', filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.6))' }}
        />
      </motion.div>

      {/* Layer 3 — LN logo floating */}
      <motion.div
        style={{ position: 'absolute', top: '8%', left: '50%', zIndex: 3, x: logoX, y: logoY, translateX: '-50%', pointerEvents: 'none' }}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
          alt="LN logo"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 56, height: 'auto', opacity: 0.55, filter: 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(400%) hue-rotate(30deg)' }}
        />
      </motion.div>

      {/* Layer 4 — LANDO NORRIS text SVG */}
      <motion.div
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, x: textX, translateY: scrollTextY, opacity: scrollOpacity, pointerEvents: 'none' }}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg"
          alt="Lando Norris"
          style={{ width: '100%', height: 'auto', opacity: 0.5, filter: 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(400%) hue-rotate(30deg)', display: 'block' }}
        />
      </motion.div>

      {/* Driver label — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', top: 80, right: 40, zIndex: 3, textAlign: 'right' }}
      >
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase', lineHeight: 2.2, color: 'hsl(78,12%,38%)', margin: 0 }}>
          2025 McLaren<br />Formula 1 Driver
        </p>
      </motion.div>

      {/* Next race card */}
      <NextRaceCard />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.7 }}
        style={{ position: 'absolute', bottom: 40, right: 32, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, opacity: scrollOpacity as unknown as number }}
      >
        <motion.div
          animate={{ scaleY: [1, 1.7, 1], opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, hsl(78,12%,36%), hsl(73,100%,50%))' }}
        />
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 7, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(78,12%,32%)', margin: 0 }}>
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
