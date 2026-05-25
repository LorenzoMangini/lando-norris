import { motion } from 'framer-motion'
import { Instagram, Music2, Twitch, Youtube } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'On Track', href: '#on-track' },
  { label: 'Off Track', href: '#off-track' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Calendar', href: 'https://landonorris.com/calendar' },
  { label: 'Store', href: 'https://store.landonorris.com' },
]

const socials = [
  { icon: Music2, href: 'https://www.tiktok.com/@landonorris', label: 'Tiktok' },
  { icon: Instagram, href: 'https://www.instagram.com/landonorris', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@LandoNorris', label: 'Youtube' },
  { icon: Twitch, href: 'https://www.twitch.tv/landonorris', label: 'Twitch' },
]

const footerLogos = [
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d33eb40292f3a5fef32ed3_ln4-footer-logo-add-c.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7361eb2ca03ba0929_ln4-footer-logo-google.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d722f5ba2f4074cbe7_ln4-footer-logo-ralph-lauren.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d70a9e147b77952c0d_ln4-footer-logo-android.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7564fc5a9fccf822f_ln4-footer-logo-pap.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d761eeca9060e00622_ln4-footer-logo-monster.svg',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d74d2804b912ed1fcc_ln4-footer-logo-hilton.svg',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#282c20] text-[#f4f4ed]">
      <div className="absolute inset-x-0 top-0 opacity-20" aria-hidden="true">
        <img
          src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg"
          alt=""
          className="w-full"
        />
      </div>

      <div className="relative mx-auto max-w-[112rem] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg"
              alt="Lando Norris"
              className="h-12 w-auto"
            />
            <h2 className="mt-10 max-w-[44rem] font-heading text-[clamp(3.5rem,8vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Always bringing the fight.
            </h2>
            <a
              href="mailto:business@landonorris.com"
              className="mt-10 inline-flex rounded-full bg-[#d2ff00] px-6 py-4 font-heading text-sm font-bold uppercase leading-none text-[#282c20] transition-transform duration-300 hover:-translate-y-1"
            >
              business enquiries
            </a>
          </motion.div>

          <div className="grid gap-10 md:col-span-6 md:grid-cols-2">
            <div>
              <p className="mb-5 font-heading text-[0.625rem] font-bold uppercase leading-none text-[#d2ff00]">
                pages
              </p>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-heading text-sm font-bold uppercase leading-none text-[#b4b8a5] transition-colors duration-200 hover:text-[#f4f4ed]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-5 font-heading text-[0.625rem] font-bold uppercase leading-none text-[#d2ff00]">
                Follow On
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-3 rounded-full border border-[#535450] px-4 py-3 font-heading text-xs font-bold uppercase text-[#b4b8a5] transition-colors duration-200 hover:border-[#d2ff00] hover:text-[#d2ff00]"
                  >
                    <Icon size={15} strokeWidth={1.8} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden border-y border-[#535450] py-6">
          <motion.div
            className="flex w-max items-center gap-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            {[...footerLogos, ...footerLogos].map((logo, index) => (
              <img key={`${logo}-${index}`} src={logo} alt="" loading="lazy" className="h-10 w-auto opacity-80" />
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex flex-col gap-4 font-heading text-[0.625rem] font-bold uppercase leading-none text-[#b4b8a5] md:flex-row md:items-center md:justify-between">
          <p>
            <span className="text-[#f4f4ed]">© 2026 Lando Norris.</span> All rights reserved
          </p>
          <div className="flex gap-6">
            <a href="/legal/privacy-policy" className="hover:text-[#f4f4ed]">
              Privacy Policy
            </a>
            <a href="/legal/terms-conditions" className="hover:text-[#f4f4ed]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
