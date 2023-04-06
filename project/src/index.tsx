import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mock/offers';
import { reviews } from './mock/review';

const Setting = {
  CountRooms: 312,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      countRooms = {Setting.CountRooms}
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
);
