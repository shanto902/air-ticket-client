export type AirportData = {
  priority: string;
  code: string;
  airport_name: string;
  city_name: string;
  city_code: string;
  country_name: string;
  search_contents: string;
};

export type AirlineData = {
  [iata_code: string]: {
    Id: number;
    iata_code: string;
    airline_name: string;
    country_code: string;
    country_name: string | null;
    website: string | null;
    facebook: string | null;
  };
};

export type FlightSearchRequest = {
  journey_type: "OneWay" | "RoundTrip" | "MultiCity";
  segment: Array<{
    departure_airport_type: "AIRPORT" | "CITY";
    departure_airport: string;
    arrival_airport_type: "AIRPORT" | "CITY";
    arrival_airport: string;
    departure_date: string;
  }>;
  travelers_adult: number;
  travelers_child: number;
  travelers_child_age: number;
  travelers_infants: number;
  travelers_infants_age: string[];
  preferred_carrier: string[];
  non_stop_flight: "any" | "non-stop";
  baggage_option: "any" | "only-baggage";
  booking_class: "Economy" | "Premium-Economy" | "Business" | "First-Class";
  supplier_uid: string;
  partner_id: string;
  language: string;
};

export type FlightSearchResponse = {
  flights: Array<{
    airline: string;
    price: number;
    duration: string;
    departure_time: string;
    arrival_time: string;
  }>;
};
