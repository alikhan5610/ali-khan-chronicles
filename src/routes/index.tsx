import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

import { HeroShowcase } from "@/components/portfolio/HeroShowcase";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Reveal } from "@/components/portfolio/Reveal";
import { projects, skills, milestones } from "@/components/portfolio/data";
import portrait from "@/assets/ali-portrait.jpg.asset.json";
import outdoor from "@/assets/ali-outdoor.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ali Khan — Software Engineering Student & Systems Builder" },
      {
        name: "description",
        content:
          "Ali Khan builds engines, algorithms and information systems in C++, Java and Python — a software engineering student at COMSATS with a deep affinity for AI.",
      },
      { property: "og:title", content: "Ali Khan — Software Engineering Student & Systems Builder" },
      {
        property: "og:description",
        content:
          "Custom C++ game engines, graph and pathfinding optimisation, banking ledgers and academic systems. Cinematic portfolio of Ali Khan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-display text-xs text-crimson">{n}</span>
      <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  return (
    <main className="grain min-h-screen bg-background text-foreground">
      <SiteNav />
      <HeroShowcase />

      {/* ABOUT */}
      <section id="about" className="relative scroll-mt-24 overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-glow/15 blur-[150px] drift-slow" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-6">
          <SectionLabel n="01">About</SectionLabel>
          <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
            <Reveal className="grid grid-cols-5 gap-4">
              <figure className="col-span-3 overflow-hidden rounded-sm border border-border">
                <img
                  src={outdoor.url}
                  alt="Ali Khan outdoors"
                  loading="lazy"
                  className="h-full w-full object-cover cine-grade"
                />
              </figure>
              <figure className="col-span-2 self-end overflow-hidden rounded-sm border border-border">
                <img
                  src={portrait.url}
                  alt="Portrait of Ali Khan"
                  loading="lazy"
                  className="h-full w-full object-cover cine-grade"
                />
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="text-4xl font-800 leading-[1.05] md:text-5xl">Ali Khan</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-crimson">
                Software Engineering · 4th Semester · COMSATS University
              </p>
              <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
                I build the layer most people never see — engines, algorithms, ledgers, the quiet
                machinery underneath the screen. C++, Java and Python are where I think; data
                structures and graph theory are how I reason.
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                Before COMSATS I studied at Forman Christian College University in Lahore. Alongside
                the coursework, I follow foundation models closely — Claude, ChatGPT and Gemini —
                because the way software gets written is being rewritten in real time, and I intend
                to be fluent in both halves of it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-32">
        <SectionLabel n="02">Selected Work</SectionLabel>
        <h2 className="max-w-2xl text-3xl font-800 leading-[1.05] sm:text-4xl md:text-6xl">
          Systems built from
          <span className="text-crimson"> first principles</span>.
        </h2>

        <div className="mt-20 space-y-28">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <article
                className={`group grid items-center gap-10 md:grid-cols-2 ${
                  i % 2 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative overflow-hidden rounded-sm border border-border">
                  <img
                    src={p.image}
                    alt={p.tagline}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] cine-grade group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </figure>
                <div>
                  <span className="font-display text-xs text-muted-foreground">{p.index}</span>
                  <h3 className="mt-3 text-3xl font-800 md:text-4xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-crimson">{p.tagline}</p>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-crimson hover:text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>


      {/* CRAFT */}
      <section id="craft" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-32">
        <SectionLabel n="03">Craft</SectionLabel>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group h-full rounded-sm border border-border bg-card/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-crimson/50 hover:bg-card">
                <h3 className="text-xl font-800">{g.title}</h3>
                <ul className="mt-6 space-y-3">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-crimson" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="relative scroll-mt-24 overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-[150px] drift-slow" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-6">
          <SectionLabel n="04">Journey</SectionLabel>
          <div className="relative mt-16 border-l border-border pl-8 md:pl-14">
            {milestones.map((m, i) => (
              <Reveal key={m.place} delay={i * 120}>
                <div className="group relative pb-16 last:pb-0">
                  <span className="absolute -left-[41px] top-2 h-2.5 w-2.5 rounded-full bg-border transition-all duration-500 group-hover:scale-150 group-hover:bg-crimson md:-left-[65px]" />
                  <span className="text-xs uppercase tracking-[0.3em] text-crimson">{m.year}</span>
                  <h3 className="mt-3 text-2xl font-800 md:text-3xl">{m.place}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="relative scroll-mt-24 overflow-hidden border-t border-border py-20 md:py-32"
      >
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-crimson/20 blur-[160px] drift-slow" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Get in touch
            </p>
            <h2 className="mt-6 text-4xl font-800 leading-[0.95] sm:text-5xl md:text-8xl">
              Let&apos;s build
              <br />
              something
              <span className="text-crimson"> real</span>.
            </h2>

            <div className="mt-16 divide-y divide-border border-y border-border">
              {[
                {
                  label: "Email",
                  value: "aliahmad100under@gmail.com",
                  href: "mailto:aliahmad100under@gmail.com",
                  Icon: Mail,
                },
                {
                  label: "GitHub",
                  value: "github.com/alikhan5610",
                  href: "https://github.com/alikhan5610",
                  Icon: Github,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/ali-khan-129103435",
                  href: "https://www.linkedin.com/in/ali-khan-129103435/",
                  Icon: Linkedin,
                },
              ].map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-6 transition-colors hover:bg-card/40"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="h-4 w-4 text-crimson" />
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {label}
                    </span>
                  </span>
                  <span className="flex items-center gap-3 text-sm transition-transform duration-500 group-hover:-translate-x-1 md:text-lg">
                    {value}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-crimson" />
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-12 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ali Khan — Lahore, Pakistan.
            </p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
