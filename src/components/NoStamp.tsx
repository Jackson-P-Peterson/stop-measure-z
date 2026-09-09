import Link from "next/link";

export function NoStamp({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex rotate-[-3deg] items-center border-2 border-terracotta px-2 py-0.5 font-serif text-[0.7rem] font-semibold tracking-[0.18em] text-terracotta ${className}`}
      aria-hidden="true"
    >
      NO ON Z
    </span>
  );
}

export function NoStampLink() {
  return (
    <Link href="/" className="inline-flex min-w-0 items-center gap-2 no-underline sm:gap-3">
      <NoStamp />
        <span className="max-w-[9.5rem] truncate font-serif text-sm text-ink sm:max-w-none sm:text-base">
          StopMeasureZ<span className="text-eucalyptus">.com</span>
        </span>
    </Link>
  );
}
