import { Store } from "pullstate";
import { FlightSearchResponse } from "../types";

export const FlightStore = new Store<{
  searchResults: FlightSearchResponse | null;
  isLoading: boolean;
  error: string | null;
}>({
  searchResults: null,
  isLoading: false,
  error: null,
});
