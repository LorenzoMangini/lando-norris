import { useRef } from 'react'
import { motion, useInView, useDragControls } from 'framer-motion'
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
      initial={{ opacity: 0, y: 40, clipPath: 'inset(0 0 20% 0)' }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-shrink-0 w-52 md:w-64 cursor-grab active:cursor-grabbing"
    >
      {/* Image box */}
      <div className="relative overflow-hidden bg-muted aspect-square">
        {/* Grey fade mask */}
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none opacity-80 transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Lime fade mask — on hover */}
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Base helmet */}
        <motion.img
          src={helmet.base}
          alt={`${helmet.name} helmet`}
          className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95"
        />
        {/* Hover helmet — scale in */}
        <motion.img
          src={helmet.hover}
          alt={`${helmet.name} hover`}
          className="absolute inset-0 w-full h-full object-contain p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-110"
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-6 group-hover:h-6 border-t-[1.5px] border-l-[1.5px] border-primary transition-all duration-300 z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-6 group-hover:h-6 border-b-[1.5px] border-r-[1.5px] border-primary transition-all duration-300 z-20 pointer-events-none" />
      </div>

      {/* Label */}
      <div className="pt-4 flex items-end justify-between">
        <div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 + 0.2, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground font-heading font-700 text-xl tracking-tight leading-none"
            >
              {helmet.name}
            </motion.p>
          </div>
          <p className="text-muted-foreground font-heading text-xs tracking-widest uppercase mt-1 group-hover:text-primary transition-colors duration-300">
            {helmet.year}
          </p>
        </div>
        <ArrowUpRight
          size={16}
          className="text-muted-foreground group-hover:text-primary transition-all duration-300 mb-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </motion.div>
  )
}

export default function HelmetGallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const dragControls = useDragControls()
  const constraintsRef = useRef(null)

  return (
    <section id="helmets" className="bg-background py-20 overflow-hidden">
      {/* Header */}
      <div ref={ref} className="px-6 md:px-12 mb-12">
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase"
          >
            Hall of Fame
          </motion.p>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-800 text-6xl md:text-8xl lg:text-9xl tracking-tight text-foreground leading-none"
          >
            HELMETS
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm leading-relaxed max-w-md"
        >
          From iconic blobs to innovative one-off designs, Lando has always been passionate about designing memorable helmets.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-muted-foreground/40 font-heading text-[10px] tracking-widest uppercase mt-4"
        >
          ← drag to explore →
        </motion.p>
      </div>

      {/* Draggable scroll strip */}
      <div ref={constraintsRef} className="overflow-hidden">
        <motion.div
          drag="x"
          dragControls={dragControls}
          dragConstraints={constraintsRef}
          dragElastic={0.08}
          dragMomentum={true}
          className="flex gap-4 px-6 md:px-12 pb-6 select-none"
        >
          {helmets.map((helmet, i) => (
            <HelmetCard key={`${helmet.name}-${helmet.year}`} helmet={helmet} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
