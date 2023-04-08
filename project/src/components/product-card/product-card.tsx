import { Link } from 'react-router-dom';
import { OfferCard } from '../../types/offers';
import { MAX_RATING } from '../../const';

type CardProps = {
  offer: OfferCard;
  onCardHover: (ActiveCard: number) => void;
}

const ProductCard = ({ offer, onCardHover }: CardProps) => {
  const { id, isPremium, previewImage, price, rating, title, type } = offer;
  const ratingWidth = Math.round(rating / MAX_RATING) * 100;
  const premium = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;
  const cardHoverHandler = () => onCardHover(offer.id);
  return (
    <article
      className="cities__card place-card"
      key={offer.id}
      onMouseEnter = {cardHoverHandler}
    >
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to = {`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
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
          <Link to = {`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
export default ProductCard;
