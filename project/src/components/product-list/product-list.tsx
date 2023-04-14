import ProductCard from '../product-card/product-card';
import { OfferCards } from '../../types/offers';
import EmptyCity from '../empty-ctiy/empty-city';


type ProductListProps = {
  offers: OfferCards;
  className: string;
}

const ProductList = ({offers, className}: ProductListProps) => (
  <>
    <div className={className}>
      {offers.map((offer) => <ProductCard key={offer.id} offer={offer} />)}
    </div>
    <EmptyCity />
  </>
);

export default ProductList;
