import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { PaperGrain } from "./PaperGrain";
import { Hero } from "./sections/Hero";
import { CategoryTicker } from "./sections/CategoryTicker";
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
      <PaperGrain />
      <SiteNav />
      <main id="top">
        <Hero />
        <CategoryTicker />
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
