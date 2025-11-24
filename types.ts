export interface Location {
  id: string;
  name: string;
  jpName: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ItineraryRequest {
  days: number;
  guests: number;
  interests: string[];
  luxuryLevel: '标准' | '豪华' | '超奢华';
  includeCamping: boolean;
  vehicleType: 'Alphard Executive' | 'HiAce Grand Cabin';
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  stay: string;
}

export interface GeneratedItinerary {
  title: string;
  summary: string;
  days: ItineraryDay[];
}