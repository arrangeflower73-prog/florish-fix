import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { proposalData } from "@/data/services";

export const Route = createFileRoute("/proposal")({
  head: () => ({
    meta: [
      { title: "Marriage Proposal Decoration | Flower Arrange" },
      { name: "description", content: "Romantic proposal setups — terrace, hotel, cabana, rooftop, candlelight & flash mob." },
      { property: "og:title", content: "Marriage Proposal Setups — Flower Arrange" },
      { property: "og:description", content: "Make her say yes. Forever begins here." },
      { property: "og:image", content: proposalData.heroImage },
    ],
  }),
  component: () => <ServicePage data={proposalData} />,
});
