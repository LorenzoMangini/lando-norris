import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const cards = [
  {
    id: 'on-track',
    tag: 'Track',
    title: 'ON TRACK',
    description: 'Most recent results, career stats and photos from trackside.',
    href: '#on-track',
    image: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp',
    cta: 'View On Track',
  },
  {
    id: 'off-track',
    tag: 'Off Track',
    title: 'OFF TRACK',
    description: 'Campaigns, shoots and other such promotional materials for fans.',
    href: '#off-track',
    image: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp',
    cta: 'View Off Track',
  },
]

function TrackCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const imgX = useSpring(useTransform(mouseX, [0, 1], ['-4%', '4%']), { stiffness: 180, damping: 28 })
  const imgY = useSpring(useTransform(mouseY, [0, 1], ['-4%', '4%']), { stiffness: 180, damping: 28 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.a
      ref={ref}
      href={card.href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60, clipPath: 'inset(6% 0 0 0)' }}
      animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' } : {}}
      transition={{ delay: index * 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden bg-card aspect-[3/4] md:aspect-auto md:h-[85vh] flex flex-col justify-end cursor-pointer"
    >
      {/* Background image — mouse parallax */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ x: imgX, y: imgY }}
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 transition-opacity duration-500" />

      {/* Lime vignette on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        <p className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-2">
          {card.tag}
        </p>

        {/* Title with clip-path reveal on inView */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ delay: index * 0.18 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground font-heading font-800 text-5xl md:text-7xl tracking-tight leading-none"
          >
            {card.title}
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.18 + 0.4, duration: 0.6 }}
          className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mb-6"
        >
          {card.description}
        </motion.p>

        <div className="flex items-center gap-2 text-primary font-heading text-xs tracking-[0.2em] uppercase group-hover:gap-4 transition-all duration-300">
          <span>{card.cta}</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>

      {/* Lime border reveal on hover */}
      <motion.div
        className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none"
      />

      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-0 h-0 border-t-0 border-l-0 group-hover:w-8 group-hover:h-8 border-t-[2px] border-l-[2px] border-primary transition-all duration-400 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-8 group-hover:h-8 border-b-[2px] border-r-[2px] border-primary transition-all duration-400 pointer-events-none" />
    </motion.a>
  )
}

export default function TrackCards() {
  return (
    <section className="bg-background" id="on-track">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cards.map((card, i) => (
          <TrackCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  )
}
