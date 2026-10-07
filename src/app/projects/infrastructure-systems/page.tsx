import Header from "@/components/Header";

const stack = [
  "TrueNAS",
  "ZFS",
  "Linux",
  "Docker",
  "Plex",
  "Networking",
  "Storage",
  "Recovery",
];

const architecture = [
  {
    number: "01",
    title: "Compute",
    text: "Dedicated server hardware provides the foundation for storage, containers, media services, networking tools, and infrastructure experiments.",
  },
  {
    number: "02",
    title: "Storage",
    text: "ZFS pools and datasets provide the core storage layer for media, applications, backups, and long-term data management.",
  },
  {
    number: "03",
    title: "Services",
    text: "Containerized and self-hosted applications run as managed services instead of being tied to a desktop environment.",
  },
  {
    number: "04",
    title: "Network",
    text: "High-speed networking connects the lab to clients, remote-management tools, media devices, and the rest of the environment.",
  },
];

const hardware = [
  {
    label: "CPU",
    value: "Ryzen 9 5900-series",
  },
  {
    label: "Memory",
    value: "128 GB DDR4",
  },
  {
    label: "GPU",
    value: "Dual NVIDIA T400 4 GB",
  },
  {
    label: "Storage",
    value: "6 × 8 TB Helium HDDs",
  },
  {
    label: "Solid State",
    value: "NVMe + SATA SSDs",
  },
  {
    label: "File System",
    value: "ZFS",
  },
  {
    label: "Platform",
    value: "TrueNAS",
  },
  {
    label: "Primary Use",
    value: "Storage · Media · Containers · Lab Services",
  },
];

const workloads = [
  {
    title: "TrueNAS & ZFS",
    text: "Manage storage pools, datasets, permissions, snapshots, application storage, and capacity across the environment.",
  },
  {
    title: "Plex Media Services",
    text: "Operate self-hosted media services with storage, transcoding, metadata, client access, and library management requirements.",
  },
  {
    title: "Containers & Applications",
    text: "Run containerized services that depend on persistent storage, networking, permissions, updates, and service health.",
  },
  {
    title: "Linux Administration",
    text: "Use command-line administration, service management, logs, permissions, and troubleshooting to maintain the environment.",
  },
  {
    title: "Networking",
    text: "Work with local addressing, high-speed connectivity, remote access, service reachability, and segmentation planning.",
  },
  {
    title: "Recovery",
    text: "Treat snapshots, documentation, backups, and rebuild procedures as part of the design rather than something added after failure.",
  },
];

const incidents = [
  {
    number: "01",
    title: "Application Restarts",
    problem:
      "Containerized services and hosted applications can fail, restart unexpectedly, or become unavailable after configuration changes.",
    response:
      "Review service state, logs, storage dependencies, permissions, and configuration rather than assuming the application itself is the only failure point.",
  },
  {
    number: "02",
    title: "ZFS Memory Behavior",
    problem:
      "ZFS can consume significant system memory for ARC caching, which can look like abnormal RAM usage if the behavior is not understood.",
    response:
      "Validated that cache growth is expected behavior and evaluated system memory in the context of ZFS rather than treating all used RAM as a fault.",
  },
  {
    number: "03",
    title: "Plex Library Issues",
    problem:
      "Media libraries can develop duplicates, missing items, metadata mismatches, or inconsistent paths.",
    response:
      "Worked through library paths, naming, metadata, scans, storage layout, and application behavior to isolate the source of inconsistencies.",
  },
  {
    number: "04",
    title: "Application Integration",
    problem:
      "Supporting services such as Tautulli or Bazarr may fail even when the core media server remains operational.",
    response:
      "Validated networking, API connectivity, application configuration, storage access, and dependencies independently.",
  },
  {
    number: "05",
    title: "Permissions",
    problem:
      "Datasets, containers, users, and applications can require different ownership and access patterns.",
    response:
      "Treat file permissions and application access as an infrastructure layer that must be designed and tested rather than guessed at.",
  },
  {
    number: "06",
    title: "Dependency Mapping",
    problem:
      "A single visible failure can originate in storage, networking, containers, permissions, or another supporting service.",
    response:
      "Use layer-by-layer diagnosis to identify the real dependency causing the failure before making changes.",
  },
];

