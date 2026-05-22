import { motion } from 'framer-motion'
import { Instagram, Youtube, Twitter } from 'lucide-react'

const navLinks = [
  { label: 'On Track', href: '#on-track' },
  { label: 'Off Track', href: '#off-track' },
  { label: 'Helmets', href: '#helmets' },
  { label: 'Calendar', href: '#next-race' },
  { label: 'Store', href: 'https://store.landonorris.com' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms & Conditions', href: '/legal/terms-conditions' },
]

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/landonorris', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/LandoNorris', label: 'X / Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/@LandoNorris', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Top: big LN logo area */}
      <div className="px-6 md:px-12 pt-16 pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
            alt="Lando Norris"
            className="h-10 w-auto brightness-0 invert opacity-80 mb-6"
          />
          <p className="text-muted-foreground font-body text-xs leading-relaxed max-w-xs">
            Official website of Lando Norris — 2025 McLaren Formula 1 Driver.<br />
            World Drivers' Champion 2024.
          </p>
        </motion.div>

        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground font-heading text-xs tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground font-heading text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Lando Norris. All rights reserved.
        </p>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground font-heading text-xs tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
