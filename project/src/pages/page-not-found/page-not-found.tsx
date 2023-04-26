import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setError } from '../../store/data/data.slice';

const ErrorPage = ():JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <main>
      <section>
        <h1>Страница не найена «404 Not Found»</h1>
        <Link
          to={AppRoute.Main}
          onClick={() => dispatch(setError(''))}
        >Вернутся на главную страницу
        </Link>
      </section>
    </main>
  );
};


export default ErrorPage;
