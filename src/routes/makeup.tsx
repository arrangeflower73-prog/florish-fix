import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { makeupServices, WHATSAPP_URL } from "@/data/services";

const heroImg = makeupServices[0].image;

export const Route = createFileRoute("/makeup")({
  head: () => ({
    meta: [
      { title: "Makeup | Flower Arrange" },
      { name: "description", content: "Bridal makeup, party makeup, pre-wedding shoot makeup and hairstyling." },
      { property: "og:title", content: "Makeup — Flower Arrange" },
      { property: "og:description", content: "Glam by senior artists, designed for your moment." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: MakeupPage,
});

function MakeupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={heroImg} alt="Makeup" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-ivory">
          <div className="max-w-3xl">
            <span className="gold-divider">— Makeup —</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Glam Designed For Your Moment
            </h1>
            <p className="mt-4 text-ivory/85 text-lg">
              Professional bridal, party and shoot makeup by senior artists.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold mt-7">
              <MessageCircle className="size-4" /> Book a Session
            </a>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center mb-12">
          <span className="gold-divider">— Services —</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">Makeup & Hairstyling</h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {makeupServices.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.image} alt={s.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <Sparkles className="size-5 text-gold" />
                <h3 className="mt-2 font-display text-lg text-burgundy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-3xl pb-24">
        <InquiryForm eventType="Other" title="Book Your Makeup" />
      </section>

      <Footer />
    </div>
  );
}
