import { Routes, Route } from 'react-router-dom';
import MainPages from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login';
import OfferScreen from '../../pages/property-page/offer';
import ErrorPage from '../../pages/page-not-found/page-not-found';
import Layout from '../layout/layout';
import { OfferCards } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';


 type MainPageProps = {
  offers: OfferCards;
}


function App({offers}: MainPageProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) =>
    state.checkAuthorization);
  const isDataLoading = useAppSelector((state) =>
    state.isDataLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoading) {
    return <LoadingScreen />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element = {<Layout />}>
          <Route index element = {<MainPages />} />
          <Route path={AppRoute.Login} element = {AuthorizationStatus.Auth ? <MainPages /> : <LoginPage />} />
          <Route path={AppRoute.Offer} element = {<OfferScreen /*reviews = { reviews }*/ />} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
