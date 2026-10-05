import { ArrowRight, BadgeCheck, Clapperboard, Play, Quote, Sparkles, WandSparkles, Instagram, Linkedin, Youtube, Send, MoveUpRight, MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Workflow from './components/Workflow'

function App() {
  const whatsappHref = 'https://wa.me/918588853155?text=Hi%20Anubhav,%20I%20want%20to%20discuss%20a%20video%20project%20with%20Anex%20Media.'

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-midnight text-white">
      <Navbar />
      <main>
        <section className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-24 pt-36 sm:px-8 lg:min-h-[850px]">
          <div className="pointer-events-none absolute -right-48 top-24 h-[560px] w-[560px] rounded-full bg-violet/15 blur-[130px]" />
          <div className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan/10 blur-[130px]" />
          <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(6,182,212,0.7)]" />
                <Sparkles size={13} className="text-cyan" /> AI-powered video production
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-[72px]">
                The Future of Video Production, <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-cyan bg-clip-text text-transparent">Supercharged by AI.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Next-gen video creation and editing, powered by intelligent tools and automated workflows. Move from first idea to final frame faster, without losing the human touch.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500">
                  Start a Project <ArrowRight size={16} />
                </a>
                <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/5">
                  <Play size={15} fill="currentColor" /> Watch Showreel
                </a>
              </div>
              <div className="mt-12 flex items-center gap-4 text-xs text-slate-500">
                <div className="flex -space-x-2">
                  {['bg-violet-400', 'bg-cyan-400', 'bg-fuchsia-400', 'bg-sky-300'].map((color, index) => (
                    <span key={color} className={`h-7 w-7 rounded-full border-2 border-midnight ${color}`} aria-hidden="true" style={{ opacity: 1 - index * 0.08 }} />
                  ))}
                </div>
                <span><strong className="font-semibold text-slate-300">Made for</strong> ambitious teams</span>
                <span className="h-1 w-1 rounded-full bg-slate-700" />
                <span>Made for what&apos;s next</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-violet/20 via-transparent to-cyan/15 blur-2xl" />
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[28px] border border-white/10 bg-[#111116] p-3 shadow-2xl shadow-black/50">
                <div className="relative h-full overflow-hidden rounded-[19px] bg-[radial-gradient(ellipse_at_48%_42%,rgba(124,58,237,0.48),transparent_42%),radial-gradient(ellipse_at_75%_70%,rgba(6,182,212,0.3),transparent_35%),linear-gradient(145deg,#191622_0%,#0d0d12_55%,#101a21_100%)]">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'linear-gradient(to bottom, black, transparent 80%)' }} />
                  <div className="absolute left-[18%] top-[19%] h-52 w-52 rounded-full border border-violet-200/20 bg-violet-400/10 blur-[1px]" />
                  <div className="absolute left-[28%] top-[26%] h-36 w-36 rounded-full border border-cyan-200/20 bg-cyan-300/10 shadow-[0_0_80px_rgba(124,58,237,0.35)] backdrop-blur-sm" />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      <span>Now rendering</span><span className="text-cyan-300">00:24 / 00:45</span>
                    </div>
                    <div className="mt-3 flex h-8 items-center gap-1">
                      {Array.from({ length: 48 }, (_, index) => (
                        <span key={index} className={`flex-1 rounded-full ${index < 24 ? 'bg-gradient-to-t from-violet to-cyan' : 'bg-white/15'}`} style={{ height: `${20 + ((index * 17) % 75)}%`, opacity: index < 24 ? 0.95 : 0.55 }} />
                      ))}
                    </div>
                    <div className="mt-2 h-px bg-white/10"><div className="h-px w-1/2 bg-cyan shadow-[0_0_8px_rgba(6,182,212,0.9)]" /></div>
                  </div>
                  <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/80 backdrop-blur-md">AI × HUMAN</div>
                </div>
              </div>
              <div className="absolute -left-7 top-[22%] hidden rounded-2xl border border-white/10 bg-[#15141c]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Creative velocity</div>
                <div className="mt-1 text-lg font-semibold tracking-tight">3× <span className="text-xs font-normal text-slate-400">faster</span></div>
              </div>
              <div className="absolute -right-4 bottom-[23%] hidden rounded-2xl border border-white/10 bg-[#15141c]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200"><span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(6,182,212,0.7)]" /> On-brand. On time.</div>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Portfolio />
        <Workflow />
        <section id="founders-story" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 pb-28 sm:px-8">
          <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet/10 blur-[110px]" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]" />
            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.07] px-3.5 py-2 text-xs font-medium text-cyan-200">
                  <Sparkles size={14} /> The experience behind every frame
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Founder&apos;s story</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Meet <span className="bg-gradient-to-r from-violet-300 to-cyan bg-clip-text text-transparent">Anubhav Rastogi.</span></h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                  Anubhav brings 6+ years of industry experience managing high-impact video pipelines and content scaling for Pocket FM, Story TV, and Kuku FM. He pairs a sharp eye for storytelling with AI-powered workflows built to help great ideas travel further.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-slate-200"><BadgeCheck size={16} className="text-cyan" /> 6+ years in video</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-slate-200"><WandSparkles size={16} className="text-violet-300" /> AI-driven workflows</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-300"><Clapperboard size={19} /></div>
                    <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Projects managed &amp; scaled for</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Pocket FM</h3>
                    <p className="mt-1 text-sm text-slate-400">High-impact stories built for every listen.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan"><Clapperboard size={19} /></div>
                    <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Projects managed &amp; scaled for</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Story TV</h3>
                    <p className="mt-1 text-sm text-slate-400">Video experiences built for big screens.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-300"><Clapperboard size={19} /></div>
                    <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Projects managed &amp; scaled for</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Kuku FM</h3>
                    <p className="mt-1 text-sm text-slate-400">Stories made to keep audiences listening.</p>
                  </div>
                </div>
                <blockquote className="relative rounded-2xl border border-violet/20 bg-gradient-to-br from-violet/[0.12] to-cyan/[0.06] p-5 sm:p-6">
                  <Quote size={23} className="text-violet-300" />
                  <p className="mt-3 text-lg font-medium leading-7 tracking-[-0.02em] text-slate-100 sm:text-xl">“Great video should feel personal at any scale. AI helps us move faster; quality is what makes every frame matter.”</p>
                  <footer className="mt-4 text-sm text-slate-400"><span className="font-semibold text-white">Anubhav Rastogi</span> <span className="mx-1.5 text-slate-600">/</span> Founder, Anex Media</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="relative scroll-mt-24 px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
          <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-96 max-w-5xl rounded-full bg-violet/10 blur-[130px]" />
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-[#101017] shadow-2xl shadow-black/40">
            <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-violet/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-cyan/10 blur-[110px]" />
            <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-3.5 py-2 text-xs font-medium text-violet-200"><Sparkles size={14} /> Your next big idea starts here</div>
                  <h2 className="max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[56px]">Let’s build something <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan bg-clip-text text-transparent">epic.</span></h2>
                  <p className="mt-5 max-w-md text-base leading-7 text-slate-400">Tell us what you’re imagining. We’ll shape a custom plan around your goals, timeline, and creative ambition.</p>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/50 hover:bg-emerald-400/[0.14] hover:text-white">
                    <MessageCircle size={17} /> Chat with Anubhav on WhatsApp <MoveUpRight size={14} />
                  </a>
                </div>
                <div className="mt-10 rounded-2xl border border-cyan/15 bg-cyan/[0.045] p-5">
                  <div className="flex items-start gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan shadow-[0_0_12px_3px_rgba(6,182,212,0.55)]" /><p className="text-sm leading-6 text-slate-300"><span className="font-semibold text-white">Every project is different.</span> Your quote is tailored to the scope, deliverables, and custom requirements of your brief.</p></div>
                </div>
              </div>

              <form className="relative space-y-5 p-7 sm:p-10 lg:p-14" action="https://formspree.io/f/xppqzgjj" method="POST">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-300">Name
                    <input required name="name" autoComplete="name" placeholder="Your name" className="mt-2.5 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10" />
                  </label>
                  <label className="block text-sm font-medium text-slate-300">Email
                    <input required name="email" type="email" autoComplete="email" placeholder="you@company.com" className="mt-2.5 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10" />
                  </label>
                </div>
                <label className="block text-sm font-medium text-slate-300">Project type
                  <select required name="projectType" defaultValue="" className="mt-2.5 w-full appearance-none rounded-xl border border-white/10 bg-[#111118] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10">
                    <option value="" disabled>Select a project type</option>
                    <option>Short-Form Reels</option><option>Commercial/Ad</option><option>AI Storytelling</option><option>Full Scale</option>
                  </select>
                </label>
                <label className="block text-sm font-medium text-slate-300">Your brief
                  <textarea required name="message" rows={4} placeholder="What are you looking to create? Share goals, timeline, and any details that will help us bring it to life…" className="mt-2.5 w-full resize-y rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10" />
                </label>
                <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(124,58,237,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(124,58,237,0.5)] focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 focus:ring-offset-[#101017]">Request Custom Quote <Send size={15} className="transition group-hover:translate-x-0.5" /></button>
                  <p className="text-xs leading-5 text-slate-500">No fixed packages. Just a plan built around you.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/[0.07] bg-[#08080b]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">
          <div>
            <a href="#top" className="inline-flex items-center gap-3" aria-label="Anex Media, back to top">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet/30 bg-gradient-to-br from-violet/25 to-cyan/10 text-violet-200 shadow-[0_0_20px_rgba(124,58,237,0.12)]"><Clapperboard size={19} /></span>
              <span className="text-lg font-semibold tracking-[-0.04em]">Anex <span className="text-slate-400">Media</span></span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">AI-powered video creation, led by Anubhav Rastogi. Big ideas, thoughtfully brought to life.</p>
            <p className="mt-6 text-xs text-slate-600">© {new Date().getFullYear()} Anex Media. All rights reserved.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><a className="transition hover:text-cyan" href="#services">Services</a></li>
              <li><a className="transition hover:text-cyan" href="#portfolio">Portfolio</a></li>
              <li><a className="transition hover:text-cyan" href="#founders-story">Founder&apos;s Story</a></li>
              <li><a className="transition hover:text-cyan" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Follow along</h2>
            <div className="mt-5 flex gap-3">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-violet/40 hover:text-violet-200"><Linkedin size={17} /></a>
              <a aria-label="Twitter / X" href="https://x.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-violet/40 hover:text-violet-200"><span className="text-sm font-semibold">𝕏</span></a>
              <a aria-label="Instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-violet/40 hover:text-violet-200"><Instagram size={17} /></a>
              <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-violet/40 hover:text-violet-200"><Youtube size={18} /></a>
            </div>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200">
              <MessageCircle size={16} /> Chat with Anubhav on WhatsApp <MoveUpRight size={13} />
            </a>
            <p className="mt-6 text-xs text-slate-600">Designed &amp; Developed by Vikas Chauhan B.tech IT</p>
          </div>
        </div>
      </footer>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Anubhav on WhatsApp"
        className="whatsapp-float fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200/40 bg-[#25D366] text-white shadow-[0_0_24px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-4 focus-visible:ring-offset-midnight sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <MessageCircle size={29} strokeWidth={2.3} />
      </a>
    </div>
  )
}

export default App
