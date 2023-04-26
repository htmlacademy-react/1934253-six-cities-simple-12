import ProductList from '../../components/product-list/product-list';
import CommentList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchCurrentOffersAction, } from '../../store/api-action';
import ReviewForm from '../../components/review/review';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import { useParams } from 'react-router-dom';
import { getNearbyOffers, getCurrentOffer, getReviews, getError } from '../../store/data/data.selector';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { redirectToRoute } from '../../store/action';
import { StatusCodes } from 'http-status-codes';

const OfferScreen = (): JSX.Element => {
  const targetOffer = useAppSelector(getCurrentOffer);
  const nearbyOffer = useAppSelector(getNearbyOffers);
  const reviews = useAppSelector(getReviews);
  const errorStatus = useAppSelector(getError);
  const userStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOffersAction(Number(id)));
    }
  }, [dispatch, id]);

  if (errorStatus === StatusCodes.NOT_FOUND.toString()) {
    dispatch(redirectToRoute(AppRoute.NotFound));
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
                <div key={el} className="property__image-wrapper">
                  <img className="property__image" src={el} alt="Studio" />
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
                {userStatus === AuthorizationStatus.Auth ? <ReviewForm id={targetOffer.id} /> : null}
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
