import { BallotStack } from "@/components/BallotStack";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { cityDeficitNote } from "@/lib/facts";

export default function BallotPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-28 md:pb-24">
      <PageIntro
        eyebrow="November 3, 2026"
        title="The stack"
        dek="It looks like a bill because it is one. Voting No on Z is the easy choice — the line you can strike without pretending the rest of the envelope doesn’t exist."
      />
      <Photo
        src="/images/ballot-table.jpg"
        alt="Vote-by-mail envelope and ballot pages on a kitchen table"
        caption="Seven local measures plus regional and state taxes. Z is the easy No."
        className="mb-8"
      />
      <BallotStack />
      <p className="mt-10 text-bay">{cityDeficitNote}</p>
    </main>
  );
}
