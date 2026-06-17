import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { engagementData } from "@/data/services";

export const Route = createFileRoute("/engagement")({
  head: () => ({
    meta: [
      { title: "Engagement Ceremony Decor | Flower Arrange" },
      { name: "description", content: "Indoor, garden, rooftop and grand-hall engagement setups." },
      { property: "og:title", content: "Engagement Setups — Flower Arrange" },
      { property: "og:description", content: "A promise made beautiful." },
      { property: "og:image", content: engagementData.heroImage },
    ],
  }),
  component: () => <ServicePage data={engagementData} />,
});
