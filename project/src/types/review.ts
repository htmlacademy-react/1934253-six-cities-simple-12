export type ReviewOfferCard = {
  id: number;
  user: UserReview;
  rating: number;
  comment: string;
  date: string;
}

type UserReview = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type ReviewOfferCards = ReviewOfferCard[];
