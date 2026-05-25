import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const photos = [
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp',
    label: 'Qatar, 2024',
    meta: 'arrival',
    className: 'md:ml-8 md:w-[34rem] md:rotate-[-2.5deg]',
  },
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp',
    label: 'FIA Prize Giving, 2024',
    meta: 'award',
    className: 'md:ml-auto md:mr-4 md:w-[27rem] md:rotate-[3deg]',
  },
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp',
    label: 'Miami GP, 2024',
    meta: 'first win',
    className: 'md:ml-24 md:w-[31rem] md:rotate-[1.5deg]',
  },
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp',
    label: 'Monaco, 2023',
    meta: 'off track',
    className: 'md:ml-auto md:mr-20 md:w-[25rem] md:rotate-[-4deg]',
  },
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp',
    label: 'Britain, 2025',
    meta: 'home',
    className: 'md:ml-2 md:w-[29rem] md:rotate-[4deg]',
  },
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab4f762cdbc5e93415_ln-home-horiz-10.webp',
    label: 'US, 2024',
    meta: 'celebration',
    className: 'md:ml-auto md:w-[36rem] md:rotate-[-1.5deg]',
  },
]

function TrackLine() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 1450" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M500 0 C230 140 760 270 455 420 C150 570 740 700 520 875 C345 1015 280 1110 515 1240 C670 1325 625 1400 430 1450"
        fill="none"
        stroke="#d2ff00"
        strokeWidth="2"
        strokeDasharray="10 14"
        opacity="0.55"
      />
      <path
        d="M500 0 C230 140 760 270 455 420 C150 570 740 700 520 875 C345 1015 280 1110 515 1240 C670 1325 625 1400 430 1450"
        fill="none"
        stroke="#535450"
        strokeWidth="22"
        opacity="0.16"
      />
    </svg>
  )
}

function PhotoCard({ photo, index }: { photo: (typeof photos)[number]; index: number }) {
  return (
    <motion.figure
      className={`group relative w-full overflow-hidden rounded-[1.6rem] border border-[#535450]/80 bg-[#3b3c38] shadow-[0_2rem_5rem_rgba(0,0,0,0.22)] ${photo.className}`}
      initial={{ opacity: 0, y: 90, rotate: 0, clipPath: 'inset(0 0 28% 0 round 1.6rem)' }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0 round 1.6rem)' }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ delay: index * 0.055, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, rotate: 0, scale: 1.015 }}
    >
      <div className="aspect-[1.28/1] overflow-hidden">
        <img
          src={photo.src}
          alt={photo.label}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:saturate-125"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#282c20]/95 via-[#282c20]/50 to-transparent p-4 pt-16">
        <figcaption className="font-heading text-[0.72rem] font-black uppercase leading-none text-[#f4f4ed]">
          {photo.label}
        </figcaption>
        <span className="rounded-full bg-[#d2ff00] px-3 py-1 font-heading text-[0.56rem] font-black uppercase leading-none text-[#282c20]">
          {photo.meta}
        </span>
      </div>
    </motion.figure>
  )
}

export default function MessageFromLando() {
  const ref = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const railY = useTransform(scrollYProgress, [0, 1], ['3%', '-4%'])
  const glowY = useTransform(scrollYProgress, [0, 1], ['-8%', '18%'])

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#282c20] text-[#f4f4ed]">
      <motion.div
        className="pointer-events-none absolute left-[-12rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#d2ff00]/10 blur-3xl"
        style={{ y: glowY }}
      />

      <motion.div
        className="pointer-events-none absolute -top-8 left-0 flex whitespace-nowrap font-heading text-[18vw] font-black uppercase leading-none tracking-[-0.11em] text-[#f4f4ed]/[0.035]"
        style={{ x: marqueeX }}
        aria-hidden="true"
      >
        <span>All ways. All ways. All ways.&nbsp;</span>
        <span>All ways. All ways. All ways.&nbsp;</span>
      </motion.div>

      <div className="relative mx-auto grid max-w-[116rem] gap-14 px-5 py-24 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-32">
        <aside className="md:sticky md:top-24 md:h-[calc(100vh-8rem)]">
          <div ref={titleRef} className="flex h-full flex-col justify-between">
            <div>
              <motion.div
                className="mb-10 flex items-center gap-5"
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg"
                  alt="Lando's signature"
                  className="h-12 w-auto md:h-16"
                />
                <span className="h-px w-16 bg-[#535450]" />
                <p className="font-heading text-[0.625rem] font-black uppercase leading-none text-[#d2ff00]">
                  Message from Lando
                </p>
              </motion.div>

              <h2 className="max-w-[50rem] font-heading text-[clamp(4.5rem,8vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
                {['Redefining', 'limits.', 'Bringing', 'the fight.'].map((line, index) => (
                  <span key={line} className="block overflow-hidden">
                    <motion.span
                      className={`block ${index === 1 || index === 3 ? 'text-[#d2ff00]' : ''}`}
                      initial={{ y: '115%' }}
                      animate={inView ? { y: '0%' } : {}}
                      transition={{ delay: index * 0.075, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h2>
            </div>

            <motion.div
              className="mt-10 grid grid-cols-3 gap-3 border-y border-[#535450] py-5"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {[
                ['04', 'number'],
                ['2019', 'mclaren f1'],
                ['all', 'ways'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-heading text-3xl font-black uppercase leading-none text-[#f4f4ed]">{value}</p>
                  <p className="mt-1 font-heading text-[0.58rem] font-black uppercase leading-none text-[#b4b8a5]">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </aside>

        <motion.div className="relative min-h-[92rem] md:min-h-[118rem]" style={{ y: railY }}>
          <TrackLine />

          <motion.blockquote
            className="relative z-10 ml-auto mb-10 flex min-h-[18rem] w-full max-w-[38rem] items-center rounded-[2.2rem] border border-[#d2ff00]/60 bg-[#1f2618]/80 p-8 shadow-[0_0_5rem_rgba(210,255,0,0.08)] backdrop-blur-md md:mr-10"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-heading text-[clamp(2.2rem,4vw,4.8rem)] font-black uppercase leading-[0.86] tracking-[-0.07em] text-[#d2ff00]">
              It does not matter where you start, it is how you progress from there.
            </p>
          </motion.blockquote>

          <div className="relative z-10 flex flex-col gap-14 md:gap-20">
            {photos.map((photo, index) => (
              <PhotoCard key={`${photo.label}-${photo.src}`} photo={photo} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#282c20]" />
    </section>
  )
}
