import { useFetch } from '../hooks/useFetch'

interface InfoResponse {
  version: string
  buildTime: string
  goVersion: string
  namespace: string
  podName: string
}

export function DeployInfo() {
  const { data, loading, error } = useFetch<InfoResponse>('/api/v1/info')

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block relative">
          Deployment Info
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#FFD700] rounded-full"></div>
        </h2>
      </div>

      {loading && (
        <div className="bg-[#1a1d23] p-8 rounded-2xl border border-[rgba(255,255,255,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg animate-pulse">
                <div className="h-4 bg-[rgba(255,255,255,0.1)] rounded w-1/3 mb-2"></div>
                <div className="h-6 bg-[rgba(255,255,255,0.1)] rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-[#1a1d23] p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] text-center">
          <p className="text-[#9ca3af]">Deployment info unavailable</p>
        </div>
      )}

      {!loading && !error && data && (
        <div className="bg-[#1a1d23] p-8 rounded-2xl border border-[rgba(255,255,255,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
              <p className="text-sm text-[#9ca3af] mb-1">Version</p>
              <p className="font-mono text-white">{data.version}</p>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
              <p className="text-sm text-[#9ca3af] mb-1">Build Time</p>
              <p className="font-mono text-white">{data.buildTime}</p>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
              <p className="text-sm text-[#9ca3af] mb-1">Go Version</p>
              <p className="font-mono text-white">{data.goVersion}</p>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
              <p className="text-sm text-[#9ca3af] mb-1">Namespace</p>
              <p className="font-mono text-white">{data.namespace}</p>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)] lg:col-span-2">
              <p className="text-sm text-[#9ca3af] mb-1">Pod Name</p>
              <p className="font-mono text-white truncate" title={data.podName}>{data.podName}</p>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
