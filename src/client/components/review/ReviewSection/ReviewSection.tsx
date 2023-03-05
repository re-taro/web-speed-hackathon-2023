import { useFormik } from 'formik';
import { string } from 'zod';

import { PrimaryButton } from '../../foundation/PrimaryButton/PrimaryButton';
import { TextArea } from '../../foundation/TextArea/TextArea';
import { ReviewList } from '../ReviewList/ReviewList';

import * as styles from './ReviewSection.styles';
import type { ReviewFragmentResponse } from '../../../graphql/fragments';
import type { FC } from 'react';
import type { FormikErrors } from 'formik';

const LESS_THAN_64_LENGTH_REGEX = /^([\s\S\n]{0,8}){0,8}$/u;
// NOTE: 改行含めて 64 文字以内であるかどうか確認する
const commentSchema = string().regex(LESS_THAN_64_LENGTH_REGEX);

interface Props {
  reviews: ReviewFragmentResponse[] | undefined
  hasSignedIn: boolean
  onSubmitReview: (reviewForm: ReviewForm) => void
}

interface ReviewForm {
  comment: string
}

export const ReviewSection: FC<Props> = ({ hasSignedIn, onSubmitReview, reviews }) => {
  const formik = useFormik<ReviewForm>({
    initialValues: {
      comment: '',
    },
    async onSubmit(value, { resetForm }) {
      onSubmitReview(value);
      resetForm();
    },
    validate(values) {
      const errors: FormikErrors<ReviewForm> = {};
      if (values.comment !== '' && !commentSchema.safeParse(values.comment).success)
        errors.comment = '64 文字以内でコメントしてください';

      return errors;
    },
    validateOnChange: true,
  });

  return (
    <div>
      {reviews != null ? <ReviewList reviews={reviews} /> : null}
      {hasSignedIn && (
        <form className={styles.form()} data-testid="form-review" onSubmit={formik.handleSubmit}>
          <div className={styles.commentTextAreaWrapper()}>
            <TextArea
              required
              id="comment"
              label="レビューを送信する"
              onChange={formik.handleChange}
              placeholder="こちらの野菜はいかがでしたか？"
              rows={6}
              value={formik.values.comment}
            />
            <p className={styles.error()}>{formik.errors.comment}</p>
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
