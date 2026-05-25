import { useState, useEffect } from 'react'
import { ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'On Track',      href: '#on-track' },
  { label: 'Off Track',     href: '#off-track' },
  { label: 'Partnerships',  href: '#partnerships' },
  { label: 'Calendar',      href: 'https://landonorris.com/calendar' },
]

const menuImages = [
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5835c0649927438ae19_ln4-menu-img-1.webp',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5829bee1b4a7b936935_ln4-menu-img-2.webp',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5827466101f6aca77eb_ln4-menu-img-3.webp',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae582f6abf54adb515c73_ln4-menu-img-4.webp',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5824cc4245e1e6cf501_ln4-menu-img-5.webp',
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeImg = hoveredLink !== null ? menuImages[hoveredLink % menuImages.length] : menuImages[0]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-16">

          {/* Logo */}
          <a href="/" className="flex-shrink-0 leading-none">
            <div
              className="font-heading font-900 leading-none tracking-tight transition-colors duration-300"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.05,
                color: scrolled ? 'hsl(60,15%,90%)' : 'hsl(40,8%,18%)',
              }}
            >
              <div>LANDO</div>
              <div>NORRIS</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-heading font-600 tracking-widest uppercase transition-colors duration-200"
                style={{ color: scrolled ? 'hsl(78,10%,55%)' : 'hsl(40,8%,42%)' }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? 'hsl(60,15%,90%)' : 'hsl(40,8%,14%)')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? 'hsl(78,10%,55%)' : 'hsl(40,8%,42%)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: STORE + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="https://store.landonorris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-heading font-800 tracking-widest uppercase transition-opacity duration-200 hover:opacity-85"
              style={{ background: 'hsl(73 100% 50%)', color: 'hsl(40 8% 12%)', borderRadius: '8px' }}
            >
              <ShoppingBag size={14} strokeWidth={2.5} />
              Store
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex items-center justify-center w-10 h-10 transition-colors duration-200"
              style={{
                border: `1px solid ${scrolled ? 'hsl(78,12%,22%)' : 'hsl(40,8%,72%)'}`,
                color: scrolled ? 'hsl(60,15%,90%)' : 'hsl(40,8%,18%)',
              }}
            >
              <motion.span
                key={menuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="font-heading font-700 text-lg leading-none select-none"
              >
                {menuOpen ? '×' : '—'}
              </motion.span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex"
          >
            {/* Nav links — left side */}
            <div className="flex flex-col justify-center px-10 md:px-16 gap-0 flex-1">
              {/* Top label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground font-heading text-[9px] tracking-[0.4em] uppercase mb-8"
              >
                Navigation
              </motion.p>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 border-b border-border py-5 hover:pl-3 transition-all duration-300"
                >
                  <span className="text-muted-foreground/40 font-heading text-xs tracking-widest w-6 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground group-hover:text-primary font-heading font-900 text-5xl md:text-7xl uppercase tracking-tight leading-none transition-colors duration-200">
                    {link.label}
                  </span>
                </motion.a>
              ))}

              {/* Store link */}
              <motion.a
                href="https://store.landonorris.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 inline-flex items-center gap-3 self-start px-6 py-3 font-heading font-800 text-sm tracking-widest uppercase"
                style={{ background: 'hsl(73 100% 50%)', color: 'hsl(78 18% 10%)', borderRadius: '8px' }}
              >
                <ShoppingBag size={14} strokeWidth={2.5} />
                Visit Store
              </motion.a>
            </div>

            {/* Image panel — right side, desktop only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hidden md:block w-80 lg:w-96 relative overflow-hidden flex-shrink-0"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={activeImg}
                  alt=""
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/40 pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
