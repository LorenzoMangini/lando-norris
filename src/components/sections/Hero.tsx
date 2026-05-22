import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'

/* ── Topographic contour background (dark version) ── */
function TopoLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="hsl(78 18% 22%)" strokeWidth="0.8" opacity="0.7">
        <ellipse cx="310" cy="460" rx="130" ry="210" />
        <ellipse cx="310" cy="460" rx="170" ry="260" />
        <ellipse cx="310" cy="460" rx="210" ry="310" />
        <ellipse cx="310" cy="460" rx="255" ry="365" />
        <ellipse cx="310" cy="460" rx="300" ry="420" />
        <ellipse cx="310" cy="460" rx="90" ry="155" />
        <ellipse cx="310" cy="460" rx="50" ry="90" />
        <ellipse cx="1150" cy="380" rx="110" ry="190" />
        <ellipse cx="1150" cy="380" rx="155" ry="245" />
        <ellipse cx="1150" cy="380" rx="200" ry="295" />
        <circle cx="720" cy="60" r="90" />
        <circle cx="720" cy="60" r="130" />
        <circle cx="1280" cy="780" r="70" />
        <circle cx="1280" cy="780" r="105" />
        <circle cx="90" cy="130" r="55" />
        <circle cx="90" cy="130" r="80" />
      </g>
    </svg>
  )
}

