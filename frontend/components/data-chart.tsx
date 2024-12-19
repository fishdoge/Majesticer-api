"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "2024-06", transactions: 90000, users: 12000 },
  { date: "2024-07", transactions: 170000, users: 12500 },
  { date: "2024-08", transactions: 120000, users: 13000 },
  { date: "2024-09", transactions: 180000, users: 13800 },
  { date: "2024-10", transactions: 170000, users: 14500 },
  { date: "2024-11", transactions: 220000, users: 15200 },
  { date: "2024-12", transactions: 290000, users: 17600 },
]

export default function DataChart() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Network Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                transactions: {
                  label: "Transactions",
                  color: "hsl(var(--chart-1))",
                },
                users: {
                  label: "Active Users",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[600px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="date"
                    stroke="#888888"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="transactions"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                    stroke="var(--color-transactions)"
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                    stroke="var(--color-users)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

