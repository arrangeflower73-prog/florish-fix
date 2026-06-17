import { Link } from "@tanstack/react-router";
import { LOGO_URL } from "@/data/portfolio";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const main = variant === "light" ? "var(--ivory)" : "var(--burgundy)";
  const accent = "var(--gold)";
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3">
      <img
        src={LOGO_URL}
        alt="Flower Arrange"
        className="h-[60px] w-[60px] object-cover rounded-full shrink-0 ring-1 ring-gold/40 transition-transform group-hover:rotate-6"
      />
      <span className="flex flex-col min-w-0 leading-tight">
        <span
          className="font-display text-lg sm:text-xl md:text-2xl tracking-wide truncate"
          style={{ color: main }}
        >
          Flower Arrange
        </span>
        <span
          className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] truncate"
          style={{ color: accent }}
        >
          Event Organiser
        </span>
      </span>
    </Link>
  );
}
