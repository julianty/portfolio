function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-14 flex items-center gap-3 md:mx-4 md:gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {children}
      </h2>
      <div className="h-px grow bg-linear-to-r from-border via-border/60 to-transparent" />
    </div>
  );
}

export default SectionHeader;
