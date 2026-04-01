export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1117] to-[#1a1d23] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-[#FFD700] mb-4 tracking-tight">
        Nullus
      </h1>
      <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">
        Enterprise DevSecOps Platform
      </h2>
      <p className="text-xl text-[#9ca3af] mb-8 max-w-2xl">
        Deploy, Manage, Monitor — All in One Place
      </p>
      <p className="text-lg text-[#e0e0e0] mb-12 max-w-3xl leading-relaxed">
        Nullus is an open-source platform that automates the installation and management of DevSecOps tool stacks on Kubernetes. From GitLab to ArgoCD, Prometheus to Grafana — deploy complete infrastructure with a few clicks.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#features" 
          className="px-8 py-4 bg-[#FFD700] text-[#0f1117] font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        >
          View Features
        </a>
        <a 
          href="#api-status" 
          className="px-8 py-4 bg-transparent border border-[rgba(255,255,255,0.2)] text-white font-bold rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          API Status
        </a>
      </div>
    </section>
  )
}
