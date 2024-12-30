"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {

  const openGitBook =()=>{

    window.open("https://gitbook.majesticer.xyz/", "majesticer");

  }
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 mt-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
            <Image
              src="/sui.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
              <h2 className="text-2xl text-primary text-yellow-50 font-extrabold tracking-tight">Majesticer - SUI Data Analytics</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Unlock the Power of <span className="text-blue-500">SUI Blockchain</span> Data
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Professional-grade data analytics and insights for the SUI blockchain ecosystem. Real-time metrics, comprehensive analysis, and actionable intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Exploring
              </Button>
              <Button size="lg" variant="outline" onClick={openGitBook}>
                View Documentation
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-500 backdrop-blur-2xl" >

                <div className="absolute flex justify-center place-items-center h-full w-full">
                  <Image
                    src="/suimm.png"
                    width={400}
                    height={420}
                    alt="Picture of the author"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

