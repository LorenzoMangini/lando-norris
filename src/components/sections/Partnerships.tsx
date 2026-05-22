import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const headlineWords = ['Always', 'bringing', 'the fight.']

export default function Partnerships() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Mouse tilt on helmet image
  const helmetRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 160, damping: 28 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 160, damping: 28 })
  const imgX = useSpring(useTransform(mouseX, [0, 1], ['-3%', '3%']), { stiffness: 120, damping: 24 })
  const imgY = useSpring(useTransform(mouseY, [0, 1], ['-3%', '3%']), { stiffness: 120, damping: 24 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = helmetRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }
  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <section className="bg-background py-20 overflow-hidden">
      {/* Message from Lando */}
      <div ref={ref} className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: '100%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase"
            >
              A message from Lando
            </motion.p>
          </div>

          <h2 className="font-heading font-800 text-5xl md:text-6xl tracking-tight text-foreground leading-none uppercase mb-6">
            {headlineWords.map((word, i) => (
              <div key={word} className="overflow-hidden block">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={inView ? { y: '0%' } : {}}
                  transition={{ delay: i * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${i === 2 ? 'text-primary' : ''}`}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm mb-8"
          >
            Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <a
              href="mailto:business@landonorris.com"
              className="inline-flex items-center gap-2 text-primary font-heading font-700 text-sm tracking-widest uppercase group transition-all duration-300"
            >
              <span className="group-hover:mr-2 transition-all duration-300">View Partnerships</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="mailto:business@landonorris.com"
              className="inline-flex items-center gap-2 text-muted-foreground font-heading text-xs tracking-widest uppercase hover:text-foreground transition-colors duration-200"
            >
              business@landonorris.com
            </a>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <img
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg"
              alt="Lando's signature"
              className="h-16 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(80%) saturate(500%) hue-rotate(30deg)' }}
            />
          </motion.div>
        </div>

        {/* Helmet — mouse tilt parallax */}
        <motion.div
          ref={helmetRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="relative overflow-hidden cursor-none"
        >
          <motion.img
            src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp"
            alt="Lando Norris helmet 360"
            style={{ x: imgX, y: imgY }}
            className="w-full object-cover scale-105"
          />
          {/* Lime sheen on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      </div>

      {/* Partnerships bottom bar */}
      <div className="px-6 md:px-12 border-t border-border pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-1">&campaigns</p>
            <p className="text-foreground font-heading font-700 text-2xl md:text-3xl tracking-tight">Partners & Collaborations</p>
          </div>
          <a
            href="mailto:business@landonorris.com"
            className="hidden md:flex items-center gap-2 border border-border px-5 py-3 text-foreground font-heading text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300 group"
          >
            Get in touch
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
