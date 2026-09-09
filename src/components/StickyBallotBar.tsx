"use client";

import { useEffect, useState } from "react";
import { DonateLink } from "./DonateBlock";

export function StickyBallotBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > window.innerHeight * 0.4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 items-center gap-2 text-sm">
        <a
          href="#calculator"
          className="inline-flex min-h-11 items-center justify-center font-medium text-eucalyptus"
        >
          Your cost
        </a>
        <DonateLink className="inline-flex min-h-11 items-center justify-center bg-terracotta px-3 text-paper">
          Donate
        </DonateLink>
        <span className="text-center font-mono text-[11px] leading-tight text-bay">
          Vote No on Z
          <br />
          Nov 3
        </span>
      </div>
    </div>
  );
}
