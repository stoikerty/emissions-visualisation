"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import Chart, { ChartData } from "src/components/Chart";
import fetchEmissionData from "src/services/emissions-api/fetchEmissions";
import { EmissionData } from "src/services/emissions-api/types";

const ImageBackground = styled.div`
  display: flex;
  padding: 16px;
  background-color: #081014;
`;
const PageContainer = styled.div`
  padding: 16px;
`;

const EmissionsChartWrapper: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: EmissionData[] = await fetchEmissionData();

        // Transform the data to match ChartData format
        const transformedData = data.map((item) => {
          const date = new Date(item.date);
          const monthName = date.toLocaleString("default", { month: "short" });
          return {
            name: monthName,
            total: item.total.value / 1000, // Convert kg to tons
            intensity: item.intensity.value,
          };
        });

        setChartData(transformedData);
      } catch (err) {
        setError("Failed to fetch emissions data");
        console.error("Error fetching emissions data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return <Chart data={chartData} />;
};

export default function Home() {
  return (
    <>
      <ImageBackground>
        <Image
          src="/app-logo.svg"
          alt="Emitwise Logo"
          width={20}
          height={20}
          priority
        />
      </ImageBackground>
      <PageContainer>
        Antwerp plant
        <br />
        <br />
        <EmissionsChartWrapper />
      </PageContainer>
    </>
  );
}
