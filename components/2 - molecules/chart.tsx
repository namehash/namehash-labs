import React from "react";
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

interface SimpleAreaChartProps {
  initialValue: number;
  growthPerYear: number;
}

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: number;
  };
}

const CustomTick = (props: CustomTickProps) => {
  const { x, y, payload } = props;
  const value = payload?.value;
  const formattedValue = value! >= 1000 ? `$${value! / 1000000}M` : value;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        className="text-gray-500 leading-[16px] text-[12px] font-medium"
        x={0}
        y={0}
        dy={16}
        fill="#6B7280"
      >
        {formattedValue}
      </text>
    </g>
  );
};

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

  const chartKey = `chart-${initialValue}-${growthPerYear}`;

  return (
    <div className="relative border-b border-gray-200 pb-[60px]">
      <div className="flex flex-col items-start justify-start translate-y-[25%]">
        <h2 className="text-sm leading-6 font-semibold text-gray-500">
          New ENS names
        </h2>
        <h2 className="text-2xl leading-8 font-semibold">
          {commafy(initialValue)}
        </h2>
      </div>

      <ResponsiveContainer width={"100%"} height={80} key={chartKey}>
        <AreaChart width={488} height={80} data={data}>
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
          <YAxis
            tickFormatter={(value) => {
              return value >= 1000 ? `${value / 1000000}M` : value;
            }}
            tickCount={2}
            orientation="right"
            type="number"
            axisLine={false}
            tickLine={false}
            scale={"sequential"}
            tick={<CustomTick />}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="w-full flex justify-end pr-[10%]">
        <p className="text-gray-500 leading-[16px] text-[12px] font-medium">
          5 yr
        </p>
      </div>
    </div>
  );
};

export default SimpleAreaChart;
