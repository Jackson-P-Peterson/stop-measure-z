import { ballotBill } from "@/lib/facts";
import { NoStamp } from "./NoStamp";

export function BallotStack() {
  const z = ballotBill.find((row) => row.strike);

  return (
    <div className="bill mx-auto w-full max-w-xl">
      <div className="bill-paper relative border border-ink/20 bg-[#fbf7ee] shadow-[0_18px_40px_-28px_rgba(18,20,26,0.45)]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-[repeating-linear-gradient(180deg,#fbf7ee_0_10px,#fbf7ee_10px,#e8dcc8_10px,#e8dcc8_12px)]" />
        <header className="border-b border-dashed border-ink/30 px-4 py-4 pl-6 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bay">
            City of Berkeley · Nov 3, 2026
          </p>
          <div className="mt-1 flex items-start justify-between gap-3">
            <h2 className="font-serif text-2xl leading-tight sm:text-3xl">
              Statement of the stack
            </h2>
            <span className="shrink-0 font-mono text-[10px] text-bay">
              Sample ballot
            </span>
          </div>
          <p className="mt-2 max-w-md text-sm text-bay">
            Seven local measures. A regional transit tax. A statewide wealth tax.
            One line is the easy cut.
          </p>
        </header>

        <ul className="divide-y divide-dashed divide-ink/20">
          {ballotBill.map((row) => (
            <li
              key={`${row.letter}-${row.name}`}
              className={`relative px-4 py-3 pl-6 sm:px-6 ${
                row.strike ? "bg-terracotta/[0.07]" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`w-8 shrink-0 pt-0.5 font-mono text-sm ${
                    row.strike ? "font-semibold text-terracotta" : "text-bay"
                  }`}
                >
                  {row.letter}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p
                      className={`font-medium leading-snug ${
                        row.strike ? "text-ink" : "text-ink/90"
                      }`}
                    >
                      {row.name}
                    </p>
                    <p
                      className={`font-mono text-xs sm:text-sm ${
                        row.strike ? "text-terracotta" : "text-bay"
                      }`}
                    >
                      {row.charge}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs text-bay">{row.note}</p>
                  {row.strike ? (
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <NoStamp />
                      <span className="font-serif text-sm text-terracotta">
                        The easy choice. Strike this line.
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <footer className="border-t border-ink/20 bg-[#f3ead8] px-4 py-4 pl-6 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bay">
            Recommended cut
          </p>
          <p className="mt-1 font-serif text-xl leading-snug">
            Vote No on {z?.letter}. Then return your ballot.
          </p>
          <p className="mt-2 text-sm text-bay">
            Z taxes Berkeley to capitalize a bank that does not exist. It is the
            weakest, newest, least accountable item on the pile.
          </p>
        </footer>
      </div>
    </div>
  );
}
