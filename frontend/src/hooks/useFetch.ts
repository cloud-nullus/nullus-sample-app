import { useState, useEffect } from 'react'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
  responseTime: number | null
}

export function useFetch<T>(url: string, refreshInterval?: number): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ data: null, loading: true, error: null, responseTime: null })

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      const start = Date.now()
      try {
        const res = await fetch(url)
        const responseTime = Date.now() - start
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: T = await res.json()
        if (mounted) setState({ data, loading: false, error: null, responseTime })
      } catch (e) {
        if (mounted) setState({ data: null, loading: false, error: (e as Error).message, responseTime: null })
      }
    }
    fetchData()
    const interval = refreshInterval ? setInterval(fetchData, refreshInterval) : null
    return () => { mounted = false; if (interval) clearInterval(interval) }
  }, [url, refreshInterval])

  return state
}
