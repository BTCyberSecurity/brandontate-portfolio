import Header from "@/components/Header";

const stack = [
  "Ubuntu Server LTS",
  "Intel Xeon",
  "RTX 5070 Ti 16 GB",
  "Docker",
  "Ollama",
  "Open WebUI",
  "Tailscale",
  "10 GbE",
];

const architecture = [
  {
    number: "01",
    title: "Compute",
    text: "Intel Xeon E5-2699 v4 server platform with 128 GB of DDR4 memory and NVIDIA RTX 5070 Ti GPU acceleration.",
  },
  {
    number: "02",
    title: "Operating System",
    text: "Headless Ubuntu Server environment designed to run without a local desktop and administered remotely.",
  },
  {
    number: "03",
    title: "AI Runtime",
    text: "Ollama provides the local model runtime while Docker hosts supporting services including Open WebUI.",
  },
  {
    number: "04",
    title: "Network",
    text: "10 GbE networking supports high-speed local connectivity while private remote access is handled through Tailscale.",
  },
];

const hardware = [
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
    value: "NVIDIA GeForce RTX 5070 Ti 16 GB",
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
    label: "Administration",
    value: "SSH · Tailscale",
  },
  {
    label: "AI Stack",
    value: "Ollama · Docker · Open WebUI",
  },
];

const implementation = [
  {
    status: "Implemented",
    title: "Headless Linux Foundation",
    text: "Configured Ubuntu Server as a headless environment so the system can operate without a dedicated monitor, keyboard, or desktop session.",
  },
  {
    status: "Implemented",
    title: "NVIDIA GPU Acceleration",
    text: "Installed and validated NVIDIA support so local model workloads can run on the RTX 5070 Ti instead of falling back to CPU processing.",
  },
  {
    status: "Implemented",
    title: "Ollama Runtime",
    text: "Installed Ollama as the local model runtime and verified that models can be loaded and executed directly on the server.",
  },
  {
    status: "Implemented",
    title: "Open WebUI",
    text: "Deployed Open WebUI in Docker to provide browser-based access to locally hosted models without requiring direct command-line interaction.",
  },
  {
    status: "Implemented",
    title: "Private Remote Access",
    text: "Configured Tailscale so the AI environment can be reached securely from approved devices without exposing the server directly to the public internet.",
  },
  {
    status: "Implemented",
    title: "Remote Administration",
    text: "Established SSH-based administration for service management, troubleshooting, model operations, updates, and system maintenance.",
  },
  {
    status: "In Progress",
    title: "Monitoring & Observability",
    text: "Expanding visibility into GPU utilization, service health, model performance, resource use, and system behavior.",
  },
  {
    status: "Planned",
    title: "Security Automation",
    text: "Future work will use the platform to assist with log analysis, event classification, documentation, and repeatable security workflows.",
  },
];

const modelTesting = [
  {
    number: "01",
    title: "Model",
    value: "Qwen3.8 27B",
    text: "Tested a quantized 27-billion-parameter model locally on the RTX 5070 Ti.",
  },
  {
    number: "02",
    title: "GPU Utilization",
    value: "100% GPU",
    text: "Validated that the model workload was being executed on the NVIDIA GPU rather than silently falling back to CPU.",
  },
  {
    number: "03",
    title: "Observed Throughput",
    value: "~55–56 tok/s",
    text: "Observed strong local inference performance during testing with the selected quantized model.",
  },
  {
    number: "04",
    title: "Context Window",
    value: "32,768",
    text: "Expanded the model context beyond the initial 4,096-token configuration and validated the larger runtime setting.",
  },
];

const troubleshooting = [
  {
    number: "01",
    title: "Docker Permissions",
    problem:
      "Open WebUI deployment initially encountered Docker socket and permission-related issues.",
    response:
      "Separated the container problem from the application itself and corrected Docker access before validating the service.",
  },
  {
    number: "02",
    title: "DNS Resolution",
    problem:
      "The server could reach external IP addresses while hostname resolution failed.",
    response:
      "Separated basic connectivity from DNS and worked through resolver and operating-system networking configuration independently.",
  },
  {
    number: "03",
    title: "GPU Validation",
    problem:
      "A detected GPU does not automatically prove that the model runtime is actually using it.",
    response:
      "Verified the NVIDIA environment and confirmed model execution was occurring on the RTX 5070 Ti.",
  },
  {
    number: "04",
    title: "Context Configuration",
    problem:
      "Open WebUI initially showed a smaller context window than the configuration intended for the model.",
    response:
      "Validated the runtime settings and confirmed the model could operate with a 32,768-token context.",
  },
  {
    number: "05",
    title: "Remote Access",
    problem:
      "The server needed to remain usable away from the local network without exposing management interfaces publicly.",
    response:
      "Used private Tailscale connectivity and SSH rather than forwarding administrative services directly to the internet.",
  },
  {
    number: "06",
    title: "Layered Diagnosis",
    problem:
      "AI infrastructure failures can originate from hardware, drivers, networking, containers, services, or the model runtime.",
    response:
      "Troubleshoot each layer independently to reduce guesswork and identify the actual source of failure.",
  },
];

