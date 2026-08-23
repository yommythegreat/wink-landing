import { useEffect, useRef } from "react";

// IntersectionObserver-based scroll reveal. Attach the returned ref to
// an element that also has data-reveal in the DOM; when the element
// enters the viewport, data-revealed="true" is set once and the
// observer disconnects. CSS handles the actual fade + rise.
//
// Respects prefers-reduced-motion — matching users skip the hook
// entirely (styles already treat data-reveal elements as visible when
// reduced motion is set).
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      el.setAttribute("data-revealed", "true");
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      // Old browsers — skip the animation and show content.
      el.setAttribute("data-revealed", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
