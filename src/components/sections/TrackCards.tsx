import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

export default function TrackCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-background py-4 px-4 md:px-6" id="on-track">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-2xl mx-auto">
        {cards.map((card, i) => (
          <motion.a
            key={card.id}
            href={card.href}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden bg-card aspect-[4/5] md:aspect-[3/4] flex flex-col justify-end cursor-pointer"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <p className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-2">
                {card.tag}
              </p>
              <h2 className="text-foreground font-heading font-800 text-5xl md:text-7xl tracking-tight leading-none mb-4">
                {card.title}
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mb-6">
                {card.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-heading text-xs tracking-[0.2em] uppercase group-hover:gap-4 transition-all duration-300">
                <span>{card.cta}</span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Lime border on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
