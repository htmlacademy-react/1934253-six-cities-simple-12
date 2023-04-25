import { NameSpace } from '../../const';
import { City } from '../../types/offers';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Offer].city;
export const getSortingValue = (state: State) => state[NameSpace.Offer].sortingValue;
export const getSelectCardId = (state: State) => state[NameSpace.Offer].selectCardId;
