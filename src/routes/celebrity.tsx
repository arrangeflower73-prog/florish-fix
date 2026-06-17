import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Star, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CelebrityInquiry } from "@/components/CelebrityInquiry";
import { CELEBRITY_GROUPS } from "@/data/celebrities";

const HERO_IMG =
  "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Happy_Date___Decora%C3%A7%C3%A3o_on_Instagram__Viva_helolinsb___euphoria_euphoriaparty_cake_r2sdvi.jpg";

export const Route = createFileRoute("/celebrity")({
  head: () => ({
    meta: [
      { title: "Celebrity Booking | Flower Arrange" },
      {
        name: "description",
        content:
          "Book celebrities, singers, Bollywood and Bengali film stars for your event. Send an inquiry to Flower Arrange.",
      },
      { property: "og:title", content: "Celebrity Booking — Flower Arrange" },
      { property: "og:description", content: "Bollywood, Bengali film, Indian Idol & Super Star Singer artists for hire." },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: CelebrityPage,
});

function CelebrityPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={HERO_IMG} alt="Celebrity bookings" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/55 to-charcoal/85" />
        <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-6 text-center text-ivory">
          <div className="max-w-3xl mx-auto w-full">
            <span className="gold-divider">— Celebrity Booking —</span>
            <h1 className="mt-4 font-display text-[2rem] leading-[1.15] sm:text-4xl md:text-6xl break-words">
              Book Your <em className="text-gold not-italic">Favourite Star</em>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-ivory/85 break-words">
              From Bollywood actors to Indian Idol winners — handpicked talent for your event.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-3xl py-16 text-center">
        <p className="font-display text-2xl text-foreground/85 leading-relaxed">
          Bring star power to your wedding, sangeet, corporate gala or private celebration. Send an
          inquiry and our team will share availability and tailor a complete experience around your event.
        </p>
      </section>

      {CELEBRITY_GROUPS.map((grp) => (
        <section key={grp.group} className="container-px mx-auto max-w-7xl pb-12">
          <div className="text-center mb-8">
            <span className="gold-divider">— {grp.group} —</span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {grp.items.map((c) => (
              <article
                key={c.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(123,28,46,0.4)]"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-burgundy/10 to-gold/20 grid place-items-center">
                  {c.photo ? (
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <Star className="size-16 text-gold" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-burgundy">{c.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gold">{c.category}</p>
                  {c.credits && c.credits.length > 0 && (
                    <details className="mt-3 text-sm text-muted-foreground">
                      <summary className="cursor-pointer text-xs font-semibold tracking-widest text-burgundy uppercase">
                        View Credits
                      </summary>
                      <ul className="mt-2 list-disc pl-4 space-y-1 max-h-48 overflow-y-auto">
                        {c.credits.map((cr) => (
                          <li key={cr}>{cr}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                  <button
                    onClick={() => setSelected(c.name)}
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-4 py-2 text-sm font-semibold text-ivory hover:bg-gold hover:text-charcoal transition"
                  >
                    <Send className="size-4" /> Send Inquiry
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <Footer />
      {selected && <CelebrityInquiry celebrity={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}