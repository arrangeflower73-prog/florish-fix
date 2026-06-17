export const WHATSAPP_URL = "https://wa.me/918293982827";
export const PHONE = "8293982827";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/proposal", label: "Proposals" },
  { to: "/birthday", label: "Birthday" },
  { to: "/wedding", label: "Wedding" },
  { to: "/engagement", label: "Engagement" },
  { to: "/babyshower", label: "Baby Shower" },
  { to: "/bridetobe", label: "Bride To Be" },
  { to: "/anniversary", label: "Anniversary" },
  { to: "/photography", label: "Photography" },
  { to: "/makeup", label: "Makeup" },
  { to: "/catering", label: "Catering" },
  { to: "/celebrity", label: "Celebrity Booking" },
  { to: "/booking", label: "Book Date" },
] as const;

export type ServiceCard = {
  title: string;
  description: string;
  image: string;
  images?: string[];
  included: string[];
};

export type ServicePageData = {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  cards: ServiceCard[];
};

const c = (url: string) => url;

export const proposalData: ServicePageData = {
  slug: "proposal",
  title: "Marriage Proposal",
  heroTitle: "Make Her Say Yes — Forever Begins Here",
  heroSubtitle: "Romantic proposal setups crafted to take her breath away.",
  heroImage: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299727/Under_the_neon_glow_wrapped_in_each_other_s_arms_this_is_what_forever_feels_like_hodhpv.jpg"),
  intro:
    "Every proposal deserves to be unforgettable. From candlelit terraces to floating-flower cabanas, our designers handcraft the perfect moment so all you have to do is ask the question.",
  cards: [
    {
      title: "Terrace Proposal",
      description: "Fairy lights, fresh flowers and candles under the open sky.",
      image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299725/Why_hire_a_Dubai_proposal_photographer__skjomo.jpg"),
      included: ["Fairy light canopy", "Floor candle pathway", "Fresh rose arrangement", "Personalized signage", "Soft background music"],
    },
    {
      title: "Hotel Room Proposal",
      description: "Decorated suite with rose petals and a champagne setup.",
      image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299726/b9397ee8-a82b-47a5-bc47-a3d554178acd_bhhom1.jpg"),
      included: ["Rose petal carpet", "Champagne & glass setup", "LED initials", "Balloon ceiling", "Surprise gift placement"],
    },
    {
      title: "Private Cabana / Pool Proposal",
      description: "Luxury poolside setting with floating flowers and candles.",
      image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781301892/84b6d04b-0f84-49fa-8f14-a803edac6c35_jq9eyr.jpg"),
      included: ["Floating flower setup", "Cabana drapes", "Floating candles", "Champagne tower", "Photographer (1hr)"],
    },
    {
      title: "Rooftop Garden Proposal",
      description: "Lush greenery with string lights and a private dinner.",
      image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781302000/Screenshot_2026-06-12-23-47-05-42_a23b203fd3aafc6dcb84e438dda678b6_jf7cjk.jpg"),
      included: ["Greenery arch", "Edison string lights", "Two-seater dinner table", "Live acoustic option", "Custom signage"],
    },
    {
      title: "Candlelight Dinner Proposal",
      description: "Intimate restaurant-style setup designed only for two.",
      image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299725/46871044-f8cd-441e-afc0-04e32b60d70a_onwplw.jpg"),
      included: ["Premium table setting", "Pillar candles", "Floral centerpiece", "Mood lighting", "Server on request"],
    },
    {
      title: "Surprise Flash Mob Proposal",
      description: "A choreographed surprise with music and dancing.",
      image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299727/Screenshot_2026-06-13-00-33-06-54_40deb401b9ffe8e1df2f1cc5ba480b12_tnlqsq.jpg"),
      included: ["Choreographer & 6 dancers", "Sound system", "Routine planning", "Coordinated outfits", "Cinematic videographer"],
    },
  ],
};

