import classNames from 'classnames';
import * as Icons from 'react-icons/fa';

import * as styles from './Icon.styles';
import type { FC } from 'react';

interface Props {
  type: keyof typeof Icons
  width: number
  height: number
  color: string
}

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  // eslint-disable-next-line import/namespace
  const Icon = Icons[type];
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};
