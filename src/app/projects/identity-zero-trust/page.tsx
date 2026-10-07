import Header from "@/components/Header";

const stack = [
  "Microsoft Entra ID",
  "Identity & Access Management",
  "MFA",
  "Conditional Access",
  "RBAC",
  "Least Privilege",
  "Account Lifecycle",
  "Zero Trust",
];

const architecture = [
  {
    number: "01",
    title: "Identity",
    text: "Treat identity as the control plane for deciding who can access systems, applications, and administrative functions.",
  },
  {
    number: "02",
    title: "Authentication",
    text: "Use MFA and stronger authentication controls to reduce dependence on passwords alone.",
  },
  {
    number: "03",
    title: "Authorization",
    text: "Design access around roles, groups, and least privilege rather than broad permissions assigned directly to individuals.",
  },
  {
    number: "04",
    title: "Lifecycle",
    text: "Manage access as something that changes throughout onboarding, role changes, transfers, and offboarding.",
  },
];

const labWork = [
  {
    status: "In Progress",
    title: "Conditional Access",
    text: "Building scenarios around authentication requirements, access conditions, user context, application sensitivity, and stronger enforcement.",
  },
  {
    status: "In Progress",
    title: "MFA Enforcement",
    text: "Studying how MFA policies can reduce account compromise while still supporting real operational workflows and user access.",
  },
  {
    status: "In Progress",
    title: "Role-Based Access",
    text: "Modeling permissions around job responsibilities so access can be managed through roles and groups instead of direct assignment.",
  },
  {
    status: "Planned",
    title: "Joiner / Mover / Leaver",
    text: "Designing repeatable workflows for provisioning, modifying, reviewing, and removing access as users move through the organization.",
  },
  {
    status: "Planned",
    title: "Privileged Access",
    text: "Exploring how administrative privileges can be separated from standard user access and limited to controlled workflows.",
  },
  {
    status: "Planned",
    title: "Access Reviews",
    text: "Planning periodic reviews so permissions can be validated and unnecessary access removed as responsibilities change.",
  },
];

const operationalScenarios = [
  {
    number: "01",
    title: "New Employee",
    question:
      "What access should a new user receive on day one, and who should approve it?",
    response:
      "Define access through role-based groups and documented ownership instead of copying another employee's permissions.",
  },
  {
    number: "02",
    title: "Role Change",
    question:
      "What happens when an employee changes departments or responsibilities?",
    response:
      "Remove access that is no longer required before layering on new permissions so privileges do not accumulate indefinitely.",
  },
  {
    number: "03",
    title: "MFA Fatigue",
    question:
      "How should repeated unexpected MFA prompts be treated?",
    response:
      "Treat unexpected prompts as a potential identity incident, contain the account, review authentication activity, and validate user behavior.",
  },
  {
    number: "04",
    title: "Privileged Administration",
    question:
      "Should everyday user accounts carry administrative privileges?",
    response:
      "Separate normal work from privileged administration and reduce standing access wherever practical.",
  },
  {
    number: "05",
    title: "Offboarding",
    question:
      "How quickly should access disappear when a user leaves?",
    response:
      "Disable identity access promptly, invalidate active sessions where appropriate, remove privileged access, and document completion.",
  },
  {
    number: "06",
    title: "Access Drift",
    question:
      "How do permissions become excessive over time?",
    response:
      "Use periodic review, ownership, documentation, and role-based assignment to identify and remove accumulated access.",
  },
];

const zeroTrustPrinciples = [
  {
    number: "01",
    title: "Verify Explicitly",
    text: "Make access decisions using identity, authentication strength, device context, risk, and other available signals instead of relying on location alone.",
  },
  {
    number: "02",
    title: "Use Least Privilege",
    text: "Provide only the permissions required for the current role and reduce standing administrative access wherever possible.",
  },
  {
    number: "03",
    title: "Assume Breach",
    text: "Design access so one compromised identity or device does not automatically provide unrestricted movement across the environment.",
  },
];

const lessons = [
  "Identity security is as much about lifecycle and governance as it is about authentication.",
  "Directly assigned permissions become difficult to review and remove as environments grow.",
  "MFA improves security, but policy design still has to account for user behavior and operational reality.",
  "Least privilege works best when access has clear ownership and is tied to defined roles.",
  "Documentation and access reviews are necessary because permissions naturally drift over time.",
];

const nextSteps = [
  "Build additional Conditional Access scenarios",
  "Create joiner, mover, and leaver workflows",
  "Document role and group design",
  "Expand privileged-access testing",
  "Add access-review exercises",
  "Map lab controls to hospitality IT scenarios",
];

export const metadata = {
  title: "Identity & Zero Trust Lab",
  description:
    "A hands-on identity and Zero Trust lab focused on Microsoft Entra ID, MFA, Conditional Access, RBAC, least privilege, account lifecycle, and privileged access.",
};

export default function IdentityZeroTrustPage() {
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
              who is requesting access, what they are allowed to reach, under
              what conditions access should be granted, and how that access
              changes over time.
            </p>

            <p>
              This lab is designed to move beyond certification theory by
              turning IAM concepts into repeatable scenarios around MFA,
              Conditional Access, role design, least privilege, lifecycle
              management, and privileged access.
            </p>

            <p>
              The project is intentionally iterative. Some controls are already
              being explored, while others remain planned until the supporting
              lab environment and policies are built out further.
            </p>
          </div>
        </div>
      </section>

      {/* Identity Architecture */}
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
            {architecture.map((item) => (
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

      {/* Lab Work */}
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
              What I&apos;m Building
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              The lab is organized around practical identity problems rather
              than treating each Entra ID feature as an isolated exercise.
            </p>

            <div className="mt-8 rounded-xl border-l-2 border-[#D6A85F] bg-[#F7F8F6] p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                Current State
              </p>

              <p className="mt-2 text-sm leading-6 text-[#456174]">
                Conditional Access, MFA, and role-based access are current
                areas of study and lab development. Lifecycle workflows,
                privileged access, and formal access reviews are planned as the
                environment matures.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {labWork.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                    item.status === "In Progress"
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

      {/* Operational Scenarios */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Operational Scenarios
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Identity Problems in the Real World
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-white/65">
            The most useful identity exercises are the ones that mirror
            problems administrators actually have to solve.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {operationalScenarios.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <div className="mt-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#79B8AE]">
                    Question
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {item.question}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D6A85F]">
                    Approach
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    {item.response}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Zero Trust
            </p>
          </div>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight">
            Verify Access Instead of Assuming Trust
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {zeroTrustPrinciples.map((item) => (
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

          <div className="mt-12 border-l-2 border-[#D6A85F] pl-5">
            <p className="max-w-3xl font-serif text-xl italic leading-8 text-[#456174]">
              “Identity should answer more than who you are. It should help
              determine what you can reach, under what conditions, and for how
              long.”
            </p>
          </div>
        </div>
      </section>

      {/* Lessons + Next Steps */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Lessons Learned
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              What the Lab Is Teaching Me
            </h2>

            <div className="mt-8 space-y-5">
              {lessons.map((item, index) => (
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

            <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-tight sm:text-3xl">
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