import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const photos = [
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp', alt: 'Lando in paddock' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp', alt: 'Lando trophy in tux' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp', alt: 'Lando lifting trophy' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp', alt: 'Lando playing golf' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp', alt: 'Lando with dog' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp', alt: 'Lando in tux' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp', alt: 'Lando on plane' },
]

const headlineWords = ['World', "Drivers'", 'Champion']

function MarqueeStrip() {
  const items = ['World Drivers Champion', '4× Race Winner 2025', 'McLaren F1', 'Number 4', 'Abu Dhabi 2024']
  return (
    <div className="relative overflow-hidden py-3 border-y border-border">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text) => (
              <span key={text} className="inline-flex items-center gap-4 px-6">
                <span className="text-muted-foreground font-heading text-xs tracking-[0.25em] uppercase">{text}</span>
                <span className="text-primary font-heading text-sm leading-none">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function WorldChampion() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const stripRef = useRef(null)
  const inView = useInView(textRef, { once: true, margin: '-80px' })

  // Photo strip parallax — moves left as user scrolls down
  const { scrollYProgress: stripProgress } = useScroll({
    target: stripRef,
    offset: ['start end', 'end start'],
  })
  const stripX = useTransform(stripProgress, [0, 1], ['4%', '-12%'])

  // Section bg fade
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section ref={sectionRef} className="bg-background overflow-hidden">
      <motion.div style={{ opacity: bgOpacity }}>
        <MarqueeStrip />
      </motion.div>

      {/* Champion headline */}
      <div ref={textRef} className="px-6 md:px-12 pt-20 pb-16">
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase"
          >
            2024 Season
          </motion.p>
        </div>

        <h2 className="font-heading font-900 text-5xl md:text-7xl lg:text-[9rem] tracking-tight text-foreground leading-none uppercase mb-6">
          {headlineWords.map((word, i) => (
            <div key={word} className="overflow-hidden block">
              <motion.span
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ delay: i * 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 2 ? 'text-primary' : ''}`}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-muted-foreground font-body text-sm leading-relaxed max-w-md"
          >
            Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it, treasure it forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-col md:items-end gap-4"
          >
            {/* Stats */}
            <div className="flex gap-10">
              {[{ n: '19', label: 'Podiums' }, { n: '6', label: 'Race Wins' }, { n: '#4', label: 'Car Number' }].map(({ n, label }) => (
                <div key={label}>
                  <p className="font-heading font-900 text-4xl text-foreground leading-none">{n}</p>
                  <p className="text-muted-foreground font-heading text-[10px] tracking-widest uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>
            <a
              href="https://store.landonorris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading font-700 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-200 group"
            >
              Shop the Collection
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Horizontal photo strip — scroll-driven parallax */}
      <div ref={stripRef} className="overflow-hidden pb-20">
        <motion.div
          style={{ x: stripX }}
          className="flex gap-3 px-6 md:px-12"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="flex-shrink-0 w-48 md:w-64 aspect-[3/4] overflow-hidden group relative cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Lime wash on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-400" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
