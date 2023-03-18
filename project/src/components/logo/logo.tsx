import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

const Logo = (): JSX.Element => {
  const location = useLocation();
  if (location.pathname === AppRoute.Main) {
    return (
      <div className="header__logo-link">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </div>
    );
  } else {
    return (
      <Link className="header__logo-link" to={AppRoute.Main}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    );
  }
};

export default Logo;
