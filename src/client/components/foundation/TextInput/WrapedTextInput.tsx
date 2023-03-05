import { Controller } from 'react-hook-form';
import { TextInput } from './TextInput';
import type { ComponentProps } from 'react';
import type { ControllerProps, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues, U extends Path<T>> = Omit<ControllerProps<T, U>, 'render'> &
Omit<ComponentProps<typeof TextInput>, 'value' | 'onChange'>;

export const WrapedTextInput = <
  T extends FieldValues = FieldValues,
  N extends Path<T> = Path<T>,
>({
    control,
    name,
    rules,
    ...rest
  }: Props<T, N>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <TextInput {...field} {...rest} />}
      rules={rules}
    />
  );
};
