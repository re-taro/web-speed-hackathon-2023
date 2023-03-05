import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useZipcode } from '../../../hooks/useZipcode';
import { PrimaryButton } from '../../foundation/PrimaryButton/PrimaryButton';
import { WrapedTextInput } from '../../foundation/TextInput/WrapedTextInput';
import * as styles from './OrderForm.styles';
import type { FC } from 'react';

interface OrderFormValue {
  zipCode: string
  prefecture: string
  city: string
  streetAddress: string
}

interface Props {
  onSubmit: (orderFormValue: OrderFormValue) => void
}

export const OrderForm: FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit, setValue } = useForm<OrderFormValue>({
    defaultValues: {
      city: '',
      prefecture: '',
      streetAddress: '',
      zipCode: '',
    },
  });
  const rawZipCode = useWatch({ control, name: 'zipCode' });
  const { zipcode } = useZipcode(rawZipCode);
  useEffect(() => {
    if (zipcode == null)
      return;
    const address = [...zipcode.address];
    const prefecture = address.shift();
    const city = address.join(' ');
    setValue('prefecture', prefecture ?? '');
    setValue('city', city);
  }, [setValue, zipcode]);

  return (
    <div className={styles.container()}>
      <form className={styles.form()} data-testid="order-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputList()}>
          <WrapedTextInput required control={control} label="郵便番号" name="zipCode" placeholder="例: 1500042" />
          <WrapedTextInput required control={control} label="都道府県" name="prefecture" placeholder="例: 東京都" />
          <WrapedTextInput required control={control} label="市区町村" name="city" placeholder="例: 渋谷区宇田川町" />
          <WrapedTextInput
            required
            control={control}
            label="番地・建物名など"
            name="streetAddress"
            placeholder="例: 40番1号 Abema Towers"
          />
        </div>
        <div className={styles.purchaseButton()}>
          <PrimaryButton size="lg" type="submit">
            購入
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};
