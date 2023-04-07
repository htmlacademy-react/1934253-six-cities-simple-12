import { OfferCards } from '../../types/offers';
import ProductList from '../../components/product-list/product-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import { classNames } from '../../const';

type MainPageProps = {
  countRooms: number;
  offers: OfferCards;
}

const MainPages = ({countRooms, offers}: MainPageProps):JSX.Element =>{
  const [selectedPoint, setActivePoint] = useState<number | null> (null);
  const onCardHover = (ActiveCard: number) => {
    const currenCard = offers.find((offer) => offer.id === ActiveCard);
    setActivePoint(currenCard ? currenCard.id : selectedPoint);
  };
  return (

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#href">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#href">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#href">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href='#href'>
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#href">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#href">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{countRooms} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <ProductList offers = {offers} onCardHover = {onCardHover} className = {classNames.MainPageProductList} />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city = {offers[0].city} points = {offers} selectedPoint = {selectedPoint} className= {classNames.MainPageMap}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainPages;
