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
  evidence: string;
  status: ProjectStatus;
  technologies: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Household System Health Lab",
    shortTitle: "Operations",
    description: "Planning household system health tracking through asset inventory, patch management, vulnerability assessment, and verified remediation.",
    evidence: "This project is planned. Endpoint enrollment, scans, and measured results are not documented yet.",
    status: "Research",
    technologies: ["OCS Inventory NG", "Action1", "Greenbone Community Edition (OpenVAS)", "Qualys Community Edition"],
    href: "/projects/household-system-health",
  },
  {
    title: "Network Segmentation Lab",
    shortTitle: "Network Security",
    description: "Building a dedicated OPNsense firewall and a segmented lab while keeping household connectivity on eero.",
    evidence: "OPNsense installation completed; VLAN configuration, access controls, and recovery validation are planned.",
    status: "In Development",
    technologies: ["OPNsense", "VLANs", "UniFi", "Firewall Rules"],
    href: "/projects/network-segmentation",
  },
  {
    title: "Identity & Zero Trust Lab",
    shortTitle: "Identity & Access",
    description:
      "Building a simulated enterprise identity environment focused on access control, MFA, Conditional Access, privileged access, lifecycle management, and Zero Trust principles.",
    evidence:
      "Conditional Access policies, MFA enforcement, RBAC scenarios, account lifecycle testing, and privileged access workflows.",
    status: "In Development",
    technologies: [
      "Microsoft Entra ID",
      "IAM",
      "Conditional Access",
      "RBAC",
      "Zero Trust",
    ],
    href: "/projects/identity-zero-trust",
  },
  {
    title: "Private AI Infrastructure",
    shortTitle: "AI Lab",
    description:
      "Designing and operating private AI infrastructure for local language models, GPU experimentation, remote administration, automation, and security-focused AI workflows.",
    evidence:
      "Headless Linux AI server, NVIDIA GPU acceleration, Ollama model hosting, Docker services, remote administration, and local LLM testing.",
    status: "Active Lab",
    technologies: [
      "Linux",
      "NVIDIA",
      "Ollama",
      "Local LLMs",
      "Docker",
    ],
    href: "/projects/private-ai-infrastructure",
  },
  {
    title: "Infrastructure & Systems Lab",
    shortTitle: "Infrastructure",
    description:
      "A hands-on environment for storage, networking, Linux, containers, remote access, monitoring, resilience, and troubleshooting infrastructure failures.",
    evidence:
      "TrueNAS and ZFS storage, Linux services, container workloads, network troubleshooting, remote access, resiliency testing, and recovery work.",
    status: "Active Lab",
    technologies: [
      "TrueNAS",
      "ZFS",
      "Linux",
      "Docker",
      "Networking",
    ],
    href: "/projects/infrastructure-systems",
  },
  {
    title: "AI-Assisted Security Operations",
    shortTitle: "SentinelForge",
    description:
      "Exploring how local AI can support security operations by analyzing logs, summarizing incidents, classifying events, and assisting with response workflows.",
    evidence:
      "Security event classification, log summarization, incident-response assistance, local AI experimentation, and planned Python and PowerShell automation.",
    status: "Research",
    technologies: [
      "SIEM",
      "Python",
      "PowerShell",
      "Local AI",
      "Incident Response",
    ],
    href: "/projects/sentinelforge",
  },
];
