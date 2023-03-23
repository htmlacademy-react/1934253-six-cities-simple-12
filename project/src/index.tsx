import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

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
    />
  </React.StrictMode>,
);
