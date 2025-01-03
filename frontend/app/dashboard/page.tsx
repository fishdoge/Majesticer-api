"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Copy, Key } from 'lucide-react'
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

import Navbar from "@/components/navbar"

const usageData = [
  { date: "2024-01-01", apiCalls: 2500 },
  { date: "2024-01-02", apiCalls: 3200 },
  { date: "2024-01-03", apiCalls: 4100 },
  { date: "2024-01-04", apiCalls: 3800 },
  { date: "2024-01-05", apiCalls: 4500 },
  { date: "2024-01-06", apiCalls: 5200 },
  { date: "2024-01-07", apiCalls: 4800 },
]

export default function DashboardPage() {
  const [apiKey] = useState("sk_test_12345678901234567890")
  const { toast } = useToast()

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    toast({
      title: "API Key copied",
      description: "Your API key has been copied to the clipboard.",
    })
  }

  return (
    <div className="container mx-auto max-w-8xl">
    <Navbar/>
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total API Calls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">24,685</div>
                <p className="text-xs text-gray-400">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Current Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">Pro</div>
                <p className="text-xs text-gray-400">Up to 100k calls/month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Plan Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">24.7%</div>
                <p className="text-xs text-gray-400">24,685 of 100,000 calls</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Account Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">
                    Active
                  </Badge>
                </div>
                <p className="text-xs text-gray-400">All systems operational</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">API Usage Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ChartContainer
                  config={{
                    apiCalls: {
                      label: "API Calls",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={usageData}>
                      <XAxis
                        dataKey="date"
                        stroke="#888888"
                        fontSize={12}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                      />
                      <ChartTooltip />
                      <Line
                        type="monotone"
                        dataKey="apiCalls"
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                        stroke="var(--color-apiCalls)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Account Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Name</p>
                    <p className="text-sm text-gray-400">John Doe</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Email</p>
                    <p className="text-sm text-gray-400">john@example.com</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Plan</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Pro Plan</p>
                      <Button variant="outline" size="sm">
                        Upgrade
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Analytics Coming Soon</CardTitle>
              <CardDescription className="text-gray-400">
                Detailed analytics features will be available in the next update.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="api" className="space-y-4">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">API Keys</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your API keys and access tokens.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-300">Live API Key</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-gray-700 hover:bg-gray-700"
                      onClick={copyApiKey}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border border-gray-700 bg-gray-900/50 px-4 py-2">
                    <Key className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400 font-mono">
                      {apiKey}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">API Documentation</p>
                  <p className="text-sm text-gray-400">
                    View our comprehensive API documentation to get started with integrating our services.
                  </p>
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-700">
                    View Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>

    </div>
  )
}

