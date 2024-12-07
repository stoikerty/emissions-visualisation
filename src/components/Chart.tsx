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

// Sample data
const data = [
  { name: "Jan", totalEmissions: 100, emissionsIntensity: 75 },
  { name: "Feb", totalEmissions: 90, emissionsIntensity: 70 },
  { name: "Mar", totalEmissions: 80, emissionsIntensity: 65 },
  { name: "Apr", totalEmissions: 70, emissionsIntensity: 60 },
  { name: "May", totalEmissions: 65, emissionsIntensity: 55 },
  { name: "Jun", totalEmissions: 60, emissionsIntensity: 50 },
  { name: "Jul", totalEmissions: 55, emissionsIntensity: 45 },
  { name: "Aug", totalEmissions: 50, emissionsIntensity: 40 },
  { name: "Sep", totalEmissions: 45, emissionsIntensity: 35 },
  { name: "Oct", totalEmissions: 40, emissionsIntensity: 30 },
  { name: "Nov", totalEmissions: 35, emissionsIntensity: 25 },
  { name: "Dec", totalEmissions: 30, emissionsIntensity: 20 },
];

const EmissionsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          yAxisId="left"
          label={{
            value: "Total emissions (tCO2e)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{
            value: "Emissions Intensity (kgCO2e / m2)",
            angle: -90,
            position: "insideRight",
          }}
        />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="totalEmissions"
          fill="#00d2aa"
          name="Total emissions"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="emissionsIntensity"
          stroke="#c084f5"
          dot={{ stroke: "#c084f5", strokeWidth: 2 }}
          name="Emissions intensity"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default EmissionsChart;
