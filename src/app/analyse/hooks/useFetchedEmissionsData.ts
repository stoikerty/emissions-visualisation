"use client";
import { useEffect, useState } from "react";
import fetchEmissionData from "src/services/emissions-api/fetchEmissions";
import { EmissionData } from "src/services/emissions-api/types";

export default function useFetchedEmissionsData() {
  const [data, setData] = useState<EmissionData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data: EmissionData[] = await fetchEmissionData();
      setData(data);
    } catch (err) {
      setError("Failed to fetch emissions data");
      console.error("Error fetching emissions data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
