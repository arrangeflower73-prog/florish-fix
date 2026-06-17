import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Sparkles, Camera, UtensilsCrossed } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BookingPolicy } from "./BookingPolicy";
import { InquiryForm } from "./InquiryForm";
import { WHATSAPP_URL, type ServicePageData } from "@/data/services";
import { slugify } from "@/lib/slug";
import {
  MURSHIDABAD_VENUES,
  SPECIAL_EFFECTS,
  BABY_ENTRY,
  LIVE_CHARACTERS,
  MUSIC_OPTIONS,
} from "@/data/portfolio";

function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="relative size-full">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

function PillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h4 className="font-display text-lg text-burgundy">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="rounded-full border border-gold/40 bg-card px-3 py-1 text-xs text-foreground/85">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function BirthdayExtras() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-16">
      <div className="text-center mb-10">
        <span className="gold-divider">— Beyond Decor —</span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy">Venues, Effects & Entries</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <PillList title="Venues (Murshidabad)" items={MURSHIDABAD_VENUES} />
        <PillList title="Music Options" items={MUSIC_OPTIONS} />
        <PillList title="Special Effects & Moments" items={SPECIAL_EFFECTS} />
        <PillList title="Baby Entry" items={BABY_ENTRY} />
        <div className="md:col-span-2">
          <PillList title="Live Character Entry" items={LIVE_CHARACTERS} />
        </div>
      </div>
    </section>
  );
}

function WeddingExtras() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-16">
      <div className="text-center mb-10">
        <span className="gold-divider">— Bride & Groom Side —</span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy">Tailored For Both Sides</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <PillList title="Bride Side Wedding" items={["Gate / Lawn Gate", "Selfie Zone", "Bride Sitting Decoration", "Flower Chadar Entry"]} />
        <PillList title="Groom Side Wedding" items={["Car Decoration", "Reception Backdrop", "Gate / Lawn Gate", "Selfie Zone", "Ganesh Zone", "Krishna Zone"]} />
        <PillList title="Venues (Murshidabad)" items={MURSHIDABAD_VENUES} />
        <PillList title="Special Effects" items={SPECIAL_EFFECTS} />
      </div>
    </section>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-ivory">
          <div className="max-w-3xl">
            <span className="gold-divider">— {data.title} —</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              {data.heroTitle}
            </h1>
            <p className="mt-4 text-ivory/85 text-lg">{data.heroSubtitle}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
                <MessageCircle className="size-4" /> Enquire Now
              </a>
              <a href="#setups" className="btn-outline-gold !text-ivory !border-ivory hover:!text-charcoal">
                View Setups
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-px mx-auto max-w-3xl py-16 text-center">
        <p className="font-display text-2xl text-foreground/85 leading-relaxed">
          {data.intro}
        </p>
      </section>

      {/* Cards grid */}
      <section id="setups" className="container-px mx-auto max-w-7xl pb-12">
        <div className="text-center mb-10">
          <span className="gold-divider">— Choose Your Setup —</span>
          <h2 className="mt-3 text-3xl md:text-4xl text-burgundy">Signature Designs</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((c) => (
            <Link
              key={c.title}
              to="/$service/$sub"
              params={{ service: data.slug, sub: slugify(c.title) }}
              className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(123,28,46,0.4)] cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {c.images && c.images.length > 1 ? (
                  <ImageSlider images={c.images} alt={c.title} />
                ) : (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-burgundy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {c.description}
                </p>
                <span className="mt-5 inline-block text-xs font-semibold tracking-widest text-burgundy group-hover:text-gold">
                  VIEW DETAILS →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section-specific extras */}
      {data.slug === "birthday" && <BirthdayExtras />}
      {data.slug === "wedding" && <WeddingExtras />}

      {/* Add-ons */}
      <section className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Link to="/photography" className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1">
            <Camera className="size-7 text-gold" />
            <h3 className="mt-3 font-display text-xl text-burgundy">Photography</h3>
            <p className="mt-2 text-sm text-muted-foreground">Cinematic films & candid storytelling.</p>
          </Link>
          <Link to="/makeup" className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1">
            <Sparkles className="size-7 text-gold" />
            <h3 className="mt-3 font-display text-xl text-burgundy">Makeup</h3>
            <p className="mt-2 text-sm text-muted-foreground">Bridal, party & pre-wedding makeup.</p>
          </Link>
          <Link to="/catering" className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1">
            <UtensilsCrossed className="size-7 text-gold" />
            <h3 className="mt-3 font-display text-xl text-burgundy">Catering</h3>
            <p className="mt-2 text-sm text-muted-foreground">Flower Arrange — multi-cuisine packages.</p>
          </Link>
        </div>
      </section>

      <BookingPolicy />

      {/* Inquiry form */}
      <section className="container-px mx-auto max-w-3xl py-16">
        <InquiryForm
          eventType={data.title}
          showVenue={data.slug === "wedding" || data.slug === "birthday"}
          title={`Inquire About ${data.title}`}
        />
      </section>

      <Footer />
    </div>
  );
}
