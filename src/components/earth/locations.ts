export interface EarthLocation {
  name: string;
  lat: number;
  lng: number;
}

export const LOCATIONS: Record<string, EarthLocation> = {
  bengaluru: {
    name: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
  },

  bangalore: {
    name: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
  },

  mumbai: {
    name: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
  },

  delhi: {
    name: "Delhi",
    lat: 28.6139,
    lng: 77.209,
  },

  chennai: {
    name: "Chennai",
    lat: 13.0827,
    lng: 80.2707,
  },

  hyderabad: {
    name: "Hyderabad",
    lat: 17.385,
    lng: 78.4867,
  },
};