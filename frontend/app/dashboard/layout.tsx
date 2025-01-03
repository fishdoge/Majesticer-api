"use client"

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



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider>
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <Navbar />
            <div className="pt-16">
              {children}
            </div>
          </div>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}

