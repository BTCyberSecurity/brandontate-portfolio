import Header from "@/components/Header";

const stack = [
  "Microsoft Entra ID",
  "IAM",
  "MFA",
  "Conditional Access",
  "RBAC",
  "Zero Trust",
  "Account Lifecycle",
  "Privileged Access",
];

const identityLayers = [
  {
    number: "01",
    title: "Identity",
    text: "Treat identity as the primary control plane for deciding who receives access and under what conditions.",
  },
  {
    number: "02",
    title: "Authentication",
    text: "Use stronger authentication controls and MFA to reduce dependence on passwords alone.",
  },
  {
    number: "03",
    title: "Authorization",
    text: "Apply role-based access and least privilege so users receive only the permissions required for their responsibilities.",
  },
  {
    number: "04",
    title: "Lifecycle",
    text: "Design repeatable joiner, mover, and leaver processes so account access follows the user's relationship with the organization.",
  },
];

const scenarios = [
  {
    title: "Conditional Access",
    status: "Lab Focus",
    text: "Design access policies around authentication strength, device state, user risk, location, and application sensitivity.",
  },
  {
    title: "MFA Enforcement",
    status: "Lab Focus",
    text: "Explore how stronger authentication can be introduced while maintaining usability and operational continuity.",
  },
  {
    title: "Role-Based Access",
    status: "Lab Focus",
    text: "Model permissions around job responsibilities instead of assigning broad access directly to individual users.",
  },
  {
    title: "Account Lifecycle",
    status: "Lab Focus",
    text: "Build repeatable processes for creating, modifying, disabling, and reviewing user access.",
  },
  {
    title: "Privileged Workflows",
    status: "Research",
    text: "Evaluate how administrative access should be separated, limited, monitored, and used only when required.",
  },
  {
    title: "Access Reviews",
    status: "Research",
    text: "Explore periodic validation of permissions so access does not accumulate indefinitely as roles change.",
  },
];

const nextSteps = [
  "Build additional Conditional Access scenarios",
  "Document joiner, mover, and leaver workflows",
  "Expand privileged-access design",
  "Add access-review exercises",
  "Map controls to practical business scenarios",
];

export const metadata = {
  title: "Identity & Zero Trust Lab",
  description:
    "A hands-on identity and Zero Trust lab focused on Microsoft Entra ID, MFA, Conditional Access, RBAC, account lifecycle, and privileged access.",
};

export default function IdentityZeroTrustPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-6 pb-16 pt-24 text-white sm:pb-20 sm:pt-32 lg:px-8">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 75% 30%, #147BC1 0%, transparent 42%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/#projects"
            className="text-sm font-bold text-[#D6A85F] transition hover:text-white"
          >
            ← Back to Projects
          </a>

          <div className="mt-10 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Identity & Access
            </p>

            <h1 className="mt-4 text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Identity & Zero Trust Lab
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:mt-6 sm:text-xl sm:leading-8">
              A hands-on security lab focused on identity as the control plane:
              authentication, authorization, Conditional Access, lifecycle
              management, privileged access, and practical Zero Trust design.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Overview
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Why Identity Comes First
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              Many security decisions eventually become identity decisions:
              who is requesting access, what they are allowed to reach, what
              conditions should apply, and how that access changes over time.
            </p>

            <p>
              This lab gives me a structured environment for studying identity
              security beyond certification theory. The focus is on designing
              access around business roles and security conditions rather than
              simply granting permissions.
            </p>

            <p>
              The project is intentionally iterative. I am building and
              documenting scenarios as my Entra ID, IAM, cloud security, and
              Zero Trust skills expand.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Identity Architecture
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Access as a Lifecycle
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {identityLayers.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-6"
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

      {/* Lab scenarios */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Lab Work
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Scenarios I&apos;m Building
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              The lab is organized around practical identity problems rather
              than isolated product features.
            </p>

            <div className="mt-8 rounded-xl border-l-2 border-[#D6A85F] bg-[#F7F8F6] p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                Project Status
              </p>

              <p className="mt-2 text-sm leading-6 text-[#456174]">
                This project is actively being developed. The page documents
                the lab design and the areas being implemented as my identity
                security work expands.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {scenarios.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                    item.status === "Lab Focus"
                      ? "bg-[#DDEAF3] text-[#2F6F9F]"
                      : "bg-[#F3E7CF] text-[#936D27]"
                  }`}
                >
                  {item.status}
                </span>

                <h3 className="mt-4 text-lg font-black text-[#102F46]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Zero Trust
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight">
            Verify Access Instead of Assuming Trust
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Verify Explicitly",
                text: "Use identity, authentication context, risk, device state, and other available signals when making access decisions.",
              },
              {
                title: "Least Privilege",
                text: "Reduce standing access and design permissions around what users and administrators actually need.",
              },
              {
                title: "Assume Breach",
                text: "Design access so one compromised account or device does not automatically provide unrestricted movement.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-l-2 border-[#D6A85F] pl-5">
            <p className="max-w-3xl font-serif text-xl italic leading-8 text-white/70">
              “Identity should answer more than who you are. It should help
              determine what you can reach, under what conditions, and for how
              long.”
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Lessons
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              What I&apos;m Learning
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "Identity architecture is as much about lifecycle and governance as authentication.",
                "Least privilege becomes harder to maintain when access is assigned directly instead of through well-designed roles.",
                "Security controls need to account for user experience and operational requirements.",
                "Documentation makes identity decisions easier to review and improve.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-[#D9E0E2] pb-5"
                >
                  <span className="text-xs font-black tracking-[0.18em] text-[#D6A85F]">
                    0{index + 1}
                  </span>

                  <p className="text-sm leading-6 text-[#456174]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#102F46] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Next Steps
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Expanding the Lab
            </h2>

            <div className="mt-8 space-y-4">
              {nextSteps.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:gap-4"
                >
                  <span className="text-xs font-black tracking-[0.18em] text-[#D6A85F]">
                    0{index + 1}
                  </span>

                  <p className="text-sm leading-6 text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#0F3046] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6A85F]">
              More Projects
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Explore the rest of the lab.
            </h2>
          </div>

          <a
            href="/#projects"
            className="w-fit rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#102F46]"
          >
            Back to Projects →
          </a>
        </div>
      </section>
    </main>
  );
}