"use client";
import React from "react";
import Chart, { ChartData } from "src/components/Chart";
import { EmissionData } from "src/services/emissions-api/types";

const transformToChartData = (data: EmissionData[]) =>
  data.map((item) => {
    const date = new Date(item.date);
    const monthName = date.toLocaleString("default", { month: "short" });
    return {
      name: monthName,
      total: item.total.value / 1000, // Convert kg to tons
      intensity: item.intensity.value,
    };
  });

export default function EmissionsChart({ data }: { data: EmissionData[] }) {
  return <Chart data={transformToChartData(data)} />;
}
