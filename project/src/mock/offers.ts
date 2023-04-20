import { OfferCards } from '../types/offers';

export const offers: OfferCards = [
  {
    id: 1,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    images: [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    price: 127,
    rating: 3.8,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a slow pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.371,
        longitude: 4.894,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },

  {
    id: 2,
    isPremium: false,
    previewImage: 'img/room.jpg',
    images: [
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
    ],
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Private room',
    bedrooms: 1,
    maxAdults: 1,
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Air conditioning',
    ],
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.371,
        longitude: 4.894,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },

  {
    id: 3,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    images: [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
    ],
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
    ],
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.371,
        longitude: 4.894,
        zoom: 13,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },

  {
    id: 4,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    images: [
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
    ],
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    bedrooms: 1,
    maxAdults: 1,
    goods: [
      'Washer',
      'Towels',
      'Dishwasher',
      'Fridge',
      'Air conditioning',
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Baby seat',
      'Washing machine',
    ],
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.371,
        longitude: 4.894,
        zoom: 13,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude':53.3909553943508,
        'longitude': 4.939309666406198,
        'zoom': 10
      },
      'name': 'Dusseldorf'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 5,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 5,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious',
    'type': 'apartment'
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude': 5.3909553943508,
        'longitude': 1.939309666406198,
        'zoom': 10
      },
      'name': 'Brussels'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 6,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 6,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious',
    'type': 'apartment'
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude': 5.3909553943508,
        'longitude': 1.939309666406198,
        'zoom': 10
      },
      'name': 'Brussels'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 7,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 7,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 122,
    'rating': 4.8,
    'title': 'Beautiful & luxurious',
    'type': 'apartment'
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude': 5.3909553943508,
        'longitude': 1.939309666406198,
        'zoom': 10
      },
      'name': 'Brussels'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 8,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 8,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 123,
    'rating': 4.8,
    'title': 'Beautiful & luxurious',
    'type': 'apartment'
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude': 56.3909553943508,
        'longitude': 4.939309666406198,
        'zoom': 10
      },
      'name': 'Cologne'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 9,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 9,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 124,
    'rating': 4.8,
    'title': 'Beautiful & luxurious',
    'type': 'apartment'
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.939309666406198,
        'zoom': 10
      },
      'name': 'Paris'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 10,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 10,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 125,
    'rating': 4.8,
    'title': 'Beautiful & luxurious',
    'type': 'apartment'
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.939309666406198,
        'zoom': 10
      },
      'name': 'Paris'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 11,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 11,
    'images': [
      'img/1.png'
    ],
    'isPremium': false,
    'location': {
      'latitude': 48.94610000000005,
      'longitude': 2.374499,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 126,
    'rating': 4.8,
    'title': 'Beautiful & luxurious',
    'type': 'apartment'
  },
];
