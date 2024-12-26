"use client"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, LineChart, Activity, TrendingUp } from 'lucide-react'
import { useEffect,useState } from "react"
import { pureCallRequest } from '../pages/api/NumberOfRequests'

export default function DataMetrics() {
  const [callRequest,setCallRequest] = useState(0);
  
  useEffect(()=>{
    
    const setCallData = async()=>{
      setCallRequest(await pureCallRequest());
    }

    setCallData();
    
  })
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={<Activity className="w-8 h-8 text-blue-500" />}
            title="Total Transactions"
            value="2.4M+"
            change="+12.5%"
          />
          <MetricCard
            icon={<BarChart3 className="w-8 h-8 text-green-500" />}
            title="Daily Active Users"
            value={callRequest.toString()}
            change="+8.2%"
          />
          <MetricCard
            icon={<LineChart className="w-8 h-8 text-purple-500" />}
            title="Smart Contracts"
            value="45.2K"
            change="+15.7%"
          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8 text-orange-500" />}
            title="Market Volume"
            value="$892M"
            change="+10.3%"
          />
        </div>
      </div>
    </section>
  )
}

function MetricCard({ icon, title, value, change }: {
  icon: React.ReactNode
  title: string
  value: string
  change: string
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          {icon}
          <span className="text-green-500 text-sm font-medium">{change}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-white">{value}</h3>
        <p className="text-gray-400">{title}</p>
      </CardContent>
    </Card>
  )
}

