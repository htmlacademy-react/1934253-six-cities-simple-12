import {Navigate} from 'react-router-dom';
import { AppRoute, AutharizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AutharizationStatus;
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const {authorizationStatus, children} = props;
   return (
    authorizationStatus === AutharizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
   );
}

export default PrivateRoute;
