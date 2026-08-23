// Fixed SVG noise overlay for the paper mood. Rendered once at the
// Landing root; sits above the background, below content, non-interactive.
// The `.paper-grain` utility is defined in styles.css.
export function PaperGrain() {
  return <div aria-hidden className="paper-grain" />;
}
