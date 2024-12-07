"use client";
import Introduction from "./Introduction";
import EmissionsChart from "./EmissionsChart";
import useFetchedEmissionsData from "./hooks/useFetchedEmissionsData";

export default function Analyse() {
  const { data, loading, error } = useFetchedEmissionsData();
  return (
    <>
      <Introduction />
      <br />

      {loading && "Loading Analysis Data..."}
      {!loading && data && <EmissionsChart data={data} />}
      {!loading && !data.length && !error && (
        <p>No data exists for this Analysis</p>
      )}
      {!loading && !data.length && error && <p>{error}</p>}
    </>
  );
}
