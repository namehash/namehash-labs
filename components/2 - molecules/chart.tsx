import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", sales: 1000 },
  { month: "Feb", sales: 3000 },
  // ... more data points
];

const SimpleAreaChart = () => (
  <div className="relative border-b border-gray-200 pb-[60px]">
    <div className="flex flex-col items-start justify-start translate-y-[25%]">
      <h2 className="text-sm leading-6 font-semibold text-gray-500">
        New ENS names
      </h2>
      <h2 className="text-2xl leading-8 font-semibold">1,608,600</h2>
    </div>

    <ResponsiveContainer width={"100%"} height={80}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#10B981" stopOpacity={1} />
            <stop
              offset="102.5%"
              stopColor="rgba(16, 185, 129, 0)"
              stopOpacity={0.2}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#10B981"
          strokeWidth={2}
          fill="url(#salesGradient)"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default SimpleAreaChart;
