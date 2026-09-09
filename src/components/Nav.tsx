"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/copy";
import { site } from "@/lib/site";
import { DonateLink } from "./DonateBlock";
import { NoStampLink } from "./NoStamp";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <NoStampLink />
        <nav className="hidden items-center gap-4 text-sm xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-bay hover:text-eucalyptus"
            >
              {link.label}
            </Link>
          ))}
          <DonateLink className="inline-flex min-h-10 items-center rounded-sm bg-terracotta px-3 py-1.5 font-medium text-paper hover:bg-ink">
            Donate
          </DonateLink>
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
          <DonateLink className="inline-flex min-h-10 items-center bg-terracotta px-3 py-1.5 text-sm text-paper">
            Donate
          </DonateLink>
          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center border border-ink px-3 text-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-rule px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-11 py-2 text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/about" className="min-h-11 py-2" onClick={() => setOpen(false)}>
              About
            </Link>
          </nav>
          <p className="mt-4 text-xs text-bay">
            {site.campaignLine} · {site.electionDate}
          </p>
        </div>
      ) : null}
    </header>
  );
}
