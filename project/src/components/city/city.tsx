import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/data/data.slice';
import { getCity } from '../../store/data/data.selector';
import { CityName } from '../../types/offers';

type Prop ={
  city: CityName;
}

const City = ({city} :Prop) => {
  const activeCity = useAppSelector(getCity).name;
  const dispatch = useAppDispatch();
  return (
    <a className={`locations__item-link tabs__item ${city.name === activeCity ? 'tabs__item--active' : ''}` } onClick ={() => dispatch(changeCity(city))} href='#href'>
      <span>{city.name}</span>
    </a>
  );
};

export default City;
