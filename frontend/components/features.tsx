import { Card, CardContent } from "@/components/ui/card"
import { Database, LineChart, Shield, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Comprehensive SUI Blockchain Analytics
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get access to in-depth analytics and insights about the SUI blockchain ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Database className="w-6 h-6 text-blue-500" />}
            title="Real-time Data"
            description="Access live blockchain metrics and transaction data instantly"
          />
          <FeatureCard 
            icon={<LineChart className="w-6 h-6 text-green-500" />}
            title="Advanced Analytics"
            description="Powerful tools for analyzing trends and patterns"
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-purple-500" />}
            title="Secure Access"
            description="Enterprise-grade security for your data needs"
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-orange-500" />}
            title="Fast API"
            description="High-performance API with minimal latency"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

