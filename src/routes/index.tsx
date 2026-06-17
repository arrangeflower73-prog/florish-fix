import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Star, Sparkles, Users, Clock, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { WHATSAPP_URL } from "@/data/services";
import { PORTFOLIO_IMAGES } from "@/data/portfolio";

const CATEGORIES = [
  { to: "/proposal", emoji: "💍", title: "Marriage Proposal", desc: "Romantic setups that make her say yes.", img: PORTFOLIO_IMAGES[3] },
  { to: "/birthday", emoji: "🎂", title: "Birthday Celebration", desc: "Themes, balloons & cake-table magic.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299725/05a46b86-8211-40fd-b0cd-408851293b1d_dvvysg.jpg" },
  { to: "/wedding", emoji: "💒", title: "Wedding Decoration", desc: "Mandaps, arches & cinematic stages.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299719/Screenshot_2026-06-13-00-51-09-55_a23b203fd3aafc6dcb84e438dda678b6_sscgwy.jpg" },
  { to: "/engagement", emoji: "💐", title: "Engagement Ceremony", desc: "Ring ceremonies styled with love.", img: PORTFOLIO_IMAGES[7] },
  { to: "/babyshower", emoji: "🍼", title: "Baby Shower", desc: "Pastels, royals & traditional setups.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781303636/Screenshot_2026-06-12-23-47-35-59_a23b203fd3aafc6dcb84e438dda678b6_nabzwc.jpg" },
  { to: "/bridetobe", emoji: "👰", title: "Bride To Be / Bachelorette", desc: "Last fling before the ring.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299721/Screenshot_2026-06-13-00-49-12-91_a23b203fd3aafc6dcb84e438dda678b6_gezm4g.jpg" },
  { to: "/anniversary", emoji: "🕯️", title: "Candlelight Anniversary", desc: "Romance, candles & jubilees.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299725/46871044-f8cd-441e-afc0-04e32b60d70a_onwplw.jpg" },
  { to: "/photography", emoji: "📸", title: "Photography", desc: "Cinematic films & candid memories.", img: PORTFOLIO_IMAGES[1] },
  { to: "/makeup", emoji: "💄", title: "Makeup", desc: "Bridal, party & shoot makeup.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781335751/Screenshot_2026-06-13-12-58-22-30_a23b203fd3aafc6dcb84e438dda678b6_rpak2z.jpg" },
  { to: "/catering", emoji: "🍽️", title: "Catering", desc: "Multi-cuisine packages.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781335750/Luxury_Wedding_Buffet_Setup_fc603b.jpg" },
  { to: "/celebrity", emoji: "🌟", title: "Celebrity Booking", desc: "Bollywood, Bengali film & Indian Idol stars.", img: "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Happy_Date___Decora%C3%A7%C3%A3o_on_Instagram__Viva_helolinsb___euphoria_euphoriaparty_cake_r2sdvi.jpg" },
];

const WHY = [
  { icon: Users, title: "Experienced Team", desc: "Seasoned designers, decorators and coordinators behind every event." },
  { icon: Sparkles, title: "Premium Decor", desc: "Fresh florals, artisanal props, custom builds." },
  { icon: Clock, title: "On-Time Delivery", desc: "Setups completed punctually so your day runs without a hitch." },
  { icon: Package, title: "Customised Packages", desc: "Every package tailored to your theme, scale and budget." },
];

const TESTIMONIALS = [
  { name: "Ananya & Rohan", role: "Wedding · Kolkata", quote: "Our mandap looked like a scene from a film. Every detail — from the floral cascade to the lighting — was perfect." },
  { name: "Priya Mehta", role: "Bride To Be · Kolkata", quote: "The pastel brunch they designed was unreal. My friends are still talking about the photo wall and the mimosa bar." },
  { name: "Karan Verma", role: "Proposal · Kolkata", quote: "I told them my idea and they took it ten times further. She said yes the moment she saw the terrace." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flower Arrange — Event Organiser · Decor · Memories" },
      { name: "description", content: "Creating unforgettable moments in Kolkata. Weddings, proposals, birthdays, engagements and more." },
      { property: "og:title", content: "Flower Arrange — Event Organiser" },
      { property: "og:description", content: "Events Decor. Memories." },
    ],
  }),
  component: Home,
});

function HeroSlideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % PORTFOLIO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute inset-0">
      {PORTFOLIO_IMAGES.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1500ms] ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: idx === i ? "scale(1.05)" : "scale(1)", transition: "opacity 1.5s, transform 6s linear" }}
        />
      ))}
    </div>
  );
}

function VerticalStrip({ offset = 0, speed = 28 }: { offset?: number; speed?: number }) {
  const list = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];
  return (
    <div className="h-full overflow-hidden relative rounded-2xl border border-gold/30">
      <div
        className="flex flex-col gap-3 animate-[scrollY_var(--dur)_linear_infinite]"
        style={{ ["--dur" as never]: `${speed}s`, animationDelay: `${offset}s` }}
      >
        {list.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full h-44 object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioMasonry() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="text-center mb-10">
        <span className="gold-divider">— Our Portfolio —</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">Moments We've Created</h2>
      </div>
      <div className="columns-2 gap-4 md:gap-6 [column-fill:_balance]">
        {PORTFOLIO_IMAGES.map((src, i) => (
          <div
            key={i}
            className="mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-2xl group"
          >
            <img
              src={src}
              alt={`Portfolio ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % PORTFOLIO_IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="text-center mb-10">
        <span className="gold-divider">— Portfolio —</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">Our Work</h2>
      </div>
      <div className="relative h-[60vh] min-h-[420px] rounded-3xl overflow-hidden border border-gold/30">
        {PORTFOLIO_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <button onClick={() => setI((p) => (p - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 grid place-items-center size-11 rounded-full bg-card/80 hover:bg-gold text-foreground">
          <ChevronLeft className="size-5" />
        </button>
        <button onClick={() => setI((p) => (p + 1) % PORTFOLIO_IMAGES.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 grid place-items-center size-11 rounded-full bg-card/80 hover:bg-gold text-foreground">
          <ChevronRight className="size-5" />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {PORTFOLIO_IMAGES.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-card/60"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`@keyframes scrollY { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }`}</style>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/55 to-charcoal/80" />
        <div className="relative z-10 grid lg:grid-cols-[1fr_auto] items-center gap-8 px-5 sm:px-6 lg:px-12 py-20 sm:py-24 min-h-[92vh] max-w-7xl mx-auto">
          <div className="text-ivory max-w-2xl min-w-0">
            <span className="gold-divider">— Flower Arrange · Event Organiser —</span>
            <h1 className="mt-4 font-display text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05] break-words">
              Creating Unforgettable <em className="text-gold not-italic">Moments</em>
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-ivory/85 break-words">
              Weddings · Birthdays · Proposals · Anniversaries · And More
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="btn-gold">Explore Services</a>
              <a href="#contact" className="btn-outline-gold !text-ivory !border-ivory hover:!text-charcoal">
                Get a Free Quote
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-outline-gold !text-ivory !border-ivory hover:!text-charcoal">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right-side gallery strip */}
          <div className="hidden lg:grid grid-cols-3 gap-3 w-[380px] h-[560px]">
            <VerticalStrip offset={0} speed={32} />
            <VerticalStrip offset={-10} speed={36} />
            <VerticalStrip offset={-20} speed={30} />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center mb-14">
          <span className="gold-divider">— Our Services —</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">
            Designed For Every Milestone
          </h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(123,28,46,0.4)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                <div className="text-2xl">{c.emoji}</div>
                <h3 className="mt-1 font-display text-xl">{c.title}</h3>
                <p className="mt-1 text-xs text-ivory/80 line-clamp-2">{c.desc}</p>
                <span className="mt-3 inline-block text-[11px] font-bold tracking-[0.25em] text-gold">
                  EXPLORE →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Portfolio masonry */}
      <PortfolioMasonry />


      {/* Why */}
      <section className="bg-card border-y border-border">
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="text-center mb-12">
            <span className="gold-divider">— Why Choose Us —</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">
              Crafted With Care, Delivered With Grace
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-7 text-center">
                <w.icon className="mx-auto size-9 text-gold" />
                <h3 className="mt-4 font-display text-xl text-burgundy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio carousel */}
      <PortfolioCarousel />

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="text-center mb-12">
          <span className="gold-divider">— Testimonials —</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">Words From Our Clients</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-lg text-foreground/85 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display text-burgundy">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Inquiry form */}
      <section id="contact" className="container-px mx-auto max-w-3xl pb-24">
        <InquiryForm title="Plan Your Celebration" />
      </section>

      <Footer />
    </div>
  );
}
