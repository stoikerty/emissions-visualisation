const API_URL = "https://v1-flask.api-dev-green.emitwise.com/interview/data";

const emissionsAdapter = (apiResponse) => {
  const totalEmissions = apiResponse["Total emissions"];
  const emissionIntensity = apiResponse["Emission intensity"];

  return totalEmissions
    .map((total) => {
      const matchingIntensity = emissionIntensity.find(
        (intensity) => intensity.date === total.date
      );

      // Skips unmatched dates. If different behaviour is desired, it can be defined here.
      if (!matchingIntensity) return null;

      return {
        date: new Date(total.date * 1000).toISOString(),
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
    .filter(Boolean);
};

export default async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const apiResponse = await response.json();

    const transformedData = emissionsAdapter(apiResponse);

    return transformedData;
  } catch (error) {
    // Handle any errors that occurred during the fetch or data transformation
    console.error("Error fetching or processing data:", error.message);
    return []; // Return an empty array as a fallback
  }
};
