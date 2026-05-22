import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Partnerships() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-background py-20 overflow-hidden">
      {/* Message from Lando */}
      <div ref={ref} className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-4"
          >
            A message from Lando
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-800 text-5xl md:text-6xl tracking-tight text-foreground leading-none uppercase mb-6"
          >
            Always<br />
            bringing<br />
            <span className="text-primary">the fight.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm mb-8"
          >
            Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <a
              href="mailto:business@landonorris.com"
              className="inline-flex items-center gap-2 text-primary font-heading font-700 text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300 group"
            >
              View Partnerships
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="mailto:business@landonorris.com"
              className="inline-flex items-center gap-2 text-muted-foreground font-heading text-xs tracking-widest uppercase hover:text-foreground transition-colors duration-200"
            >
              Business Enquiries: business@landonorris.com
            </a>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10"
          >
            <img
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg"
              alt="Lando's signature"
              className="h-16 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(80%) saturate(500%) hue-rotate(30deg)' }}
            />
          </motion.div>
        </div>

        {/* Helmet photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img
            src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp"
            alt="Lando Norris helmet 360"
            className="w-full object-cover"
          />
        </motion.div>
      </div>

      {/* &campaigns label */}
      <div className="px-6 md:px-12 border-t border-border pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-1">&campaigns</p>
            <p className="text-foreground font-heading font-700 text-2xl md:text-3xl tracking-tight">Partners & Collaborations</p>
          </div>
          <a
            href="mailto:business@landonorris.com"
            className="hidden md:flex items-center gap-2 border border-border px-5 py-3 text-foreground font-heading text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300 group"
          >
            Get in touch
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
