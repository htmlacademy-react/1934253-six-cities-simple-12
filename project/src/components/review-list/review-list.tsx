import { ReviewOfferCards } from '../../types/review';
import Comment from '../review-card/comment';

type CommentListProps = {
  reviews: ReviewOfferCards;
}

const CommentList = ({reviews}: CommentListProps) => (
  <section className="property__reviews review">
    {reviews.map((review) => <Comment key={review.id} review = {review} />)}
  </section>
);

export default CommentList;
