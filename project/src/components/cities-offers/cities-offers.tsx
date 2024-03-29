import City from '../city/city';
import { cities } from '../../const';

const Cities = () =>
  (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <li className="locations__item" key={city.name}><City city={city} /></li>)}
    </ul>
  );

export default Cities;
