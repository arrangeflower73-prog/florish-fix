import { Link } from "@tanstack/react-router";
import { LOGO_URL } from "@/data/portfolio";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const main = variant === "light" ? "var(--ivory)" : "var(--burgundy)";
  const accent = "var(--gold)";
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2">
      <img
        src={LOGO_URL}
        alt="Flower Arrange"
        className="h-[72px] w-[72px] sm:h-20 sm:w-20 object-contain shrink-0 transition-transform group-hover:rotate-6"
      />
      <span
        className="font-display text-base sm:text-lg md:text-xl tracking-wide truncate"
        style={{ color: main }}
      >
        Flower Arrange
      </span>
      <span className="hidden" style={{ color: accent }} />
    </Link>
  );
}
