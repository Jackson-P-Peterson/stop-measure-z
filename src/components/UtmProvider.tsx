"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  loadPersistedUtm,
  persistUtm,
  readUtmFromSearch,
  type Utm,
} from "@/lib/utm";

const UtmContext = createContext<Utm>({});

export function UtmProvider({ children }: { children: React.ReactNode }) {
  const [utm, setUtm] = useState<Utm>({});

  useEffect(() => {
    const fromUrl = readUtmFromSearch(window.location.search);
    const stored = loadPersistedUtm();
    const merged = { ...stored, ...fromUrl };
    persistUtm(fromUrl);
    setUtm(merged);
  }, []);

  const value = useMemo(() => utm, [utm]);
  return <UtmContext.Provider value={value}>{children}</UtmContext.Provider>;
}

export function useUtm() {
  return useContext(UtmContext);
}
