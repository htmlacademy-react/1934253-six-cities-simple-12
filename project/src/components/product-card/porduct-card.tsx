/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { OfferCard } from '../../types/offer-type';
import { MAX_RATING } from '../../const';


type CardProps = {
  offers: OfferCard;
}

const ProductCard = ({ offers }: CardProps) => {
  const { id, isPremium, previewImage, price, rating, title, type } = offers;
  const ratingWidth = Math.round(rating / MAX_RATING) * 100;
  const premiumCheck = (isPremium) ? <div className="place-card__mark"><span>Premium</span></div> : null;

  return (
    <article className="cities__card place-card">
      {premiumCheck}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
export default ProductCard;
