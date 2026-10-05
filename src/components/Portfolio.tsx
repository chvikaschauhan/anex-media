import { useEffect, useState } from 'react'
import { ArrowUpRight, Play, X } from 'lucide-react'

type Category = 'Storytelling / Audio-Visual' | 'Short-Form / Reels' | 'Commercial Promos'

type PortfolioItem = {
  title: string
  category: Category
  format: string
  thumbnail: string
  embedUrl: string
  accent: 'violet' | 'cyan' | 'rose'
}

// Replace each placeholder embed URL and thumbnail with the final showreel assets.
const portfolioItems: PortfolioItem[] = [
  { title: 'Echoes of Tomorrow', category: 'Storytelling / Audio-Visual', format: 'Brand film · 01:42', thumbnail: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85', embedUrl: 'https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID', accent: 'violet' },
  { title: 'Make Every Second Count', category: 'Short-Form / Reels', format: 'Social campaign · 00:28', thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=85', embedUrl: 'https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID', accent: 'cyan' },
  { title: 'A Better Kind of Energy', category: 'Commercial Promos', format: 'Product promo · 00:54', thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85', embedUrl: 'https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID', accent: 'rose' },
  { title: 'The Sound of a Story', category: 'Storytelling / Audio-Visual', format: 'Audio visualizer · 01:16', thumbnail: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85', embedUrl: 'https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID', accent: 'cyan' },
  { title: 'Built for the Bold', category: 'Commercial Promos', format: 'Campaign film · 00:38', thumbnail: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85', embedUrl: 'https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID', accent: 'violet' },
  { title: 'Your Day, in Motion', category: 'Short-Form / Reels', format: 'Vertical reel · 00:19', thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85', embedUrl: 'https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID', accent: 'rose' },
]

const filters = ['All', ...new Set(portfolioItems.map((item) => item.category))]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState<PortfolioItem | null>(null)
  const visibleItems = activeFilter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    if (!selected) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="portfolio" className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute -right-48 top-24 h-96 w-96 rounded-full bg-cyan/[0.08] blur-[130px]" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-t border-white/[0.08] pt-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300"><span className="h-px w-6 bg-cyan/70" /> Selected work</div>
            <h2 className="text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">Stories that <span className="bg-gradient-to-r from-violet-300 to-cyan bg-clip-text text-transparent">move people.</span></h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">A few frames from the ideas we’ve brought to life. Made to be watched, remembered, and shared.</p>
          </div>
          <a href="#contact" className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/40 hover:bg-violet/10 hover:text-white">Start your project <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
        <div className="mt-9 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter portfolio projects">
          {filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} onClick={() => setActiveFilter(filter)} className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-medium transition sm:text-sm ${activeFilter === filter ? 'border-violet-300/40 bg-violet/15 text-white shadow-[0_0_24px_rgba(124,58,237,0.12)]' : 'border-white/[0.08] bg-white/[0.025] text-slate-400 hover:border-white/20 hover:text-white'}`}>{filter}</button>)}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => <button key={item.title} type="button" onClick={() => setSelected(item)} aria-label={`Play ${item.title}`} className="group text-left">
            <div className="relative aspect-[1.55] overflow-hidden rounded-[22px] border border-white/[0.09] bg-slate-900">
              <img src={item.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/15 transition group-hover:from-black/65" />
              <span className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] backdrop-blur-md ${item.accent === 'cyan' ? 'border-cyan-200/20 bg-cyan-950/40 text-cyan-100' : item.accent === 'rose' ? 'border-rose-200/20 bg-rose-950/40 text-rose-100' : 'border-violet-200/20 bg-violet-950/40 text-violet-100'}`}>{item.category}</span>
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white opacity-90 shadow-[0_0_35px_rgba(124,58,237,.28)] backdrop-blur-md transition group-hover:scale-110 group-hover:bg-violet/70"><Play size={18} fill="currentColor" className="ml-0.5" /></span>
              <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3"><div><span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">{item.format}</span><h3 className="mt-1 text-lg font-semibold tracking-[-0.025em] text-white sm:text-xl">{item.title}</h3></div><span className="pb-1 text-white/60 transition group-hover:translate-x-1 group-hover:text-white"><ArrowUpRight size={18} /></span></div>
            </div>
          </button>)}
        </div>
      </div>
      {selected && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null) }}>
        <div role="dialog" aria-modal="true" aria-label={selected.title} className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#101016] shadow-2xl shadow-violet-950/30">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6"><div><p className="text-[10px] font-medium uppercase tracking-[0.17em] text-cyan-200">{selected.category}</p><h3 className="mt-1 font-semibold text-white">{selected.title}</h3></div><button type="button" onClick={() => setSelected(null)} aria-label="Close video" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"><X size={19} /></button></div>
          <div className="aspect-video bg-black"><iframe src={`${selected.embedUrl}?autoplay=1&title=0&byline=0&portrait=0`} title={selected.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full" /></div>
        </div>
      </div>}
    </section>
  )
}
