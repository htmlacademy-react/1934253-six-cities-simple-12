import { Routes, Route } from 'react-router-dom';
import MainPages from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import OfferScreen from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/page-not-found/page-not-found';
import Layout from '../layout/layout';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import ScrollUp from '../scroll-up/scroll-up';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { getDataLoadingStatus } from '../../store/data/data.selector';

function App(): JSX.Element {
  const authorization = useAppSelector(getAuthorizationStatus);
  const isDataLoading = useAppSelector(getDataLoadingStatus);

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
