import { cn } from "@/lib/utils";

type Props = { className?: string };

export function XIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-3.5 w-3.5", className)}
      aria-hidden
    >
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.844l-4.79-6.26L4.8 22H2l7.02-8.02L2 2h6.96l4.32 5.71L18.244 2Zm-1.2 18.4h1.86L7.04 3.5H5.06l11.984 16.9Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-3.5 w-3.5", className)}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.94a8.16 8.16 0 0 0 4.77 1.52V7.04a4.85 4.85 0 0 1-1.84-.35Z" />
    </svg>
  );
}
