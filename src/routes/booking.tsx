import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Send, CheckCircle2, CalendarDays, Users, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { WHATSAPP_URL } from "@/data/services";

const TIME_SLOTS = [
  "10:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
  "08:00 PM",
  "10:00 PM",
];

const SERVICES = [
  "Marriage Proposal",
  "Birthday",
  "Wedding",
  "Engagement",
  "Baby Shower",
  "Bride To Be",
  "Anniversary",
  "Celebrity Booking",
  "Other",
];

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Date | Flower Arrange" },
      { name: "description", content: "Self-service booking — pick a date, time slot and guest count. We'll confirm on WhatsApp." },
      { property: "og:title", content: "Book Your Event Date — Flower Arrange" },
      { property: "og:description", content: "Choose date, time slot and guest count. Instant WhatsApp confirmation." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string>("");
  const [service, setService] = useState<string>(SERVICES[0]);
  const [guests, setGuests] = useState<number>(50);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [requests, setRequests] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!date || !slot) return;
    const msg = `New Booking — Flower Arrange
Name: ${name}
Phone: ${phone}
WhatsApp: ${whatsapp}
Service: ${service}
Event Date: ${date.toDateString()}
Time Slot: ${slot}
Guest Count: ${guests}
Special Requirements: ${requests || "—"}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, "_blank");
    setDone(true);
  }

  if (done) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <section className="container-px mx-auto max-w-2xl py-24 text-center">
          <div className="rounded-3xl border border-gold/40 bg-card p-10">
            <CheckCircle2 className="mx-auto size-14 text-gold" />
            <h1 className="mt-4 font-display text-3xl text-burgundy">Booking Confirmed!</h1>
            <p className="mt-3 text-muted-foreground">
              Your details have been sent to our team on WhatsApp. We'll confirm availability and walk you through next steps shortly.
            </p>
            <div className="mt-6 rounded-2xl bg-card/60 border border-border p-5 text-left text-sm">
              <div><strong>Service:</strong> {service}</div>
              <div><strong>Date:</strong> {date?.toDateString()}</div>
              <div><strong>Time:</strong> {slot}</div>
              <div><strong>Guests:</strong> {guests}</div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299719/Screenshot_2026-06-13-00-51-09-55_a23b203fd3aafc6dcb84e438dda678b6_sscgwy.jpg"
          alt="Book your date"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/55 to-charcoal/85" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-ivory">
          <div className="max-w-2xl">
            <span className="gold-divider">— Book Your Event —</span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">Pick a Date That Feels Right</h1>
            <p className="mt-3 text-ivory/85">Choose a date, time slot, guest count and we'll confirm on WhatsApp.</p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl py-16">
        <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-gold/40 bg-card p-6 md:p-8 shadow-[0_20px_60px_-30px_rgba(123,28,46,0.3)]">
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays className="size-5 text-gold" />
              <h3 className="font-display text-xl text-burgundy">Choose Your Date</h3>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
              className="pointer-events-auto rounded-2xl border border-border bg-card/60 p-3"
            />

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="size-5 text-gold" />
                <h3 className="font-display text-xl text-burgundy">Time Slot</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSlot(t)}
                    className={`text-xs px-3 py-2 rounded-full border transition ${
                      slot === t
                        ? "bg-burgundy text-ivory border-burgundy"
                        : "border-border bg-card/60 hover:border-gold"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gold/40 bg-card p-6 md:p-8 shadow-[0_20px_60px_-30px_rgba(123,28,46,0.3)]">
            <div className="text-center mb-5">
              <span className="gold-divider">— Your Details —</span>
              <h3 className="mt-2 font-display text-2xl text-burgundy">Tell Us About Your Event</h3>
            </div>
            <div className="grid gap-4">
              <Field label="Full Name" value={name} onChange={setName} required />
              <Field label="Phone Number" type="tel" value={phone} onChange={setPhone} required />
              <Field label="WhatsApp Number" type="tel" value={whatsapp} onChange={setWhatsapp} required />
              <div>
                <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-1.5">
                  Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-1.5">
                  <Users className="inline size-4 text-gold mr-1" /> Guest Count
                </label>
                <input
                  type="number"
                  min={1}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-1.5">
                  Special Requirements
                </label>
                <textarea
                  rows={4}
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
                />
              </div>

              <div className="rounded-xl border border-gold/30 bg-card/40 p-4 text-sm">
                <div className="font-display text-burgundy mb-1">Booking Summary</div>
                <div className="text-foreground/80">
                  {service} · {date ? date.toDateString() : <em>pick a date</em>} ·{" "}
                  {slot || <em>pick a time</em>} · {guests} guests
                </div>
              </div>

              <button
                type="submit"
                disabled={!date || !slot}
                className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed justify-center"
              >
                <Send className="size-4" /> Confirm Booking
              </button>
            </div>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-1.5">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}