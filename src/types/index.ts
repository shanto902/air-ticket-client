export interface AirportSuggestion {
  priority: string;
  code: string;
  airport_name: string;
  city_name: string;
  city_code: string;
  country_name: string;
  search_contents: string;
}

export interface FlightSearchParams {
  departure: string;
  destination: string;
  date: string;
  passengers: number;
}

export interface FlightData {
  airline: string;
  flight_number: string;
  departure_time: string;
  arrival_time: string;
  price: number;
}