export const birthdayData: ServicePageData = {
  slug: "birthday",
  title: "Birthday Celebration",
  heroTitle: "Celebrate Every Year Like It's the Best One Yet",
  heroSubtitle: "From fairytale princess setups to milestone grand stages.",
  heroImage: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299725/05a46b86-8211-40fd-b0cd-408851293b1d_dvvysg.jpg"),
  intro:
    "We turn birthdays into immersive theatrical moments — themed sets, balloon couture, photo-ready backdrops and cake-table styling that make every candle blown feel iconic.",
  cards: [
    { title: "Princess / Fairy Theme", description: "Pink, glitter and balloon couture for the little royal.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299724/97bb2771-c967-45ee-a336-96ad2c76e5c1_sej3s7.jpg"), images: ["https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299724/97bb2771-c967-45ee-a336-96ad2c76e5c1_sej3s7.jpg", "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299728/Screenshot_2026-06-12-23-48-05-50_a23b203fd3aafc6dcb84e438dda678b6_glwg79.jpg"], included: ["Themed backdrop", "Balloon arch", "Cake table styling", "Princess throne", "Welcome signage"] },
    { title: "Jungle Safari Theme", description: "Greens, animals and a wild safari setup.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299723/cb5796d9-3601-4624-8f80-c296a14f5ec0_yzoxtr.jpg"), included: ["Foliage backdrop", "Animal cutouts", "Themed centerpieces", "Adventure props", "Photo booth"] },
    { title: "Superhero Theme", description: "Bold colors and character balloons.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299723/84e7ba1e-c9d3-4d8e-9836-3594701cc010_kbotno.jpg"), included: ["Character cutouts", "Hero balloon arch", "Comic-style backdrop", "Mask props", "Themed cake table"] },
    { title: "Vintage / Retro Theme", description: "Classic, elegant birthday styling.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/18_ro%C4%91endan_Dekoracija_Balloon-game_U%C5%BEice_l9ltf9.jpg"), included: ["Vintage frames", "Pampas grass arch", "Antique table setting", "Polaroid wall", "Soft warm lighting"] },
    { title: "Neon / Glow Party Theme", description: "UV lights, neon balloons, and electric energy.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Happy_Date___Decora%C3%A7%C3%A3o_on_Instagram__Viva_helolinsb___euphoria_euphoriaparty_cake_r2sdvi.jpg"), included: ["UV/blacklight setup", "Neon balloon installation", "Glow props", "DJ console styling", "Neon signage"] },
    { title: "Milestone Birthday (18/21/50)", description: "Grand stage, photo walls and headline-worthy reveals.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/%D1%81%D0%B2%D1%96%D1%82%D0%BB%D0%BE%D0%B4%D1%96%D0%BE%D0%B4%D0%BD%D1%96_%D0%BC%D0%B5%D1%82%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8_%D1%96_%D1%86%D0%B8%D1%84%D1%80%D0%B8_twlsio.jpg"), included: ["Full stage design", "Photo wall", "LED initials", "Premium florals", "Host coordination"] },
  ],
};

