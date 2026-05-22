import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const socialPhotos = [
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp', alt: 'Lando on track' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp', alt: 'Lando social 2' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp', alt: 'Lando trophy' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp', alt: 'Lando in tux' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp', alt: 'Lando with dog' },
  { src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babb87c5f19ec131093_ln-home-horiz-9.webp', alt: 'Lando lifting trophy' },
]

export default function SocialStrip() {
  return (
    <section className="bg-muted py-20" id="off-track">
      <div className="px-6 md:px-12 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-heading text-xs tracking-[0.3em] uppercase mb-2"
        >
          What's up
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-800 text-5xl md:text-7xl tracking-tight text-foreground leading-none uppercase flex items-center gap-4"
        >
          On Socials
          <a
            href="https://www.instagram.com/landonorris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Instagram size={32} strokeWidth={1.5} />
          </a>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 px-1">
        {socialPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="relative group overflow-hidden aspect-square cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-400 flex items-center justify-center">
              <Instagram
                size={24}
                className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