/* ── Next Race card — dark themed ── */
function NextRaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-8 left-6 md:left-10 z-20"
    >
      <div
        className="p-4 w-36"
        style={{
          border: '1px solid hsl(78 14% 24%)',
          background: 'hsl(78 18% 14%)',
        }}
      >
        {/* "NEXT RACE" label */}
        <p
          className="font-heading text-[8px] tracking-[0.3em] uppercase mb-3"
          style={{ color: 'hsl(78 12% 38%)' }}
        >
          Next Race
        </p>

        {/* Circuit track outline SVG */}
        <div className="flex justify-center mb-3">
          <svg viewBox="0 0 80 52" className="w-16 h-10 opacity-30" fill="none" stroke="hsl(60 15% 75%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Gilles Villeneuve / Montreal circuit rough shape */}
            <path d="M12 36 L12 22 Q12 10 24 10 L56 10 Q68 10 68 22 L68 32 Q68 40 60 40 L30 40 Q20 40 20 34 Z" />
            <path d="M12 28 L6 28 Q2 28 2 22 L2 16 Q2 8 10 8 L12 8" />
            <path d="M46 40 L46 46 Q46 50 42 50 L38 50 Q34 50 34 46 L34 40" />
          </svg>
        </div>

        {/* Race name */}
        <div style={{ borderTop: '1px solid hsl(78 14% 24%)' }} className="pt-3 mb-3">
          <p
            className="font-heading font-700 text-[11px] tracking-widest uppercase leading-tight"
            style={{ color: 'hsl(60 15% 80%)' }}
          >
            Montreal
          </p>
          <p
            className="font-heading font-700 text-[11px] tracking-widest uppercase"
            style={{ color: 'hsl(73 100% 50%)' }}
          >
            GP
          </p>
        </div>

        {/* Divider line */}
        <div style={{ borderTop: '1px solid hsl(78 14% 24%)' }} className="pt-3">
          {/* Helmet + laurel wreath icon */}
          <div className="flex items-center justify-center mb-2">
            <svg viewBox="0 0 60 32" className="w-14 h-8 opacity-25" fill="none" stroke="hsl(60 15% 75%)" strokeWidth="1.5" strokeLinecap="round">
              {/* Laurel left */}
              <path d="M8 24 Q4 20 6 15 Q8 10 12 12 Q10 17 8 24Z" />
              <path d="M10 22 Q6 18 9 14 Q11 9 15 11" />
              {/* Helmet */}
              <path d="M22 24 Q22 14 30 12 Q38 14 38 24 L38 26 Q38 28 36 28 L24 28 Q22 28 22 26 Z" />
              <path d="M24 24 L36 24" />
              {/* Laurel right */}
              <path d="M52 24 Q56 20 54 15 Q52 10 48 12 Q50 17 52 24Z" />
              <path d="M50 22 Q54 18 51 14 Q49 9 45 11" />
            </svg>
          </div>
          <p
            className="font-heading font-700 text-[8px] tracking-[0.18em] uppercase text-center leading-tight"
            style={{ color: 'hsl(78 12% 38%)' }}
          >
            McLaren F1
          </p>
          <p
            className="font-heading text-[7px] tracking-[0.18em] uppercase text-center"
            style={{ color: 'hsl(78 12% 30%)' }}
          >
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

  const portraitX = useSpring(useTransform(rawX, [0, 1], ['-1.5%', '1.5%']), { stiffness: 45, damping: 16 })
  const portraitY = useSpring(useTransform(rawY, [0, 1], ['-1.5%', '1.5%']), { stiffness: 45, damping: 16 })

  const helmetX  = useSpring(useTransform(rawX, [0, 1], ['-6%', '6%']),   { stiffness: 70, damping: 18 })
  const helmetY  = useSpring(useTransform(rawY, [0, 1], ['-5%', '5%']),   { stiffness: 70, damping: 18 })

  const logoX = useSpring(useTransform(rawX, [0, 1], ['-10%', '10%']), { stiffness: 90, damping: 20 })
  const logoY = useSpring(useTransform(rawY, [0, 1], ['-7%', '7%']),   { stiffness: 90, damping: 20 })

  const topoX = useSpring(useTransform(rawX, [0, 1], ['-1%', '1%']), { stiffness: 30, damping: 14 })
  const topoY = useSpring(useTransform(rawY, [0, 1], ['-1%', '1%']), { stiffness: 30, damping: 14 })

  const textX = useSpring(useTransform(rawX, [0, 1], ['-0.8%', '0.8%']), { stiffness: 35, damping: 15 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth)
      rawY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const scrollImgY   = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textSlide    = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: 'hsl(78 18% 14%)' }}
    >
      {/* Topographic lines */}
      <motion.div className="absolute inset-0" style={{ x: topoX, y: topoY }}>
        <TopoLines />
      </motion.div>

      {/* Portrait layer — no blend mode on dark bg */}
      <motion.div
        style={{ x: portraitX, y: portraitY, translateY: scrollImgY, opacity: scrollOpacity }}
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp"
          alt="Lando Norris"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="h-[92vh] w-auto max-w-none object-cover object-top"
        />
      </motion.div>

      {/* Subtle dark gradient to let portrait breathe at edges */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 80% at 50% 60%, transparent 30%, hsl(78 18% 14% / 0.65) 100%)'
      }} />

      {/* LN logo — floating above head */}
      <motion.div
        style={{ x: logoX, y: logoY }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
          alt="LN"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-auto"
          style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(400%) hue-rotate(30deg) opacity(0.6)' }}
        />
      </motion.div>

      {/* Floating helmet */}
      <motion.div
        style={{ x: helmetX, y: helmetY }}
        className="absolute top-[22%] left-[26%] md:left-[31%] z-20 pointer-events-none"
        initial={{ opacity: 0, x: -30, rotate: -14 }}
        animate={{ opacity: 1, x: 0, rotate: -9 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp"
          alt="Lando Norris helmet"
          animate={{ y: [0, 9, 0], rotate: [-9, -7, -9] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-32 md:w-40 h-auto drop-shadow-2xl"
        />
      </motion.div>

      {/* LANDO NORRIS text SVG — bottom center, parallax layer */}
      <motion.div
        style={{ x: textX, translateY: textSlide, opacity: scrollOpacity }}
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg"
          alt="Lando Norris"
          className="w-full h-auto"
          style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(60%) saturate(400%) hue-rotate(30deg)', opacity: 0.55 }}
        />
      </motion.div>

      {/* Next Race card */}
      <NextRaceCard />

      {/* Driver subtitle — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 right-6 md:right-10 z-20 text-right"
      >
        <p
          className="font-heading text-[9px] tracking-[0.35em] uppercase leading-loose"
          style={{ color: 'hsl(78 12% 38%)' }}
        >
          2025 McLaren<br />Formula 1 Driver
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ scaleY: [1, 1.6, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-[hsl(78_12%_38%)] to-[hsl(73,100%,50%)]"
        />
        <p
          className="font-heading text-[7px] tracking-[0.35em] uppercase mt-1"
          style={{ color: 'hsl(78 12% 35%)' }}
        >
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
