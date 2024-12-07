"use client";
import React from "react";
import Chart, { ChartData } from "./Chart";
import { EmissionData } from "src/services/emissions-api/types";
import styles from "./styles.module.css";

const convertKgToTons = (value: number) => value / 1000;

const transformToChartData = (data: EmissionData[]): ChartData[] => {
  // group data by month
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

  // calculate averages
  return Object.entries(monthlyData).map(([monthName, values]) => ({
    name: monthName,
    total: convertKgToTons(values.total / values.count),
    intensity: values.intensity / values.count,
  }));
};

const getformattedStartEndDate = (data: EmissionData[]): string => {
  // sort dates in ascending order
  const dates = data.map((item) => new Date(item.date));
  dates.sort((a, b) => a.getTime() - b.getTime());

  // get start and end dates
  const startDate = dates[0];
  const endDate = dates[dates.length - 1];

  // format dates into the specified string
  const formatDate = (date: Date) =>
    `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  return `${formatDate(startDate)} to ${formatDate(endDate)}`;
};

export default function EmissionsChart({ data }: { data: EmissionData[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <span className={styles.title}>Emissions over time</span>
        <br />
        <span className={styles.dateRange}>
          {getformattedStartEndDate(data)}
        </span>
      </div>
      <Chart data={transformToChartData(data)} />
    </div>
  );
}
