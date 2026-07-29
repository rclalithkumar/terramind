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


  tokyo: {
    name: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
  },


  london: {
    name: "London",
    lat: 51.5074,
    lng: -0.1278,
  },


  newyork: {
    name: "New York",
    lat: 40.7128,
    lng: -74.006,
  },


  paris: {
    name: "Paris",
    lat: 48.8566,
    lng: 2.3522,
  },


  singapore: {
    name: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
  },


  sydney: {
    name: "Sydney",
    lat: -33.8688,
    lng: 151.2093,
  },


  dubai: {
    name: "Dubai",
    lat: 25.2048,
    lng: 55.2708,
  },

};