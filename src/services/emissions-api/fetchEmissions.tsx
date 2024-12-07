import apiAdapter from "./apiAdapter";
import { ApiResponse, EmissionData } from "./types";

const API_URL = "https://v1-flask.api-dev-green.emitwise.com/interview/data";

/**
 * Fetches emission data from the API and transforms it using the adapter.
 * Propagates errors to the caller if something goes wrong.
 *
 * @returns A promise that resolves to an array of `EmissionData`.
 * @throws An error if the fetch or transformation fails.
 */
const fetchEmissionData = async (): Promise<EmissionData[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}`);
  }

  const apiResponse: ApiResponse = await response.json();
  const transformedData = apiAdapter(apiResponse);

  return transformedData;
};

export default fetchEmissionData;
