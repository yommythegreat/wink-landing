import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";

// Public help page. Also the Support URL on the App Store listing, which Apple
// requires to be a page with a way to contact us.
export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support | Wink" },
      {
        name: "description",
        content:
          "Get help with Wink: contact us, using Live, Winks and Spots, staying safe, and managing your account.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: SupportPage,
});

const SUPPORT_EMAIL = "support@usewink.app";

function SupportPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <SiteNav variant="external" />

      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Help
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Support
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: October 8, 2026
          </p>
        </header>

        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <Section title="Contact us">
            <p className="text-foreground">
              Questions, problems or feedback? Email us at{" "}
              <EmailLink /> and we'll get back to you.
            </p>
            <p>
              To help us sort things out quickly, please include the email address
              on your Wink account, whether you use the iPhone app, the Android app
              or the web app, and a screenshot if something looks wrong.
            </p>
          </Section>

          <Section title="Using Wink">
            <p>
              <strong className="text-foreground">Wink Live.</strong> Tap Go Live
              to see other people who are live near you right now, and to let them
              see you. If your radar is empty, nobody nearby is live at the moment;
              try again later or somewhere busier. Your session ends on its own when
              the timer runs out, or you can end it at any time.
            </p>
            <p>
              <strong className="text-foreground">Winks and matches.</strong> Send
              a wink to someone who catches your eye. If they wink back, it's a
              match and you can start chatting. You'll find winks you've sent and
              received in the Winks tab.
            </p>
            <p>
              <strong className="text-foreground">Wink Spots.</strong> Join Spots,
              the places you already go, to meet other people who go there too.
              Spots are currently available in Lagos and Ibadan. If you're
              somewhere else, the Spots tab will tell you Wink isn't in your area
              yet.
            </p>
            <p>
              <strong className="text-foreground">Notifications.</strong> Allow
              notifications to hear about new winks, matches and messages. You can
              choose which ones you get in Settings.
            </p>
          </Section>

          <Section title="Staying safe">
            <p>
              <strong className="text-foreground">Block or report someone.</strong>{" "}
              Open your chat with them, tap the menu (•••) and choose Block. You can
              report them at the same time. To report a single message, press and
              hold it and tap Report.
            </p>
            <p>
              <strong className="text-foreground">Unblock someone.</strong> Go to
              Profile › Settings › Blocked people.
            </p>
            <p>
              <strong className="text-foreground">Safety tips.</strong> Find them in
              Profile › Settings › Safety centre. Meet in public places, tell a
              friend where you're going, and never send money to someone you've met
              on Wink.
            </p>
            <p>
              If you or someone else is in immediate danger, contact your local
              emergency services first (112 in Nigeria). Then tell us at{" "}
              <EmailLink /> so we can act on the account.
            </p>
          </Section>

          <Section title="Your account">
            <p>
              <strong className="text-foreground">Delete your account.</strong> Go
              to Profile › Settings › Delete account. This permanently deletes your
              account and your data, and can't be undone. If you can't sign in,
              email us from the address on your account and we'll delete it for
              you.
            </p>
            <p>
              <strong className="text-foreground">Can't sign in?</strong> Use
              "Forgot password" on the sign-in screen to reset your password. If
              that doesn't work, email us.
            </p>
          </Section>

          <Section title="Privacy and terms">
            <p>
              Read how we handle your information in our{" "}
              <a
                href="/privacy"
                className="text-foreground underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
              , and the rules for using Wink in our{" "}
              <a
                href="/terms"
                className="text-foreground underline-offset-2 hover:underline"
              >
                Terms of Service
              </a>
              .
            </p>
          </Section>
        </div>
      </main>

      <SiteFooter variant="external" />
    </div>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className="text-foreground underline-offset-2 hover:underline"
    >
      {SUPPORT_EMAIL}
    </a>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      {children}
    </section>
  );
}
