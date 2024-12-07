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

interface ChartData {
  name: string;
  total: number;
  intensity: number;
}

const data: ChartData[] = [
  { name: "Jan", total: 100, intensity: 75 },
  { name: "Feb", total: 90, intensity: 70 },
  { name: "Mar", total: 80, intensity: 65 },
  { name: "Apr", total: 70, intensity: 60 },
  { name: "May", total: 65, intensity: 55 },
  { name: "Jun", total: 60, intensity: 50 },
  { name: "Jul", total: 55, intensity: 45 },
  { name: "Aug", total: 50, intensity: 40 },
  { name: "Sep", total: 45, intensity: 35 },
  { name: "Oct", total: 40, intensity: 30 },
  { name: "Nov", total: 35, intensity: 25 },
  { name: "Dec", total: 30, intensity: 20 },
];

const renderLegendText = (value: string, entry: any) => {
  return <span style={{ color: "#787D7F" }}>{value}</span>;
};

const EmissionsChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart data={data} barSize="19">
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
          name="Total Emissions (tCO2e)"
        />
        <Line
          yAxisId="right"
          type="linear"
          dataKey="intensity"
          stroke="#A761C1"
          strokeWidth={2}
          name="Emissions Intensity (kgCO2e / m2)"
          dot={{ fill: "#A761C1", r: 4 }} // Custom dot color and size
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default EmissionsChart;
