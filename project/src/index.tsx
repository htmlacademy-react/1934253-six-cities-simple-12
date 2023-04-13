import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index';
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
    <Provider store = {store}>
      <App
        countRooms = {Setting.CountRooms}
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
);
