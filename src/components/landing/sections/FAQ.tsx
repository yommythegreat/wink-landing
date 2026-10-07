import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionShell } from "../SectionShell";
import { faq } from "../copy";

export function FAQ() {
  return (
    <SectionShell id="faq" mood="paper" className="py-24 md:py-32">
      <h2 className="h-lg max-w-[20ch] text-ink">{faq.headline}</h2>
      <div className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-[color:var(--color-paper-line)] py-2"
            >
              <AccordionTrigger className="text-left text-[19px] font-semibold text-ink hover:text-accent md:text-[22px]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pr-4 text-[16px] leading-relaxed text-[color:var(--color-ink-dim)] md:text-[17px]">
                {Array.isArray(item.a) ? (
                  <div className="space-y-3">
                    {item.a.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                ) : (
                  <p>{item.a}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
