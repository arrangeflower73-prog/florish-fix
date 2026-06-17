import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { babyShowerData } from "@/data/services";

export const Route = createFileRoute("/babyshower")({
  head: () => ({
    meta: [
      { title: "Baby Shower Decoration | Flower Arrange" },
      { name: "description", content: "Pastel, royal, safari, floral and traditional baby shower themes." },
      { property: "og:title", content: "Baby Shower Themes — Flower Arrange" },
      { property: "og:description", content: "Welcoming the tiniest guest of honor." },
      { property: "og:image", content: babyShowerData.heroImage },
    ],
  }),
  component: () => <ServicePage data={babyShowerData} />,
});
