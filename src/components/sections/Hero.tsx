import { useEffect, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'

/* ─── Topographic SVG lines (Layer 0 — slowest) ─────────────────── */
function TopoLines() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="hsl(78,22%,20%)" strokeWidth="0.8" opacity="0.55">
        <ellipse cx="260" cy="520" rx="80"  ry="140" />
        <ellipse cx="260" cy="520" rx="130" ry="210" />
        <ellipse cx="260" cy="520" rx="180" ry="275" />
        <ellipse cx="260" cy="520" rx="235" ry="345" />
        <ellipse cx="260" cy="520" rx="295" ry="420" />
        <ellipse cx="1180" cy="320" rx="115" ry="190" />
        <ellipse cx="1180" cy="320" rx="165" ry="250" />
        <ellipse cx="1180" cy="320" rx="218" ry="315" />
        <circle  cx="720"  cy="45"  r="90"  />
        <circle  cx="720"  cy="45"  r="135" />
        <circle  cx="72"   cy="110" r="55"  />
        <circle  cx="72"   cy="110" r="85"  />
      </g>
    </svg>
  )
}

/* ─── Next-Race card ─────────────────────────────────────────────── */
function NextRaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', bottom: 48, left: 28, zIndex: 30 }}
    >
      <div
        style={{
          padding: '18px 16px',
          width: 148,
          border: '1px solid hsl(78,14%,24%)',
          background: 'hsla(78,22%,10%,0.88)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ width: 18, height: 1, background: 'hsl(73,100%,50%)' }} />
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(73,100%,50%)', margin: 0 }}>
            Next Race
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <svg viewBox="0 0 90 58" style={{ width: 78, height: 48, opacity: 0.28 }} fill="none"
            stroke="hsl(60,15%,72%)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 44 L10 30 Q10 8 28 8 L62 8 Q74 8 74 22 L74 34" />
            <path d="M74 34 Q74 44 64 44 L36 44 Q26 44 26 36 L26 30 Q26 22 34 22 L52 22" />
            <path d="M52 22 Q62 22 62 30 L62 36 Q62 44 54 44" />
            <path d="M10 36 L4 36 Q2 36 2 28 L2 18 Q2 8 10 8" />
          </svg>
        </div>

        <div style={{ borderTop: '1px solid hsl(78,14%,22%)', paddingTop: 12, marginBottom: 12 }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'hsl(60,15%,82%)', margin: 0 }}>Monaco</p>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'hsl(73,100%,50%)', margin: '3px 0 0' }}>GP</p>
        </div>

        <div style={{ borderTop: '1px solid hsl(78,14%,22%)', paddingTop: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <svg viewBox="0 0 80 44" style={{ width: 70, height: 38, opacity: 0.28 }} fill="none"
              stroke="hsl(60,15%,72%)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', color: 'hsl(78,12%,42%)', margin: 0 }}>McLaren F1</p>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 7, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', color: 'hsl(78,12%,32%)', margin: '3px 0 0' }}>Since 2019</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════════
   HERO — Multi-layer depth parallax
   Layers (back → front) with increasing mouse reactivity:
     0  TopoLines    stiffness 26  → barely moves
     1  Portrait     stiffness 38  → subtle drift
     2  Helmet       stiffness 62  → clear float
     3  LN logo      stiffness 85  → snappiest
     4  Text         stiffness 30  → near-static
════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  /* Normalised mouse 0 → 1 */
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

  /* ── Layer 0: Topo (slowest) — pixel values for predictable movement */
  const topoX = useSpring(useTransform(rawX, [0, 1], [-8,   8  ]), { stiffness: 26, damping: 12 })
  const topoY = useSpring(useTransform(rawY, [0, 1], [-8,   8  ]), { stiffness: 26, damping: 12 })

  /* ── Layer 1: Portrait (mid drift) */
  const portraitX = useSpring(useTransform(rawX, [0, 1], [-24,  24 ]), { stiffness: 38, damping: 16 })
  const portraitY = useSpring(useTransform(rawY, [0, 1], [-16,  16 ]), { stiffness: 38, damping: 16 })

  /* ── Layer 2: Helmet (clearly floats) */
  const helmetX   = useSpring(useTransform(rawX, [0, 1], [-52,  52 ]), { stiffness: 62, damping: 18 })
  const helmetY   = useSpring(useTransform(rawY, [0, 1], [-36,  36 ]), { stiffness: 62, damping: 18 })

  /* ── Layer 3: Logo (snappiest) */
  const logoX     = useSpring(useTransform(rawX, [0, 1], [-80,  80 ]), { stiffness: 85, damping: 20 })
  const logoY     = useSpring(useTransform(rawY, [0, 1], [-55,  55 ]), { stiffness: 85, damping: 20 })

  /* ── Layer 4: Watermark text (near-static) */
  const textX     = useSpring(useTransform(rawX, [0, 1], [-6,   6  ]), { stiffness: 30, damping: 14 })

  /* ── Scroll transforms */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const scrollImgY    = useTransform(scrollYProgress, [0, 1], ['0%',  '28%'])
  const scrollHelmetY = useTransform(scrollYProgress, [0, 1], ['0%',  '18%'])
  const scrollTextY   = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scrollScale   = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'hsl(78,18%,10%)',
      }}
    >
      {/* Layer 0 — Topo lines */}
      <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, x: topoX, y: topoY }}>
        <TopoLines />
      </motion.div>

      {/* Layer 1 — Portrait (full bleed, no img tag — background) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          x: portraitX, y: portraitY,
          translateY: scrollImgY,
          scale: scrollScale,
        }}
      >
        <div
          role="img"
          aria-label="Lando Norris portrait"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp)',
            backgroundSize: 'cover',
            backgroundPosition: '50% 35%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </motion.div>

      {/* Vignette — radial dark edges */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 100% at 50% 50%, transparent 25%, hsla(78,18%,10%,0.55) 100%)',
        }}
      />
      {/* Left darkening — card readability */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, hsla(78,18%,10%,0.75) 0%, transparent 38%)',
        }}
      />
      {/* Bottom blend */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '44%', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to top, hsl(78,18%,10%) 0%, transparent 100%)',
        }}
      />

      {/* Layer 2 — Floating helmet */}
      <motion.div
        initial={{ opacity: 0, rotate: 14, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 9,  scale: 1 }}
        transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          bottom: '16%',
          right: '5%',
          zIndex: 4,
          x: helmetX,
          y: helmetY,
          translateY: scrollHelmetY,
          pointerEvents: 'none',
        }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp"
          alt="Lando Norris racing helmet"
          animate={{ y: [0, 14, 0], rotate: [9, 7, 9] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 220,
            height: 'auto',
            filter: 'drop-shadow(0 24px 64px rgba(0,0,0,0.75))',
          }}
        />
      </motion.div>

      {/* Layer 3 — LN logo (snappiest) */}
      <motion.div
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', top: '10%', left: '50%',
          translateX: '-50%',
          zIndex: 4,
          x: logoX, y: logoY,
          pointerEvents: 'none',
        }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
          alt="LN logo"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 64,
            height: 'auto',
            opacity: 0.55,
            filter: 'brightness(0) saturate(100%) invert(90%) sepia(40%) saturate(280%) hue-rotate(25deg)',
          }}
        />
      </motion.div>

      {/* Layer 4 — LANDO NORRIS watermark (bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          zIndex: 3,
          x: textX,
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
            opacity: 0.22,
            filter: 'brightness(10) grayscale(1)',
          }}
        />
      </motion.div>

      {/* Driver label — top-right */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', top: 88, right: 44, zIndex: 5, textAlign: 'right' }}
      >
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 8, letterSpacing: '0.34em',
          textTransform: 'uppercase', lineHeight: 2.4,
          color: 'hsl(78,10%,40%)', margin: 0,
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
        transition={{ delay: 2.1, duration: 0.9 }}
        style={{
          position: 'absolute', bottom: 44, right: 36, zIndex: 5,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}
      >
        <motion.div
          animate={{ scaleY: [1, 1.8, 1], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1, height: 44,
            background: 'linear-gradient(to bottom, transparent, hsl(78,10%,38%), hsl(73,100%,50%))',
          }}
        />
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 7, letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'hsl(78,10%,34%)', margin: 0,
        }}>Scroll</p>
      </motion.div>
    </section>
  )
}
