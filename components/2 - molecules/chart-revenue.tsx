import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", sales: 1000 },
  { month: "Feb", sales: 3000 },
  // ... more data points
];

const SimpleAreaChart = () => (
  <div className="relative pt-5 pb-10">
    <div className="flex flex-col items-start justify-start translate-y-[25%]">
      <h2 className="text-sm leading-6 font-semibold text-gray-500">
        New ENS DAO Revenue
      </h2>
      <h2 className="text-2xl leading-8 font-semibold">$8,043,000</h2>
    </div>

    <ResponsiveContainer width={"100%"} height={80}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#3B82F6" stopOpacity={1} />
            <stop
              offset="102.5%"
              stopColor="rgba(59, 130, 246, 0.00)"
              stopOpacity={0.2}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#3B82F6"
          strokeWidth={2}
          fill="url(#revenueGradient)"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default SimpleAreaChart;
