"use client";

import { useId, useState } from "react";
import { regionalContributions } from "@/lib/facts";

const places = [
  {
    id: "richmond",
    name: "Richmond",
    amount: "$750K?",
    x: 168,
    y: 78,
  },
  {
    id: "berkeley",
    name: "Berkeley",
    amount: "$58.3M",
    x: 228,
    y: 168,
  },
  {
    id: "emeryville",
    name: "Emeryville",
    amount: "$0",
    x: 198,
    y: 228,
  },
  {
    id: "oakland",
    name: "Oakland",
    amount: "$0",
    x: 250,
    y: 292,
  },
  {
    id: "county",
    name: "Alameda County",
    amount: "$0",
    x: 430,
    y: 210,
  },
] as const;

export function EastBayBillMap() {
  const [selected, setSelected] = useState("berkeley");
  const titleId = useId();
  const active =
    regionalContributions.find((c) => c.id === selected) ??
    regionalContributions.find((c) => c.id === "berkeley");

  return (
    <figure className="overflow-hidden border border-rule bg-[#eef3f0]">
      <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
        <div className="relative min-h-[280px] bg-[#d7e4dc]">
          <svg
            viewBox="0 0 640 420"
            role="img"
            aria-labelledby={titleId}
            className="h-auto w-full"
          >
            <title id={titleId}>
              East Bay locator: Berkeley carries $58.3 million while Oakland and
              Alameda County put up $0 and Richmond pledges a contingent $750,000.
            </title>
            <rect width="640" height="420" fill="#d7e4dc" />
            <path
              d="M0 0 H210 C190 70 175 120 168 170 C160 230 150 280 142 330 C148 360 170 390 210 420 H0 Z"
              fill="#8aaeb8"
            />
            <path
              d="M0 0 H210 C190 70 175 120 168 170 C160 230 150 280 142 330 C148 360 170 390 210 420 H0 Z"
              fill="#6f9aa6"
              opacity="0.35"
            />
            <text
              x="48"
              y="210"
              fill="#143A4D"
              fontSize="12"
              fontFamily="IBM Plex Mono, ui-monospace, monospace"
              letterSpacing="0.28em"
              opacity="0.7"
            >
              SAN FRANCISCO BAY
            </text>

            <path
              d="M210 18 C250 8 310 22 360 70 C410 120 470 150 520 130 C560 118 600 140 640 170 V420 H210 C170 390 148 360 142 330 C150 280 160 230 168 170 C175 120 190 70 210 18 Z"
              fill="#c5d4c4"
            />
            <path
              d="M430 40 C480 80 520 140 545 210 C560 270 575 320 640 340 V80 C590 40 520 20 430 40 Z"
              fill="#b7c7b0"
            />
            <text
              x="500"
              y="96"
              fill="#1F4D3A"
              fontSize="11"
              fontFamily="IBM Plex Mono, ui-monospace, monospace"
            >
              Hills
            </text>

            <path
              d="M176 28 C210 18 250 48 248 88 C246 122 210 138 182 118 C160 100 154 52 176 28 Z"
              fill="#5d7a86"
              className="cursor-pointer"
              onClick={() => setSelected("richmond")}
            />
            <path
              d="M188 128 C230 108 286 118 318 156 C340 182 328 214 286 228 C240 244 198 226 186 190 C176 160 168 142 188 128 Z"
              fill="#1F4D3A"
              className="cursor-pointer"
              onClick={() => setSelected("berkeley")}
            />
            <path
              d="M186 214 C214 206 236 214 242 232 C238 248 214 254 196 248 C178 242 172 224 186 214 Z"
              fill="#5d7a86"
              className="cursor-pointer"
              onClick={() => setSelected("emeryville")}
            />
            <path
              d="M198 248 C250 230 330 236 368 286 C390 318 372 360 318 378 C250 396 196 360 186 312 C178 278 172 258 198 248 Z"
              fill="#5d7a86"
              className="cursor-pointer"
              onClick={() => setSelected("oakland")}
            />

            <path
              d="M318 176 C390 150 470 168 510 220"
              fill="none"
              stroke="#C4492C"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="map-flow"
            />
            <path
              d="M300 210 C330 250 340 280 350 310"
              fill="none"
              stroke="#C4492C"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="map-flow"
            />
            <polygon points="508,212 524,228 500,226" fill="#C4492C" />
            <polygon points="348,308 362,328 338,322" fill="#C4492C" />

            {places.map((place) => (
              <g
                key={place.id}
                className="cursor-pointer"
                onClick={() => setSelected(place.id)}
              >
                <rect
                  x={place.x}
                  y={place.y}
                  width={place.id === "county" ? 148 : 118}
                  height="44"
                  rx="2"
                  fill={place.id === "berkeley" ? "#F6F1E8" : "#F6F1E8"}
                  stroke={selected === place.id ? "#C4492C" : "#12141A"}
                  strokeWidth={selected === place.id ? 2 : 1}
                />
                <text
                  x={place.x + 10}
                  y={place.y + 18}
                  fill="#12141A"
                  fontSize="12"
                  fontFamily="Fraunces, Georgia, serif"
                >
                  {place.name}
                </text>
                <text
                  x={place.x + 10}
                  y={place.y + 34}
                  fill={place.id === "berkeley" ? "#C4492C" : "#143A4D"}
                  fontSize="13"
                  fontFamily="IBM Plex Mono, ui-monospace, monospace"
                >
                  {place.amount}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <figcaption className="flex flex-col justify-center gap-4 border-t border-rule bg-paper p-5 lg:border-l lg:border-t-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-eucalyptus">
            Who is capitalizing the bank
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {regionalContributions.map((row) => (
              <button
                key={row.id}
                type="button"
                onClick={() => setSelected(row.id)}
                className={`min-h-11 border px-3 py-2 text-left ${
                  selected === row.id
                    ? "border-terracotta bg-terracotta/10"
                    : "border-rule"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-wider text-bay">
                  {row.name}
                </span>
                <span
                  className={`font-mono text-lg ${
                    row.id === "berkeley" ? "text-terracotta" : "text-ink"
                  }`}
                >
                  {row.amountLabel}
                </span>
              </button>
            ))}
          </div>
          <div>
            <p className="font-serif text-2xl">{active?.name}</p>
            <p className="mt-1 text-sm text-bay">{active?.note}</p>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
