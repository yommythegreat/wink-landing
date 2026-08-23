import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "../Eyebrow";
import { SectionShell } from "../SectionShell";
import { useReveal } from "@/lib/useReveal";
import { faq } from "../copy";

export function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <SectionShell id="faq" mood="paper" className="py-24 md:py-32">
      <Eyebrow tone="ink-mute">{faq.eyebrow}</Eyebrow>
      <div ref={ref} data-reveal className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-[color:var(--color-paper-line)]"
            >
              <AccordionTrigger className="text-left text-[19px] font-semibold text-ink hover:text-accent md:text-[22px]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pr-4 text-[15px] leading-relaxed text-[color:var(--color-ink-dim)] md:text-[17px]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
