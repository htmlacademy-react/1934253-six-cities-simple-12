import { ReviewOfferCards } from '../../types/review';
import Comment from '../review-card/comment';
import ReviewForm from '../review/review';

type CommentListProps = {
  reviews: ReviewOfferCards;
}

const CommentList = ({reviews}: CommentListProps) => (
  <section className="property__reviews review">
    {reviews.map((review) => <Comment key={review.id} review = {review} />)}
    <ReviewForm />
  </section>
);

export default CommentList;
