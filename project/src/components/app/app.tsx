import { Routes, Route } from 'react-router-dom';
import MainPages from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login';
import OfferScreen from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/page-not-found/page-not-found';
import Layout from '../layout/layout';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import ScrollUp from '../scroll-up/scroll-up';

function App(): JSX.Element {
  const authorization = useAppSelector((state) => state.authorizationStatus);
  const isDataLoading = useAppSelector((state) => state.isDataLoadingStatus);

  if (authorization === AuthorizationStatus.Unknown || isDataLoading) {
    return <LoadingScreen />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <ScrollUp />
      <Routes>
        <Route path={AppRoute.Main} element = {<Layout />}>
          <Route index element = {<MainPages />} />
          <Route path={AppRoute.Login} element = {<LoginPage />} />
          <Route path={AppRoute.Offer} element = {<OfferScreen />} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
