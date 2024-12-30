"use client"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, LineChart, Activity, TrendingUp } from 'lucide-react'
//import { useEffect,useState } from "react"
//import { pureCallRequest } from '../pages/api/numberOfRequests.js'

export default function DataMetrics() {
  //const [callRequest,setCallRequest] = useState(0);
  const callRequest = 2355;
  // useEffect(()=>{

  //   const setCallData = async()=>{
  //     setCallRequest(await pureCallRequest());
  //   }

  //   setCallData();

  // })
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={<Activity className="w-8 h-8 text-blue-500" />}
            title="Total Transactions"
            value="2.4M+"
          />
          <MetricCard
            icon={<BarChart3 className="w-8 h-8 text-green-500" />}
            title="Api Request"
            value={callRequest.toString()}

          />
          <MetricCard
            icon={<LineChart className="w-8 h-8 text-purple-500" />}
            title="Smart Contracts"
            value="45.2K"

          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8 text-orange-500" />}
            title="Expect Market Volume"
            value="$892M"
          />
        </div>
      </div>
    </section>
  )
}

function MetricCard({ icon, title, value }: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          {icon}

        </div>
        <h3 className="mt-4 text-3xl font-bold text-white">{value}</h3>
        <p className="text-gray-400 ">{title}</p>
      </CardContent>
    </Card>
  )
}

