import { useState } from 'react';
import classNames from 'classnames';
import { filterOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filter } from '../../const';

// Если отфильтровать один город, а потом переключиться на другой, то приходится снова протыкивать фильтр, т.к. карточки расставляются не правильно???
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state.filterOffer);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type" tabIndex={0}
        onMouseEnter = {handleFilterChange}
      >
        {select}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options ', 'places__options--custom', { 'places__options--opened': isOpen === true })}
        onMouseLeave = {handleFilterChange}
      >
        {Object.values(filter).map((element: string) =>
          (
            <li
              key={element}
              className={classNames('places__option', { 'places__option--active': select === element })}
              tabIndex={0}
              onClick = {() => { dispatch(filterOffers(element));}}
            >
              {element}
            </li>))}
      </ul>
    </form>
  );
};

export default Filter;
