import { ReviewOfferCards } from '../../types/review';
import Comment from '../review-card/comment';

type CommentListProps = {
  reviews: ReviewOfferCards;
}

const CommentList = ({reviews}: CommentListProps) => (
  <section className="property__reviews review">
    <h2 className="reviews__title">review &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) => <Comment key={review.id} review = {review} />)}
    </ul>
  </section>
);

export default CommentList;
