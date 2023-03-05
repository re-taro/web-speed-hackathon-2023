import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from '../../foundation/PrimaryButton/PrimaryButton';
import { WrapedTextArea } from '../../foundation/TextArea/WrapedTextArea';
import { ReviewList } from '../ReviewList/ReviewList';
import * as styles from './ReviewSection.styles';
import type { ReviewFragmentResponse } from '../../../graphql/fragments';
import type { SubmitHandler } from 'react-hook-form';
import type { FC } from 'react';

const LESS_THAN_64_LENGTH_REGEX = /^([\s\S\n]{0,8}){0,8}$/u;

interface Props {
  reviews: ReviewFragmentResponse[] | undefined
  hasSignedIn: boolean
  onSubmitReview: (reviewForm: ReviewForm) => void
}

interface ReviewForm {
  comment: string
}

export const ReviewSection: FC<Props> = ({ hasSignedIn, onSubmitReview, reviews }) => {
  const { control, formState, handleSubmit, reset } = useForm<ReviewForm>({
    defaultValues: {
      comment: '',
    },
    mode: 'onChange',
  });
  const onSubmit = useCallback<SubmitHandler<ReviewForm>>(
    async(value) => {
      onSubmitReview(value);
      reset();
    },
    [onSubmitReview, reset],
  );

  return (
    <div>
      {reviews != null ? <ReviewList reviews={reviews} /> : null}
      {hasSignedIn && (
        <form className={styles.form()} data-testid="form-review" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.commentTextAreaWrapper()}>
            <WrapedTextArea
              required
              control={control}
              label="レビューを送信する"
              name="comment"
              placeholder="こちらの野菜はいかがでしたか？"
              rows={6}
              rules={{
                validate: v => v === '' || LESS_THAN_64_LENGTH_REGEX.test(v) || '64 文字以内でコメントしてください',
              }}
            />
            <p className={styles.error()}>{formState.errors.comment?.message}</p>
          </div>
          <div className={styles.submitButton()}>
            <PrimaryButton size="base" type="submit">
              送信
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
};
