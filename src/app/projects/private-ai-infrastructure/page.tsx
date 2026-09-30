import Header from "@/components/Header";

const stack = [
  "Ubuntu Server LTS",
  "NVIDIA RTX 5070 Ti",
  "Docker",
  "Ollama",
  "Open WebUI",
  "Local LLMs",
  "SSH",
  "10 GbE",
];

const lessons = [
  "Start with a stable hardware and network baseline before adding AI services.",
  "Treat GPU drivers, containers, model runtimes, and remote access as separate layers when troubleshooting.",
  "Document every configuration change so failures are easier to reverse.",
  "Build for secure remote administration from the beginning instead of adding it later.",
];

const nextSteps = [
  "Expand model testing and benchmarking",
  "Improve monitoring and logging",
  "Add more security-focused automation",
  "Document repeatable deployment workflows",
  "Publish a video walkthrough",
];

export default function PrivateAIInfrastructurePage() {
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
              Private AI Infrastructure
            </p>

            <h1 className="mt-4 text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
  Building a Private AI Environment
</h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:mt-6 sm:text-xl sm:leading-8">
              A hands-on infrastructure project focused on local language
              models, GPU acceleration, Linux administration, containers,
              remote access, and security-minded AI workflows.
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
              Why I Built It
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              I wanted a private environment where I could run local language
              models, experiment with GPU-accelerated workloads, and learn how
              AI infrastructure behaves outside of hosted cloud services.
            </p>

            <p>
              The project also gives me a practical environment for Linux,
              Docker, networking, remote administration, security testing,
              troubleshooting, and automation.
            </p>

            <p>
              My goal is not simply to run models locally. I want to understand
              the full system around them — hardware, operating system,
              networking, security, deployment, monitoring, and recovery.
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
              Architecture
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            System Design
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
  number: "01",
  title: "Compute",
  text: "Intel Xeon E5-2699 v4 server platform with NVIDIA RTX 5070 Ti acceleration for local AI workloads.",
},
              {
                number: "02",
                title: "Operating System",
                text: "Headless Ubuntu Server environment administered remotely through SSH.",
              },
              {
                number: "03",
                title: "AI Runtime",
                text: "Ollama and containerized services for running, testing, and managing local language models.",
              },
              {
                number: "04",
                title: "Network",
                text: "10 GbE networking via the TP-Link TX401, with remote administration and future segmentation in mind.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
           {/* Hardware specification */}
          <div className="mt-8 rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col justify-between gap-2 border-b border-[#D9E0E2] pb-5 sm:flex-row sm:items-end sm:gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                  Hardware
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#102F46]">
                  Current Server Configuration
                </h3>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#936D27] sm:text-sm sm:normal-case sm:tracking-normal">
  Dedicated AI Server
</span>
            </div>

            <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {[
                {
  label: "CPU",
  value: "Intel Xeon E5-2699 v4",
},
{
  label: "Motherboard",
  value: "ASUS X99-DELUXE II",
},
{
  label: "Memory",
  value: "128 GB DDR4",
},
{
  label: "GPU",
  value: "PNY GeForce RTX 5070 Ti",
},
{
  label: "Networking",
  value: "TP-Link TX401 10 GbE",
},
{
  label: "Operating System",
  value: "Ubuntu Server LTS",
},
{
  label: "Storage",
  value: "Multiple NVMe SSDs",
},
{
  label: "AI Stack",
  value: "Ollama · Docker · Open WebUI",
},
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[#E1E6E7] pb-4"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#2F6F9F]">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-[#456174]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Implementation */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            {/* Left column */}
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                  Implementation
                </p>
              </div>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#102F46]">
                Building the Stack
              </h2>

              <p className="mt-5 max-w-md leading-7 text-[#5E7685]">
                The environment is built in layers so each component can be
                tested independently and maintained without treating the system
                as one large application.
              </p>

              <div className="mt-8 rounded-xl border-l-2 border-[#D6A85F] bg-[#F7F8F6] p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                  Current State
                </p>

                <p className="mt-2 text-sm leading-6 text-[#456174]">
                  The dedicated AI server is built around the ASUS
                  X99-DELUXE II, Intel Xeon E5-2699 v4, 128 GB of DDR4
                  memory, and an NVIDIA RTX 5070 Ti. Core Linux, GPU
                  acceleration, model runtime, container, and remote
                  administration workflows are established, with additional
                  monitoring and security automation continuing to evolve.
                </p>
              </div>
            </div>

            {/* Implementation cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  status: "Implemented",
                  title: "Linux Foundation",
                  text: "Configured a headless Ubuntu Server environment with remote administration and a stable network baseline.",
                },
                {
                  status: "Implemented",
                  title: "GPU Acceleration",
                  text: "Configured NVIDIA drivers and verified RTX 5070 Ti GPU availability for local AI workloads.",
                },
                {
                  status: "Implemented",
                  title: "Model Runtime",
                  text: "Installed Ollama and tested local language models directly from the server.",
                },
                {
                  status: "Implemented",
                  title: "Container Services",
                  text: "Using Docker for supporting services and Open WebUI for browser-based model access and administration.",
                },
                {
                  status: "Implemented",
                  title: "Remote Administration",
                  text: "Built the system to operate headlessly through SSH and remote management tools.",
                },
                {
                  status: "Implemented",
                  title: "Dedicated AI Hardware",
                  text: "Deployed the ASUS X99-DELUXE II and Intel Xeon E5-2699 v4 platform with 128 GB DDR4 and an RTX 5070 Ti.",
                },
                {
                  status: "Planned",
                  title: "Security Automation",
                  text: "Add security-focused workflows for monitoring, event analysis, response assistance, and repeatable administration.",
                },
                {
                  status: "Planned",
                  title: "Observability",
                  text: "Expand logging, performance monitoring, GPU utilization tracking, and service health visibility.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                        item.status === "Implemented"
                          ? "bg-[#E5EBDD] text-[#55733F]"
                          : "bg-[#F3E7CF] text-[#936D27]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#102F46]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5E7685]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Troubleshooting */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6A85F]">
              Troubleshooting
            </p>
          </div>

          <div className="mt-4 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            {/* Left column */}
            <div>
              <h2 className="text-[2rem] font-black leading-tight tracking-tight sm:text-4xl">
  Problems Became Part of the Project
</h2>

              <p className="mt-5 max-w-lg leading-7 text-white/65">
                The build was not just about getting services online. Each
                failure became an opportunity to isolate layers, validate
                assumptions, and improve the environment.
              </p>

              <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
                  Troubleshooting Approach
                </p>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  I separate hardware, networking, operating system,
                  drivers, containers, and model runtime issues instead of
                  treating every failure as an application problem.
                </p>
              </div>
            </div>

            {/* Troubleshooting cases */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Docker Permissions",
                  problem:
                    "Open WebUI deployment failed because the account could not access the Docker socket.",
                  response:
                    "Isolated the problem as a permissions issue rather than an application failure and worked through Docker group and service access.",
                },
                {
                  number: "02",
                  title: "DNS Resolution",
                  problem:
                    "The server experienced name-resolution problems even while basic network connectivity remained available.",
                  response:
                    "Separated DNS from general connectivity and validated network, resolver, and operating-system configuration independently.",
                },
                {
                  number: "03",
                  title: "GPU Validation",
                  problem:
                    "AI services depend on more than the GPU simply appearing in the system.",
                  response:
                    "Verified NVIDIA driver availability and confirmed that the RTX 5070 Ti could actually be used by local AI workloads.",
                },
                {
                  number: "04",
                  title: "Model Validation",
                  problem:
                    "A successfully loaded model does not automatically mean the environment is useful.",
                  response:
                    "Tested models with logic questions, technical prompts, and infrastructure scenarios to evaluate behavior and practical usefulness.",
                },
                {
                  number: "05",
                  title: "Headless Administration",
                  problem:
                    "The server needs to remain manageable without relying on a local desktop environment.",
                  response:
                    "Built the system around SSH and remote administration so services can be maintained, restarted, and diagnosed remotely.",
                },
                {
                  number: "06",
                  title: "Layered Diagnosis",
                  problem:
                    "AI infrastructure failures can originate from hardware, drivers, networking, containers, or the model runtime.",
                  response:
                    "Used a layer-by-layer troubleshooting process to reduce guesswork and identify the actual point of failure.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                      {item.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#79B8AE]/60" />
                  </div>

                  <h3 className="mt-4 text-xl font-black">
                    {item.title}
                  </h3>

                  <div className="mt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#79B8AE]">
                      Problem
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      {item.problem}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D6A85F]">
                      Response
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {item.response}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom takeaway */}
          <div className="mt-10 border-t border-white/10 pt-7">
            <p className="max-w-3xl font-serif text-lg italic leading-8 text-white/70">
              “The goal is not just to make the system work. It is to
              understand why it failed, how it recovered, and how to make
              the next failure easier to diagnose.”
            </p>
          </div>
        </div>
      </section>

            {/* Security */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            {/* Left column */}
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                  Security
                </p>
              </div>

              <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-tight text-[#102F46] sm:text-4xl">
                Security Built Into
                <br />
                the Environment
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
                I designed the environment with the expectation that remote
                administration, local AI services, containers, and future
                automation all create security considerations that need to be
                addressed from the beginning.
              </p>

              <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                  Design Principle
                </p>
                

                <p className="mt-3 text-sm leading-7 text-[#456174]">
                  Security is treated as part of the infrastructure design,
                  not as a separate layer added after the system is already
                  running.
                </p>

                <div className="mt-8">
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
    Security Priorities
  </p>

  <div className="mt-4 space-y-3">
    {[
      "Limit privileged access",
      "Keep management paths controlled",
      "Segment services where practical",
      "Maintain visibility through logging",
      "Document recovery and rebuild procedures",
    ].map((item) => (
      <div key={item} className="flex items-start gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A85F]" />

        <p className="text-sm leading-6 text-[#5E7685]">
          {item}
        </p>
      </div>
    ))}
  </div>
</div>
              </div>
            </div>
            

            {/* Security controls */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Remote Administration",
                  text: "Designed the server for headless administration through controlled remote access instead of depending on a local desktop session.",
                },
                {
                  number: "02",
                  title: "Access Control",
                  text: "Separate administrative access from application access and limit privileged operations to the accounts and services that require them.",
                },
                {
                  number: "03",
                  title: "Service Isolation",
                  text: "Use containers and separated services to reduce unnecessary dependencies and keep individual components easier to manage and secure.",
                },
                {
                  number: "04",
                  title: "Network Segmentation",
                  text: "Plan the AI environment around dedicated network boundaries so management interfaces and AI services can be separated from general client traffic.",
                },
                {
                  number: "05",
                  title: "System Hardening",
                  text: "Reduce unnecessary services, maintain the operating system and drivers, and keep the server focused on its intended role.",
                },
                {
                  number: "06",
                  title: "Logging & Monitoring",
                  text: "Build toward centralized visibility for system health, authentication activity, container events, GPU utilization, and service failures.",
                },
                {
                  number: "07",
                  title: "Local Data Control",
                  text: "Keep selected AI workloads and data processing inside infrastructure I control instead of automatically sending them to a hosted model provider.",
                },
                {
                  number: "08",
                  title: "Recovery & Documentation",
                  text: "Document configuration changes and deployment steps so services can be rebuilt, troubleshot, and recovered without relying on memory.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-[#CBD5D8] bg-white p-4 shadow-sm sm:p-5"
                >
                  <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-lg font-black text-[#102F46]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Security mindset */}
          <div className="mt-12 grid gap-5 border-t border-[#CBD5D8] pt-10 md:grid-cols-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2F6F9F]">
                Protect
              </p>

              <p className="mt-2 text-sm leading-6 text-[#5E7685]">
                Reduce unnecessary exposure through controlled access,
                hardened services, and network boundaries.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2F6F9F]">
                Detect
              </p>

              <p className="mt-2 text-sm leading-6 text-[#5E7685]">
                Improve visibility into authentication, service health,
                failures, and unusual system behavior.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2F6F9F]">
                Recover
              </p>

              <p className="mt-2 text-sm leading-6 text-[#5E7685]">
                Keep the environment documented and repeatable so failed
                components can be rebuilt with less downtime and guesswork.
              </p>
            </div>
          </div>

          <div className="mt-8 border-l-2 border-[#D6A85F] pb-2 pl-5 sm:mt-10 sm:pb-4">
  <p className="max-w-3xl font-serif text-lg italic leading-8 text-[#456174]">
    “The objective is not to make a lab complicated. It is to make
    every layer understandable, controllable, and recoverable.”
  </p>
</div>
        </div>
      </section>

            {/* Lessons Learned + Next Steps */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Lessons Learned */}
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                  Lessons Learned
                </p>
              </div>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#102F46]">
                What the Build Taught Me
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#5E7685]">
                The most useful lessons came from treating the server as a
                complete infrastructure system rather than just a machine for
                running models.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Start with a stable hardware and network baseline before adding AI services.",
                  "Treat GPU drivers, containers, model runtimes, and remote access as separate layers when troubleshooting.",
                  "Document configuration changes so failures are easier to reverse and systems are easier to rebuild.",
                  "Build secure remote administration into the environment from the beginning.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 border-b border-[#D9E0E2] pb-5"
                  >
                    <span className="text-xs font-black tracking-[0.18em] text-[#D6A85F]">
                      0{index + 1}
                    </span>

                    <p className="text-sm leading-6 text-[#456174]">
                      {item}
                    </p>
                  </div>
                          
                  
                ))}
              </div>
              <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
    Key Takeaway
  </p>

  <p className="mt-3 max-w-xl text-sm leading-7 text-[#456174]">
    The project reinforced that successful AI infrastructure depends just as
    much on systems administration, networking, security, documentation, and
    recovery as it does on model performance.
  </p>
</div>
            </div>

            {/* Next Steps */}
            <div className="rounded-2xl bg-[#102F46] p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
                Next Steps
              </p>

              <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-tight sm:text-3xl">
                Where the Lab Goes Next
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                The platform is intentionally expandable. Future work will
                focus less on adding hardware and more on improving visibility,
                automation, repeatability, and practical security use cases.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Expand model testing and benchmarking",
                  "Improve monitoring and logging",
                  "Add more security-focused automation",
                  "Document repeatable deployment workflows",
                  "Publish a video walkthrough",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:gap-4"
                  >
                    <span className="mt-0.5 text-xs font-black tracking-[0.18em] text-[#D6A85F]">
                      0{index + 1}
                    </span>

                    <p className="text-sm leading-6 text-white/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Future media */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
                  Project Media
                </p>

                <div className="mt-4 rounded-xl border border-dashed border-white/20 p-5">
                  <p className="text-sm font-bold text-white">
                    Video walkthrough coming later
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    A future walkthrough will document the hardware,
                    deployment process, model environment, remote
                    administration, and security architecture.
                  </p>
                </div>
              </div>
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