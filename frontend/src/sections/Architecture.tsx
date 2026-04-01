export function Architecture() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block relative">
          Architecture
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#FFD700] rounded-full"></div>
        </h2>
      </div>

      <div className="bg-[#1a1d23] p-8 md:p-12 rounded-2xl border border-[rgba(255,255,255,0.08)]">
        <div className="flex flex-col items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg text-center min-w-[200px]">
              <span className="font-bold text-white">Frontend Layer</span>
            </div>
            
            <div className="text-[#FFD700] text-2xl rotate-90 md:rotate-0">→</div>
            
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg text-center min-w-[200px]">
              <span className="font-bold text-white">API Gateway / Echo</span>
            </div>
            
            <div className="text-[#FFD700] text-2xl rotate-90 md:rotate-0">→</div>
            
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-8 py-4 rounded-lg text-center min-w-[200px]">
              <span className="font-bold text-white">Backend Layer</span>
            </div>
          </div>

          <div className="text-[#FFD700] text-2xl">↓</div>

          <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-start">
            <div className="bg-[rgba(51,103,145,0.1)] border border-[rgba(51,103,145,0.3)] px-8 py-6 rounded-lg text-center min-w-[200px] h-full flex items-center justify-center">
              <span className="font-bold text-[#61dafb]">PostgreSQL</span>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 border-l-4 border-l-purple-500">
                <h4 className="font-bold text-white mb-1">Stack</h4>
                <p className="text-xs text-[#9ca3af]">Tool management</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 border-l-4 border-l-blue-500">
                <h4 className="font-bold text-white mb-1">CI/CD</h4>
                <p className="text-xs text-[#9ca3af]">Pipeline execution</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 border-l-4 border-l-green-500">
                <h4 className="font-bold text-white mb-1">Admin</h4>
                <p className="text-xs text-[#9ca3af]">System config</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 border-l-4 border-l-orange-500">
                <h4 className="font-bold text-white mb-1">Auth</h4>
                <p className="text-xs text-[#9ca3af]">Identity & access</p>
              </div>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 border-l-4 border-l-red-500">
                <h4 className="font-bold text-white mb-1">Observability</h4>
                <p className="text-xs text-[#9ca3af]">Metrics & logs</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.08)] w-full text-center">
            <p className="text-[#9ca3af] font-mono text-sm">
              Clean Architecture + DDD · Modular Monolith → Microservices ready
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
