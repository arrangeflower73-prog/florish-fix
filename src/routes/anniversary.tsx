import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { anniversaryData } from "@/data/services";

export const Route = createFileRoute("/anniversary")({
  head: () => ({
    meta: [
      { title: "Candlelight Anniversary Decor | Flower Arrange" },
      { name: "description", content: "Terrace, indoor, pool and jubilee anniversary setups." },
      { property: "og:title", content: "Candlelight Anniversary — Flower Arrange" },
      { property: "og:description", content: "Love that grows more beautiful every year." },
      { property: "og:image", content: anniversaryData.heroImage },
    ],
  }),
  component: () => <ServicePage data={anniversaryData} />,
});
