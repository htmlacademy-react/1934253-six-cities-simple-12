import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPages from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/login';
import OfferScreen from '../../pages/property-page/offer';
import ErrorPage from '../../pages/page-not-found/page-not-found';
import Layout from '../layout/layout';
import { OfferCards } from '../../types/offers';
import { ReviewOfferCards } from '../../types/review';


 type MainPageProps = {
  countRooms: number;
  offers: OfferCards;
  reviews: ReviewOfferCards;
}


function App({countRooms, offers, reviews}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element = {<Layout />}>
          <Route index element = {<MainPages />} />
          <Route path={AppRoute.Login} element = {<LoginPage />} />
          <Route path={AppRoute.Offer} element = {<OfferScreen reviews = { reviews } offers = {offers} />} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
