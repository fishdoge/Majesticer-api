"use client"

import DataMetrics from "@/components/data-metrics"
import DataChart from "@/components/data-chart"
import HeroSection from "@/components/hero-section"
import Features from "@/components/features"
import DataPrice from "@/components/data-price"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { createNetworkConfig, SuiClientProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mysten/dapp-kit/dist/index.css';


import dynamic from 'next/dynamic';

const WalletProvider = dynamic(() => import('@mysten/dapp-kit').then(mod => mod.WalletProvider), {
	ssr: false,
});

const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
	devnet:{url: 'https://fullnode.devnet.sui.io:443' }
});

const queryClient = new QueryClient();


export default function HomePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider>
          <InputPage/>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}

function InputPage(){

  return(
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 ">
      <Navbar/>
      <HeroSection />
      <DataMetrics />
      <DataPrice/>
      <Features />
      <DataChart />
      <Footer/>
    </div>
  )
}

