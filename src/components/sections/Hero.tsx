import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { Flag } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 18 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 18 })
  const bgX = useTransform(smoothX, [0, 1], ['-3%', '3%'])
  const bgY = useTransform(smoothY, [0, 1], ['-3%', '3%'])

  // Scroll parallax — image scrolls up slower than page
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  // Clip-path label reveal
  const clipReveal = {
    initial: { clipPath: 'inset(100% 0 0 0)', opacity: 1 },
    animate: { clipPath: 'inset(0% 0 0 0)', opacity: 1 },
  }

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col">
      {/* Background photo — mouse + scroll parallax */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ x: bgX, y: bgY }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68eb91477bcf3ee7d055ab45_lando-OpenGraph.webp"
          alt="Lando Norris"
          style={{ y: imgY }}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex-1 flex flex-col justify-end pb-20 px-6 md:px-12"
      >
        {/* Label — clip reveal */}
        <div className="overflow-hidden mb-4">
          <motion.p
            variants={clipReveal}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground font-heading text-xs tracking-[0.35em] uppercase"
          >
            2025 McLaren Formula 1 Driver
          </motion.p>
        </div>

        {/* LANDO NORRIS svg — clip reveal */}
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg"
              alt="Lando Norris"
              className="w-full max-w-3xl brightness-0 invert"
            />
          </motion.div>
        </div>

        {/* McLaren since — clip reveal */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground font-heading text-xs tracking-[0.25em] uppercase"
          >
            McLaren F1 Since 2019
          </motion.p>
        </div>
      </motion.div>

      {/* Next Race Card — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
        id="next-race"
        className="absolute bottom-8 left-6 md:left-10 z-10"
      >
        <a href="#next-race" className="block group">
          <motion.div
            whileHover={{ borderColor: 'hsl(73 100% 50% / 0.5)' }}
            className="border border-muted-foreground/25 p-4 w-28 transition-colors duration-300"
          >
            <p className="text-muted-foreground font-heading text-[9px] tracking-[0.25em] uppercase mb-3">
              Next Race
            </p>
            <div className="mb-3 flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg"
                alt="Flags"
                className="w-10 h-6 opacity-40 brightness-0 invert group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            <div className="border-t border-muted-foreground/25 pt-3">
              <p className="text-foreground font-heading font-700 text-xs tracking-widest uppercase leading-tight">
                Montréal<br />
                <span className="text-primary">GP</span>
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <Flag size={8} className="text-muted-foreground" />
              <p className="text-muted-foreground font-heading text-[8px] tracking-widest uppercase">
                Jun 13–15
              </p>
            </div>
          </motion.div>
        </a>
      </motion.div>

      {/* Scroll indicator — animated bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/40 to-primary/60"
        />
        <p className="text-muted-foreground font-heading text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center mt-2">
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
