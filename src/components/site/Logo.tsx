export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex size-9 items-center justify-center border border-gold/50 font-display text-sm tracking-[0.12em] text-gold">
        JDO
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-[0.06em] text-warm-white">
            JDO Flooring
          </span>
          <span className="mt-1 text-[0.55rem] uppercase tracking-[0.32em] text-muted-foreground">
            Installation Experts
          </span>
        </span>
      )}
    </span>
  );
}
