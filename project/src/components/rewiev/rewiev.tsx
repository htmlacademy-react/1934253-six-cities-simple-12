import { useState, Fragment, ChangeEvent } from 'react';
import { RatingRewiev } from '../../const';

const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    review: '',
    rating: 0
  });


  const fieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const validateForm = () => {
    const isMinLength = (MIN_LENGTH_COMMENT <= formData.review.length && MAX_LENGTH_COMMENT >= formData.review.length);
    const isRated = formData.rating > 0;
    return isMinLength && isRated;
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingRewiev.map((mark) => (
          <Fragment key={mark.id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={mark.value}
              id = {`${mark.id}-stars`}
              type = 'radio'
              onChange={fieldChange}
            />
            <label
              htmlFor = {`${mark.id}-stars`}
              className = "reviews__rating-label form__rating-label"
              title = {mark.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value = {formData.review}
          onChange = {fieldChange}
        />
      </div>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled = {!validateForm()}>Submit</button>
      </div>
    </form>
  );
};
export default ReviewForm;