const securityControls = [
  {
    number: "01",
    title: "Private Remote Access",
    text: "Remote access is provided through a private overlay network rather than direct public exposure of administrative services.",
  },
  {
    number: "02",
    title: "Headless Administration",
    text: "The server is managed remotely through controlled administrative paths instead of relying on a permanently exposed desktop session.",
  },
  {
    number: "03",
    title: "Service Isolation",
    text: "Supporting services are containerized where practical so individual components remain easier to manage, update, and troubleshoot.",
  },
  {
    number: "04",
    title: "Local Data Control",
    text: "Selected model workloads remain on hardware I control instead of automatically sending prompts and data to a hosted model provider.",
  },
  {
    number: "05",
    title: "Controlled Exposure",
    text: "Administrative and application access are intentionally limited rather than publishing the environment broadly to the internet.",
  },
  {
    number: "06",
    title: "Documentation",
    text: "Configuration and troubleshooting steps are documented so the environment can be reproduced, recovered, and improved.",
  },
];

const lessons = [
  "Build a stable Linux, network, and GPU baseline before adding higher-level AI services.",
  "Treat drivers, containers, model runtimes, networking, and web interfaces as separate troubleshooting layers.",
  "Validate actual GPU utilization instead of assuming acceleration is working because the hardware is detected.",
  "Model configuration matters: context size, quantization, runtime parameters, and memory use can materially change the experience.",
  "Private remote access makes a headless AI server much more useful without requiring direct internet exposure.",
];

const nextSteps = [
  "Expand model benchmarking across different quantizations and model sizes",
  "Add GPU, system, and service monitoring",
  "Document repeatable deployment and rebuild procedures",
  "Test additional local models for infrastructure and security tasks",
  "Develop Python and PowerShell automation",
  "Connect the AI platform to security-research workflows",
];

export const metadata = {
  title: "Private AI Infrastructure",
  description:
    "A hands-on private AI infrastructure project built around Ubuntu Server, NVIDIA GPU acceleration, Ollama, Docker, Open WebUI, secure remote access, and local language models.",
};

export default function PrivateAIInfrastructurePage() {
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
            href="/projects"
            className="text-sm font-bold text-[#D6A85F] transition hover:text-white"
          >
            →Back to Projects
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
              models, NVIDIA GPU acceleration, Linux administration,
              containers, private remote access, model tuning, and
              security-minded AI workflows.
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
              models, experiment with GPU-accelerated workloads, and understand
              how AI infrastructure behaves outside of hosted cloud services.
            </p>

            <p>
              The project gives me a practical environment for Linux, Docker,
              networking, remote administration, security testing,
              troubleshooting, model configuration, and automation.
            </p>

            <p>
              My goal is not simply to run models locally. I want to understand
              the full system around them — hardware, operating system,
              networking, security, deployment, monitoring, performance, and
              recovery.
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
            {architecture.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm"
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

          {/* Hardware */}
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
              {hardware.map((item) => (
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
                  Core Linux, GPU acceleration, local model runtime, Docker,
                  Open WebUI, SSH administration, and private remote access are
                  operational. Current development is focused on observability,
                  benchmarking, automation, and security use cases.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {implementation.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
                >
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                      item.status === "Implemented"
                        ? "bg-[#E5EBDD] text-[#55733F]"
                        : item.status === "In Progress"
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
        </div>
      </section>

      {/* Model Testing */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Model Testing
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Measuring the Environment
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            Local AI performance is more than whether a model loads. I verify
            GPU usage, response speed, context configuration, and practical
            behavior under real prompts.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {modelTesting.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F9F]">
                  {item.title}
                </p>

                <h3 className="mt-2 text-2xl font-black">{item.value}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Operations */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Remote Operations
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Built to Run Headlessly
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              The server is designed to operate without a dedicated local
              workstation. Routine administration, service management, model
              operations, and troubleshooting can be performed remotely.
            </p>

            <p>
              SSH provides direct system administration while Open WebUI
              provides browser-based model access. Tailscale adds a private
              connectivity layer so approved devices can reach the environment
              without publishing management interfaces directly to the
              internet.
            </p>

            <p>
              This makes the server behave more like infrastructure than a
              desktop PC — something that can remain running, managed, tested,
              and improved independently.
            </p>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6A85F]">
              Troubleshooting
            </p>
          </div>

          <div className="mt-4 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <h2 className="text-[2rem] font-black leading-tight tracking-tight sm:text-4xl">
                Problems Became Part of the Project
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-white/65">
                Each failure became an opportunity to isolate layers, validate
                assumptions, and improve the environment.
              </p>

              <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
                  Troubleshooting Approach
                </p>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  Separate hardware, networking, operating system, drivers,
                  containers, services, and model runtime issues instead of
                  treating every failure as an application problem.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {troubleshooting.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                >
                  <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-black">{item.title}</h3>

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
        </div>
      </section>

      {/* Security */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                  Security
                </p>
              </div>

              <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-tight text-[#102F46] sm:text-4xl">
                Security Built Into the Environment
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
                The environment is designed with the expectation that remote
                administration, local AI services, containers, and automation
                all create security considerations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {securityControls.map((item) => (
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
        </div>
      </section>

      {/* Lessons + Next Steps */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Lessons Learned
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#102F46]">
              What the Build Taught Me
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

            <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                Key Takeaway
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#456174]">
                Successful AI infrastructure depends just as much on Linux,
                networking, security, observability, troubleshooting, and
                recovery as it does on model performance.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#102F46] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Next Steps
            </p>

            <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-tight sm:text-3xl">
              Where the Lab Goes Next
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

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
                Project Media
              </p>

              <div className="mt-4 rounded-xl border border-dashed border-white/20 p-5">
                <p className="text-sm font-bold text-white">
                  Video walkthrough coming later
                </p>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  A future walkthrough will document the hardware, deployment
                  process, model runtime, remote administration, testing, and
                  security architecture.
                </p>
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
            href="/projects"
            className="w-fit rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#102F46]"
          >
            Back to Projects →
          </a>
        </div>
      </section>
    </main>
  );
}
