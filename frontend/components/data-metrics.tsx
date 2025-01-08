"use client"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, LineChart, Activity, TrendingUp } from 'lucide-react'
import { useEffect,useState } from "react"
import { fetchTvl } from '@/components/price/suiTvl'

export default function DataMetrics() {
  //const [callRequest,setCallRequest] = useState(0);
  const [suiTvl,setSuiTvl] = useState('0');
  //const [dailyTransaciotns,setDailyTransaciotns] = useState(0)

  useEffect(()=>{

    async function req(){

      console.log('run defillma')
      //const callRequest = await fetch(`${window.location.href}/api/api_request`);

      const suiTvl = await fetchTvl()

      
      const suiTvlString = String(Math.round((suiTvl??0)/1000000)) + ' M '
      setSuiTvl(suiTvlString)
      //setCallRequest(await callRequest.json())

      // const dailyTrans = await fetch(`${window.location.href}/api/suiDailyTransaction`);
      // setDailyTransaciotns(await dailyTrans.json())

    }
    req()
  })
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={<Activity className="w-8 h-8 text-blue-500" />}
            title="Daily Transactions on SUI"
            value={'15 M+'}
          />
          <MetricCard
            icon={<BarChart3 className="w-8 h-8 text-green-500" />}
            title="Api Request"
            value={'2857'}

          />
          <MetricCard
            icon={<LineChart className="w-8 h-8 text-purple-500" />}
            title="Smart Contracts - cetus deepbook bluemove"
            value="17"

          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8 text-orange-500" />}
            title="Sui TVL - from DefiLlama"
            value={suiTvl.toString()}
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

