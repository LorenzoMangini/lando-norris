import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ShoppingBag } from 'lucide-react'

const ASSETS = {
  hero: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5.webp',
  gold: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3.webp',
  tee: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e4ccfdba84b69d27_lando-store-gold-1.webp',
  product: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be88faa89137717632c_lando-store-gold-2.webp',
  sticker: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1.webp',
}

function AnimatedTopoLines() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {[0, 1, 2].map((index) => (
        <motion.svg
          key={index}
          className="absolute inset-[-12%] h-[124%] w-[124%] text-[#8b8f7c]/40"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          animate={{
            x: index % 2 === 0 ? ['-2%', '2%', '-2%'] : ['2%', '-2%', '2%'],
            y: index === 1 ? ['1%', '-2%', '1%'] : ['-1%', '2%', '-1%'],
          }}
          transition={{ duration: 16 + index * 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M-120 350C110 390 205 258 336 167c176-123 374-93 459 62 72 131 31 291-106 366-130 71-211 33-277 109-82 94 3 215 152 224 167 10 236-127 398-129 143-1 224 104 381 75 154-28 207-153 366-181" />
            <path d="M-88 116C84 238 206 234 308 114 443-45 644-14 744 123c89 122 54 257-39 353-112 116-238 83-289 183-54 106 45 211 209 206 191-6 246-153 430-164 132-8 234 74 351 40 116-34 138-138 282-165" />
            <path d="M1160-100c-64 97-57 187 22 269 103 107 282 66 359 189 66 106 12 234-112 278-148 52-278-58-403 27-98 67-84 185 8 245 107 70 246 17 361-23" />
            <ellipse cx="560" cy="430" rx="260" ry="128" transform="rotate(-28 560 430)" />
            <ellipse cx="1390" cy="675" rx="320" ry="120" transform="rotate(-10 1390 675)" />
          </g>
        </motion.svg>
      ))}
    </div>
  )
}

export default function WorldChampion() {
  const ref = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const inView = useInView(textRef, { once: true, margin: '-90px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const heroY = useTransform(scrollYProgress, [0, 1], ['7%', '-7%'])
  const goldY = useTransform(scrollYProgress, [0, 1], ['-8%', '12%'])
  const teeY = useTransform(scrollYProgress, [0, 1], ['12%', '-10%'])
  const productY = useTransform(scrollYProgress, [0, 1], ['18%', '-16%'])
  const blackSkew = useTransform(scrollYProgress, [0, 1], ['polygon(0 0, 100% 0, 100% 78%, 0 100%)', 'polygon(0 0, 100% 0, 100% 60%, 0 84%)'])

  return (
    <section ref={ref} id="champion" className="relative overflow-hidden bg-[#f7f7f0] text-[#282c20]">
      <motion.div className="absolute inset-x-0 top-0 z-0 h-[12rem] bg-[#111112]" style={{ clipPath: blackSkew }} aria-hidden="true" />
      <AnimatedTopoLines />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[118rem] items-center gap-12 px-5 py-28 md:grid-cols-12 md:px-10 md:py-36">
        <div ref={textRef} className="md:col-span-6 lg:col-span-5">
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <ShoppingBag size={20} strokeWidth={2.3} />
            <p className="font-heading text-sm font-black uppercase leading-none text-[#282c20]">Lando Store</p>
          </motion.div>

          <h2 className="font-heading text-[clamp(4rem,7.8vw,9.2rem)] font-black uppercase leading-[0.84] tracking-[-0.085em]">
            {['World', "Drivers'"].map((word, index) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '115%' }}
                  animate={inView ? { y: '0%' } : {}}
                  transition={{ delay: index * 0.09, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden font-serif text-[0.86em] font-normal tracking-[-0.08em]">
              <motion.span
                className="block"
                initial={{ y: '115%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Champion
              </motion.span>
            </span>
          </h2>

          <motion.p
            className="mt-8 max-w-[38rem] text-xl leading-[1.1] text-[#282c20] md:text-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.34, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it, treasure it forever.
          </motion.p>

          <motion.a
            href="https://landonorris.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-5 rounded-[0.55rem] bg-[#d2ff00] px-6 py-4 font-heading text-sm font-black uppercase leading-none text-[#282c20] transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.46, duration: 0.65 }}
          >
            Visit the store
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="relative min-h-[42rem] md:col-span-6 lg:col-span-7">
          <motion.div
            className="absolute left-[4%] top-0 h-[86%] w-[72%] overflow-hidden bg-[#ddd8c9] shadow-[0_2rem_5rem_rgba(0,0,0,0.16)]"
            style={{ y: heroY }}
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={ASSETS.hero} alt="" loading="lazy" className="h-full w-full object-cover object-center" />
          </motion.div>

          <motion.div
            className="absolute right-[-4rem] top-[28%] z-20 h-[19rem] w-[26rem] overflow-hidden bg-[#c5a33b] shadow-[0_2rem_4rem_rgba(0,0,0,0.24)]"
            style={{ y: goldY }}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={ASSETS.gold} alt="" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>

          <motion.img
            src={ASSETS.tee}
            alt=""
            loading="lazy"
            className="absolute bottom-[-5rem] left-[-10rem] z-20 w-[16rem] drop-shadow-2xl"
            style={{ y: teeY }}
            initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.34, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.img
            src={ASSETS.product}
            alt=""
            loading="lazy"
            className="absolute bottom-[-3rem] left-[34%] z-30 w-[17rem] rounded-[0.3rem] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.18)]"
            style={{ y: productY }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.44, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.img
            src={ASSETS.sticker}
            alt=""
            loading="lazy"
            className="absolute -right-8 bottom-[-4rem] z-10 w-[18rem] opacity-90"
            animate={{ rotate: [-6, 4, -6], y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}