export const weddingData: ServicePageData = {
  slug: "wedding",
  title: "Wedding Decoration",
  heroTitle: "Your Dream Wedding, Our Masterpiece",
  heroSubtitle: "Mandaps, arches and royal stages built like cinema sets.",
  heroImage: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299719/Screenshot_2026-06-13-00-51-09-55_a23b203fd3aafc6dcb84e438dda678b6_sscgwy.jpg"),
  intro:
    "From traditional marigold mandaps to minimalist white-and-gold halls, we orchestrate every petal, drape and light so your wedding day looks like the one you've imagined since forever.",
  cards: [
    { title: "Cinematic Mandap", description: "Grand floral mandap with cascading draping.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299718/Red_Wedding_Stage_Bride_and_Groom_ee8it6.jpg"), images: ["https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299718/Red_Wedding_Stage_Bride_and_Groom_ee8it6.jpg", "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299718/1e9fbafb-8269-40a3-b140-c67b9ad6624c_fzb9ac.jpg"], included: ["Floral mandap structure", "Drapery & swags", "Pathway florals", "Pheras seating", "Ambient uplighting"] },
    { title: "Floral Arch Entry", description: "A stunning flower arch as a grand entrance.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781028672/Screenshot_2026-06-06-15-03-10-85_a23b203fd3aafc6dcb84e438dda678b6_zl8zpn.jpg"), included: ["Custom floral arch", "Pathway petals", "Welcome signage", "Drape framing", "Lighting accents"] },
    { title: "Royal Stage Setup", description: "Throne-style seating with regal backdrop.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299719/6e1517b4-b654-4729-93eb-37d8bc9ac8a8_g6xq22.jpg"), included: ["Throne sofas", "Backdrop installation", "Stage carpet", "Floral side pillars", "Stage spotlights"] },
    { title: "Minimalist Modern Wedding", description: "Clean lines with a white and gold palette.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299717/mohit_gautam_ubvusi.jpg"), included: ["Geometric backdrop", "White florals", "Gold accents", "Acrylic signage", "Pin-spot lighting"] },
    { title: "Destination Wedding Setup", description: "Outdoor luxury with full tent styling.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781302902/Screenshot_2026-06-13-03-51-24-72_a23b203fd3aafc6dcb84e438dda678b6_qjef1d.jpg"), included: ["Tent styling", "Outdoor florals", "Bistro lighting", "Custom dance floor", "Weather contingency"] },
  ],
};

export const engagementData: ServicePageData = {
  slug: "engagement",
  title: "Engagement Ceremony",
  heroTitle: "A Promise Made Beautiful",
  heroSubtitle: "Garden, rooftop and grand-hall engagement designs.",
  heroImage: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781028674/Screenshot_2026-06-06-15-02-35-98_a23b203fd3aafc6dcb84e438dda678b6_x9mqgf.jpg"),
  intro:
    "Engagements deserve a setting as meaningful as the promise itself. Our engagement designs balance intimacy, family and elegance with flawless ring-ceremony styling.",
  cards: [
    { title: "Garden Engagement Party", description: "Outdoor floral garden ambience.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781303227/Wedding_under_the_fegjqs.jpg"), included: ["Garden arch", "Lounge seating", "Bistro lights", "Floral pathway", "Photo corner"] },
    { title: "Rooftop Setup", description: "Skyline backdrop with fairy lights.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299727/Screenshot_2026-06-13-00-33-06-54_40deb401b9ffe8e1df2f1cc5ba480b12_tnlqsq.jpg"), included: ["Fairy light canopy", "Cocktail tables", "Floral installations", "Custom signage", "Mood lighting"] },
    { title: "Traditional Ring Ceremony", description: "Cultural decorations with classic warmth.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781303398/56318b39-1591-4442-8e05-65e061fd8e83_kjcf6e.jpg"), included: ["Cultural backdrop", "Brass & marigold accents", "Family seating", "Pooja styling", "Photo styling"] },
    { title: "Cocktail Engagement Party", description: "Modern lounge-style engagement.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299717/cocktailparty_cocktaildress_cocktailnight_cocktailphyography_cocktailbar_happyhour_cheers_cocktail..._eventplanner_foodie_drinks_events_liquor_party_decor_style_flowers_instafashion_modern_beautiful_decorlovers_wmfnzb.jpg"), included: ["Lounge furniture", "Bar styling", "DJ booth styling", "LED accents", "Custom monogram"] },
    { title: "Grand Hall Engagement", description: "Full venue decoration with statement pieces.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299717/Romantic_Floral_Arch_Engagement_Decoration_Inspiration_kteohp.jpg"), included: ["Full hall drape", "Statement entry", "Stage build", "Centerpieces", "Lighting design"] },
  ],
};

