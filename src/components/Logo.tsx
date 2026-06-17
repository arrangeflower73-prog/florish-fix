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
        className="h-[110px] w-[110px] sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain shrink-0 transition-transform group-hover:rotate-6"
      />
      <div className="flex min-w-0 flex-col leading-tight">
        <span
          className="font-display text-sm sm:text-base md:text-lg tracking-wide truncate"
          style={{ color: main }}
        >
          Flower Arrange
        </span>
        <span
          className="italic text-[9px] sm:text-[10px] md:text-xs truncate"
          style={{ color: main, opacity: 0.85 }}
        >
          Event Organiser
        </span>
        <span
          className="text-[7px] sm:text-[8px] uppercase tracking-[0.3em] mt-0.5 truncate"
          style={{ color: accent }}
        >
          Events Decor. Memories
        </span>
      </div>
    </Link>
  );
}
