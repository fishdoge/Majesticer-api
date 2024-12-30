
import DataMetrics from "@/components/data-metrics"
import DataChart from "@/components/data-chart"
import HeroSection from "@/components/hero-section"
import Features from "@/components/features"
import DataPrice from "@/components/data-price"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">

      <HeroSection />
      <DataMetrics />
      <DataPrice/>
      <Features />
      <DataChart />
      <Footer/>
    </div>
  )
}

