import { ArrowUpRight, AudioLines, Clapperboard, Scissors, Sparkles, Video } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'AI Script-to-Video',
    description: 'Turn a raw idea or finished script into a complete video framework in minutes. From story beats to scene direction, AI gets your next great idea moving.',
    icon: Sparkles,
    tag: 'IDEA → FIRST FRAME',
    accent: 'violet',
  },
  {
    number: '02',
    title: 'Automated High-End Editing',
    description: 'Pair lightning-fast AI assembly with an expert human creative polish. Cut production time by up to 80% while keeping every frame intentional.',
    icon: Scissors,
    tag: 'AI SPEED × HUMAN CRAFT',
    accent: 'cyan',
  },
  {
    number: '03',
    title: 'Synthetic Avatars',
    description: 'Scale spokesperson content across markets with lifelike AI avatars and voice cloning, tailored to the language and tone of every audience.',
    icon: AudioLines,
    tag: 'ONE VOICE, EVERYWHERE',
    accent: 'violet',
  },
  {
    number: '04',
    title: 'Viral Short-Form Scaling',
    description: 'Transform one long-form video into a stream of Reels, TikToks, and Shorts, each shaped for platform-native pacing and audience retention.',
    icon: Video,
    tag: 'ONE VIDEO → EVERY FEED',
    accent: 'cyan',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative isolate scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-[min(90vw,900px)] -translate-x-1/2 rounded-full bg-violet/[0.08] blur-[130px]" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 border-t border-white/[0.08] pt-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-px w-6 bg-cyan/70" /> What we do
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Built for the <span className="bg-gradient-to-r from-violet-300 to-cyan bg-clip-text text-transparent">next frame.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              AI-powered production that moves at the speed of your ideas, with the creative instinct to make every second count.
            </p>
          </div>
          <a href="#contact" className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/40 hover:bg-violet/10 hover:text-white">
            Explore our services <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ number, title, description, icon: Icon, tag, accent }) => (
            <article key={number} className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-white/[0.09] bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.055] hover:shadow-[0_16px_60px_rgba(124,58,237,0.12)] sm:p-7">
              <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-[65px] transition-opacity duration-300 group-hover:opacity-100 ${accent === 'cyan' ? 'bg-cyan/15 opacity-50' : 'bg-violet/20 opacity-60'}`} />
              <div className="relative flex items-start justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent === 'cyan' ? 'border-cyan/20 bg-cyan/[0.08] text-cyan-200' : 'border-violet-300/20 bg-violet/10 text-violet-200'}`}>
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <span className="pt-1 text-xs font-medium tabular-nums tracking-[0.16em] text-slate-600">/{number}</span>
              </div>
              <div className="relative mt-8">
                <p className="text-[9px] font-semibold tracking-[0.17em] text-slate-500">{tag}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.035em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
              </div>
              <a href="#contact" aria-label={`Learn more about ${title}`} className="relative mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-slate-200 transition-colors group-hover:text-cyan-200">
                Learn more <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Clapperboard aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-8 h-28 w-28 rotate-[-14deg] text-white/[0.025] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:text-white/[0.04]" strokeWidth={0.8} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
