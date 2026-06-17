import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { weddingData } from "@/data/services";

export const Route = createFileRoute("/wedding")({
  head: () => ({
    meta: [
      { title: "Wedding Decoration & Mandap | Flower Arrange" },
      { name: "description", content: "Cinematic mandaps, floral arches, royal stages and destination weddings." },
      { property: "og:title", content: "Wedding Decoration — Flower Arrange" },
      { property: "og:description", content: "Your dream wedding, our masterpiece." },
      { property: "og:image", content: weddingData.heroImage },
    ],
  }),
  component: () => <ServicePage data={weddingData} />,
});
