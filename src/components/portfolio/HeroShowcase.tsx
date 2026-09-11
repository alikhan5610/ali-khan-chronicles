import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "./data";

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setActive(((i % projects.length) + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % projects.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchX.current;
    const end = e.changedTouches[0]?.clientX ?? null;
    touchX.current = null;
    if (start == null || end == null) return;
    const dx = end - start;
    if (Math.abs(dx) < 40) return;
    setActive((a) => (dx < 0 ? (a + 1) % projects.length : (a - 1 + projects.length) % projects.length));
  };

  const current = projects[active]!;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 pb-8 md:pt-28 md:pb-10"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[24rem] w-[24rem] rounded-full bg-crimson/20 blur-[140px] drift-slow md:h-[36rem] md:w-[36rem]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[20rem] w-[20rem] rounded-full bg-violet-glow/20 blur-[150px] drift-slow md:h-[30rem] md:w-[30rem]" />

      {/* ghost word */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden text-center">
        <span className="font-display text-[26vw] font-800 leading-none text-ghost md:text-[22vw]">
          engineered
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-6">
        <p className="reveal font-display text-2xl font-800 leading-none sm:text-3xl md:text-5xl">
          Ali Khan
        </p>
        <p className="reveal mt-3 max-w-md text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
          Software Engineering · COMSATS University · Systems & AI
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-5 py-8 md:px-6 md:py-0">
        <div className="relative w-full">
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-sm border border-border glow-crimson sm:aspect-[16/9]"
          >
            {projects.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.tagline}
                width={1200}
                height={800}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] cine-grade ${
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

            {/* mobile: caption inside the frame */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:hidden">
              <p className="font-display text-3xl font-800 leading-[0.95] text-foreground drop-shadow-[0_8px_40px_rgba(0,0,0,0.9)] sm:text-4xl">
                {current.title}
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{current.tagline}</p>
            </div>
          </div>

          <div className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 px-2 md:block md:px-10">
            <p className="max-w-xl font-display text-5xl font-800 leading-[0.95] text-foreground drop-shadow-[0_8px_40px_rgba(0,0,0,0.9)] md:text-7xl">
              {current.title}
            </p>
            <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
              {current.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="relative mx-auto flex w-full max-w-6xl items-center gap-6 px-5 md:px-6">
        <a
          href="mailto:aliahmad100under@gmail.com"
          className="hidden text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground md:block"
        >
          aliahmad100under@gmail.com
        </a>

        <div className="flex flex-1 items-center gap-3 md:gap-4">
          <span className="font-display text-xs text-foreground">{current.index}</span>
          <div className="relative h-px flex-1 bg-border">
            <span
              className="absolute inset-y-0 left-0 block bg-crimson transition-all duration-700 ease-out"
              style={{ width: `${((active + 1) / projects.length) * 100}%`, height: "1px" }}
            />
            <span className="absolute -top-[3px] left-0 flex w-full justify-between">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => go(i)}
                  aria-label={`Show ${p.title}`}
                  className={`h-[7px] w-[7px] rounded-full transition-colors ${
                    i === active ? "bg-crimson" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous project"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-crimson hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next project"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-crimson hover:text-foreground"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
