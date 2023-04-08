import ProductCard from '../product-card/porduct-card';
import { OfferCards } from '../../types/offer-type';
// import { useState } from 'react';
// import { type } from 'os';

type ProductListProps = {
  offers: OfferCards;
}

const ProductList = ({offers}: ProductListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <ProductCard key={offer.id} offers={offer} />)}
  </div>
);

export default ProductList;
