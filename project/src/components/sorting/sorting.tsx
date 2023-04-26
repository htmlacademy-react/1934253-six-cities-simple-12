import { useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortingValue } from '../../const';
import { setSorting } from '../../store/data/data.slice';
import { getSortingValue } from '../../store/data/data.selector';

const Sorting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getSortingValue);

  const handleFilterChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type" tabIndex={0}
        onClick = {handleFilterChange}
      >
        {filter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames('places__options ', 'places__options--custom', { 'places__options--opened': isOpen === true })}
      >
        {Object.values(SortingValue).map((element: string) =>
          (
            <li
              key={element}
              className={classNames('places__option', { 'places__option--active': filter === element })}
              tabIndex={0}
              onClick = {() => { dispatch(setSorting(element)); setIsOpen(!isOpen);}}
            >
              {element}
            </li>))}
      </ul>
    </form>
  );
};

export default Sorting;
