import { ArrowUpRight, Clapperboard, CloudUpload, Sparkles, Timer } from 'lucide-react'

const steps = [
  { number: '01', title: 'Share your vision / raw footage', description: 'Send us your footage, a rough brief, or just the spark of an idea. We’ll get to know your goals, audience, and what success looks like.', icon: CloudUpload, label: 'YOUR BRIEF, YOUR WAY', color: 'violet' },
  { number: '02', title: 'AI-powered assembly & polish', description: 'AI accelerates the first cut, while founder Anubhav Rastogi brings the human eye, story sense, and finishing touches that make it yours.', icon: Sparkles, label: 'SMART TOOLS, HUMAN CRAFT', color: 'cyan' },
  { number: '03', title: 'Lightning-fast delivery', description: 'Review your video, share feedback, and refine together. Then we export polished, platform-ready files built to perform.', icon: Timer, label: 'REVIEW → REFINE → EXPORT', color: 'violet' },
]

export default function Workflow() {
  return <section id="how-it-works" className="relative isolate scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-28">
    <div className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet/[0.09] blur-[130px]" />
    <div className="mx-auto max-w-7xl">
      <div className="max-w-2xl border-t border-white/[0.08] pt-8">
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300"><span className="h-px w-6 bg-cyan/70" /> The process</div>
        <h2 className="text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">From first thought to <span className="bg-gradient-to-r from-violet-300 to-cyan bg-clip-text text-transparent">final frame.</span></h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">A clear, collaborative process that turns your vision into a video made to move.</p>
      </div>
      <div className="relative mt-12 grid gap-4 lg:grid-cols-3">
        <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-violet-400/30 via-cyan-300/50 to-violet-400/30 lg:block" />
        {steps.map(({ number, title, description, icon: Icon, label, color }) => <article key={number} className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.055] sm:p-8">
          <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-[65px] ${color === 'cyan' ? 'bg-cyan/15' : 'bg-violet/20'}`} />
          <div className="relative flex items-center justify-between"><span className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${color === 'cyan' ? 'border-cyan/25 bg-cyan/[0.08] text-cyan-200' : 'border-violet-300/25 bg-violet/10 text-violet-200'}`}><Icon size={23} strokeWidth={1.7} /></span><span className="font-mono text-sm tracking-[0.15em] text-slate-600">/{number}</span></div>
          <p className="mt-8 text-[9px] font-semibold tracking-[0.17em] text-slate-500">{label}</p><h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug tracking-[-0.035em] text-white sm:text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
        </article>)}
      </div>
      <a href="#contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500">Let’s make something <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
      <Clapperboard aria-hidden="true" className="pointer-events-none absolute bottom-3 right-[7%] hidden h-20 w-20 rotate-[-14deg] text-white/[0.025] lg:block" strokeWidth={0.8} />
    </div>
  </section>
}