const securityControls = [
  {
    number: "01",
    title: "Access Separation",
    text: "Administrative access and application access are treated as separate concerns so services do not require unnecessary privileges.",
  },
  {
    number: "02",
    title: "Dataset Permissions",
    text: "Storage permissions are managed intentionally so applications, users, and services receive only the access they need.",
  },
  {
    number: "03",
    title: "Service Isolation",
    text: "Containers and separated applications reduce the number of services that must share a single runtime environment.",
  },
  {
    number: "04",
    title: "Network Boundaries",
    text: "The lab continues to evolve toward stronger segmentation between infrastructure, client devices, management interfaces, and exposed services.",
  },
  {
    number: "05",
    title: "Remote Administration",
    text: "Remote access is handled through controlled management paths instead of exposing storage administration directly to the public internet.",
  },
  {
    number: "06",
    title: "Recovery Planning",
    text: "Snapshots, configuration documentation, and rebuild thinking reduce the impact of mistakes, failed updates, or service corruption.",
  },
];

const lessons = [
  "Storage architecture affects almost every service layered on top of it.",
  "A healthy infrastructure platform requires understanding dependencies, not just individual applications.",
  "ZFS behavior makes more sense when memory, caching, datasets, and workload patterns are considered together.",
  "Media and container services are useful because they create real storage, networking, permissions, and recovery problems to solve.",
  "Documentation and repeatable recovery procedures become more valuable as the environment grows.",
];

const nextSteps = [
  "Improve network segmentation",
  "Expand infrastructure monitoring",
  "Strengthen backup and recovery documentation",
  "Standardize container deployment patterns",
  "Improve application health visibility",
  "Continue storage and performance tuning",
];

export const metadata = {
  title: "Infrastructure & Systems Lab",
  description:
    "A hands-on infrastructure lab built around TrueNAS, ZFS, Linux, containers, media services, networking, storage, troubleshooting, and recovery.",
};

export default function InfrastructureSystemsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-5 pb-16 pt-24 text-white sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 72% 35%, #147BC1 0%, transparent 44%)",
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
              Infrastructure
            </p>

            <h1 className="mt-4 text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Infrastructure & Systems Lab
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:mt-6 sm:text-xl sm:leading-8">
              A long-running infrastructure environment for storage, Linux,
              containers, media services, networking, permissions,
              troubleshooting, recovery, and hands-on systems administration.
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
              Infrastructure I Can Operate, Break, and Rebuild
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              The lab gives me an environment where storage, networking,
              applications, Linux, containers, and media services all depend
              on one another.
            </p>

            <p>
              It has evolved through hardware changes, storage migrations,
              application failures, permission issues, media-library problems,
              networking troubleshooting, and experiments with different
              self-hosted services.
            </p>

            <p>
              The value of the platform is not any single application. It is
              the experience of running infrastructure where failures must be
              diagnosed across layers and where recovery matters as much as
              deployment.
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
            Systems Working Together
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

          {/* Hardware */}
          <div className="mt-8 rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col justify-between gap-2 border-b border-[#D9E0E2] pb-5 sm:flex-row sm:items-end sm:gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                  Hardware
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#102F46]">
                  Current Infrastructure Platform
                </h3>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#936D27] sm:text-sm sm:normal-case sm:tracking-normal">
                Storage & Services Server
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

      {/* Workloads */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Hands-On Work
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Operating the Lab
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              Real services create real dependencies. That makes the platform
              useful for learning because storage, permissions, networking,
              containers, applications, and recovery all matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {workloads.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <h3 className="text-lg font-black text-[#102F46]">
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

      {/* Storage */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Storage
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              ZFS as the Foundation
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              Storage is the foundation of the lab. Media services, containers,
              application data, configuration, and long-term files all depend
              on the underlying ZFS environment.
            </p>

            <p>
              Working with ZFS has required understanding more than disk
              capacity. Pools, datasets, permissions, caching, snapshots, and
              workload behavior all affect how the system operates.
            </p>

            <p>
              One of the useful lessons has been learning that high memory
              consumption is not automatically a problem. ZFS ARC uses
              available memory aggressively for caching, so system health has
              to be evaluated in context rather than by looking at a single
              utilization number.
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
                Failure Is Part of the Lab
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-white/65">
                Some of the most useful infrastructure lessons have come from
                the moments when services, storage, permissions, or application
                integrations did not behave as expected.
              </p>

              <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
                  Troubleshooting Approach
                </p>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  Separate storage, networking, permissions, containers,
                  applications, and client behavior before changing multiple
                  layers at once.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {incidents.map((item) => (
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
                Infrastructure That Can Be Controlled
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
                Storage and self-hosted services create their own security
                requirements around permissions, network exposure,
                administrative access, and recovery.
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

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Infrastructure Is About Dependencies
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