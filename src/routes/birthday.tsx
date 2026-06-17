import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { birthdayData } from "@/data/services";

export const Route = createFileRoute("/birthday")({
  head: () => ({
    meta: [
      { title: "Birthday Decoration & Themes | Flower Arrange" },
      { name: "description", content: "Princess, jungle, neon, vintage and milestone birthday setups." },
      { property: "og:title", content: "Birthday Themes — Flower Arrange" },
      { property: "og:description", content: "Celebrate every year like it's the best one yet." },
      { property: "og:image", content: birthdayData.heroImage },
    ],
  }),
  component: () => <ServicePage data={birthdayData} />,
});
