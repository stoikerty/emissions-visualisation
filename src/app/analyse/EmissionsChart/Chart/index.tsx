"use client";

import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface ChartData {
  name: string;
  total: number;
  intensity: number;
}

interface EmissionsChartProps {
  data: ChartData[];
}

const renderLegendText = (value: string, entry: any) => {
  return <span style={{ color: "#787D7F" }}>{value}</span>;
};

const EmissionsChart: React.FC<EmissionsChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart data={data} barSize={19}>
        <CartesianGrid stroke="#F4F4F4" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#787D7F" }}
        />
        <YAxis
          yAxisId="left"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#787D7F" }}
          label={{
            value: "Total emissions (tCO2e)",
            angle: -90,
            position: "insideLeft",
            fill: "#787D7F",
            style: { textAnchor: "middle" },
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#787D7F" }}
          label={{
            value: "Emissions Intensity (kgCO2e / m2)",
            angle: -90,
            position: "insideRight",
            fill: "#787D7F",
            style: { textAnchor: "middle" },
          }}
        />
        <Tooltip />
        <Legend
          formatter={renderLegendText}
          iconType="square"
          iconSize={12}
          align="left"
        />

        <Bar
          yAxisId="left"
          dataKey="total"
          fill="#00D3B9"
          name="Total Emissions"
        />
        <Line
          yAxisId="right"
          type="linear"
          dataKey="intensity"
          stroke="#A761C1"
          strokeWidth={2}
          name="Emissions intensity"
          dot={{ fill: "#A761C1", r: 4 }} // Custom dot color and size
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default EmissionsChart;
