import { ChangeEvent, Fragment, useState } from 'react';
import { RatingRewiev } from '../../const';

const ReviewForm = () => {
  const [stateInput, setStateInput] = useState({
    review: '',
    rating: 0
  });
  const inputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setStateInput({...stateInput, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingRewiev.map((mark) => (
          <Fragment key={mark.id}>
            <input
              className = "form__rating-input visually-hidden"
              name = 'rating'
              value = {mark.value}
              id = {`${mark.value}-star`}
              type = 'radio'
              onChange={inputChange}
            />
            <label
              htmlFor = {`${mark.value}-star`}
              className = "reviews__rating-label form__rating-label"
              title= {mark.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value = {stateInput.review}
        onChange = {inputChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );


};

export default ReviewForm;
