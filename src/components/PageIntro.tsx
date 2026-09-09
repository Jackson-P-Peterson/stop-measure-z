export function PageIntro({
  eyebrow,
  title,
  dek,
}: {
  eyebrow: string;
  title: string;
  dek: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-4 pb-8 pt-8 sm:pb-10 sm:pt-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-eucalyptus sm:text-xs">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">{title}</h1>
      <p className="mt-4 text-base text-bay sm:text-lg">{dek}</p>
    </header>
  );
}
