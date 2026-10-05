import { useEffect, useState } from 'react'
import { ArrowUpRight, Clapperboard, Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'How it works', href: '#how-it-works' },
  { label: "Founder's Story", href: '#founders-story' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const consultationHref = '#contact'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-midnight/80 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Anex Media home">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-200 shadow-[0_0_22px_rgba(124,58,237,0.18)]">
            <Clapperboard size={18} strokeWidth={1.8} />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(6,182,212,0.85)]" />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.035em] text-white sm:text-base">
            ANEX <span className="text-white/50">MEDIA</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="whitespace-nowrap text-[13px] font-medium text-slate-400 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <a href={consultationHref} className="hidden items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-[13px] font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-violet-500 lg:inline-flex">
          Book a Consultation <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 transition hover:border-white/20 hover:bg-white/5 lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <div id="mobile-navigation" aria-hidden={!menuOpen} className={`overflow-hidden border-t border-white/[0.07] bg-midnight/95 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${menuOpen ? 'max-h-[420px] opacity-100' : 'pointer-events-none max-h-0 border-transparent opacity-0'}`}>
        <div className="grid gap-1 px-5 pb-5 pt-3 sm:px-8">
          {links.map((link) => (
            <a key={link.label} href={link.href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
              {link.label}
            </a>
          ))}
          <a href={consultationHref} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-violet px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
            Book a Consultation <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
