export type OfferCard = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  images: string[];
  price: number;
  rating: number;
  title: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  description: string;
  city: City;
  location: Location;
  host: Host;
};

export type City ={
  name: string;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type OfferCards = OfferCard[];

export type CitiesName = {
  'name': string;
  'location': {
    'latitude': number;
    'longitude': number;
  };
}
