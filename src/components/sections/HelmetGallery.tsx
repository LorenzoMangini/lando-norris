import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const helmets = [
  {
    name: 'Season',
    year: '2025',
    base: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp',
    hover: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp',
  },
  {
    name: 'Discoball',
    year: '2025',
    base: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp',
    hover: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp',
  },
  {
    name: 'Dark Glitter',
    year: '2025',
    base: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305aff4692de3e7ea12251_In-helm-2025-DarkGlitter-base.webp',
    hover: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305aff4692de3e7ea12251_In-helm-2025-DarkGlitter-base.webp',
  },
  {
    name: 'Porcelain',
    year: '2024',
    base: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp',
    hover: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp',
  },
  {
    name: 'Dark Mode',
    year: '2024',
    base: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp',
    hover: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp',
  },
  {
    name: 'Las Vegas',
    year: '2023',
    base: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305aff4692de3e7ea12251_In-helm-2025-DarkGlitter-base.webp',
    hover: 'https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp',
  },
]

function HelmetCard({ helmet, index }: { helmet: typeof helmets[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-shrink-0 w-52 md:w-64 cursor-pointer"
    >
      {/* Lime fade overlay (bottom) */}
      <div className="relative overflow-hidden bg-muted aspect-square">
        {/* Grey fade top mask */}
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none opacity-80"
        />
        {/* Lime fade bottom mask on hover */}
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Base helmet */}
        <img
          src={helmet.base}
          alt={`${helmet.name} helmet`}
          className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-400 group-hover:opacity-0"
        />
        {/* Hover helmet */}
        <img
          src={helmet.hover}
          alt={`${helmet.name} helmet hover`}
          className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 scale-105"
        />
      </div>

      {/* Label */}
      <div className="pt-4 flex items-end justify-between">
        <div>
          <p className="text-foreground font-heading font-700 text-xl tracking-tight leading-none">
            {helmet.name}
          </p>
          <p className="text-muted-foreground font-heading text-xs tracking-widest uppercase mt-1">
            {helmet.year}
          </p>
        </div>
        <ArrowUpRight
          size={16}
          className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-1"
        />
      </div>
    </motion.div>
  )
}

export default function HelmetGallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="helmets" className="bg-background py-20 overflow-hidden">
      {/* Header */}
      <div ref={ref} className="px-6 md:px-12 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-3"
        >
          Hall of Fame
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-800 text-6xl md:text-8xl lg:text-9xl tracking-tight text-foreground leading-none"
        >
          HELMETS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm leading-relaxed max-w-md mt-4"
        >
          From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.
        </motion.p>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
        {helmets.map((helmet, i) => (
          <div key={`${helmet.name}-${helmet.year}`} className="snap-start">
            <HelmetCard helmet={helmet} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
