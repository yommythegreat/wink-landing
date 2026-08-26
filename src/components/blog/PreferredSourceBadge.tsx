// Google Search "Preferred Sources" button.
//
// When a signed-in Google user clicks it, they can mark usewink.app
// as a preferred source; our blog posts then get a "preferred" badge
// in Top Stories and boosted placement in AI Overviews.
//
// Google's publisher.js script is loaded once in __root.tsx. It scans
// the DOM for the marker attribute below and swaps in its own UI —
// nothing to import here, just the marker div.
//
// See: https://developers.google.com/search/docs/appearance/preferred-sources

// The marker attribute is a Google Web-Component-style directive, not
// a valid React prop, so TS's HTML attribute typing doesn't know it.
// Cast to a permissive record for the one attribute.
const markerProps = {
  "google-add-preferred-source-btn": "",
  "data-theme": "light",
  "data-lang": "en",
} as unknown as React.HTMLAttributes<HTMLDivElement>;

export function PreferredSourceBadge() {
  return (
    <div className="mt-6 flex justify-start">
      <div {...markerProps} />
    </div>
  );
}
