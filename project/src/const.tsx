export enum AppRoute {
  Login = '/login',
  Main = '/',
  Offer = '/offer/:id'
}
export const MAX_RATING = 5;

export const plural = new Intl.PluralRules('en-US');

export const RatingRewiev = [
  {
    id: 5,
    value: 5,
    title: 'perfect'
  },
  {
    id: 4,
    value: 4,
    title: 'good'
  },
  {
    id: 3,
    value: 3,
    title: 'not bad'
  },
  {
    id: 2,
    value: 2,
    title: 'badly'
  },
  {
    id: 1,
    value: 1,
    title: 'terribly'
  },
];

export const MarkerIcon = {
  Default: '/img/pin.svg',
  Active: '/img/pin-active.svg',
  Size: {
    Width: 28,
    Height: 40,
  }
};


export const defaultCity = {
  location: {
    latitude: 48.8534100,
    longitude: 2.3488000,
    zoom: 10
  },
  name: 'Paris'
};


export const cities = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom : 12
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9333000,
      longitude: 6.9500000,
      zoom : 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8504000,
      longitude: 4.3487800,
      zoom : 12
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.939309666406198,
      zoom : 12
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5753200,
      longitude: 10.0153400,
      zoom : 12
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2217200,
      longitude: 6.7761600,
      zoom : 12
    }
  },
];
