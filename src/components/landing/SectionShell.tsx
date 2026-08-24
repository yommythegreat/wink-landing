import { cn } from "@/lib/utils";

// Wraps a landing section with its mood band + inner max-width container.
// Consumers pass `mood="paper" | "paper-2" | "dark"` and get the correct
// bg/text tokens + a 1240px wrap with 40px gutter to match the mock's
// editorial grid.
export function SectionShell({
  id,
  mood = "paper",
  className,
  wrapClassName,
  children,
}: {
  id?: string;
  mood?: "paper" | "paper-2" | "dark";
  className?: string;
  wrapClassName?: string;
  children: React.ReactNode;
}) {
  const bandClass =
    mood === "dark"
      ? "section-dark"
      : mood === "paper-2"
        ? "section-paper-2"
        : "section-paper";
  return (
    <section
      id={id}
      className={cn("relative z-[2]", bandClass, className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1440px] px-6 md:px-10",
          wrapClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
