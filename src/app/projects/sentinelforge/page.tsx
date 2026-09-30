import Header from "@/components/Header";

const stack = [
  "Security Operations",
  "Local AI",
  "Log Analysis",
  "Incident Response",
  "Automation",
  "Python",
  "PowerShell",
  "Research",
];

const workflow = [
  {
    number: "01",
    title: "Collect",
    text: "Bring relevant security events, logs, alerts, or structured data into a workflow that can be reviewed consistently.",
  },
  {
    number: "02",
    title: "Classify",
    text: "Explore whether local AI can help group, label, prioritize, or summarize events without replacing analyst judgment.",
  },
  {
    number: "03",
    title: "Investigate",
    text: "Use structured prompts and supporting context to help surface relationships, questions, and possible next investigative steps.",
  },
  {
    number: "04",
    title: "Respond",
    text: "Explore repeatable workflows that assist documentation, containment planning, communication, and follow-up actions.",
  },
];

const useCases = [
  {
    status: "Research",
    title: "Event Classification",
    text: "Explore whether local models can help categorize security events into useful buckets for analyst review.",
  },
  {
    status: "Research",
    title: "Log Summarization",
    text: "Condense large amounts of technical event data into shorter summaries while preserving the original evidence for validation.",
  },
  {
    status: "Research",
    title: "Incident Assistance",
    text: "Use AI as a supporting tool for investigative questions, documentation, timelines, and response checklists.",
  },
  {
    status: "Planned",
    title: "Python Automation",
    text: "Develop small Python utilities for processing structured data, normalizing inputs, and connecting parts of the workflow.",
  },
  {
    status: "Planned",
    title: "PowerShell Automation",
    text: "Explore repeatable Windows and Microsoft security administration tasks that can be safely scripted.",
  },
  {
    status: "Planned",
    title: "Local Model Testing",
    text: "Compare model behavior across security prompts while keeping sensitive lab data inside locally controlled infrastructure.",
  },
];

export const metadata = {
  title: "SentinelForge",
  description:
    "SentinelForge is a research project exploring local AI, security event classification, log summarization, incident-response assistance, and automation.",
};

export default function SentinelForgePage() {
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
              Security Operations Research
            </p>

            <h1 className="mt-4 text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              SentinelForge
            </h1>

            <p className="mt-3 text-lg font-bold text-[#D6A85F]">
              AI-Assisted Security Operations
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
              A research project exploring how locally controlled AI can assist
              security operations through event classification, log
              summarization, incident-response workflows, and automation.
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
              Why I&apos;m Exploring It
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              Security teams often work with large amounts of repetitive,
              technical information. Logs, alerts, event timelines,
              documentation, and investigation notes can consume significant
              analyst time.
            </p>

            <p>
              SentinelForge is my research environment for exploring where AI
              might assist those workflows without pretending that a language
              model can replace evidence, security tooling, or analyst
              judgment.
            </p>

            <p>
              The project is deliberately positioned as research. The objective
              is to test useful patterns, understand limitations, and build
              small repeatable workflows before treating anything as an
              operational security capability.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Workflow
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Where AI Might Assist
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
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

      {/* Research areas */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Research Areas
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Questions Before Automation
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              The first goal is understanding where AI adds useful assistance
              and where it adds noise, uncertainty, or unnecessary risk.
            </p>

            <div className="mt-8 rounded-xl border-l-2 border-[#D6A85F] bg-[#F7F8F6] p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                Project Status
              </p>

              <p className="mt-2 text-sm leading-6 text-[#456174]">
                SentinelForge is currently a research project. Planned
                capabilities on this page represent areas for experimentation,
                not production security controls.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                    item.status === "Research"
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

      {/* Guardrails */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Guardrails
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight">
            AI Assistance Still Needs Evidence
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Human Validation",
                text: "Model output is treated as assistance that requires verification rather than authoritative security evidence.",
              },
              {
                number: "02",
                title: "Source Preservation",
                text: "Original logs and event data remain available so summaries can always be checked against the underlying evidence.",
              },
              {
                number: "03",
                title: "Local Processing",
                text: "Local models provide an opportunity to experiment with sensitive lab data without automatically sending it to external providers.",
              },
              {
                number: "04",
                title: "Controlled Automation",
                text: "Automated actions should be narrow, understandable, reversible, and separated from unrestricted model decision-making.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
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
              “The useful question is not whether AI can make a security
              decision. It is where AI can reduce repetitive work while leaving
              evidence and judgment intact.”
            </p>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Research Goals
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              What I Want to Learn
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "Which security tasks benefit from summarization without losing important technical context.",
                "How reliably local models can classify structured security events.",
                "Where automation can improve consistency without creating unsafe autonomous behavior.",
                "How local AI infrastructure can support privacy-sensitive security workflows.",
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
              From Research to Prototype
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Build a repeatable event-input format",
                "Test classification prompts across local models",
                "Prototype log-summary workflows",
                "Create small Python processing utilities",
                "Explore safe PowerShell automation",
                "Document model limitations and failure cases",
              ].map((item, index) => (
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

      {/* Footer */}
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