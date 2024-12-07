const API_URL = "https://v1-flask.api-dev-green.emitwise.com/interview/data";

const emissionsAdapter = (apiResponse) => {
  return apiResponse;
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
