import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_URL } from "@/data/services";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-px mx-auto flex items-center justify-between gap-3 py-1 max-w-7xl">
        <Logo />

        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-burgundy" : "text-foreground/75 hover:text-burgundy"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="xl:hidden inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border/60 bg-background">
          <div className="container-px mx-auto max-w-7xl py-4 grid gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-burgundy"
              >
                {l.label}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold mt-3">
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
