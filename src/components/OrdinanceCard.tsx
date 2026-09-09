import { ordinancePdf } from "@/lib/facts";

export function OrdinanceCard({
  section,
  title,
  excerpt,
  translation,
  highlights = [],
  note,
}: {
  section: string;
  title: string;
  excerpt: string;
  translation: string;
  highlights?: readonly string[];
  note?: string;
}) {
  return (
    <article className="border border-rule bg-paper">
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule px-5 py-3">
        <h3 className="font-serif text-xl">{title}</h3>
        <a
          href={ordinancePdf}
          className="font-mono text-xs text-eucalyptus underline"
        >
          {section}
        </a>
      </header>
      <blockquote className="bg-[#fbf6d9] px-5 py-4 font-mono text-sm leading-relaxed">
        {highlightExcerpt(excerpt, highlights)}
      </blockquote>
      <p className="px-5 py-4 text-sm text-bay">{translation}</p>
      {note ? (
        <p className="border-t border-rule px-5 py-3 font-mono text-[11px] text-bay">
          {note}
        </p>
      ) : null}
    </article>
  );
}

function highlightExcerpt(excerpt: string, highlights: readonly string[]) {
  if (!highlights.length) return excerpt;
  const escaped = highlights
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = excerpt.split(re);
  return parts.map((part, i) => {
    const match = highlights.some(
      (h) => h.toLowerCase() === part.toLowerCase(),
    );
    if (!match) return <span key={i}>{part}</span>;
    return (
      <mark key={i} className="bg-document px-0.5 text-ink">
        {part}
      </mark>
    );
  });
}
