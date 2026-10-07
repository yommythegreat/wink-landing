# Wink design context

## Who it's for

Young adults, roughly 21 to 35, in Nigerian cities like Lagos, who would
rather meet people in person (cafés, events, campuses, everyday places)
than swipe through profiles.

Launch strategy is students first. University campuses are steady,
crowded places where Wink Live is easy to understand, so campus examples
lead when we pick examples. The real audience is still young adults in
general; the site should never read as student-only.

## How it should feel

Warm, social, night-out. Confident and plain-spoken, like a friend
telling you about a good spot. Never corporate, never "AI startup".

## Palette

One primary, real neutrals, no gradients for decoration.

| Token           | Value     | Use                                          |
| --------------- | --------- | -------------------------------------------- |
| `--wink`        | `#c81253` | Primary. Buttons and accent text on light.   |
| `--wink-bright` | `#ff5c85` | Same pink, for text and fills on dark bands. |
| `paper`         | `#f6f4f5` | Page background. Neutral with a faint rose.  |
| `paper-2`       | `#ebe7e9` | Alternate light band.                        |
| `ink`           | `#1a1418` | Body text, plum-black.                       |
| `ink-dim`       | `#57505a` | Secondary text.                              |
| `ink-mute`      | `#665f6a` | Smallest supporting text (still 4.5:1).      |
| `dark-1`        | `#140e15` | Dark bands (trust, final CTA).               |
| `dark-2`        | `#1e1720` | Cards on paper that need the night mood.     |

The brand mark pink (`#ff3b6b`) is too light for white text (3.4:1), so
interactive fills use `--wink`. On dark bands, the `on-dark` utility swaps
the accent to `--wink-bright` with dark text on buttons.

## Type

- Headings: Bricolage Grotesque (Google Fonts), 600 to 700.
- Body: system sans stack (SF Pro on Apple, Segoe/system-ui elsewhere).
- Body text is 16px or larger. Nothing functional below 12px.

## Rules

- No kicker labels above headings, no pill badges, no marquees.
- No hover lifts or zooms. Hover changes color only.
- No scroll-reveal animation. Motion only when state changes
  (accordion, mobile menu, toggle).
- Icons sit beside text, never in a container above a heading.
- No em dashes in visible copy.
