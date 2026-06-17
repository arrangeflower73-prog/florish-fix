import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

type Props = {
  eventType?: string;
  showVenue?: boolean;
  compact?: boolean;
  title?: string;
};

const SERVICE_TYPES = [
  "Proposal",
  "Birthday",
  "Wedding",
  "Engagement",
  "Baby Shower",
  "Bachelorette",
  "Anniversary",
  "Photography",
  "Makeup",
  "Catering",
  "Other",
];

const CATERING_SUB = ["Veg Package", "Non-Veg Package", "Veg + Non-Veg Combo", "Custom Menu"];
const MAKEUP_SUB = ["Bridal Makeup", "Party Makeup", "Engagement Makeup", "Shoot Makeup"];
const PHOTO_SUB = ["Wedding Photography", "Pre-Wedding Shoot", "Candid Photography", "Cinematic Film"];

export function InquiryForm({ eventType, compact, title = "Send an Inquiry" }: Props) {
  const [done, setDone] = useState(false);
  const [services, setServices] = useState<string[]>(eventType ? [eventType] : []);
  const [cateringOpts, setCateringOpts] = useState<string[]>([]);
  const [makeupOpts, setMakeupOpts] = useState<string[]>([]);
  const [photoOpts, setPhotoOpts] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    venue: "",
    message: "",
    photography: false,
    makeup: false,
    catering: false,
  });

  function toggle<T extends string>(list: T[], set: (v: T[]) => void, v: T) {
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const addons = [
      form.photography && "Photography",
      form.makeup && "Makeup",
      form.catering && "Catering",
    ]
      .filter(Boolean)
      .join(", ");
    const msg = `New Inquiry — Flower Arrange
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Event Date: ${form.date}
Venue: ${form.venue}
Service Type: ${services.join(", ") || "—"}
${cateringOpts.length ? `Catering Options: ${cateringOpts.join(", ")}\n` : ""}${makeupOpts.length ? `Makeup Options: ${makeupOpts.join(", ")}\n` : ""}${photoOpts.length ? `Photography Options: ${photoOpts.join(", ")}\n` : ""}Add-ons: ${addons || "None"}
Message: ${form.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, "_blank");
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-gold/40 bg-card p-10 text-center">
        <CheckCircle2 className="mx-auto size-12 text-gold" />
        <h3 className="mt-4 font-display text-2xl text-burgundy">Inquiry Sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've opened WhatsApp with your details. Our team will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={`rounded-3xl border border-gold/40 bg-card ${compact ? "p-6" : "p-8 md:p-10"} shadow-[0_20px_60px_-30px_rgba(123,28,46,0.3)]`}
    >
      <div className="text-center mb-6">
        <span className="gold-divider">— Get In Touch —</span>
        <h3 className="mt-2 font-display text-2xl md:text-3xl text-burgundy">{title}</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
        <Field label="Phone Number" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
        <Field label="Email Address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
        <Field label="Event Date" type="date" required value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
        <div className="md:col-span-2">
          <Field label="Venue" value={form.venue} onChange={(v) => setForm({ ...form, venue: v })} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-2">
            Service Type (select one or more)
          </label>
          <div className="flex flex-wrap gap-2">
            {SERVICE_TYPES.map((s) => {
              const active = services.includes(s);
              return (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggle(services, setServices, s)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition ${
                    active
                      ? "bg-gold text-charcoal border-gold"
                      : "border-border bg-card/60 hover:border-gold"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        {(services.includes("Catering") || form.catering) && (
          <div className="md:col-span-2 rounded-xl border border-gold/30 bg-card/40 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-2">
              Catering Package
            </label>
            <div className="flex flex-wrap gap-2">
              {CATERING_SUB.map((s) => {
                const active = cateringOpts.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(cateringOpts, setCateringOpts, s)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition ${
                      active ? "bg-burgundy text-ivory border-burgundy" : "border-border bg-card hover:border-gold"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {(services.includes("Makeup") || form.makeup) && (
          <div className="md:col-span-2 rounded-xl border border-gold/30 bg-card/40 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-2">
              Makeup Service
            </label>
            <div className="flex flex-wrap gap-2">
              {MAKEUP_SUB.map((s) => {
                const active = makeupOpts.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(makeupOpts, setMakeupOpts, s)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition ${
                      active ? "bg-burgundy text-ivory border-burgundy" : "border-border bg-card hover:border-gold"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {(services.includes("Photography") || form.photography) && (
          <div className="md:col-span-2 rounded-xl border border-gold/30 bg-card/40 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-2">
              Photography Service
            </label>
            <div className="flex flex-wrap gap-2">
              {PHOTO_SUB.map((s) => {
                const active = photoOpts.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(photoOpts, setPhotoOpts, s)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition ${
                      active ? "bg-burgundy text-ivory border-burgundy" : "border-border bg-card hover:border-gold"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="md:col-span-2">
          <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-1.5">
            Message / Special Requests
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
            className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-2">
            Add-on Services
          </label>
          <div className="flex flex-wrap gap-4">
            {[
              ["photography", "Photography"],
              ["makeup", "Makeup"],
              ["catering", "Catering"],
            ].map(([k, l]) => (
              <label key={k} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={(form as Record<string, unknown>)[k] as boolean}
                  onChange={(e) => setForm({ ...form, [k]: e.target.checked })}
                  className="size-4 accent-[var(--gold)]"
                />
                <span>{l}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button type="submit" className="btn-gold">
          <Send className="size-4" /> Send Inquiry
        </button>
      </div>
    </form>
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
  onChange: (v: string) => void;
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
