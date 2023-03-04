import classNames from 'classnames';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Icon } from '../../foundation/Icon/Icon';
import * as styles from './ProductListSlideButton.styles';
import type { FC } from 'react';

export const ArrowT = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;
export type ArrowType = typeof ArrowT[keyof typeof ArrowT];

interface Props {
  arrowType: ArrowType
  disabled: boolean
  onClick: () => void
}

export const ProductListSlideButton: FC<Props> = ({ arrowType, disabled, onClick }) => {
  return (
    <button
      className={classNames(styles.container(), {
        [styles.container__disabled()]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {arrowType === ArrowT.LEFT
        ? (
          <Icon color="#222222" height={16} icon={FaArrowLeft} width={16} />
          )
        : (
          <Icon color="#222222" height={16} icon={FaArrowRight} width={16} />
          )}
    </button>
  );
};
