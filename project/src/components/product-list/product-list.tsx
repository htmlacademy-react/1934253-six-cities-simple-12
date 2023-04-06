import ProductCard from '../product-card/porduct-card';
import { OfferCards } from '../../types/offer-type';

type ProductListProps = {
  offers: OfferCards;
  onCardHover: (ActiveCard: number) => void;
}

const ProductList = ({offers, onCardHover}: ProductListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <ProductCard key={offer.id} offer={offer} onCardHover={onCardHover} />)}
  </div>
);

export default ProductList;
