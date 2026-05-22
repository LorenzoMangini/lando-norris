import { motion } from 'framer-motion'
import { Flag } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col">
      {/* Background photo with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68eb91477bcf3ee7d055ab45_lando-OpenGraph.webp"
          alt="Lando Norris"
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Top label */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-4"
        >
          2025 McLaren Formula 1 Driver
        </motion.p>

        {/* Large LANDO NORRIS text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <img
            src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg"
            alt="Lando Norris"
            className="w-full max-w-3xl brightness-0 invert opacity-90"
          />
        </motion.div>

        {/* McLaren since tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-muted-foreground font-heading text-xs tracking-[0.25em] uppercase"
        >
          McLaren F1 Since 2019
        </motion.p>
      </div>

      {/* Next Race Card — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        id="next-race"
        className="absolute bottom-8 left-6 md:left-10 z-10"
      >
        <a href="#next-race" className="block group">
          <div className="border border-muted-foreground/30 p-4 w-28 hover:border-primary/60 transition-colors duration-300">
            <p className="text-muted-foreground font-heading text-[9px] tracking-[0.25em] uppercase mb-3">
              Next Race
            </p>
            {/* Circuit icon placeholder */}
            <div className="mb-3 flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg"
                alt="Flags"
                className="w-10 h-6 opacity-50 brightness-0 invert"
              />
            </div>
            <div className="border-t border-muted-foreground/30 pt-3">
              <p className="text-foreground font-heading font-700 text-xs tracking-widest uppercase leading-tight">
                Montréal
                <br />
                <span className="text-primary">GP</span>
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <Flag size={8} className="text-muted-foreground" />
              <p className="text-muted-foreground font-heading text-[8px] tracking-widest uppercase">
                McLaren F1 Since 2019
              </p>
            </div>
          </div>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/40" />
        <p className="text-muted-foreground font-heading text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center mt-2">
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
