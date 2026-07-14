import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Wink" },
      {
        name: "description",
        content:
          "How Wink collects, uses, and protects your personal information.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <SiteNav variant="external" />

      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: June 2, 2026
          </p>
        </header>

        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <p className="text-foreground">
              Wink (we, us, our) takes your privacy seriously. This policy explains
              what information we collect when you use the Wink mobile and web
              experience, how we use it, who it's shared with, and the choices you
              have.
            </p>
            <p>
              By using Wink you agree to the practices described here. If you don't
              agree, please don't use the app.
            </p>
          </section>

          <Section title="1. Information we collect">
            <p>
              <strong className="text-foreground">Account information.</strong>{" "}
              When you sign up we collect your email address and a password
              (stored hashed by our auth provider, never visible to us).
            </p>
            <p>
              <strong className="text-foreground">Profile information.</strong>{" "}
              Display name, date of birth, gender, bio, avatar photo, and
              interests, all of which you choose to provide during onboarding or
              from Profile › Edit.
            </p>
            <p>
              <strong className="text-foreground">Location.</strong> Wink uses
              your location two ways. On Discover, when you tap Go Live your
              device's GPS coordinates are recorded so we can show you to other
              nearby Wink users — this is only captured while you are actively
              live. For Wink Spots, we resolve your approximate location to the
              nearest city we've launched in (not a live radius) so we can show
              you Spots near you; this check happens when you open the Spots tab,
              not continuously. If you're outside every launched city, we store
              your approximate coordinates so we can notify you when Wink
              launches nearby. We do not track you in the background in either
              case.
            </p>
            <p>
              <strong className="text-foreground">Contact info.</strong> Optional
              phone number and links to your Instagram, X, and TikTok profiles.
              This is only ever shared with another user when you tap Share
              Contact inside an active chat.
            </p>
            <p>
              <strong className="text-foreground">Usage data.</strong> Winks
              sent, matches, messages, blocks, and reports are stored to operate
              the service.
            </p>
            <p>
              <strong className="text-foreground">Payments.</strong> If you
              subscribe to Premium, payment is processed by Stripe. We don't
              receive or store your card details; we only receive a subscription
              status and a reference identifier.
            </p>
          </Section>

          <Section title="2. How we use your information">
            <ul className="ml-5 list-disc space-y-2">
              <li>To operate the discovery, winking, matching, and chat features.</li>
              <li>To verify your account and prevent fraud or abuse.</li>
              <li>To send transactional emails (account verification, password resets, billing notices).</li>
              <li>To respond to your support requests at chat@usewink.app.</li>
              <li>To comply with legal obligations and enforce our Terms.</li>
            </ul>
            <p>
              We do not sell your personal data. We do not use your data to train
              advertising profiles outside of Wink.
            </p>
          </Section>

          <Section title="3. How we share your information">
            <p>
              <strong className="text-foreground">With other Wink users.</strong>{" "}
              Your display name, bio, avatar, age (derived from date of birth),
              gender, and approximate distance are shown to other users while you
              are live in Discover. Inside a Wink Spot, your display name, bio,
              and avatar are shown to other members of that same Spot — never to
              anyone outside it. Your contact info is only shared inside a chat
              when you tap Share Contact.
            </p>
            <p>
              <strong className="text-foreground">With our service providers.</strong>{" "}
              We rely on a small set of providers to run the service, including
              Supabase (database and authentication), Cloudflare Workers
              (hosting), and Stripe (payments). These providers process your data
              only on our instructions and are bound by their own privacy
              commitments.
            </p>
            <p>
              <strong className="text-foreground">For legal reasons.</strong> We
              may disclose information if required by law, subpoena, or to
              protect the safety of Wink users.
            </p>
          </Section>

          <Section title="4. Retention">
            <p>
              Chats automatically expire 24 hours after a match. Messages,
              winks, and matches are deleted with their parent chat.
            </p>
            <p>
              Your profile and account data are retained while your account is
              active. If you delete your account from Settings, your profile is
              permanently removed and your email is added to a blocklist so it
              cannot be reused to create a new account.
            </p>
            <p>
              Reports and moderation records may be retained longer for safety
              and abuse prevention.
            </p>
          </Section>

          <Section title="5. Your rights">
            <p>
              You can edit your profile, change your password, and delete your
              account at any time from Settings. You can request a copy of your
              data or ask any other privacy-related question by emailing{" "}
              <a
                href="mailto:chat@usewink.app"
                className="text-foreground underline-offset-2 hover:underline"
              >
                chat@usewink.app
              </a>
              .
            </p>
            <p>
              Depending on where you live you may have additional rights under
              local privacy law (for example access, correction, deletion, or
              portability). We will honor verified requests within a reasonable
              time.
            </p>
          </Section>

          <Section title="6. Security">
            <p>
              We use industry-standard practices: TLS in transit, encrypted
              storage at rest, hashed passwords, and strict access controls
              inside our database. No system is perfectly secure, but we work
              continuously to protect your data.
            </p>
          </Section>

          <Section title="7. Children">
            <p>
              Wink is not intended for users under 18. We do not knowingly
              collect personal information from anyone under 18. If you believe a
              minor has created an account, please email{" "}
              <a
                href="mailto:chat@usewink.app"
                className="text-foreground underline-offset-2 hover:underline"
              >
                chat@usewink.app
              </a>{" "}
              and we will remove it.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              We may update this policy from time to time. Material changes will
              be announced inside the app or by email before they take effect.
              The latest version always lives at this URL.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Questions, requests, or concerns? Reach us at{" "}
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
