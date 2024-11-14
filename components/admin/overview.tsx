"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 234 },
  { name: "Feb", total: 345 },
  { name: "Mar", total: 289 },
  { name: "Apr", total: 432 },
  { name: "May", total: 345 },
  { name: "Jun", total: 387 },
  { name: "Jul", total: 456 },
  { name: "Aug", total: 390 },
  { name: "Sep", total: 456 },
  { name: "Oct", total: 521 },
  { name: "Nov", total: 478 },
  { name: "Dec", total: 389 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis 
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}