"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import data from "../data/price.json";
import maxPrice from "../data/max-price.json";
import minPrice from "../data/min-price.json";
import avgPrice from "../data/avg-price.json";

export default function DataChart() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 hidden lg:block ">
      <div className="container mx-auto max-w-7xl ">
        {/* sui price per hour */}
        <Card className="bg-gray-800/50 border-gray-700 ">
          <CardHeader>
            <CardTitle className="text-white capitalize">
              network growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                transactions: {
                  label: "api request : ",
                  color: "hsl(var(--chart-1))",
                },
                users: {
                  label: "Active Users",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[500px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="timestamp"
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => value.split(":00:00+08:00")[0]} // 去除時間部分
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    domain={[4, 5.5]} //! 手動調整範圍
                    tickCount={10}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    strokeWidth={2}
                    stroke="var(--color-transactions)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        {/* sui max price per day */}
        <Card className="bg-gray-800/50 border-gray-700 ">
          <CardHeader>
            <CardTitle className="text-white capitalize">
              sui max price per day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                transactions: {
                  label: "api request : ",
                  color: "hsl(var(--chart-1))",
                },
                users: {
                  label: "Active Users",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[500px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={maxPrice}>
                  <XAxis
                    dataKey="timestamp"
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => value.split("T00:00:00+08:00")[0]} // 去除時間部分
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    domain={[4, 5.5]} //! 手動調整範圍
                    tickCount={10}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    strokeWidth={2}
                    stroke="var(--color-users)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        {/* sui min price per day */}
        <Card className="bg-gray-800/50 border-gray-700 ">
          <CardHeader>
            <CardTitle className="text-white capitalize">
              sui min price per day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                transactions: {
                  label: "api request : ",
                  color: "hsl(var(--chart-1))",
                },
                users: {
                  label: "Active Users",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[500px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={minPrice}>
                  <XAxis
                    dataKey="timestamp"
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => value.split("T00:00:00+08:00")[0]} // 去除時間部分
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    domain={[4, 5.5]} //! 手動調整範圍
                    tickCount={10}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    strokeWidth={2}
                    stroke="var(--color-users)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        {/* sui avg price per day */}
        <Card className="bg-gray-800/50 border-gray-700 ">
          <CardHeader>
            <CardTitle className="text-white capitalize">
              sui avg price
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                transactions: {
                  label: "api request : ",
                  color: "hsl(var(--chart-1))",
                },
                users: {
                  label: "Active Users",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[500px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={avgPrice}>
                  <XAxis
                    dataKey="timestamp"
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => value.split("T00:00:00+08:00")[0]} // 去除時間部分
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    domain={[4, 5.5]} //! 手動調整範圍
                    tickCount={10}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    strokeWidth={2}
                    stroke="var(--color-users)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
