import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ChevronLeft, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { slugify } from "@/lib/slug";
import {
  anniversaryData,
  babyShowerData,
  birthdayData,
  brideToBeData,
  engagementData,
  proposalData,
  weddingData,
  WHATSAPP_URL,
  type ServicePageData,
  type ServiceCard,
} from "@/data/services";

const REGISTRY: Record<string, ServicePageData> = {
  proposal: proposalData,
  birthday: birthdayData,
  wedding: weddingData,
  engagement: engagementData,
  babyshower: babyShowerData,
  bridetobe: brideToBeData,
  anniversary: anniversaryData,
};

function findCard(service: string, sub: string): { data: ServicePageData; card: ServiceCard } | null {
  const data = REGISTRY[service];
  if (!data) return null;
  const card = data.cards.find((c) => slugify(c.title) === sub);
  if (!card) return null;
  return { data, card };
}

export const Route = createFileRoute("/$service/$sub")({
  loader: ({ params }) => {
    const found = findCard(params.service, params.sub);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.card.title} | ${loaderData.data.title} | Flower Arrange` },
            { name: "description", content: loaderData.card.description },
            { property: "og:title", content: `${loaderData.card.title} — Flower Arrange` },
            { property: "og:description", content: loaderData.card.description },
            { property: "og:image", content: loaderData.card.image },
          ],
        }
      : { meta: [] },
  component: SubServicePage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <p className="text-foreground">Sub-service not found.</p>
    </div>
  ),
});

function SubServicePage() {
  const { data, card } = Route.useLoaderData() as { data: ServicePageData; card: ServiceCard };
  const gallery: string[] = card.images && card.images.length ? card.images : [card.image];
  const fullGallery: string[] = [...gallery];
  while (fullGallery.length < 4) fullGallery.push(gallery[fullGallery.length % gallery.length]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="relative h-[65vh] min-h-[440px] w-full overflow-hidden">
        <img src={card.image} alt={card.title} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/45 to-charcoal/85" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-ivory">
          <div className="max-w-3xl">
            <Link
              to={`/${data.slug}` as never}
              className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-ivory/80 hover:text-gold"
            >
              <ChevronLeft className="size-4" /> Back to {data.title}
            </Link>
            <span className="gold-divider mt-3 block">— {data.title} —</span>
            <h1 className="mt-3 font-display text-4xl md:text-6xl leading-tight">{card.title}</h1>
            <p className="mt-4 text-ivory/85 text-lg">{card.description}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
              <a href="#inquiry" className="btn-outline-gold !text-ivory !border-ivory hover:!text-charcoal">
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl py-16 grid gap-12 md:grid-cols-[1.1fr_1fr] items-start">
        <div>
          <span className="gold-divider">— What's Included —</span>
          <h2 className="mt-3 font-display text-3xl text-burgundy">A Setup Designed for Memories</h2>
          <p className="mt-4 text-foreground/80">{card.description}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {card.included.map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="size-4 text-gold mt-0.5 shrink-0" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {fullGallery.slice(0, 4).map((src: string, i: number) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-gold/30">
              <img src={src} alt={`${card.title} ${i + 1}`} className="size-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      <section id="inquiry" className="container-px mx-auto max-w-3xl pb-20">
        <InquiryForm
          eventType={data.title}
          title={`Inquire — ${card.title}`}
          showVenue
        />
      </section>

      <Footer />
    </div>
  );
}