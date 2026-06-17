import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_URL, PHONE } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-ivory">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm text-ivory/70 max-w-sm">
            Flower Arrange designs unforgettable weddings, birthdays, proposals
            and intimate celebrations across India.
          </p>
          <div className="flex flex-col gap-2 text-sm text-ivory/80">
            <a href={`tel:+91${PHONE}`} className="inline-flex items-center gap-2 hover:text-gold">
              <Phone className="size-4 text-gold" /> +91 {PHONE}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold w-fit">
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-ivory/75">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Get In Touch</h4>
          <p className="text-sm text-ivory/75 italic">Events Decor. Memories.</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-ivory/80">
            <a href={`tel:+91${PHONE}`} className="inline-flex items-center gap-2 hover:text-gold">
              <Phone className="size-4 text-gold" /> +91 {PHONE}
            </a>
            <a href="mailto:hello@flowerarrange.in" className="inline-flex items-center gap-2 hover:text-gold">
              <Mail className="size-4 text-gold" /> hello@flowerarrange.in
            </a>
            <span className="text-ivory/60">Serving Kolkata & Murshidabad</span>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} Flower Arrange. All rights reserved.</p>
          <p className="italic">
            Note: Advance will not be refunded if the booking is cancelled.
          </p>
        </div>
      </div>
    </footer>
  );
}
