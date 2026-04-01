import './index.css'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { Architecture } from './sections/Architecture'
import { TechStack } from './sections/TechStack'
import { ApiStatus } from './sections/ApiStatus'
import { DeployInfo } from './sections/DeployInfo'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Hero />
      <Features />
      <Architecture />
      <TechStack />
      <ApiStatus />
      <DeployInfo />
    </div>
  )
}
