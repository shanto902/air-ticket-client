import { Store } from "pullstate";
import { AirportData } from "../types";

export const AirportStore = new Store<{
  airportSuggestions: AirportData[];
  isLoading: boolean;
  error: string | null;
}>({
  airportSuggestions: [],
  isLoading: false,
  error: null,
});
