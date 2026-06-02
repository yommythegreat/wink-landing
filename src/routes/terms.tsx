import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Wink" },
      {
        name: "description",
        content:
          "The rules that govern your use of the Wink app and service.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <SiteNav variant="external" />

      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: June 2, 2026
          </p>
        </header>

        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <p className="text-foreground">
              Welcome to Wink. These Terms & Conditions ("Terms") govern your
              use of the Wink app and website. By creating an account or using
              the service you agree to these Terms. If you don't agree, please
              don't use Wink.
            </p>
          </section>

          <Section title="1. Eligibility">
            <p>
              You must be at least 18 years old to use Wink. By signing up you
              represent that you meet this requirement, that the information you
              provide is accurate, and that you have the legal capacity to enter
              into this agreement.
            </p>
          </Section>

          <Section title="2. Your account">
            <p>
              You are responsible for keeping your password secret and for any
              activity that happens under your account. Notify us at{" "}
              <a
                href="mailto:chat@usewink.app"
                className="text-foreground underline-offset-2 hover:underline"
              >
                chat@usewink.app
              </a>{" "}
              right away if you suspect unauthorized use.
            </p>
            <p>
              You may have one account at a time. Sharing an account with
              another person is not permitted.
            </p>
          </Section>

          <Section title="3. Acceptable use">
            <p>You agree not to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Harass, threaten, stalk, defame, or send sexually explicit unsolicited content to any user.</li>
              <li>Impersonate another person or misrepresent your identity, age, or affiliation.</li>
              <li>Use Wink for commercial solicitation, spam, or recruitment outside Wink's intended use.</li>
              <li>Use bots, scrapers, or automated tools to access the service.</li>
              <li>Attempt to circumvent the discovery radius, location requirements, or any safety feature.</li>
              <li>Upload content you don't own or have rights to share, including other people's photos.</li>
              <li>Share illegal content or content that infringes others' rights.</li>
            </ul>
            <p>
              We may remove content, block, or terminate accounts that violate
              these rules, at our discretion and without notice.
            </p>
          </Section>

          <Section title="4. Your content">
            <p>
              You retain ownership of the content you post on Wink (your
              profile, bio, photos, messages). You grant Wink a worldwide,
              non-exclusive, royalty-free license to host, display, and transmit
              your content solely so we can operate the service and show your
              profile to other users while you are live.
            </p>
            <p>
              You are responsible for the content you post. Wink does not
              pre-screen content but may remove anything that violates these
              Terms.
            </p>
          </Section>

          <Section title="5. Matching, chats, and contact sharing">
            <p>
              Wink does not guarantee that you will match with anyone, meet
              anyone, or form any relationship. Mutual matches unlock a 24-hour
              chat window. After 24 hours the chat is permanently deleted.
            </p>
            <p>
              When you tap Share Contact, your saved phone number and social
              links are sent to the other user in that chat. Once shared, that
              user can save or forward your contact info; we cannot retract it.
              Only share information you are comfortable releasing.
            </p>
          </Section>

          <Section title="6. Premium subscriptions">
            <p>
              Wink offers a Premium subscription with billing handled by Stripe.
              By subscribing you authorize Wink (via Stripe) to charge the
              payment method on file for each renewal period until you cancel.
            </p>
            <p>
              You can cancel anytime from Settings › Plan. Cancellation takes
              effect at the end of the current billing cycle; we do not provide
              partial-period refunds except where required by law.
            </p>
            <p>
              Prices, plan options, and any introductory offers are described
              inside the app and may change with notice for future renewals.
            </p>
          </Section>

          <Section title="7. Blocks and reports">
            <p>
              You can block any user from inside a chat. Blocking immediately
              ends that conversation and prevents either party from appearing in
              the other's discovery feed.
            </p>
            <p>
              When blocking, you may optionally submit a report. Reports are
              reviewed by our moderation team. We may dismiss, mark as reviewed,
              suspend, or permanently ban the reported account based on what we
              find. We will not generally tell you the outcome of a specific
              report.
            </p>
          </Section>

          <Section title="8. Termination">
            <p>
              You can delete your account at any time from Settings. We may
              suspend or terminate your access if you violate these Terms,
              create risk for Wink or other users, or if required by law.
            </p>
            <p>
              On account deletion your profile is permanently removed and your
              email is blocklisted so it cannot be reused to create a new
              account.
            </p>
          </Section>

          <Section title="9. Disclaimers">
            <p>
              Wink is provided "as is" and "as available." We do not warrant
              that the service will be uninterrupted, secure, error-free, or
              that it will produce any particular outcome. We do not screen
              users for criminal background, sex offender status, identity, or
              compatibility. Use real-world common sense when meeting anyone in
              person.
            </p>
          </Section>

          <Section title="10. Limitation of liability">
            <p>
              To the maximum extent permitted by law, Wink and its operators
              shall not be liable for any indirect, incidental, special, or
              consequential damages, or for any loss of profits, revenue, data,
              or goodwill arising out of or related to your use of the service.
              Our total liability for any claim related to the service will not
              exceed the amount you paid us in the twelve months before the
              event giving rise to the claim, or $50, whichever is greater.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify and hold Wink and its operators harmless
              from any claim, liability, or expense arising from your content,
              your use of the service, or your violation of these Terms or any
              law.
            </p>
          </Section>

          <Section title="12. Changes to these Terms">
            <p>
              We may update these Terms from time to time. Material changes will
              be announced inside the app or by email before they take effect.
              Continued use of Wink after a change means you accept the updated
              Terms.
            </p>
          </Section>

          <Section title="13. Governing law">
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              Wink operates. Any dispute relating to these Terms or to the
              service will be resolved in the courts of that jurisdiction,
              unless local law gives you a non-waivable right to bring an action
              elsewhere.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              Questions about these Terms? Email{" "}
              <a
                href="mailto:chat@usewink.app"
                className="text-foreground underline-offset-2 hover:underline"
              >
                chat@usewink.app
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
