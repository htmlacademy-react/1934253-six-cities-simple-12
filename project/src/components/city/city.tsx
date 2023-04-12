import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { CityName } from '../../types/offers';

type Prop ={
  city: CityName;
}

const City = ({city} :Prop) => {
  const activeCity = useAppSelector((state) => state.city.name);
  const onActiveCity = useAppDispatch();
  return (
    <a className={`locations__item-link tabs__item ${city.name === activeCity ? 'tabs__item--active' : ''}` } onClick ={() => onActiveCity(changeCity(city))} href='#href'>
      <span>{city.name}</span>
    </a>
  );
};

export default City;
