import * as styles from './AspectRatio.styles';
import type { FC, ReactNode } from 'react';

interface Props {
  ratioWidth: number
  ratioHeight: number
  children: ReactNode
}

export const AspectRatio: FC<Props> = ({ children, ratioHeight, ratioWidth }) => {
  return <div className={styles.container({ h: ratioHeight, w: ratioWidth })}>{children}</div>;
};
