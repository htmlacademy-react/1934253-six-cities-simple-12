import ProductList from '../../components/product-list/product-list';
import Map from '../../components/map/map';
import Cities from '../../components/cities-offers/cities-offers';
import { useAppSelector } from '../../hooks/index';
import { plural } from '../../const';
import Sorting from '../../components/sorting/sorting';
import { getCity } from '../../store/data/data.selector';
import { getSelectCardId } from '../../store/offers/offers.selector';
import { getNearestOffers } from '../../store/data/data.selector';

function getTextByCount(count: number, city: string): string {
  const pluralRules = plural.select(count);
  switch (pluralRules) {
    case 'one':
      return `${count} place to stay in ${city}`;
    default:
      return `${count} places to stay in ${city}`;
  }
}

const MainPages = () =>{

  const city = useAppSelector(getCity);
  const points = useAppSelector(getNearestOffers)/*.filter((offer) => offer.city.name === city.name)*/;
  const pointId = useAppSelector(getSelectCardId);

  return (

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{getTextByCount(points.length, city.name)}</b>
            <Sorting />
            <ProductList offers={points} className='cities__places-list places__list tabs__content' />
          </section>
          <div className="cities__right-section">
            <Map city={city} offers={points} pointId={pointId} className='cities__map map' />
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainPages;
