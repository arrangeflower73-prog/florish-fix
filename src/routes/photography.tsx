import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Camera } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { photographyServices, WHATSAPP_URL } from "@/data/services";

const heroImg = photographyServices[0].image;

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography | Flower Arrange" },
      { name: "description", content: "Cinematic wedding films, candid photography and pre-wedding shoots." },
      { property: "og:title", content: "Photography — Flower Arrange" },
      { property: "og:description", content: "Every moment deserves to be captured perfectly." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={heroImg} alt="Photography" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-ivory">
          <div className="max-w-3xl">
            <span className="gold-divider">— Photography —</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Every Moment Deserves to Be Captured Perfectly
            </h1>
            <p className="mt-4 text-ivory/85 text-lg">
              Cinematic films, candid storytelling and editorial pre-wedding shoots.
            </p>
            <div className="mt-7">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
                <MessageCircle className="size-4" /> Book a Session
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center mb-12">
          <span className="gold-divider">— Services —</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">Photography Services</h2>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {photographyServices.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <Camera className="size-6 text-gold" />
                <h3 className="mt-3 font-display text-xl text-burgundy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-3xl pb-24">
        <InquiryForm eventType="Other" title="Book Your Photography" />
      </section>

      <Footer />
    </div>
  );
}
