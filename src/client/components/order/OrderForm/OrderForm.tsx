import { useFormik } from 'formik';
import { useEffect } from 'react';

import { useZipcode } from '../../../hooks/useZipcode';
import { PrimaryButton } from '../../foundation/PrimaryButton/PrimaryButton';
import { TextInput } from '../../foundation/TextInput/TextInput';

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
  const formik = useFormik<OrderFormValue>({
    initialValues: {
      city: '',
      prefecture: '',
      streetAddress: '',
      zipCode: '',
    },
    onSubmit,
  });
  const { zipcode } = useZipcode(formik.values.zipCode);
  useEffect(() => {
    if (zipcode == null)
      return;
    const address = [...zipcode.address];
    const prefecture = address.shift();
    const city = address.join(' ');
    formik.setFieldValue('prefecture', prefecture);
    formik.setFieldValue('city', city);
  }, [formik, zipcode]);

  return (
    <div className={styles.container()}>
      <form className={styles.form()} data-testid="order-form" onSubmit={formik.handleSubmit}>
        <div className={styles.inputList()}>
          <TextInput
            required
            id="zipCode"
            label="郵便番号"
            onChange={formik.handleChange}
            placeholder="例: 1500042"
            value={formik.values.zipCode}
          />
          <TextInput
            required
            id="prefecture"
            label="都道府県"
            onChange={formik.handleChange}
            placeholder="例: 東京都"
            value={formik.values.prefecture}
          />
          <TextInput
            required
            id="city"
            label="市区町村"
            onChange={formik.handleChange}
            placeholder="例: 渋谷区宇田川町"
            value={formik.values.city}
          />
          <TextInput
            required
            id="streetAddress"
            label="番地・建物名など"
            onChange={formik.handleChange}
            placeholder="例: 40番1号 Abema Towers"
            value={formik.values.streetAddress}
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
