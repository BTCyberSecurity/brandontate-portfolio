export const projectEvidence = {
  "private-ai-infrastructure": {
    status: "Active Lab",
    summary: "The documented build establishes a headless Linux AI server, GPU acceleration, local model hosting, containers, and remote administration.",
    steps: ["Remote administration", "Ubuntu Server LTS", "Docker · Ollama · Open WebUI", "Local model workloads"],
    caption: "Logical system model based on the published build notes. It does not expose network addresses or credentials.",
    outcomes: ["NVIDIA drivers and RTX 5070 Ti availability verified for local AI workloads.", "Local models hosted through Ollama alongside containerized services.", "SSH-based operation established for a headless server."],
    next: "Publish a sanitized deployment walkthrough, model benchmark conditions, and reproducible service configuration before claiming performance results.",
    article: "/writing/building-private-ai",
  },
  "identity-zero-trust": {
    status: "In Development",
    summary: "Conditional Access, MFA, and role-based access scenarios are in progress. Lifecycle workflows, privileged access, and formal access reviews remain planned.",
    steps: ["User identity", "Authentication · MFA", "Conditional Access · Roles", "Application access"],
    caption: "Intended access-control flow for the lab. The diagram describes the design, not a completed production deployment.",
    outcomes: ["The case study defines new-employee, role-change, MFA-fatigue, and privileged-administration scenarios.", "The lab separates in-progress authentication work from planned lifecycle and access-review exercises."],
    next: "Publish policy exports with tenant details removed, a role matrix, and expected-versus-observed access tests as the lab develops.",
    article: "/writing/mfa-fatigue",
  },
  "infrastructure-systems": {
    status: "Active Lab",
    summary: "The existing case study documents TrueNAS and ZFS storage, Linux and container services, remote access, and troubleshooting. Stronger network segmentation is still evolving.",
    steps: ["Clients · Remote access", "Network connectivity", "Linux · Container services", "TrueNAS · ZFS storage"],
    caption: "Logical dependency model of the documented lab. Dedicated network separation is a design direction, not a completed result.",
    outcomes: ["ZFS ARC cache growth was evaluated in context rather than treated as a memory fault.", "Storage paths, permissions, container dependencies, and service recovery are documented as troubleshooting concerns."],
    next: "Publish a sanitized topology, a recovery exercise with observed timings, and a repeatable service-health checklist.",
    article: "/writing/segmented-home-lab",
  },
  sentinelforge: {
    status: "Research",
    summary: "SentinelForge is a research direction for local AI assistance with security events. Python preprocessing and PowerShell automation remain planned.",
    steps: ["Source events", "Normalize input", "Local model assistance", "Human validation"],
    caption: "Proposed research workflow. Source evidence and human review remain separate from model-generated suggestions.",
    outcomes: ["The case study defines event classification, log summarization, and incident-timeline research questions.", "The proposed workflow preserves source data and requires human validation."],
    next: "Publish synthetic event fixtures, expected labels, an evaluation rubric, and measured model failure cases before reporting accuracy or time savings.",
    article: "/writing/mfa-fatigue",
  },
};
export type EvidenceProject = keyof typeof projectEvidence;
