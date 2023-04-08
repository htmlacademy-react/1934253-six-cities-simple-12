import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPages from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/login';
import OfferScreen from '../../pages/property-page/offer';
import ErrorPage from '../../pages/page-not-found/page-not-found';
import Layout from '../layout/layout';
import { OfferCards } from '../../types/offer-type';

type MainPageProps = {
  countRooms: number;
  offers: OfferCards;
}


function App({countRooms, offers}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element = {<Layout />}>
          <Route index element = {<MainPages countRooms={countRooms} offers={offers} />} />
          <Route path={AppRoute.Login} element = {<LoginPage />} />
          <Route path={AppRoute.Offer} element = {<OfferScreen />} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
