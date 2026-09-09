"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { withUtm } from "@/lib/utm";
import { useUtm } from "./UtmProvider";

export function ShareSheet({ path = "/" }: { path?: string }) {
  const utm = useUtm();
  const [copied, setCopied] = useState(false);
  const url = withUtm(`${site.url}${path}`, utm);
  const text = encodeURIComponent(
    "Berkeley shouldn’t bankroll the East Bay. Vote No on Measure Z.",
  );
  const encoded = encodeURIComponent(url);

  const links = [
    { label: "X", href: `https://twitter.com/intent/tweet?text=${text}&url=${encoded}` },
    { label: "Threads", href: `https://www.threads.net/intent/post?text=${text}%20${encoded}` },
    { label: "Bluesky", href: `https://bsky.app/intent/compose?text=${text}%20${encoded}` },
    { label: "Email", href: `mailto:?subject=${encodeURIComponent("No on Measure Z")}&body=${text}%20${encoded}` },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="border border-rule px-3 py-1.5 font-mono text-xs hover:border-ink"
        >
          {l.label}
        </a>
      ))}
      <button
        type="button"
        className="border border-ink px-3 py-1.5 font-mono text-xs"
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
