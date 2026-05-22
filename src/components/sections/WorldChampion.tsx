import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const photos = [
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp', alt: 'Lando in casual clothes walking through paddock' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp', alt: 'Lando lifting trophy in tux' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp', alt: 'Lando lifting trophy' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp', alt: 'Lando playing golf' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp', alt: 'Lando holding dog smiling' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp', alt: 'Lando in tux' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp', alt: 'Lando taking photo out of a plane' },
]

function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden py-3 border-y border-border">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="flex gap-0 whitespace-nowrap"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {['World Drivers Champion', '4× Race Winner 2025', 'McLaren F1', 'Number 4'].map((text) => (
              <span key={text} className="inline-flex items-center gap-4 px-6">
                <span className="text-muted-foreground font-heading text-xs tracking-[0.25em] uppercase">{text}</span>
                <span className="text-primary font-heading text-base">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function WorldChampion() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <section ref={containerRef} className="bg-background overflow-hidden">
      <MarqueeStrip />

      {/* Champion headline */}
      <div ref={ref} className="px-6 md:px-12 pt-20 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-4"
        >
          2024 Season
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-900 text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-none uppercase mb-6"
        >
          World<br />
          Drivers'<br />
          <span className="text-primary">Champion</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm leading-relaxed max-w-md mb-8"
        >
          Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it, treasure it forever.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          href="https://store.landonorris.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading font-700 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-200 group"
        >
          Shop the Collection
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
      </div>

      {/* Horizontal photo strip with parallax */}
      <motion.div
        style={{ x }}
        className="flex gap-3 px-6 md:px-12 pb-20"
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="flex-shrink-0 w-48 md:w-64 aspect-[3/4] overflow-hidden group"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
