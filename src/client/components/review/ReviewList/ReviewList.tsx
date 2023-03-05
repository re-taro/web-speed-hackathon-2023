
import { AspectRatio } from '../../foundation/AspectRatio/AspectRatio';
import { ReviewIcon } from '../ReviewIcon/ReviewIcon';
import * as styles from './ReviewList.styles';
import type { ReviewFragmentResponse } from '../../../graphql/fragments';
import type { FC } from 'react';

interface Props {
  reviews: ReviewFragmentResponse[]
}

export const ReviewList: FC<Props> = ({ reviews }) => {
  if (reviews.length === 0)
    return null;

  return (
    <ul className={styles.itemList()}>
      {reviews.map((review) => {
        const endTime = window.Temporal.Instant.from(review.postedAt).toLocaleString('ja-jp', {
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          month: '2-digit',
          second: '2-digit',
          year: 'numeric',
        });

        return (
          <li key={review.id} className={styles.item()} data-testid="review-list-item">
            <div className={styles.avaterImage()}>
              <AspectRatio ratioHeight={1} ratioWidth={1}>
                <ReviewIcon filename={review.user.profile.avatar.filename} />
              </AspectRatio>
            </div>
            <div className={styles.content()}>
              <time className={styles.time()}>{endTime}</time>
              <p className={styles.comment()}>{review.comment}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
