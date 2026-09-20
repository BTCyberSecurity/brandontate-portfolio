import { projects } from "@/data/projects";

function statusStyles(status: string) {
  switch (status) {
    case "Active Lab":
      return "bg-[#DDEFEA] text-[#28766C]";
    case "In Development":
      return "bg-[#DDEAF3] text-[#2F6F9F]";
    case "Production Experience":
      return "bg-[#E7E2F2] text-[#63528A]";
    case "Completed":
      return "bg-[#E5EBDD] text-[#55733F]";
    default:
      return "bg-[#F3E7CF] text-[#936D27]";
  }
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F4F1EA] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
            Projects & Labs
          </p>
        </div>

        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#102F46]">
              Things I&apos;m Building
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#5E7685]">
              Hands-on projects where I explore infrastructure,
              security, identity, automation, and private AI.
              Each project documents the design, implementation,
              problems encountered, and lessons learned.
            </p>
          </div>

          <a
            href="#"
            className="text-sm font-bold text-[#2F6F9F] transition hover:text-[#102F46]"
          >
            View All Projects →
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-[#CCD6DA] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102F46] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${statusStyles(
                    project.status,
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                {project.shortTitle}
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#102F46]">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-[#5E7685]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-[#EEF1EF] px-3 py-1.5 text-xs font-semibold text-[#456174]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-[#E1E6E7] pt-5">
                <a
                  href={project.href}
                  className="text-sm font-bold text-[#147BC1] transition group-hover:text-[#102F46]"
                >
                  Explore Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}