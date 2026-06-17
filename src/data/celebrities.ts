export type Celebrity = {
  name: string;
  category: string;
  credits?: string[];
  photo?: string;
};

const placeholderPhoto = (seed: string) =>
  `https://api.dicebear.com/7.x/initials/svg?backgroundType=gradientLinear&backgroundColor=7b1c2e,c9a14a&seed=${encodeURIComponent(seed)}`;

export const CELEBRITY_GROUPS: { group: string; items: Celebrity[] }[] = [
  {
    group: "Bengali Television & Film",
    items: [
      {
        name: "Alivia Sarkar",
        category: "Bengali Actress",
        credits: [
          "Sima Rekha (as Tiya)",
          "Bhojena se Bhojena (as Gouri & Piu)",
          "Milon Tithi (as Doyel)",
          "Joyee (as Malini)",
          "Ranga Bou (as Malobika) — Zee Bangla",
          "Bhojo Gobinda (as Purbi)",
          "Phagun Bou (as Mili)",
          "Stree (as Alaya & Tania Kar)",
          "Rani Rasmoni (as Bouthan)",
          "Dhrubotara (as Anuja)",
          "Uma (as Eshita) — Zee Bangla",
          "Sathi (as Madhuri) — Sun Bangla",
          "Hara Gouri Paice Hotel (as Sohini) — Star Jalsha",
          "Movies: Ki Kore Toke Bolbo, Hoichoi Unlimited",
          "Web: Montupilot (as Saroma) — Priya Mondal",
          "Iconic: Suborno Lota, Keya Patar Nouko, Chokher Tara Tui, Dhulokona, Sonnashi Raja, Jol Thoi Thoi Valobasa",
        ],
        photo: placeholderPhoto("Alivia Sarkar"),
      },
    ],
  },
  {
    group: "Indian Idol 14 — Top Artists",
    items: [
      "Vaibhav Gupta",
      "Subhadeep Das Choudhury",
      "Piyush Panwar",
      "Anjana Padhmanaban",
      "Ananya Pal",
      "Adya Mishra",
    ].map((name) => ({ name, category: "Indian Idol 14", photo: placeholderPhoto(name) })),
  },
  {
    group: "Super Star Singer 3",
    items: [
      { name: "Atharva Bakshi", title: "Winner" },
      { name: "Avirbhav", title: "Winner" },
      { name: "Pihu", title: "Runner Up" },
      { name: "Khushi", title: "Runner Up" },
      { name: "Laisel Rai", title: "Runner Up" },
      { name: "Kshitj Saxena", title: "Runner Up" },
      { name: "Shubh", title: "Runner Up" },
      { name: "Devi", title: "Runner Up" },
      { name: "Aryan", title: "Runner Up" },
    ].map((x) => ({
      name: x.name,
      category: `Super Star Singer 3 · ${x.title}`,
      photo: placeholderPhoto(x.name),
    })),
  },
  {
    group: "Other Singers",
    items: ["Shanmukha Priya", "Deboshmita Roy", "Mani Dharamkot"].map((name) => ({
      name,
      category: "Playback Singer",
      photo: placeholderPhoto(name),
    })),
  },
  {
    group: "Bengali Film & TV Actors",
    items: [
      "Prosenjit Chatterjee",
      "Ankush Hazra",
      "Deepak Adhikari (Dev)",
      "Soham Chakraborty",
      "Srabanti Chatterjee",
      "Mimi Chakraborty",
      "Koyel Mallick",
      "Nusrat Faria",
      "Nusrat Jahan",
      "Rituparna Sengupta",
      "Pooja Banerjee",
      "Raj Barman",
    ].map((name) => ({ name, category: "Bengali Film & TV", photo: placeholderPhoto(name) })),
  },
  {
    group: "Bollywood Actors",
    items: [
      "Govinda Ahuja",
      "Rajpal Yadav",
      "Aftab Shivdasani",
      "Shakib Khan",
    ].map((name) => ({ name, category: "Bollywood Actor", photo: placeholderPhoto(name) })),
  },
];