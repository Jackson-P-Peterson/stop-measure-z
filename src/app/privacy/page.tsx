import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24">
      <PageIntro
        eyebrow="Legal"
        title="Privacy + SMS terms"
        dek="We collect only what the forms ask for. We do not sell lists. SMS, if used, will be a separate 10DLC vendor."
      />
      <div className="space-y-4 text-bay">
        <p>
          {site.committeeName} uses this site to accept endorsements, volunteer
          sign-ups, and lawn-sign requests. Donate buttons go to Stripe. We do
          not collect card numbers on this domain.
        </p>
        <p>
          Analytics, if enabled, use Plausible or GA4 with IP anonymization. We
          store calculator square footage in your browser’s localStorage only.
        </p>
        <p>
          SMS: this site is a landing page for text programs (`utm_source=sms`).
          Message frequency varies. Message and data rates may apply. Reply STOP
          to opt out and HELP for help, once a vendor is live. TODO: insert 10DLC
          program name and help number.
        </p>
        <p>
          Contact:{" "}
          <a className="text-eucalyptus underline" href={`mailto:${site.treasurerEmail}`}>
            {site.treasurerEmail}
          </a>
        </p>
      </div>
    </main>
  );
}
