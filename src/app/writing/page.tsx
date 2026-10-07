import Header from "@/components/Header";

const immediateActions = [
  {
    number: "01",
    title: "Contact the User",
    text: "Confirm whether the user initiated the authentication attempts and determine whether they approved any unexpected prompts.",
  },
  {
    number: "02",
    title: "Contain the Account",
    text: "If the prompts were not initiated by the user, treat the activity as suspicious and begin containment before continuing normal troubleshooting.",
  },
  {
    number: "03",
    title: "Review Authentication Activity",
    text: "Examine recent sign-ins, authentication attempts, locations, devices, applications, failures, and other available identity signals.",
  },
  {
    number: "04",
    title: "Invalidate Existing Access",
    text: "When compromise is suspected, revoke active sessions and require fresh authentication so existing access cannot simply continue.",
  },
];

const investigation = [
  "Was the MFA request initiated by the user?",
  "Did the user approve any unexpected authentication prompt?",
  "Are there successful sign-ins from unfamiliar devices or locations?",
  "Are repeated failures coming from the same source?",
  "Was a new authentication method recently registered?",
  "Did the account access applications it normally does not use?",
  "Are other users showing similar authentication behavior?",
  "Is there evidence that credentials may have been exposed elsewhere?",
];

const responsePhases = [
  {
    phase: "Contain",
    text: "Stop potentially unauthorized access before spending too much time investigating the full story.",
  },
  {
    phase: "Investigate",
    text: "Review identity activity and determine whether the event represents failed abuse, successful compromise, or legitimate behavior.",
  },
  {
    phase: "Recover",
    text: "Restore normal access only after credentials, sessions, MFA methods, and account state have been reviewed.",
  },
  {
    phase: "Improve",
    text: "Use the incident to identify policy, training, monitoring, or access-control changes that could reduce future risk.",
  },
];

const lessons = [
  "Repeated MFA prompts should not automatically be treated as a routine user-support issue.",
  "An MFA denial can still be useful evidence that someone may know the password.",
  "Containment and investigation should happen in parallel when identity compromise is plausible.",
  "User confirmation is important, but identity logs provide the technical evidence.",
  "A resolved incident should leave behind documentation and a stronger control environment.",
];

export const metadata = {
  title: "MFA Fatigue: Containment and Response",
  description:
    "A practical workflow for responding to repeated unauthorized MFA prompts, including containment, authentication review, recovery, and lessons learned.",
};

export default function MfaFatigueResponsePage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-5 pb-16 pt-24 text-white sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 75% 30%, #147BC1 0%, transparent 42%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <a
            href="/writing"
            className="text-sm font-bold text-[#D6A85F] transition hover:text-white"
          >
            ← Back to Engineering Notebook
          </a>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Security Operations
          </p>

          <h1 className="mt-4 text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            MFA Fatigue:
            <br />
            Containment and Response
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            Repeated MFA prompts that a user did not initiate should be treated
            as a potential identity-security incident, not simply an annoying
            authentication problem.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Identity",
              "MFA",
              "Incident Response",
              "Microsoft Entra ID",
              "Authentication",
            ].map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Scenario
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              The User Says:
              <br />
              “I Didn&apos;t Do That.”
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              A user reports receiving repeated MFA prompts even though they
              are not actively signing in. The immediate temptation may be to
              troubleshoot the authenticator application or assume the prompts
              are accidental.
            </p>

            <p>
              But an unexpected MFA request may indicate that someone already
              has the user&apos;s password and is attempting to complete the
              second step of authentication.
            </p>

            <p>
              At that point the problem changes from authentication support to
              potential account compromise.
            </p>
          </div>
        </div>
      </section>

      {/* First 15 Minutes */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              First Response
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            The First 15 Minutes
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            The early objective is to establish whether the activity is
            legitimate, reduce the chance of continued access, and preserve
            enough evidence to understand what happened.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {immediateActions.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Investigation */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Investigation
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Questions the Evidence Should Answer
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-white/65">
              The goal is to reconstruct what the identity was doing rather
              than relying only on the user&apos;s memory of the prompts.
            </p>
          </div>

          <div className="space-y-3">
            {investigation.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <span className="text-xs font-black tracking-[0.18em] text-[#D6A85F]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Lifecycle */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Response Lifecycle
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Contain. Investigate. Recover. Improve.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {responsePhases.map((item, index) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.phase}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Context */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Operational Context
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Security Still Has to Support the User
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              In an operational environment, an account may be tied to email,
              property systems, collaboration tools, file access, and other
              services the user needs to perform their job.
            </p>

            <p>
              That does not mean containment should be delayed. It means the
              response should include communication, ownership, recovery
              planning, and an understanding of what business processes may be
              affected.
            </p>

            <p>
              The objective is not simply to lock an account. It is to reduce
              risk, understand what happened, and safely return the user to
              normal operation.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Lessons
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              What This Scenario Reinforces
            </h2>
          </div>

          <div className="space-y-4">
            {lessons.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <span className="text-xs font-black tracking-[0.18em] text-[#D6A85F]">
                  0{index + 1}
                </span>

                <p className="text-sm leading-6 text-[#456174]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Takeaway
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            An MFA Prompt Can Be an Incident Signal
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
            MFA is an important control, but the prompt itself can become a
            useful security signal. Unexpected authentication requests should
            trigger validation, investigation, and a response proportional to
            the evidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/writing"
              className="rounded-md bg-[#D6A85F] px-6 py-3 text-sm font-bold text-[#102F46] transition hover:bg-white"
            >
              Engineering Notebook
            </a>

            <a
              href="/projects/identity-zero-trust"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#102F46]"
            >
              Identity & Zero Trust Lab
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}