export const babyShowerData: ServicePageData = {
  slug: "babyshower",
  title: "Baby Shower",
  heroTitle: "Welcoming the Tiniest Guest of Honor",
  heroSubtitle: "Pastel paradises, royal crowns and traditional rituals.",
  heroImage: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781303636/Screenshot_2026-06-12-23-47-35-59_a23b203fd3aafc6dcb84e438dda678b6_nabzwc.jpg"),
  intro:
    "From twinkling stars to royal crowns, our baby shower designs wrap mom-to-be in softness, joy and Instagram-worthy details.",
  cards: [
    { title: "Twinkle Twinkle Little Star", description: "Stars, moon, pastel blue and yellow.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299716/76_Best_Baby_Shower_Themes_for_a_Special_Mom-to-Be_yckvuh.jpg"), included: ["Star backdrop", "Cloud props", "Pastel balloon arch", "Hanging stars", "Welcome signage"] },
    { title: "Safari / Jungle Baby Shower", description: "Animal prints and lush greens.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299716/2ce05300-dd18-44be-9e10-c1db4ee30f6c_vilspl.jpg"), included: ["Foliage backdrop", "Plush animals", "Themed centerpieces", "Adventure props", "Photo booth"] },
    { title: "Floral Garden Shower", description: "Soft florals in peach and white.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299716/Los_Angeles_Florist_Specialists_in_Luxury_Flowers_-_Hidden_Garden_o5tri1.jpg"), included: ["Floral arch", "Peach centerpieces", "Lace linens", "Soft drape", "Garden lighting"] },
    { title: "Royal Baby Shower", description: "Gold crowns with purple and gold.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299715/11709e12-0220-4a3c-9282-1b27c0bb6f3d_kxvnum.jpg"), included: ["Throne chair", "Crown styling", "Purple drape", "Gold accents", "Royal signage"] },
    { title: "Rice Ceremony / Annaprashana", description: "Traditional Bengali setup.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Screenshot_2026-06-13-00-47-59-87_a23b203fd3aafc6dcb84e438dda678b6_yvvyml.jpg"), images: ["https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Screenshot_2026-06-13-00-47-59-87_a23b203fd3aafc6dcb84e438dda678b6_yvvyml.jpg", "https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Screenshot_2026-06-13-00-48-25-74_a23b203fd3aafc6dcb84e438dda678b6_n8wpxf.jpg"], included: ["Traditional backdrop", "Brass accessories", "Floor seating", "Cultural florals", "Pooja styling"] },
  ],
};

export const brideToBeData: ServicePageData = {
  slug: "bridetobe",
  title: "Bride To Be / Bachelorette",
  heroTitle: "Last Fling Before the Ring",
  heroSubtitle: "Bridal brunches, neon nights and boho gatherings.",
  heroImage: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299716/30d9bcbe-4b37-4ba4-89d6-170959e1a053_ynyfms.jpg"),
  intro:
    "From pastel brunches to neon-lit dance floors, our bride-to-be celebrations are equal parts elegant, playful and unforgettable. Sash, crown, balloon setup, floral backdrop, games and photobooth — we style every detail.",
  cards: [
    { title: "Sash & Crown Styling", description: "Custom sash, crown and accessories for the bride.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299716/30d9bcbe-4b37-4ba4-89d6-170959e1a053_ynyfms.jpg"), included: ["Custom sash", "Crown", "Bride tribe props", "Personalised signage", "Photo corner"] },
    { title: "Floral Backdrop", description: "Lush floral wall with the bride's name.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299716/Los_Angeles_Florist_Specialists_in_Luxury_Flowers_-_Hidden_Garden_o5tri1.jpg"), included: ["Floral wall", "Name styling", "Soft lighting", "Stage props", "Florals"] },
    { title: "Balloon Setup", description: "Pastel balloon arches and bouquets.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Happy_Date___Decora%C3%A7%C3%A3o_on_Instagram__Viva_helolinsb___euphoria_euphoriaparty_cake_r2sdvi.jpg"), included: ["Balloon arch", "Helium bouquets", "Themed colors", "Ceiling balloons", "Photo booth"] },
    { title: "Games & Photobooth", description: "Curated games and instant-print photobooth.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299722/Screenshot_2026-06-13-00-48-25-74_a23b203fd3aafc6dcb84e438dda678b6_n8wpxf.jpg"), included: ["Game master", "Props", "Photobooth", "Instant prints", "Guestbook"] },
  ],
};

