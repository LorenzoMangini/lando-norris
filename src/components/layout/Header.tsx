import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'On Track', href: '#on-track' },
  { label: 'Off Track', href: '#off-track' },
  { label: 'Helmets', href: '#helmets' },
  { label: 'Calendar', href: '#next-race' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
              alt="Lando Norris"
              className="h-7 w-auto brightness-0 invert"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/60 hover:text-foreground text-sm font-heading font-semibold tracking-widest uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Store button + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://store.landonorris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-heading font-700 tracking-widest uppercase hover:bg-primary/90 transition-colors duration-200"
            >
              <ShoppingBag size={15} strokeWidth={2.5} />
              Store
            </a>
            <button
              className="md:hidden text-foreground p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-20 px-8 gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground font-heading font-800 text-5xl uppercase tracking-tight border-b border-border pb-4"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
