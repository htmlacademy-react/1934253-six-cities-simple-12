import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';
import { getAuthorizationStatus, getEmail } from '../../store/user-process/user-process.selector';

const Header = () => {
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const email = useAppSelector(getEmail);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {userAuthorizationStatus === AuthorizationStatus.Auth ?
                <>
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">{email}</span>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to={AppRoute.Main}
                      onClick={() => {
                        dispatch(logoutAction());
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>
                :
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

