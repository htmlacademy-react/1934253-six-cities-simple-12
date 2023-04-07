import ProductCard from '../product-card/product-card';
import { OfferCards } from '../../types/offer-type';
import { classNames } from '../../const';

type ProductListProps = {
  offers: OfferCards;
  onCardHover: (ActiveCard: number) => void;
  className: string;
}

const ProductList = ({offers, onCardHover, className}: ProductListProps) => {
  if (className === classNames.MainPageProductList) {
    return (
      <div className={className}>
        {offers.map((offer) => <ProductCard key={offer.id} offer={offer} onCardHover={onCardHover} />)}
      </div>
    );
  }
  return (
    <div className={className}>
      {offers.slice(1,4).map((offer) => <ProductCard key={offer.id} offer={offer} onCardHover={onCardHover} />)}
    </div>
  );

};

export default ProductList;
