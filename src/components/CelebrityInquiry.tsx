import { useState } from "react";
import { Send, CheckCircle2, X } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

export function CelebrityInquiry({ celebrity, onClose }: { celebrity: string; onClose: () => void }) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    date: "",
    eventType: "",
    message: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Celebrity Booking Inquiry — Flower Arrange
Celebrity: ${celebrity}
Name: ${form.name}
Phone: ${form.phone}
WhatsApp: ${form.whatsapp}
Event Date: ${form.date}
Event Type: ${form.eventType}
Message: ${form.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, "_blank");
    setDone(true);
  }

  return (
    <div
      role="dialog"
      aria-modal
      className="fixed inset-0 z-[70] grid place-items-center bg-charcoal/70 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-card/90 text-foreground hover:bg-gold hover:text-charcoal"
        >
          <X className="size-4" />
        </button>
        <div className="p-6 md:p-8">
          {done ? (
            <div className="text-center py-6">
              <CheckCircle2 className="mx-auto size-12 text-gold" />
              <h3 className="mt-4 font-display text-2xl text-burgundy">Inquiry Sent!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We've opened WhatsApp with your booking details. Our team will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="text-center mb-5">
                <span className="gold-divider">— Celebrity Booking —</span>
                <h3 className="mt-2 font-display text-2xl text-burgundy">Inquire — {celebrity}</h3>
              </div>
              <div className="grid gap-4">
                <F label="Full Name" v={form.name} on={(v) => setForm({ ...form, name: v })} required />
                <F label="Phone Number" type="tel" v={form.phone} on={(v) => setForm({ ...form, phone: v })} required />
                <F label="WhatsApp Number" type="tel" v={form.whatsapp} on={(v) => setForm({ ...form, whatsapp: v })} required />
                <F label="Event Date" type="date" v={form.date} on={(v) => setForm({ ...form, date: v })} required />
                <F label="Event Type" v={form.eventType} on={(v) => setForm({ ...form, eventType: v })} required />
                <F label="Celebrity Name" v={celebrity} on={() => {}} disabled />
                <div>
                  <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <button type="submit" className="btn-gold">
                  <Send className="size-4" /> Send Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function F({
  label,
  v,
  on,
  type = "text",
  required,
  disabled,
}: {
  label: string;
  v: string;
  on: (s: string) => void;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-widest text-burgundy uppercase mb-1.5">{label}</label>
      <input
        type={type}
        required={required}
        disabled={disabled}
        value={v}
        onChange={(e) => on(e.target.value)}
        className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm focus:border-gold focus:outline-none disabled:bg-muted/40 disabled:text-foreground/70"
      />
    </div>
  );
}