import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { brideToBeData } from "@/data/services";

export const Route = createFileRoute("/bridetobe")({
  head: () => ({
    meta: [
      { title: "Bride To Be & Bachelorette | Flower Arrange" },
      { name: "description", content: "Bridal brunch, neon nights, spa days, boho and bride tribe celebrations." },
      { property: "og:title", content: "Bride To Be — Flower Arrange" },
      { property: "og:description", content: "Last fling before the ring." },
      { property: "og:image", content: brideToBeData.heroImage },
    ],
  }),
  component: () => <ServicePage data={brideToBeData} />,
});
