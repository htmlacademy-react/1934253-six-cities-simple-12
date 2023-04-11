const CityOffers = () => {
  const asd = 1;
  return (
    <section className="locations container" key={asd}>
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
  );
};

export default CityOffers;
