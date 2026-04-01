import { useFetch } from '../hooks/useFetch'

interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export function Features() {
  const { data: features, loading, error } = useFetch<Feature[]>('/api/v1/features')

  const renderIcon = (iconStr: string) => {
    const iconMap: Record<string, string> = {
      'shield': '🛡️',
      'server': '🖥️',
      'activity': '📈',
      'lock': '🔒',
      'box': '📦',
      'zap': '⚡',
      'cloud': '☁️',
      'code': '💻'
    }
    return iconMap[iconStr] || '✨'
  }

  return (
    <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block relative">
          Key Features
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#FFD700] rounded-full"></div>
        </h2>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-[#1a1d23] p-8 rounded-xl border border-[rgba(255,255,255,0.08)] animate-pulse">
              <div className="w-12 h-12 bg-[rgba(255,255,255,0.1)] rounded-lg mb-6"></div>
              <div className="h-6 bg-[rgba(255,255,255,0.1)] rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-[rgba(255,255,255,0.1)] rounded w-full mb-2"></div>
              <div className="h-4 bg-[rgba(255,255,255,0.1)] rounded w-5/6"></div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-[#1a1d23] p-8 rounded-xl border border-[rgba(255,255,255,0.08)] text-center max-w-2xl mx-auto">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-white mb-2">Unable to load features</h3>
          <p className="text-[#9ca3af]">{error}</p>
        </div>
      )}

      {!loading && !error && features && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-[#1a1d23] p-8 rounded-xl border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:-translate-y-1"
            >
              <div className="text-4xl mb-6 bg-[rgba(255,255,255,0.05)] w-16 h-16 flex items-center justify-center rounded-xl">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#9ca3af] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
