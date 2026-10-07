import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { Hero } from "./sections/Hero";
import { TwoProducts } from "./sections/TwoProducts";
import { HowItWorks } from "./sections/HowItWorks";
import { EditorialQuote } from "./sections/EditorialQuote";
import { Trust } from "./sections/Trust";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";

// Composition root for the marketing landing page.
export function Landing() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <SiteNav />
      <main id="top">
        <Hero />
        <TwoProducts />
        <HowItWorks />
        <EditorialQuote />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
