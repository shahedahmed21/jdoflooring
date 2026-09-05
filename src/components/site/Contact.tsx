import { Mail, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { MaskedHeading, Reveal, RevealGroup, RevealItem } from "./Reveal";

const CHANNELS = [
  {
    label: "Call us",
    value: SITE.phone,
    href: SITE.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "Email us",
    value: SITE.email,
    href: SITE.emailHref,
    icon: Mail,
    external: false,
  },
  {
    label: "Messenger",
    value: "JDO Flooring on Facebook",
    href: SITE.messenger,
    icon: MessageCircle,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="section-label">08 — Contact</span>
            </Reveal>
            <MaskedHeading
              lines={["Let's talk about", "your floors."]}
              className="display-hero mt-6 text-[clamp(2.25rem,6vw,5rem)] text-warm-white"
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Tell us about your space and we'll walk you through materials, timing and
                installation. Reach out by phone, email or Messenger — whichever suits you.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10">
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center bg-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity duration-500 hover:opacity-85"
                >
                  Call {SITE.phone}
                </a>
                <a
                  href={SITE.messenger}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center border border-gold/60 px-8 py-4 text-xs uppercase tracking-[0.22em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
                >
                  Message on Facebook
                </a>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="flex flex-col justify-center gap-px bg-border">
            {CHANNELS.map(({ label, value, href, icon: Icon, external }) => (
              <RevealItem key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  className="group flex items-center gap-6 bg-ink px-6 py-8 transition-colors duration-500 hover:bg-ink-soft md:px-9"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="size-5" strokeWidth={1.2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-2 block truncate font-display text-xl text-warm-white">
                      {value}
                    </span>
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
