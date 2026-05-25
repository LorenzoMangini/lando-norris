import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const cards = [
  {
    id: 'on-track',
    top: 'ON',
    bottom: 'TRACK',
    description: 'Most recent results, career stats and photos from trackside.',
    href: 'https://landonorris.com/on-track',
    cta: 'view on track',
    image: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp',
    imageAlt: 'Lando Norris wearing a lime helmet, side profile',
  },
  {
    id: 'off-track',
    top: 'OFF',
    bottom: 'TRACK',
    description: 'Campaigns, shoots and other such promotional materials for fans',
    href: 'https://landonorris.com/off-track',
    cta: 'view off track',
    image: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp',
    imageAlt: 'Lando Norris portrait',
  },
]

function TrackPanel({ card, index }: { card: (typeof cards)[number]; index: number }) {
  const panelRef = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({ target: panelRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.02, 1.12])
  const titleX = useTransform(scrollYProgress, [0, 0.45, 1], ['-8%', '0%', '8%'])
  const linePath = useTransform(scrollYProgress, [0, 0.7], [0.12, 1])
  const plaqueY = useTransform(scrollYProgress, [0, 1], ['18%', '-18%'])

  return (
    <motion.a
      ref={panelRef}
      href={card.href}
      className="group relative grid min-h-[96vh] overflow-hidden border-t border-[#535450]/60 bg-[#282c20] p-5 text-[#f4f4ed] outline-none transition-colors duration-500 hover:bg-[#22261b] focus-visible:bg-[#22261b] md:grid-cols-12 md:p-8"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ delay: index * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      id={card.id}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full text-[#d2ff00]/45" viewBox="0 0 1440 820" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d={index % 2 === 0
            ? 'M-60 520 C220 260 470 720 710 410 C920 140 1100 220 1500 80'
            : 'M-80 180 C260 520 470 80 760 350 C1010 585 1180 370 1510 620'}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 12"
          pathLength={linePath}
        />
      </svg>
      <div className="pointer-events-none absolute left-6 top-6 hidden font-heading text-[18vw] font-black uppercase leading-none tracking-[-0.12em] text-[#f4f4ed]/[0.025] md:block">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10 flex flex-col justify-between md:col-span-6">
        <div className="flex items-center gap-3 font-heading text-[0.625rem] font-bold uppercase leading-none text-[#b4b8a5]">
          <span className="h-px w-10 bg-[#d2ff00]" />
          <span>{card.cta}</span>
        </div>

        <div>
          <motion.h2
            className="font-heading text-[clamp(5rem,15vw,16rem)] font-black uppercase leading-[0.75] tracking-[-0.1em]"
            style={{ x: titleX }}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '112%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {card.top}
              </motion.span>
            </span>
            <span className="block overflow-hidden text-[#b4b8a5]">
              <motion.span
                className="block"
                initial={{ y: '112%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {card.bottom}
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 max-w-[28rem] text-lg leading-[1.2] text-[#b4b8a5] md:text-2xl"
            style={{ y: plaqueY }}
          >
            {card.description}
          </motion.p>
        </div>
      </div>

      <div className="relative mt-10 min-h-[24rem] md:col-span-6 md:mt-0">
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-[3rem] shadow-[0_2rem_5rem_rgba(0,0,0,0.28)]"
          initial={{ clipPath: 'ellipse(22% 35% at 70% 50%)' }}
          whileInView={{ clipPath: 'ellipse(100% 58% at 50% 50%)' }}
          whileHover={{ clipPath: 'ellipse(82% 50% at 50% 50%)' }}
          viewport={{ once: true, margin: '-140px' }}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
        >
          <motion.img
            src={card.image}
            alt={card.imageAlt}
            loading="lazy"
            className="h-[116%] w-full object-cover object-center transition-[filter] duration-700 group-hover:saturate-125"
            style={{ y: imageY, scale: imageScale }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#282c20]/50 via-transparent to-transparent" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute -left-8 top-1/2 hidden -translate-y-1/2 rounded-full border border-[#535450] bg-[#282c20]/70 px-5 py-3 font-heading text-[0.6rem] font-black uppercase leading-none text-[#d2ff00] backdrop-blur-md md:block"
          animate={{ rotate: [0, -2, 0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          scroll / reveal
        </motion.div>
        <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#d2ff00] text-[#282c20] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          <ArrowUpRight size={20} strokeWidth={2.2} />
        </div>
      </div>
    </motion.a>
  )
}

export default function TrackCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-90px' })

  return (
    <section ref={ref} className="overflow-hidden bg-[#282c20]">
      <div className="px-5 pb-12 pt-24 md:px-10 md:pb-16">
        <motion.p
          className="font-heading text-[0.625rem] font-bold uppercase leading-none text-[#d2ff00]"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          Formula 1 and beyond
        </motion.p>
      </div>
      <div className="grid grid-cols-1">
        {cards.map((card, index) => (
          <TrackPanel key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  )
}
