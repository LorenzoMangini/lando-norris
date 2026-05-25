import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const logos = [
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d4349e00e6b7904f3746a3_ln4-ln4-collab-logo-ralph.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88cf1d78e3e7624d5e3_ln4-ln4-collab-logo-ps4.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88c532235956e5d267a_ln4-ln4-collab-logo-quadrant.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88cb3373daa7ba240d6_ln4-ln4-collab-logo-tumi.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88c1939bc87931c2599_ln4-ln4-collab-logo-hilton.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d294a99b218abd71dc0764_ln4-ln4-collab-logo-uber.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7e14222573f46ebdb_ln4-ln4-collab-lnkart.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d72c50967c2195c702_ln4-ln4-collab-bell-helmets.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d718fcdbf76afbcc45_ln4-ln4-collab-pure-electric.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7a8a302c07e91904d_ln4-ln4-collab-google.svg',
]

function LogoMarquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...logos, ...logos]

  return (
    <div className="overflow-hidden py-7">
      <motion.div
        className="flex w-max items-center gap-20"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((logo, index) => (
          <img
            key={`${logo}-${index}`}
            src={logo}
            alt=""
            loading="lazy"
            className="h-10 w-auto shrink-0 opacity-80 grayscale transition-opacity duration-300 hover:opacity-100 md:h-16"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function Partnerships() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-90px' })

  return (
    <section id="partnerships" className="overflow-hidden bg-[#f4f4ed] py-24 text-[#282c20] md:py-36">
      <div ref={ref} className="mx-auto max-w-[112rem] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-heading text-[clamp(4.5rem,12vw,13rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '112%' }}
                  animate={inView ? { y: '0%' } : {}}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                  partners
                </motion.span>
              </span>
              <span className="block overflow-hidden text-[#b4b8a5]">
                <motion.span
                  className="block"
                  initial={{ y: '112%' }}
                  animate={inView ? { y: '0%' } : {}}
                  transition={{ delay: 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                  &campaigns
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.div
            className="flex flex-col justify-end md:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-[34rem] text-xl leading-[1.15] text-[#535450] md:text-3xl">
              Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.
            </p>
            <a
              href="https://landonorris.com/partnerships"
              className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-[#d2ff00] px-6 py-4 font-heading text-sm font-bold uppercase leading-none text-[#282c20] transition-transform duration-300 hover:-translate-y-1"
            >
              view partnerships
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 border-y border-[#c8cbbd]/70">
        <LogoMarquee />
        <LogoMarquee reverse />
      </div>

      <motion.div
        className="mx-auto mt-20 flex max-w-[112rem] justify-center px-5 md:px-10"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43b0fcd3d4512a46df889_ln-collabs-rive-placeholder.svg"
          alt=""
          loading="lazy"
          className="w-full max-w-[38rem] opacity-70"
        />
      </motion.div>
    </section>
  )
}
