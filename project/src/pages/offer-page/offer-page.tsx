import ProductList from '../../components/product-list/product-list';
import CommentList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchCurrentOffersAction, } from '../../store/api-action';
import ReviewForm from '../../components/review/review';
import { AuthorizationStatus } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import { useParams } from 'react-router-dom';
import ErrorPage from '../page-not-found/page-not-found';

const OfferScreen = (): JSX.Element => {
  const targetOffer = useAppSelector((state) => state.targetOffer);
  const nearbyOffer = useAppSelector((state) => state.nearbyOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const errorStatus = useAppSelector((state) => state.error);
  const offerId = useAppSelector((state) => state.focusCardId);
  const userStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOffersAction(id));
    }
  }, [dispatch, id]);

  if (errorStatus) {
    return <ErrorPage />;
  }

  if (targetOffer && targetOffer !== null) {

    const offersHotels = nearbyOffer.concat(targetOffer);
    const rating = Math.round((targetOffer.rating * 10));

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {targetOffer.images.slice(0,6).map((el) => (
                <div key={el.split('/')[5]} className="property__image-wrapper">
                  <img key={el} className="property__image" src={el} alt="Studio" />
                </div>)
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {targetOffer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {targetOffer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${rating}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{targetOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{targetOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {targetOffer.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={targetOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {targetOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {targetOffer.host.isPro ? <span className="property__user-status">Pro</span> : null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {targetOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <CommentList reviews={reviews}/>
                {userStatus === AuthorizationStatus.Auth ? <ReviewForm id={offerId} /> : null}
              </section>
            </div>
          </div>
          <Map city={targetOffer.city} offers={offersHotels} pointId={targetOffer.id} className='property__map map' />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ProductList offers={nearbyOffer} className='near-places__list places__list' />
            </div>
          </section>
        </div>
      </main>
    );

  }
  return <LoadingScreen />;
};

export default OfferScreen;
