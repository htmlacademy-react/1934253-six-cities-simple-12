import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { RatingRewievs } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-action';

const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;

type Props = {
  id: number;
}

const ReviewForm = ({id}: Props) => {
  const [stateInput, setStateInput] = useState({
    review: '',
    rating: 0
  });

  const inputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setStateInput({...stateInput, [name]: value});
  };

  const isValidForm = () => {
    const isMinLength = (MIN_LENGTH_COMMENT <= stateInput.review.length && MAX_LENGTH_COMMENT >= stateInput.review.length);
    const isRated = stateInput.rating > 0;
    return isMinLength && isRated;
  };
  const dispatch = useAppDispatch();


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = { ...stateInput, id };
    dispatch(sendReviewAction(payload));
    setStateInput({review: '', rating: 0});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingRewievs.map((mark) => (
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
          <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled = {!isValidForm()}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
