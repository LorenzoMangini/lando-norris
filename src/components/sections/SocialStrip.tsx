import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Instagram } from 'lucide-react'

const socialPhotos = [
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp', alt: 'Lando on track' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp', alt: 'Lando social' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp', alt: 'Lando trophy' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp', alt: 'Lando in tux' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp', alt: 'Lando with dog' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babb87c5f19ec131093_ln-home-horiz-9.webp', alt: 'Lando lifting trophy' },
]

function SocialPhoto({ photo, index }: { photo: typeof socialPhotos[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  // Mouse tracking within the photo for inner parallax
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const imgX = useSpring(useTransform(mouseX, [0, 1], ['-5%', '5%']), { stiffness: 200, damping: 30 })
  const imgY = useSpring(useTransform(mouseY, [0, 1], ['-5%', '5%']), { stiffness: 200, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative group overflow-hidden aspect-square cursor-pointer"
    >
      {/* Image with inner parallax */}
      <motion.img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        style={{ x: imgX, y: imgY }}
        className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
      />

      {/* Lime overlay + icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={false}
          className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-colors duration-400"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="bg-background/10 backdrop-blur-sm border border-foreground/20 p-3">
            <Instagram size={20} className="text-foreground" strokeWidth={1.5} />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  )
}

export default function SocialStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-muted py-20 overflow-hidden" id="off-track">
      <div ref={ref} className="px-6 md:px-12 mb-10">
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: '100%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase"
          >
            What's up
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-800 text-5xl md:text-7xl tracking-tight text-foreground leading-none uppercase flex items-center gap-5"
          >
            On Socials
            <motion.a
              href="https://www.instagram.com/landonorris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 15, scale: 1.15 }}
              transition={{ duration: 0.25 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Instagram size={34} strokeWidth={1.5} />
            </motion.a>
          </motion.h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 px-1">
        {socialPhotos.map((photo, i) => (
          <SocialPhoto key={i} photo={photo} index={i} />
        ))}
      </div>
    </section>
  )
}
