export function TechStack() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block relative">
          Tech Stack
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#FFD700] rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1a1d23] p-8 rounded-xl border border-[rgba(255,255,255,0.08)]">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>⚙️</span> Backend
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(0,173,216,0.15)] text-[#00add8]">Go 1.26</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(51,103,145,0.15)] text-[#336791]">PostgreSQL</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(255,215,0,0.15)] text-[#FFD700]">Echo v4</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(255,215,0,0.15)] text-[#FFD700]">Helm SDK</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(255,215,0,0.15)] text-[#FFD700]">client-go</span>
          </div>
        </div>

        <div className="bg-[#1a1d23] p-8 rounded-xl border border-[rgba(255,255,255,0.08)]">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🎨</span> Frontend
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(97,218,251,0.15)] text-[#61dafb]">React 19</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(49,120,198,0.15)] text-[#3178c6]">TypeScript</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(100,108,255,0.15)] text-[#646cff]">Vite</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(56,189,248,0.15)] text-[#38bdf8]">Tailwind CSS 4</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(255,255,255,0.1)] text-white">shadcn/ui</span>
          </div>
        </div>

        <div className="bg-[#1a1d23] p-8 rounded-xl border border-[rgba(255,255,255,0.08)]">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>☁️</span> Infrastructure
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(50,108,229,0.15)] text-[#326ce5]">Kubernetes</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(13,183,237,0.15)] text-[#0db7ed]">Docker</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(255,255,255,0.1)] text-white">GitHub Actions</span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[rgba(255,215,0,0.15)] text-[#FFD700]">Keycloak OIDC</span>
          </div>
        </div>
      </div>
    </section>
  )
}
