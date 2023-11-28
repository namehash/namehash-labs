import React from "react";
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

interface SimpleAreaChartProps {
  initialValue: number;
  growthPerYear: number;
}

function commafy(num: number) {
  var str = num.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
}
const SimpleAreaChart = ({
  initialValue,
  growthPerYear,
}: SimpleAreaChartProps) => {
  const data = [
    { month: "1 year", sales: initialValue },
    { month: "2 year", sales: initialValue * (1 + growthPerYear) },
    {
      month: "3 year",
      sales: initialValue * (1 + growthPerYear) * (1 + growthPerYear),
    },
    {
      month: "4 year",
      sales:
        initialValue *
        (1 + growthPerYear) *
        (1 + growthPerYear) *
        (1 + growthPerYear),
    },
    {
      month: "5 year",
      sales:
        initialValue *
        (1 + growthPerYear) *
        (1 + growthPerYear) *
        (1 + growthPerYear) *
        (1 + growthPerYear),
    },
  ];

  return (
    <div className="relative pt-5 pb-10">
      <div className="flex flex-col items-start justify-start translate-y-[25%]">
        <h2 className="text-sm leading-6 font-semibold text-gray-500">
          New ENS DAO Revenue
        </h2>
        <h2 className="text-2xl leading-8 font-semibold">
          ${commafy(initialValue)}
        </h2>
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
          <YAxis
            hide={true}
            type="number"
            domain={[0, 1500000000]}
            interval={0}
            tickLine={false}
            scale={"sequential"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;