export const anniversaryData: ServicePageData = {
  slug: "anniversary",
  title: "Candlelight Anniversary",
  heroTitle: "Love That Grows More Beautiful Every Year",
  heroSubtitle: "Terraces, pools and grand jubilees designed for two.",
  heroImage: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299730/Screenshot_2026-06-12-23-46-26-52_a23b203fd3aafc6dcb84e438dda678b6_zhchiq.jpg"),
  intro:
    "Whether it's your first or fiftieth, our anniversary setups bring back the butterflies — candle path setup, rose petal decoration, personalised message boards and romantic dinner arrangements designed for two.",
  cards: [
    { title: "Candle Path Setup", description: "Hundreds of candles framing your path.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299725/46871044-f8cd-441e-afc0-04e32b60d70a_onwplw.jpg"), included: ["Candle pathway", "Two-seater table", "Rose centerpiece", "Fairy light canopy", "Soft music"] },
    { title: "Rose Petal Decoration", description: "Petal-strewn floors and floating bowls.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299727/Under_the_neon_glow_wrapped_in_each_other_s_arms_this_is_what_forever_feels_like_hodhpv.jpg"), included: ["Rose petal carpet", "Petal bowls", "Drape ceiling", "Candle clusters", "Champagne setup"] },
    { title: "Personalised Message Board", description: "Custom messages, photos and signage.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299730/Screenshot_2026-06-12-23-46-26-52_a23b203fd3aafc6dcb84e438dda678b6_zhchiq.jpg"), included: ["LED initials", "Photo wall", "Custom signage", "Memory timeline", "Surprise reveal"] },
    { title: "Romantic Dinner Arrangement", description: "Private chef table for two.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781302000/Screenshot_2026-06-12-23-47-05-42_a23b203fd3aafc6dcb84e438dda678b6_jf7cjk.jpg"), included: ["Premium tableware", "Floral centerpiece", "Pairing menu styling", "Live music option", "Server"] },
  ],
};

export const photographyServices = [
  { title: "Cinematic Wedding Films & Photography", description: "Cinematic shoots and films that turn your wedding into a feature story.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299731/Screenshot_2026-06-12-23-45-35-92_a23b203fd3aafc6dcb84e438dda678b6_nwwywa.jpg") },
  { title: "Candid Moments, Timeless Memories", description: "Documentary-style candid photography that captures the unspoken moments.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299729/Screenshot_2026-06-12-23-46-48-04_a23b203fd3aafc6dcb84e438dda678b6_x8l3hj.jpg") },
  { title: "Pre-Wedding & Event Photography", description: "Editorial pre-wedding shoots and full-event coverage at any venue.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299730/Screenshot_2026-06-12-23-45-44-54_a23b203fd3aafc6dcb84e438dda678b6_shkdq1.jpg") },
];

export const makeupServices = [
  { title: "Professional Bridal Makeup", description: "HD bridal looks by senior artists with airbrush finish.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299731/Screenshot_2026-06-12-23-45-35-92_a23b203fd3aafc6dcb84e438dda678b6_nwwywa.jpg") },
  { title: "Party Makeup", description: "Glam, soft and editorial looks for parties and receptions.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299729/Screenshot_2026-06-12-23-46-48-04_a23b203fd3aafc6dcb84e438dda678b6_x8l3hj.jpg") },
  { title: "Pre-Wedding Shoot Makeup", description: "Camera-ready makeup designed for pre-wedding shoots.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299730/Screenshot_2026-06-12-23-45-44-54_a23b203fd3aafc6dcb84e438dda678b6_shkdq1.jpg") },
  { title: "Hairstyling", description: "Classic to modern hairstyling — buns, braids, open curls.", image: c("https://res.cloudinary.com/dfo4kej9j/image/upload/v1781299716/30d9bcbe-4b37-4ba4-89d6-170959e1a053_ynyfms.jpg") },
];
