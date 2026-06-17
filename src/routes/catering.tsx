import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check, UtensilsCrossed } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { WHATSAPP_URL } from "@/data/services";

const heroImg =
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1800&q=80";

type Section = { title: string; items: string[] };
type Pkg = { id: string; name: string; tagline: string; sections: Section[] };

const PACKAGES: Pkg[] = [
  {
    id: "preliminary",
    name: "Preliminary Package",
    tagline: "Our foundational package — refined, generous and crowd-pleasing.",
    sections: [
      { title: "Mocktail Counter", items: ["Virgin Mojito", "Ginger Mint Mojito", "Kiwi Mojito", "Watermelon Mojito", "Soda Shikanji", "Masala Thumbs Up"] },
      { title: "Special Refreshments", items: ["Blue Lagoon", "Pineapple Blossom", "Assorted Soft Drinks", "Tea & Coffee"] },
      { title: "Non-Veg Appetizer", items: ["Tangra Style Chilli Chicken", "Chicken Kebab (Reshmi / Malai / Hariyali)", "Cocktail Fish Finger"] },
      { title: "Veg Appetizer", items: ["Paneer Shashlik", "Cheese Corn Roll", "Vegetable Chop (Mini)"] },
      { title: "Live Chaat", items: ["Fuchka", "Papri Chaat"] },
      { title: "Live Soup", items: ["Sweet Corn Chicken Soup", "Vegetable Lemon Coriander Soup"] },
      { title: "Salad", items: ["Fresh Garden Green", "Russian Salad", "Pasta Salad", "Chinese Bhel"] },
      { title: "Condiments", items: ["Sirka Onion", "Achar", "Mixed Raita", "Green Chutney", "Papad", "Chutney"] },
      { title: "Main Course — Non Veg", items: ["Green Peas Kachori", "Thin Crust Naan", "Bhaja Masala Aloo Dum", "Dal Makhani", "Fish Paturi / Diamond Fish Fry", "Chicken Dak Bunglow / Chicken Tikka Lababdar", "Golbarir Kosha Mangsho", "Zafrani Pulao", "Steamed Basmati"] },
      { title: "Main Course — Veg", items: ["Green Peas Kachori", "Thin Crust Naan", "Bhaja Masala Aloo Dum", "Dal Makhani", "Paneer Pasanda", "Paneer Tikka Lababdar / Malai Kofta", "Tawa Tamanchi", "Zafrani Pulao", "Steamed Basmati"] },
      { title: "Desserts", items: ["Baked Mihidana Tart", "Hot Gulab Jamun", "Ice Cream (Any 2 flavours)"] },
      { title: "Extras", items: ["Banarasi Paan Counter", "200ml Packaged Drinking Water"] },
      { title: "Add-on Live Counters", items: ["Live Mongolian Counter", "Live Pasta Counter"] },
    ],
  },
  {
    id: "second",
    name: "In The Second Place",
    tagline: "Everything in Preliminary, plus a deeper menu and live stations.",
    sections: [
      { title: "Mocktail Additions", items: ["Pineapple Blossom", "Strawberry Daiquiri", "Black Currant Blossom", "Litchi Gimlet", "Mango Delight", "Orange Sunrise"] },
      { title: "Non-Veg Appetizer", items: ["Chicken Lat Mei Kai", "Panko Fried Fish", "Golden Fried Prawns", "Chicken Kebab (Hariyali / Malai / Kali Mirch)"] },
      { title: "Veg Appetizer", items: ["Dahi Ke Kebab", "Cheese Corn Roll", "Paneer Kebab (Ajwaini / Achari / Kasuri Methi)"] },
      { title: "Live Chaat Additions", items: ["Dahi Vada", "Ragda Samosa Chaat", "Chilla", "Aloo Ghugni Chaat"] },
      { title: "Live Soup", items: ["Chicken Talumein Soup", "Vegetable Sweetcorn Soup"] },
      { title: "Live Momo Station", items: ["Chicken & Cheese Momo", "Classic Veg Momo"] },
      { title: "Salad Additions", items: ["Waldorf Salad"] },
      { title: "Main Course — Non Veg Additions", items: ["Kashmiri Aloo Dum", "Dal Panchmel", "Mutton Galouti Kebab", "Grilled Fish with Lemon Butter Sauce", "Prawn Malaikari", "Chicken Chaap / Chicken Tikka Lababdar", "Mutton Rogan Josh", "Mutton Dum Biryani"] },
      { title: "Desserts", items: ["Baked Gur Rasgulla", "Kesaria Jalebi with Rabri", "Sandesh Paturi", "Ice Cream (Any 2)"] },
    ],
  },
  {
    id: "speciality",
    name: "Flower Arrange Speciality",
    tagline: "Our premium experience — extensive live counters and global flavours.",
    sections: [
      { title: "Refreshments", items: ["Exotic Canned Juices", "Coconut Water", "Cold Coffee"] },
      { title: "Fruit Juice Counter (Canned)", items: ["Watermelon", "Pomegranate", "Apple", "Orange", "Pineapple", "Mango"] },
      { title: "Non-Veg Appetizers", items: ["Crispy Chilli Chicken", "Hot Basil Chicken", "Chicken Thai Wanton", "Pan Fried Fish", "Fish Orly", "Prawn Tempura"] },
      { title: "Veg Appetizer", items: ["Honey Chilli Babycorn", "Cheese Corn Ball", "Paneer Shashlik", "Jalapeno Cheese Poppers", "Hara Bhara Kebab", "Dahi Ke Kebab", "Cocktail Samosa"] },
      { title: "Charcoal Grill", items: ["Chicken Pyare Kebab", "Chicken Tikka Kebab (multiple varieties)", "Paneer Tikka Kebab (multiple varieties)", "Vegetable Seekh Kebab"] },
      { title: "Live Chaat Additions", items: ["Raj Kachori Chaat"] },
      { title: "Live Soup", items: ["Chicken Hot & Sour", "Cream of Mushroom (with Garlic Bread)"] },
      { title: "Live Momo Station", items: ["Gandhoraj Momo", "Water Chestnut Momo", "Corn Mushroom Momo", "Classic varieties"] },
      { title: "Live Mini Pizza Counter", items: ["Chicken Pizza", "Veg Pizza"] },
      { title: "Fresh Fruit Pavilion (Live)", items: ["Fuji Apple", "Japanese Grape", "New Zealand Kiwi", "Melon", "Green Pears", "Orange", "Papaya", "Pineapple", "Guava", "Dragon Fruit", "Strawberry"] },
      { title: "Amritsari Counter (Live)", items: ["Reshmi Roomali", "Amritsari Kulcha", "Chholey", "Dal Makhni", "Soya Chaap", "Keema Chholey"] },
      { title: "Mutton Haleem Counter (Live)", items: ["Slow-cooked Mutton Haleem"] },
      { title: "Khowsuey Counter (Live)", items: ["Burmese Khowsuey with full condiments"] },
      { title: "Lucknowi Corner (Live)", items: ["Mutton Galouti Kebab", "Veg Galouti Kebab", "Ulta Tawa Ka Paratha"] },
      { title: "Main Course Additions", items: ["Masala Kulcha", "Roomali Roti", "Dal Maharani", "Fish Cordon Bleu", "Multiple Chicken & Mutton options", "Awadhi Biryani"] },
      { title: "Desserts", items: ["Daulat Ka Chhat", "Kesaria Jalebi with Rabri", "Malpua with Rabri", "Sandesh Paturi", "Kesaria Rajbhog", "Baked Chum Chum", "Gajar / Moong Dal Halwa", "Hot Brownie", "Tiramisu", "Assorted Mousse", "Ice Cream Parlour (multiple)", "Kulfi (Stick / Matka)"] },
    ],
  },
  {
    id: "bangaliana",
    name: "বাঙালিয়ানা 🌿",
    tagline: "A full traditional Bengali feast — heritage flavours, classic presentation.",
    sections: [
      { title: "স্যালাড", items: ["জল তোপসে ফ্রাই", "ভেটকি ফিশ ফ্রাই", "ঠাকুর বাড়ির মাছের চপ", "পানির পাসিন্দা", "মেটে চপ", "মাটন কাটলেট"] },
      { title: "কচুরি / লুচি", items: ["মটরশুঁটির কচুরি / রাধা পল্লবী", "মাছের পুর ভরা কচুরি", "পদ্ম লুচি"] },
      { title: "তরকারি", items: ["নারকেল দিয়ে ছোলার ডাল", "পুর ভরা আলুর দম", "জোড়াসাঁকোর আলুর দম", "কাবলি চানা", "বেগুন সুন্দরী"] },
      { title: "ভাত ও ডাল", items: ["সাদা ভাত", "ঘি", "মুগ ডাল (মাছের মাথা)", "ঝুরঝুরে আলুভাজা"] },
      { title: "মাছ", items: ["ইলিশ পাতুরি", "ইলিস ভাপা", "দই ইলিশ", "ভেটকি পাতুরি", "ভেটকি বেগম বাহার", "চিংড়ি মাছের মালাই কারী", "চিংড়ি সর্ষে", "পম্প্রেট ঝাল", "মালাই পমপ্রেট"] },
      { title: "মাংস ও পোলাও", items: ["পোলাও", "মটন কষা", "হোম স্টাইল মটন কারী"] },
      { title: "চাটনি", items: ["আমের চাটনি", "ড্রাই ফ্রুটস এর চাটনি"] },
      { title: "মিষ্টি", items: ["রসগোল্লা", "ক্ষীর রসগোল্লা", "পানতোয়া", "সন্দেশ", "পেস্তা সন্দেশ", "জল ভরা তালসাস", "কুলফি / দই"] },
      { title: "শেষে", items: ["মিঠা পাতা পান 🌿"] },
    ],
  },
];

