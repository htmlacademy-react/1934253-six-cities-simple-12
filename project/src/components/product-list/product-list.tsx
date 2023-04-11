import ProductCard from '../product-card/product-card';
import { OfferCards } from '../../types/offer-type';


type ProductListProps = {
  offers: OfferCards;
  onCardHover: (ActiveCard: number) => void;
  className: string;
}

const ProductList = ({offers, onCardHover, className}: ProductListProps) => (
  <div className={className}>
    {offers.map((offer) => <ProductCard key={offer.id} offer={offer} onCardHover={onCardHover} />)}
  </div>
);

export default ProductList;
