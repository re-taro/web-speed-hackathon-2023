import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSignIn } from '../../../hooks/useSignIn';
import { useCloseModal, useIsOpenModal, useOpenModal } from '../../../store/modal/hooks';
import { Modal } from '../../foundation/Modal/Modal';
import { PrimaryButton } from '../../foundation/PrimaryButton/PrimaryButton';
import { WrapedTextInput } from '../../foundation/TextInput/WrapedTextInput';

import * as styles from './SignInModal.styles';
import type { SubmitHandler } from 'react-hook-form';
import type { FC } from 'react';

const NOT_INCLUDED_AT_CHAR_REGEX = /^(?:[^@]*){6,}$/;
const NOT_INCLUDED_SYMBOL_CHARS_REGEX = /^(?:(?:[a-zA-Z0-9]*){2,})+$/;

export interface SignInForm {
  email: string
  password: string
}

export const SignInModal: FC = () => {
  const isOpened = useIsOpenModal('SIGN_IN');
  const { signIn } = useSignIn();
  const handleOpenModal = useOpenModal();
  const handleCloseModal = useCloseModal();
  const [submitError, setSubmitError] = useState<Error | null>(null);
  const { control, formState, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const onSubmit = useCallback<SubmitHandler<SignInForm>>(
    async(values) => {
      try {
        await signIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        });
        reset();
        setSubmitError(null);
        handleCloseModal();
      } catch (err) {
        setSubmitError(err as Error);
      }
    },
    [handleCloseModal, reset, signIn],
  );

  return (
    <Modal onHide={handleCloseModal} show={isOpened}>
      <div className={styles.inner()}>
        <header className={styles.header()}>
          <h2 className={styles.heading()}>ログイン</h2>
          <button
            className={styles.switchToSignUpButton()}
            data-testid="modal-switch-to-signup"
            onClick={() => handleOpenModal('SIGN_UP')}
          >
            会員登録
          </button>
        </header>
        <form className={styles.form()} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputList()}>
            <WrapedTextInput
              required
              control={control}
              label="メールアドレス"
              name="email"
              placeholder="メールアドレスを入力"
              rules={{
                validate: v =>
                  v === '' || !NOT_INCLUDED_AT_CHAR_REGEX.test(v) || 'メールアドレスの形式が間違っています',
              }}
              type="email"
            />
            <p className={styles.error()}>{formState.errors.email?.message}</p>
            <WrapedTextInput
              required
              control={control}
              label="パスワード"
              name="password"
              placeholder="パスワードを入力"
              rules={{
                validate: v =>
                  v === '' || !NOT_INCLUDED_SYMBOL_CHARS_REGEX.test(v) || '英数字以外の文字を含めてください',
              }}
              type="password"
            />
            <p className={styles.error()}>{formState.errors.password?.message}</p>
          </div>
          <div className={styles.submitButton()}>
            <PrimaryButton size="base" type="submit">
              ログイン
            </PrimaryButton>
          </div>
          {submitError != null ? <p className={styles.error()}>ログインに失敗しました</p> : null}
        </form>
      </div>
    </Modal>
  );
};
