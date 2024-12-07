import { ApiResponse, EmissionData } from "./types";

/**
 * Adapts the raw API response to a format used internally in the app.
 *
 * @param apiResponse - The raw API response containing total emissions and emission intensity data.
 * @returns An array of adapted emission data where dates are matched and converted.
 */
export default (apiResponse: ApiResponse): EmissionData[] => {
  const totalEmissions = apiResponse["Total emissions"];
  const emissionIntensity = apiResponse["Emission intensity"];

  return totalEmissions
    .map((total) => {
      const matchingIntensity = emissionIntensity.find(
        (intensity) => intensity.date === total.date
      );

      // Skip unmatched dates. If different behaviour is desired, it can be defined here.
      if (!matchingIntensity) return null;

      return {
        date: new Date(total.date * 1000),
        total: {
          value: total.value,
          unit: total.unit,
        },
        intensity: {
          value: matchingIntensity.value,
          unit: matchingIntensity.unit,
        },
      };
    })
    .filter((item): item is EmissionData => item !== null); // Type guard to filter out null values
};
