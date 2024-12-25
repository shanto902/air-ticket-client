import { Store } from "pullstate";
import { AirlineData } from "../types";

export const AirlineStore = new Store<{
  airlines: AirlineData | null;
  isLoading: boolean;
  error: string | null;
}>({
  airlines: null,
  isLoading: false,
  error: null,
});
