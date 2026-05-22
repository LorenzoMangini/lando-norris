import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'

/* ── Topographic contour background ── */
function TopoLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="#b0b09a" strokeWidth="0.7" opacity="0.45">
        {/* Left organic blob – concentric rings */}
        <ellipse cx="310" cy="460" rx="130" ry="210" />
        <ellipse cx="310" cy="460" rx="170" ry="260" />
        <ellipse cx="310" cy="460" rx="210" ry="310" />
        <ellipse cx="310" cy="460" rx="255" ry="365" />
        <ellipse cx="310" cy="460" rx="300" ry="420" />
        {/* Inner fill hint */}
        <ellipse cx="310" cy="460" rx="90" ry="155" />
        <ellipse cx="310" cy="460" rx="50" ry="90" />

        {/* Right cluster */}
        <ellipse cx="1150" cy="380" rx="110" ry="190" />
        <ellipse cx="1150" cy="380" rx="155" ry="245" />
        <ellipse cx="1150" cy="380" rx="200" ry="295" />

        {/* Top-center subtle circle */}
        <circle cx="720" cy="60" r="90" />
        <circle cx="720" cy="60" r="130" />

        {/* Bottom right small */}
        <circle cx="1280" cy="780" r="70" />
        <circle cx="1280" cy="780" r="105" />

        {/* Top left small */}
        <circle cx="90" cy="130" r="55" />
        <circle cx="90" cy="130" r="80" />
      </g>
    </svg>
  )
}

/* ── Next Race card ── */
function NextRaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-8 left-6 md:left-10 z-20"
    >
      <div className="border border-[#c0c0a8] p-4 w-32 bg-white/60 backdrop-blur-sm">
        <p className="text-[#888870] font-heading text-[8px] tracking-[0.3em] uppercase mb-3">
          Next Race
        </p>

        {/* Circuit track icon placeholder – simple oval */}
        <div className="flex justify-center mb-3">
          <svg viewBox="0 0 60 40" className="w-14 h-9 opacity-35" fill="none" stroke="#444430" strokeWidth="2">
            <path d="M10 30 L10 18 Q10 8 20 8 L40 8 Q52 8 52 18 L52 28 Q52 35 44 35 L22 35 Q14 35 14 30 Z" />
            <path d="M10 24 L6 24 Q2 24 2 20 L2 16 Q2 10 8 10 L10 10" />
          </svg>
        </div>

        <div className="border-t border-[#c0c0a8] pt-3 mb-3">
          <p className="text-[#1a1a14] font-heading font-700 text-xs tracking-widest uppercase leading-tight">
            Montreal<br />
            <span className="text-[hsl(73,100%,35%)]">GP</span>
          </p>
        </div>

        {/* McLaren helmet icon */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png"
            alt=""
            className="w-6 h-6 object-contain opacity-50"
          />
          <div>
            <p className="text-[#444430] font-heading font-700 text-[8px] tracking-widest uppercase leading-tight">
              McLaren F1
            </p>
            <p className="text-[#888870] font-heading text-[7px] tracking-widest uppercase">
              Since 2019
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse motion values
  const rawX = useMotionValue(0.5)
  const rawY = useMotionValue(0.5)

  // Layer springs – different stiffness = different "depth"
  const portraitX = useSpring(useTransform(rawX, [0, 1], ['-1.5%', '1.5%']), { stiffness: 45, damping: 16 })
  const portraitY = useSpring(useTransform(rawY, [0, 1], ['-1.5%', '1.5%']), { stiffness: 45, damping: 16 })

  const helmetX  = useSpring(useTransform(rawX, [0, 1], ['-5%', '5%']),   { stiffness: 70, damping: 18 })
  const helmetY  = useSpring(useTransform(rawY, [0, 1], ['-4%', '4%']),   { stiffness: 70, damping: 18 })

  const logoX = useSpring(useTransform(rawX, [0, 1], ['-8%', '8%']), { stiffness: 90, damping: 20 })
  const logoY = useSpring(useTransform(rawY, [0, 1], ['-6%', '6%']), { stiffness: 90, damping: 20 })

  const topoX = useSpring(useTransform(rawX, [0, 1], ['-1%', '1%']), { stiffness: 30, damping: 14 })
  const topoY = useSpring(useTransform(rawY, [0, 1], ['-1%', '1%']), { stiffness: 30, damping: 14 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth)
      rawY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  // Scroll parallax on portrait
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const scrollImgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: 'hsl(60 25% 96%)' }}
    >
      {/* Topographic lines – slowest parallax layer */}
      <motion.div className="absolute inset-0" style={{ x: topoX, y: topoY }}>
        <TopoLines />
      </motion.div>

      {/* Portrait layer */}
      <motion.div
        style={{ x: portraitX, y: portraitY, translateY: scrollImgY, opacity: scrollOpacity }}
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp"
          alt="Lando Norris"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-[90vh] w-auto max-w-none object-cover object-top"
          style={{ mixBlendMode: 'multiply' }}
        />
      </motion.div>

      {/* LN logo – floating above head, fastest parallax */}
      <motion.div
        style={{ x: logoX, y: logoY }}
        className="absolute top-[12%] left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
          alt="LN"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-auto opacity-70"
          style={{ filter: 'brightness(0) saturate(100%)' }}
        />
      </motion.div>

      {/* Floating helmet – mid parallax, left of portrait */}
      <motion.div
        style={{ x: helmetX, y: helmetY }}
        className="absolute top-[25%] left-[28%] md:left-[33%] z-20 pointer-events-none"
        initial={{ opacity: 0, x: -30, rotate: -12 }}
        animate={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp"
          alt="Lando Norris helmet"
          animate={{ y: [0, 8, 0], rotate: [-8, -6, -8] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 md:w-36 h-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Next Race card */}
      <NextRaceCard />

      {/* Scroll line indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-[#888870] to-[hsl(73,100%,40%)]"
        />
        <p
          className="font-heading text-[8px] tracking-[0.35em] uppercase mt-1"
          style={{ color: '#888870' }}
        >
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
