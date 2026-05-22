import { useState, useEffect } from 'react'
import { ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'On Track', href: '#on-track' },
  { label: 'Off Track', href: '#off-track' },
  { label: 'Helmets', href: '#helmets' },
  { label: 'Champions', href: '#champion' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On light hero: dark text. After scroll onto dark sections: light text.
  const isDark = scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDark
            ? 'bg-background/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-16">

          {/* Logo — "LANDO / NORRIS" bold text */}
          <a href="/" className="flex-shrink-0 leading-none">
            <div
              className="font-heading font-900 leading-none tracking-tight transition-colors duration-300"
              style={{
                fontSize: '1.1rem',
                color: isDark ? 'hsl(var(--foreground))' : '#111100',
                lineHeight: 1.1,
              }}
            >
              <div>LANDO</div>
              <div>NORRIS</div>
            </div>
          </a>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-heading font-600 tracking-widest uppercase transition-colors duration-200 hover:opacity-100"
                style={{ color: isDark ? 'hsl(var(--muted-foreground))' : '#666650', opacity: 0.85 }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — STORE + square menu button */}
          <div className="flex items-center gap-2">
            <a
              href="https://store.landonorris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-heading font-800 tracking-widest uppercase transition-colors duration-200 hover:opacity-90"
              style={{ background: 'hsl(73 100% 50%)', color: 'hsl(78 18% 10%)' }}
            >
              <ShoppingBag size={14} strokeWidth={2.5} />
              Store
            </a>

            {/* Square bordered hamburger / close */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex items-center justify-center w-10 h-10 transition-colors duration-200"
              style={{
                border: `1.5px solid ${isDark ? 'hsl(var(--border))' : '#aaa890'}`,
                color: isDark ? 'hsl(var(--foreground))' : '#111100',
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
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-10 gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-foreground font-heading font-900 text-6xl md:text-8xl uppercase tracking-tight border-b border-border pb-4 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
