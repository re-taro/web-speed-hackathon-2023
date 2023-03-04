import classNames from 'classnames';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay, FaShoppingCart, FaUser } from 'react-icons/fa';

import * as styles from './Icon.styles';
import type { FC } from 'react';

const Icons = {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingCart,
  FaUser,
  FaPlay,
  FaCheckCircle,
} as const;

interface Props {
  type: keyof typeof Icons
  width: number
  height: number
  color: string
}

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  const Icon = Icons[type];
  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};
