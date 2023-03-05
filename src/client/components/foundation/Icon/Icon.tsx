import classNames from 'classnames';
import * as styles from './Icon.styles';
import type { IconType } from 'react-icons';
import type { FC } from 'react';

interface Props {
  icon: IconType
  width: number
  height: number
  color: string
}

export const Icon: FC<Props> = ({ color, height, icon: Icon, width }) => {
  return (
    <span className={classNames(styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};
