import { FormEvent, useRef, useEffect } from 'react';
import { AuthorizationStatus, AppRoute, cities } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { changeCity } from '../../store/data/data.slice';


const LoginPage = () => {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomCities = cities[Math.floor(Math.random() * cities.length)];

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const authorization = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorization === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [dispatch, authorization]);

  return(
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action=""
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email" name="email" placeholder="Email"
                required
                ref={loginRef}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                ref={passwordRef}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#href" onClick={(evt)=> {evt.preventDefault(); dispatch(changeCity(randomCities)); dispatch(redirectToRoute(AppRoute.Main));}}>
              {randomCities.name}
            </a>
          </div>
        </section>
      </div>
    </main>
  );};

export default LoginPage;
