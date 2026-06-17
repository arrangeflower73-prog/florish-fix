export const POLICY_POINTS = [
  "30% advance on total budget required to confirm the booking.",
  "Full payment is settled the same day after work is completed.",
  "Accommodation and meals for at least 6 persons are provided by the client.",
  "Traveling charges are separate from the total budget.",
  "Total budget excludes the cost of original/fresh flowers.",
  "Date booking is done by paying token money before the venue visit.",
  "If any material is damaged at the venue, the client is responsible.",
  "Advance will NOT be refunded if the booking is cancelled.",
  "Photographs to be selected within 6 months of the booking.",
  "Venue must allow our team to start setup from the previous day, if available.",
];

export function BookingPolicy() {
  return (
    <section className="container-px mx-auto max-w-5xl py-20">
      <div className="rounded-3xl border border-gold/40 bg-card p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(123,28,46,0.35)]">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="gold-divider">— Booking Procedure —</span>
          <h2 className="mt-3 text-3xl md:text-4xl text-burgundy">
            Flower Arrange Booking Procedure
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground text-sm">
            A simple, transparent process to lock in your date and bring your
            celebration to life.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-2">
          {POLICY_POINTS.map((p, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-border/70 bg-card/60 p-4"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-burgundy text-ivory font-display text-sm">
                {i + 1}
              </span>
              <span className="text-sm text-foreground/85 leading-relaxed">{p}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
