import { useFetch } from '../hooks/useFetch'

interface HealthResponse {
  status: string
  timestamp: string
}

export function ApiStatus() {
  const { data, loading, error, responseTime } = useFetch<HealthResponse>('/api/v1/health', 5000)

  const isOnline = !error && data?.status === 'ok'
  const lastChecked = new Date().toLocaleTimeString()

  return (
    <section id="api-status" className="py-24 px-4 max-w-3xl mx-auto">
      <div className="bg-[#1a1d23] p-8 rounded-2xl border border-[rgba(255,255,255,0.08)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="relative flex h-4 w-4">
              {isOnline ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {isOnline ? 'API Online' : 'API Offline'}
              </h3>
              <p className="text-sm text-[#9ca3af]">
                {isOnline ? 'All systems operational' : 'Unable to reach backend'}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[#9ca3af] bg-[rgba(255,255,255,0.03)] p-4 rounded-lg w-full md:w-auto">
            <div className="flex justify-between gap-8">
              <span>Endpoint:</span>
              <span className="font-mono text-white">/api/v1/health</span>
            </div>
            <div className="flex justify-between gap-8">
              <span>Response Time:</span>
              <span className="font-mono text-white">
                {loading && !responseTime ? '...' : responseTime ? `${responseTime}ms` : '-'}
              </span>
            </div>
            <div className="flex justify-between gap-8">
              <span>Last Checked:</span>
              <span className="font-mono text-white">{lastChecked}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
