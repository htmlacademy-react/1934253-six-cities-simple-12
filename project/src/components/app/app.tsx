import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPages from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/login';
import OfferScreen from '../../pages/property-page/offer';
import ErrorPage from '../../pages/page-not-found/page-not-found';
import Layout from '../layout/layout';

type MainPageProps = {
  countRooms: number;
}


function App({countRooms}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element = {<Layout />}>
          <Route index element = {<MainPages countRooms={countRooms} />} />
          <Route path={AppRoute.Login} element = {<LoginPage />} />
          <Route path={AppRoute.Offer} element = {<OfferScreen />} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
