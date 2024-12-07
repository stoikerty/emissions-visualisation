"use client";
import React from "react";
import Chart, { ChartData } from "./Chart";
import { EmissionData } from "src/services/emissions-api/types";
import styles from "./styles.module.css";

const transformToChartData = (data: EmissionData[]): ChartData[] => {
  // Group data by month
  const monthlyData = data.reduce((acc, item) => {
    const date = new Date(item.date);
    const monthName = date.toLocaleString("default", { month: "short" });

    if (!acc[monthName]) {
      acc[monthName] = { total: 0, intensity: 0, count: 0 };
    }

    acc[monthName].total += item.total.value;
    acc[monthName].intensity += item.intensity.value;
    acc[monthName].count += 1;

    return acc;
  }, {} as Record<string, { total: number; intensity: number; count: number }>);

  // Calculate averages and convert kg to tons at the end
  return Object.entries(monthlyData).map(([monthName, values]) => ({
    name: monthName,
    total: values.total / values.count / 1000, // Convert to tons after averaging
    intensity: values.intensity / values.count, // Average intensity
  }));
};

export default function EmissionsChart({ data }: { data: EmissionData[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <span className={styles.title}>Emissions over time</span>
        <br />
        <span className={styles.dateRange}>Emissions over time</span>
      </div>
      <Chart data={transformToChartData(data)} />
    </div>
  );
}
