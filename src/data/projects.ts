export type ProjectStatus =
  | "Production Experience"
  | "Active Lab"
  | "In Development"
  | "Research"
  | "Completed";

export type Project = {
  title: string;
  shortTitle: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Identity & Zero Trust Lab",
    shortTitle: "Identity & Access",
    description:
      "Building a simulated enterprise identity environment focused on access control, MFA, Conditional Access, privileged access, lifecycle management, and Zero Trust principles.",
    status: "In Development",
    technologies: [
      "Microsoft Entra ID",
      "IAM",
      "Conditional Access",
      "RBAC",
      "Zero Trust",
    ],
    href: "#",
  },
  {
    title: "Private AI Infrastructure",
    shortTitle: "AI Lab",
    description:
      "Designing and operating private AI infrastructure for local language models, GPU experimentation, remote administration, automation, and security-focused AI workflows.",
    status: "Active Lab",
    technologies: [
      "Linux",
      "NVIDIA",
      "Ollama",
      "Local LLMs",
      "Docker",
    ],
    href: "#",
  },
  {
    title: "Enterprise Infrastructure Lab",
    shortTitle: "Infrastructure",
    description:
      "A hands-on environment for storage, networking, Linux, containers, remote access, monitoring, resilience, and troubleshooting infrastructure failures.",
    status: "Active Lab",
    technologies: [
      "TrueNAS",
      "ZFS",
      "Linux",
      "Docker",
      "Networking",
    ],
    href: "#",
  },
  {
    title: "AI-Assisted Security Operations",
    shortTitle: "SentinelForge",
    description:
      "Exploring how local AI can support security operations by analyzing logs, summarizing incidents, classifying events, and assisting with response workflows.",
    status: "Research",
    technologies: [
      "SIEM",
      "Python",
      "PowerShell",
      "Local AI",
      "Incident Response",
    ],
    href: "#",
  },
];