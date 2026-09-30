import Header from "@/components/Header";

const stack = [
  "TrueNAS",
  "ZFS",
  "Linux",
  "Docker",
  "Networking",
  "Storage",
  "Containers",
  "Recovery",
];

const infrastructureLayers = [
  {
    number: "01",
    title: "Compute",
    text: "Server hardware provides the foundation for storage, applications, containers, and supporting services.",
  },
  {
    number: "02",
    title: "Storage",
    text: "ZFS-based storage provides pooled capacity, data organization, snapshots, and a foundation for recovery planning.",
  },
  {
    number: "03",
    title: "Services",
    text: "Applications and containers run as managed services instead of being tied directly to a desktop environment.",
  },
  {
    number: "04",
    title: "Network",
    text: "The lab connects storage, clients, media services, servers, and remote-management workflows across the network.",
  },
];

const workloads = [
  {
    title: "TrueNAS & ZFS",
    text: "Storage pools, datasets, permissions, capacity management, and ongoing administration.",
  },
  {
    title: "Containers",
    text: "Containerized services provide isolated and repeatable application environments.",
  },
  {
    title: "Media Services",
    text: "Self-hosted services provide practical workloads for storage, networking, transcoding, and permissions testing.",
  },
  {
    title: "Linux Administration",
    text: "Command-line administration, service management, troubleshooting, permissions, and system configuration.",
  },
  {
    title: "Networking",
    text: "High-speed connectivity, addressing, remote access, and ongoing segmentation planning.",
  },
  {
    title: "Recovery",
    text: "Snapshots, documentation, troubleshooting, and rebuild thinking are treated as part of system design.",
  },
];

export const metadata = {
  title: "Enterprise Infrastructure Lab",
  description:
    "A hands-on infrastructure lab built around TrueNAS, ZFS, Linux, containers, networking, storage, and recovery.",
};

export default function EnterpriseInfrastructurePage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-6 pb-16 pt-24 text-white sm:pb-20 sm:pt-32 lg:px-8">
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
              Enterprise Infrastructure Lab
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:mt-6 sm:text-xl sm:leading-8">
              A long-running hands-on environment for storage, Linux,
              containers, networking, self-hosted services, troubleshooting,
              permissions, recovery, and infrastructure administration.
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
              Infrastructure I Can Break and Rebuild
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              The infrastructure lab gives me a place to work with storage,
              networking, Linux, containers, services, and recovery without
              relying only on theoretical exercises.
            </p>

            <p>
              It has evolved over time through hardware changes, storage
              migrations, application failures, permissions issues, networking
              problems, and experiments with different self-hosted services.
            </p>

            <p>
              The value of the lab is not any single application. It is the
              experience of operating an environment where multiple systems
              depend on one another and failures have to be diagnosed across
              layers.
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
            {infrastructureLayers.map((item) => (
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
              The environment is useful because it contains real services and
              real dependencies that need to be maintained.
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

      {/* Troubleshooting */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6A85F]">
            Operations
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Failure Is Part of the Lab
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-white/65">
            The most useful infrastructure lessons often come from the moments
            when services fail, permissions break, storage behaves
            unexpectedly, or networking does not work the way it should.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Permissions",
                text: "Diagnosing file, dataset, application, and service access when users or containers cannot reach expected resources.",
              },
              {
                number: "02",
                title: "Storage",
                text: "Working through capacity, pool behavior, datasets, application storage, and the consequences of configuration changes.",
              },
              {
                number: "03",
                title: "Applications",
                text: "Troubleshooting services that fail to start, restart unexpectedly, lose access, or behave differently after updates.",
              },
              {
                number: "04",
                title: "Networking",
                text: "Separating addressing, routing, DNS, service availability, and remote-access issues when connectivity fails.",
              },
              {
                number: "05",
                title: "Containers",
                text: "Working through service configuration, volumes, permissions, dependencies, and container-level failures.",
              },
              {
                number: "06",
                title: "Recovery",
                text: "Documenting changes and maintaining a rebuild mindset so individual services are recoverable rather than mysterious.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5"
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
        </div>
      </section>

      {/* Lessons */}
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
              {[
                "A service failure may actually originate in storage, networking, permissions, or another dependency.",
                "Documentation becomes more valuable as an environment becomes more complex.",
                "Recovery should be considered while building a service, not after it fails.",
                "Simple, understandable infrastructure is easier to operate than unnecessary complexity.",
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
              Direction
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Where the Lab Goes Next
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Improve network segmentation",
                "Expand infrastructure monitoring",
                "Strengthen documentation and recovery workflows",
                "Build more repeatable container deployments",
                "Integrate additional security controls",
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