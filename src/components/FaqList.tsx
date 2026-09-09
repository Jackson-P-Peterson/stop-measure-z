"use client";

import { track } from "@/lib/analytics";

export function FaqList({
  items,
}: {
  items: readonly { id: string; q: string; a: string; short: string }[];
}) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.id}
          className="border border-rule bg-paper p-4"
          onToggle={(e) => {
            if ((e.target as HTMLDetailsElement).open) {
              track("faq_expand", { id: item.id });
            }
          }}
        >
          <summary className="cursor-pointer font-serif text-xl">
            {item.q}
          </summary>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-eucalyptus">
            Short version
          </p>
          <p className="mt-1 text-sm font-medium">{item.short}</p>
          <p className="mt-3 text-bay">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
