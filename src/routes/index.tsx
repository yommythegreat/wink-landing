import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";
import { seo } from "@/components/landing/copy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <Landing />;
}
