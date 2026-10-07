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
    text: "Bring relevant security events, logs, alerts, or structured data into a repeatable workflow for review.",
  },
  {
    number: "02",
    title: "Normalize",
    text: "Convert raw inputs into a more consistent format so events can be compared, summarized, and analyzed more effectively.",
  },
  {
    number: "03",
    title: "Analyze",
    text: "Use local AI to assist with classification, summarization, correlation, and investigative questions without replacing source evidence.",
  },
  {
    number: "04",
    title: "Respond",
    text: "Use structured output to support documentation, timelines, containment planning, communication, and repeatable response workflows.",
  },
];

const useCases = [
  {
    status: "Research",
    title: "Event Classification",
    text: "Test whether locally hosted models can categorize security events into useful buckets for analyst review.",
  },
  {
    status: "Research",
    title: "Log Summarization",
    text: "Explore whether long technical logs can be reduced into concise summaries without losing important context or source evidence.",
  },
  {
    status: "Research",
    title: "Incident Timeline Support",
    text: "Use AI to help organize sequences of events, timestamps, actions, and observations into a more readable incident timeline.",
  },
  {
    status: "Research",
    title: "Investigation Assistance",
    text: "Test prompts that help generate follow-up questions, identify missing context, and suggest areas an analyst may want to validate.",
  },
  {
    status: "Planned",
    title: "Python Processing",
    text: "Build small Python utilities to parse, normalize, enrich, and prepare structured security data before model analysis.",
  },
  {
    status: "Planned",
    title: "PowerShell Automation",
    text: "Explore safe automation for repeatable Windows and Microsoft security administration tasks.",
  },
];

const guardrails = [
  {
    number: "01",
    title: "Human Validation",
    text: "Model output is treated as assistance that requires verification rather than authoritative security evidence.",
  },
  {
    number: "02",
    title: "Preserve Source Data",
    text: "Original logs, events, and technical evidence remain available so AI-generated summaries can always be checked against the source.",
  },
  {
    number: "03",
    title: "Local Processing",
    text: "Local models provide a way to experiment with sensitive lab data without automatically sending it to an external provider.",
  },
  {
    number: "04",
    title: "Controlled Automation",
    text: "Automated actions should remain narrow, understandable, reversible, and separated from unrestricted model decision-making.",
  },
];

const researchQuestions = [
  "Which security tasks benefit from summarization without losing important technical context?",
  "How reliably can local models classify structured security events?",
  "Where does AI reduce repetitive analyst work, and where does it introduce uncertainty?",
  "How should prompts and outputs be structured so results remain repeatable and reviewable?",
  "What security data should remain local instead of being sent to a hosted model provider?",
];

const nextSteps = [
  "Define a repeatable event-input format",
  "Build sample security datasets for testing",
  "Compare local models across the same prompts",
  "Prototype log-summary workflows",
  "Create Python preprocessing utilities",
  "Explore safe PowerShell automation",
  "Document model limitations and failure cases",
];

export const metadata = {
  title: "SentinelForge",
  description:
    "SentinelForge is a security operations research project exploring local AI, event classification, log summarization, incident-response assistance, and controlled automation.",
};

export default function SentinelForgePage() {
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
              summarization, incident-response workflows, and controlled
              automation.
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
              Security teams often work with large volumes of repetitive,
              technical information. Logs, alerts, event timelines, incident
              notes, and investigation data can consume significant analyst
              time.
            </p>

            <p>
              SentinelForge is my research environment for exploring where AI
              might assist those workflows without pretending that a language
              model can replace evidence, security tooling, or analyst
              judgment.
            </p>

            <p>
              The goal is to identify useful patterns, understand limitations,
              and build small repeatable workflows before treating anything as
              an operational security capability.
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

      {/* Research Areas */}
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
                Current State
              </p>

              <p className="mt-2 text-sm leading-6 text-[#456174]">
                SentinelForge is a research and prototype project. The
                capabilities below represent areas being tested or planned,
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
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Guardrails
            </p>
          </div>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight">
            AI Assistance Still Needs Evidence
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-white/65">
            The project is deliberately designed around assistance rather than
            autonomous decision-making.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {guardrails.map((item) => (
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

      {/* Research Questions */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Research Questions
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              What I Want to Validate
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              The project is useful only if the experiments produce evidence
              about where local AI actually helps.
            </p>
          </div>

          <div className="space-y-4">
            {researchQuestions.map((item, index) => (
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

      {/* Relationship to Private AI */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Infrastructure
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Built on My Private AI Environment
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              SentinelForge is intentionally connected to my Private AI
              Infrastructure project rather than being built as an isolated
              concept.
            </p>

            <p>
              The local AI server provides the model runtime, GPU acceleration,
              Docker environment, browser-based access, and private remote
              connectivity needed to experiment with security workflows while
              keeping selected data under local control.
            </p>

            <a
              href="/projects/private-ai-infrastructure"
              className="inline-flex text-sm font-bold text-[#936D27] transition hover:text-[#102F46]"
            >
              Explore Private AI Infrastructure →
            </a>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Direction
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              From Research to Prototype
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#5E7685]">
              The next stage is moving from broad experimentation into smaller
              workflows that can be tested repeatedly against the same inputs.
            </p>
          </div>

          <div className="rounded-2xl bg-[#102F46] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Next Steps
            </p>

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