export function BlankPage({ title, parent }: { title: string; parent?: string }) {
  return (
    <section className="min-h-[80vh] pt-36 md:pt-44 pb-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {parent && (
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-coral font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            {parent}
          </span>
        )}
        <h1 className="mt-5 text-5xl md:text-7xl text-ink leading-[1.05] text-balance">{title}</h1>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          This page is being prepared. Beautiful content coming soon.
        </p>
      </div>
    </section>
  );
}
