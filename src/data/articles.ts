export const articles = {
  "building-private-ai": {
    title: "Building Local LLM Infrastructure",
    description: "A build log of local LLM architecture, model serving with Ollama, GPU validation, containerization, and remote administration.",
    category: "Infrastructure",
    kind: "Build Log",
    project: "/projects/private-ai-infrastructure",
    intro: "Running a local model is only one part of the system. This build log explains the layers already described in the project case study and the checks that make those layers easier to operate.",
    sections: [
      { title: "Start With the Operating Platform", text: "The documented platform uses Ubuntu Server LTS on an AMD Ryzen 7 5800XT system with 128 GB of DDR4 memory and an NVIDIA RTX 5070 Ti. The server operates headlessly through SSH and remote management tools. Establishing remote access and a stable network comes before adding model workloads." },
      { title: "Validate the GPU Before the Model", text: "The project notes record NVIDIA driver configuration and verification that the RTX 5070 Ti is available to local AI workloads. Keeping driver, runtime, and application checks separate makes a failure easier to locate. Hardware availability does not, by itself, establish model performance." },
      { title: "Separate the Service Layers", text: "Ollama provides local model hosting, while Docker and Open WebUI are part of the service environment. The useful troubleshooting question is which layer is failing: the host, the GPU stack, the container, the model runtime, or the client connection. Documenting those dependencies is more useful than treating the stack as one application." },
      { title: "Operate Before Expanding", text: "Remote administration is established in the documented build. Expanded logging, GPU utilization tracking, service-health visibility, and security automation remain areas for further development. The next evidence should show a repeatable service check and a recovery path, not simply another installed tool." },
      { title: "What a Reproducible Benchmark Needs", text: "Future LLM inference benchmarks should record the model, quantization, VRAM usage, prompt and output lengths, warm-up conditions, concurrent requests, software versions, hardware, and measurement method. Quantization and VRAM management are topics for further investigation; measured inference performance has not yet been published." },
    ],
    takeaway: "Treat local AI as infrastructure: verify each layer, keep the dependencies visible, and publish measurements with enough context for someone else to reproduce them.",
    sources: [{ label: "Ollama Documentation", href: "https://docs.ollama.com/" }, { label: "Docker Documentation", href: "https://docs.docker.com/" }],
  },
  "segmented-home-lab": {
    title: "Designing a Segmented Home Lab Network",
    description: "Design notes for separating client traffic, infrastructure services, management access, and recovery paths in a home lab.",
    category: "Networking",
    kind: "Design Notes",
    project: "/projects/infrastructure-systems",
    intro: "The infrastructure case study documents storage, Linux, containers, remote access, and network troubleshooting. Stronger segmentation is still evolving. These notes describe the design direction and its validation criteria, rather than a completed VLAN deployment.",
    sections: [
      { title: "Define the Boundaries First", text: "Separate the roles of ordinary client devices, infrastructure services, and administrative interfaces. A boundary is useful only when the permitted traffic is understood. The design should start with a dependency inventory: which client needs which service, which service needs storage, and which administrator needs management access." },
      { title: "Keep Management Deliberate", text: "Management interfaces should be reachable through an intentional administration path instead of being exposed wherever client traffic is allowed. The existing lab uses remote access; the next design step is to document where that access enters, what it can reach, and how it can be removed without losing the recovery path." },
      { title: "Account for Storage Dependencies", text: "TrueNAS and ZFS support the documented storage environment, and Linux and container workloads depend on paths, permissions, and network reachability. Segmentation changes need to preserve those dependencies. A service may appear healthy while its storage path or required network connection is unavailable." },
      { title: "Validate Both Allowed and Denied Paths", text: "A future test matrix should include an allowed client-to-service connection, a denied client-to-management connection, an approved administration connection, and a service-to-storage check. Record the source zone, destination, protocol, expected result, observed result, and rollback step. These tests are a publication plan, not reported test results." },
      { title: "Design the Recovery Path", text: "Document how to restore administrative access before changing network boundaries. Configuration backups, a known local access method, and a small change with a clear rollback make the design easier to troubleshoot. Measure recovery during an exercise before presenting a recovery-time result." },
    ],
    takeaway: "Segmentation should make access and dependencies easier to explain. A diagram, an access matrix, and observed test results will demonstrate that more clearly than a list of networking tools.",
    sources: [{ label: "TrueNAS Documentation", href: "https://www.truenas.com/docs/" }, { label: "Docker Networking Documentation", href: "https://docs.docker.com/engine/network/" }],
  },
};
export type ArticleSlug = keyof typeof articles;
