import { ArrowUp } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink pb-10 pt-16 md:pt-24">
      <div className="hairline" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 pt-14 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">Explore</span>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="w-fit text-sm tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-warm-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">Get in touch</span>
            <a
              href={SITE.phoneHref}
              className="w-fit text-sm tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-warm-white"
            >
              {SITE.phone}
            </a>
            <a
              href={SITE.emailHref}
              className="w-fit break-all text-sm tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-warm-white"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.messenger}
              target="_blank"
              rel="noreferrer noopener"
              className="w-fit text-sm tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-warm-white"
            >
              Messenger
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:text-gold"
          >
            Back to top
            <span className="flex size-9 items-center justify-center border border-gold/40 text-gold transition-transform duration-500 group-hover:-translate-y-1">
              <ArrowUp className="size-4" strokeWidth={1.2} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
