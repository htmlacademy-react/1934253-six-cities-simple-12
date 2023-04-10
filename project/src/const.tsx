export enum AppRoute {
  Login = '/login',
  Main = '/',
  Offer = '/offer/:id'
}
export const MAX_RATING = 5;

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
