"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect,useState } from "react"

//import { preSwapDeep, suiPriceInNumber} from '../components/price/deepbook'

export default function DataPrice() {

  const [suiPrice,setSuiPrice] = useState(0);
  const [deepPrice,setDeepPrice] = useState(0);

  useEffect(()=>{
    console.log("host",`${window.location.href}api/sui_price_number`)
    const setCallData = async()=>{
      const suiresponse = await fetch(`${window.location.href}/api/sui_price_number`);
      const sui = await suiresponse.json();
      setSuiPrice(sui);
      //setDeepPrice(await preSwapDeep);
      const deepresponse = await fetch(`${window.location.href}/api/deep_price`);
      const deep = await deepresponse.json();
      setDeepPrice(deep);
    }

    setCallData();

  })
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <MetricCard
            icon="/sui2.png"
            title="SUI"
            value={suiPrice+" USD"}
            change="+12.5%"
            states={40}
          />

          <MetricCard
            icon="/deep.png"
            title="DEEP"
            value={deepPrice + " USD"}
            change="+10.3%"
            states={30}
          />
        </div>
      </div>
    </section>
  )
}

function MetricCard({ icon, title, value, change, states}: {
  icon: string
  title: string
  value: string
  change: string
  states: number
}) {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
        <Image
          src={icon}
          width={states}
          height={states}
          alt="Picture of the author"
        />
          <span className="text-green-500 text-lm font-medium">{change}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-white">{value}</h3>
        <p className="text-gray-400">{title}</p>
      </CardContent>
    </Card>
  )
}