const OPTIONAL = [
  { title: "Breakfast", items: ["Luchi", "Sada Aloor Tarkari", "Sweet", "Tea"] },
  { title: "Lunch", items: ["Steamed Basmati", "Bhaja Moong Dal", "Jhuri Aloo Bhaja", "Seasonal Veg", "Katla Kalia", "Chhanar Kalia", "Chutney", "Papad", "Sweet"] },
  { title: "Drivers Packet", items: ["Green Peas Kachori", "Bhaja Masala Aloor Dum", "Zafrani Pulao", "Chicken / Mutton / Fish", "Sweet", "Water"] },
];

const TERMS = [
  "30% token advance, 75% payment 15 days before the function, remaining after the function.",
  "Advance is non-refundable on cancellation but adjustable for future same-nature catering.",
  "Charged on guaranteed plates or actual consumption, whichever is higher.",
  "After token advance, a venue visit is conducted for planning.",
  "Decoration, floral and electrical are not provided by the caterer.",
  "We are not responsible for packing leftover food.",
  "Client provides water and electricity at the venue.",
  "We are not responsible for kitchen / dining cleaning (except garbage bags).",
  "Client can inspect food and reject if unsatisfactory — inspection must be at least 2 hours before serving.",
];

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering — Flower Arrange" },
      { name: "description", content: "Multi-cuisine catering packages, live counters and premium hospitality by Flower Arrange." },
      { property: "og:title", content: "Flower Arrange — Catering by Design" },
      { property: "og:description", content: "Premium catering services for weddings, receptions and events." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  const [active, setActive] = useState<string>(PACKAGES[0].id);
  const pkg = PACKAGES.find((p) => p.id === active)!;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={heroImg} alt="Catering" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-ivory">
          <div className="max-w-3xl">
            <span className="gold-divider">— Catering Services —</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Flower Arrange — <em className="text-gold not-italic">Catering by Design</em>
            </h1>
            <p className="mt-4 text-ivory/85 text-lg">
              Multi-cuisine packages, live counters, premium hospitality.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold mt-6">
              <MessageCircle className="size-4" /> Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Package switcher */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center mb-10">
          <span className="gold-divider">— Packages —</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-burgundy">Choose Your Package</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PACKAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={active === p.id ? "btn-gold" : "btn-outline-gold"}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-gold/40 bg-card p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(123,28,46,0.35)]">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl text-burgundy">{pkg.name}</h3>
            <p className="mt-2 text-muted-foreground">{pkg.tagline}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pkg.sections.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-display text-lg text-burgundy">{s.title}</h4>
                <ul className="mt-3 space-y-1.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="size-3.5 text-gold mt-1 shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi Flower Arrange, I'd like to inquire about the ${pkg.name} catering package.`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="size-4" /> Request Information
            </a>
          </div>
        </div>
      </section>

      {/* Optional add-ons */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="text-center mb-10">
          <span className="gold-divider">— Optional Add-Ons —</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-burgundy">Breakfast, Lunch & Driver Packets</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {OPTIONAL.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-display text-xl text-burgundy">{s.title}</h4>
              <ul className="mt-3 space-y-1.5">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="size-3.5 text-gold mt-1 shrink-0" /> <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Terms */}
      <section className="container-px mx-auto max-w-5xl pb-20">
        <div className="rounded-3xl border border-gold/40 bg-card p-8 md:p-12">
          <div className="text-center mb-8">
            <span className="gold-divider">— Terms & Conditions —</span>
            <h2 className="mt-3 font-display text-3xl text-burgundy"><UtensilsCrossed className="inline size-7 text-gold mr-2" />Catering Terms (Flower Arrange)</h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {TERMS.map((t, i) => (
              <li key={i} className="flex gap-4 rounded-xl border border-border/70 bg-card/60 p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-burgundy text-ivory font-display text-sm">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-foreground/85">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="container-px mx-auto max-w-3xl pb-24">
        <InquiryForm title="Inquire About Catering" />
      </section>

      <Footer />
    </div>
  );
}
